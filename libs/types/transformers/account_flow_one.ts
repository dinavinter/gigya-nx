
export namespace flows {

    import Identity = identities.Identity;

    export async function googlFlow(data: auth.google_id_token) {
        let context = {
            source: "reg_source",
            locale: "en",
            site: "123456789",
            device: "a7c918b0-0788-4383-95bb-b907c3496a2e"
        };

        const id = await identifier.createToken({
            google: data.sub,
            email: data.email
        });

        let {identity, authentication} = await auth.google(data);

        if (!authentication) {
            const emailAuth = await auth.email(id);
            authentication = emailAuth.authentication;
        }

        await identities.connect({id, authentication, identity, context});

        return {
            "error": "ok"
        }
    }


    export async function guestFlow(data: Identity) {
        let context = {
            source: "reg_source",
            locale: "en",
            site: "123456789",
            device: "a7c918b0-0788-4383-95bb-b907c3496a2e"
        };

        const id = await identifier.createToken({
            email: "<EMAIL>"
        });

        let {identity, authentication} = await auth.guest(data);

        if (!authentication) {
            const emailAuth = await auth.email(id);
            authentication = emailAuth.authentication;
        }

        await identities.connect({id, authentication, identity, context});

        return {
            "error": "ok"
        }

    }


}

declare namespace auth {
    import UserId = identifier.UserId;
    import Identity = identities.Identity;

    type Authentication = {
        amr: "guest" | "email" | "google" | "fido" | "saml-idp" | "pwd",
        subject: UserId,
        assertion?: ReturnType<typeof sigh>
        //validate auth token signature
        validate(): boolean;

    }

    type AuthResponse = {
        identity: Identity,
        authentication: Authentication
    }

    type google_id_token = {
        email: string;
        sub: string;
    }

    function sigh<T>(val: T): { iss: "https://oauth2.gigya.com", claims: T };

    function email(code: any): Promise<AuthResponse>;

    function any(request: any): Promise<AuthResponse> ;

    function google(credential: google_id_token): Promise<AuthResponse>;

    // @ts-ignore
    export async function guest(identity: Exclude<accounts.Identity, "validation" | "provider">) {
        return {
            identity: {
                ...identity,
                provider: "site",
                validation: {
                    timestamp: 123456789,
                    assertion: sigh(identity)
                }
            },
            auth: guestSchema(identity) && {
                amr: "guest",
                subject: identity.id,
                assertion: sigh(identity)
            }
        } as {
            identity: Identity,
            authentication?: Authentication
        };

        function guestSchema(_identity: Identity) :boolean;
    }
}

namespace identities {
    import UserId = identifier.UserId;
    import Authentication = auth.Authentication;
    import UserIds = identifier.UserIds;

    export interface Identity  {
        provider: "google" | "site";
        id: UserId;
        profile: {
            firstName: string;
            lastName: string;
            email: string;
        },
        data: Record<string, any>
        communication: {
            [id: string]: {
                status: 'opt-in' | 'opt-out'
            }
        },
        preferences: {
            [id: string]: {
                status: 'opt-in' | 'opt-out'
            }
        },
        validation: {
            timestamp: number;
            assertion: ReturnType<typeof auth.sigh>;

        }
        //validate identity validation signature
        validate( this: Identity): this is ValidatedIdentity;

    }
    type ValidatedIdentity = Identity & {
        validation: {
            assertion: ReturnType<typeof auth.sigh>,
            //range: now-1m
            timestamp: number
        }
    }



    export async function connect(request: {
        id: UserIds;
        authentication: Authentication;
        identity: Identity;
        context: {
            source: string;
            locale: string;
        }
    }) {

        const {id, authentication, identity, context} = request;

        if (!authentication.validate()) {
            throw new Error("invalid or expired authentication");
        }

        if (!identity.validate()) {
            throw new Error("missing or expired validation");
        }

        if (!validateIds(id, identity, authentication)) {
            throw new Error("invalid ids");
        }


        //update user
        if (!ids.isUniqueUserExists(id)) {
            await accounts.updateAccount(ids.user(id).uuid, identity, context);
        }

        //create user
        else {
            await accounts.createAccount(id, identity, context);
        }


        return {
            "error": "ok"
        }

        function validateIds(id: identifier.UserIds, identity: identities.Identity, authentication: auth.Authentication) {
            return ids.isEquals(identity.id, id[identity.id.type]) &&
                ids.isEquals(identity.id, authentication.subject) &&
                ids.isMultiUserExists(id)
        }


    }
}

namespace identifier {

      export type UserIds = {
          [type: string]: UserId,
      }

      export type UserId = {
          value: string;
          /*@uuid: encrypted-string*/
          uuid?: string,
          residency: string,
          type: "email" | "google" | "facebook" | "twitter" | "apple" | "phone" | "username" | "other"
      }

    
      export async function createToken( identifiers: {
          email?: string,
          google?: string
      } ): Promise<UserIds> {
          return {
              email: {
                  type: "email",
                  value: identifiers.email!,
                  uuid: "<MAYBE UUID>",
                  residency: "us1"
              },
              google: {
                  type: "google",
                  value: identifiers["google"]!,
                  uuid: "<MAYBE UUID>",
                  residency: "eu1"
              }
          }
      } 
  }
  
//account internal methods
declare namespace accounts {
    import UserIds = identifier.UserIds;
    import Identity = identities.Identity;
    
    function createAccount(identifiers: UserIds, identity: Identity, context: any): Promise<string>;
    function updateAccount(user: string, identity: Identity, context: any): Promise<void>;

}








//just helper methods with ids 

export   namespace ids {
    import UserIds = identifier.UserIds;
    import UserId = identifier.UserId;
    export  type UserIdsWithUser<TUserIds extends UserIds = UserIds> = {
        [type in Partial<keyof TUserIds>]: TUserIds[type] extends ExistingUserId ? TUserIds[type] : never;
    };


    export  function existing( id: UserId ): id is ExistingUserId {
        return id.uuid !== undefined;
    }

    export function isUniqueUserExists<T extends identifier.UserIds = UserIds>( userIds: T ): userIds is UserIdsWithUser<T> {
        return Object.values(userIds)
            .filter(existing)
            .map(( {uuid} ) => uuid)
            .filter(uniqueFilter).length === 1;

        function uniqueFilter( value: string, index: number, self: string[] ) {
            return self.indexOf(value) === index;
        }
    }

  export  function isMultiUserExists<T extends identifier.UserIds = UserIds>( userIds: T ): userIds is UserIdsWithUser<T> {
        return Object.values(userIds)
            .filter(existing)
            .map(( {uuid} ) => uuid)
            .filter(uniqueFilter).length > 1;

        function uniqueFilter( value: string, index: number, self: string[] ) {
            return self.indexOf(value) === index;
        }
    }

    export function user( userIds: UserIds ) {
        return Object.values(userIds).filter(existing)[0];

    }


    export type ExistingUserId = { uuid: string; } & UserId;


    export function isUserExists( userIds: UserIds ): userIds is UserIdsWithUser {
        return userIds.withUser !== undefined;
    }

    export function isEquals<T1 extends UserId = UserId>( id: UserId, id1: T1 ): id is T1 {
        return id.value === id1.value && id.residency === id1.residency && id.type === id1.type
    }
    
    


}
 
 