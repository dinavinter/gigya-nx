

export namespace flows {

    import Identity = identities.Identity;
    import Authentication = auth.Authentication;

    export async function googlFlow(data: auth.google_id_token) {

        let authentication = await auth.google(data);
        if (!authentication) {
            throw new Error("google authentication failed");
        }


        if (!authentication.assertion) {
            const emailAuth:Authentication = await auth.email(authentication.identity);
            authentication = {
                ...authentication,
                ...emailAuth
            }
        }

        await identities.connect(authentication);

        return {
            "error": "ok"
        }
    }




    async function guestFlow(identity:Identity) {
        let context = {
            source: "reg_source",
            locale: "en",
            site: "123456789",
            device: "a7c918b0-0788-4383-95bb-b907c3496a2e"
        };

        const siteIdentity =await identities.siteIdentity(identity, context);
        if(!siteIdentity.validate()) {
            throw new Error("validation failed");
        }

        let authToken =await auth.guest(siteIdentity);
        if(!authToken) {
            authToken = await auth.any(identity);
        }

        await identities.connect(authToken);
    }


}



declare namespace auth {
    import UserId = identifier.UserId;
    import Identity = identities.Identity;
    import UserIds = identifier.UserIds;

    type Authentication = {
        amr: "guest" | "email" | "google" | "fido" | "saml-idp" | "pwd",
        subject: UserId,
        ids: UserIds,
        assertion?: ReturnType<typeof sigh>
        identity:Identity
        //validate auth token signature
        validate(): boolean;

    }


    type google_id_token = {
        email: string;
        sub: string;
    }

    function sigh<T>(val: T): { iss: "https://oauth2.gigya.com", claims: T };

    function email(code: any): Promise<Authentication>;

    function any(request: any): Promise<Authentication> ;

    function google(credential: google_id_token): Promise<Authentication>;


    // @ts-ignore
    export async function guest(identity: Exclude<identities.Identity, "validation" | "provider">) {
        return guestSchema(identity) ? {
            amr: "guest",
            assertion: sigh(identity),
            subject: identity.id,
            identity
        } as Authentication :  undefined



        function guestSchema(_identity: Identity) :boolean;
    }
}

namespace identities {
    import UserId = identifier.UserId;
    import Authentication = auth.Authentication;
    import sigh = auth.sigh;

    export interface Identity  {
        provider: "google" | "site";
        id: UserId;
        context: any;
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

        },
        authentication: auth.Authentication,

        //validate identity validation signature
        validate( this: Identity): this is ValidatedIdentity ;

    }
    type ValidatedIdentity = Identity & {
        validation: {
            assertion: ReturnType<typeof auth.sigh>,
            //range: now-1m
            timestamp: number
        }
    }



    export async function siteIdentity(identity:Exclude<Identity, "validation" | "provider">, context: any) {
        return {
            ...identity,
            context,
            provider:"site",
            validation: {
                timestamp: 123456789,
                assertion: sigh(identity)
            }
        } as Identity
    }



    export async function connect(authentication: Authentication) {


        if (!authentication.validate() || !ids.isEquals(authentication.ids[authentication.identity.id.type], authentication.identity.id))  {
            throw new Error("invalid or expired authentication");
        }

        if (!authentication.identity.validate() ){
            throw new Error("missing or expired validation");
        }



        //update user
        if (!ids.isUserExists(authentication.ids)) {
            await accounts.updateAccount(ids.user(authentication.ids).uuid, authentication.identity);
        }

        //create user
        else {
            await accounts.createAccount(authentication.ids, authentication.identity);
        }


        return {
            "error": "ok"
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





declare namespace accounts {
    import UserIds = identifier.UserIds;
    import Identity = identities.Identity;

    function createAccount(identifiers: UserIds, identity: Identity): Promise<string>;
    function updateAccount(user: string, identity: Identity): Promise<void>;

}









export   namespace ids {
    import UserIds = identifier.UserIds;
    import UserId = identifier.UserId;
    export  type UserIdsWithUser<TUserIds extends UserIds = UserIds> = {
        [type in Partial<keyof TUserIds>]: TUserIds[type] extends ExistingUserId ? TUserIds[type] : never;
    };


    export  function existing( id: UserId ): id is ExistingUserId {
        return id.uuid !== undefined;
    }

    export function isUniqueUserExists<T extends UserIds = UserIds>( userIds: T ): userIds is UserIdsWithUser<T> {
        return Object.values(userIds)
            .filter(existing)
            .map(( {uuid} ) => uuid)
            .filter(uniqueFilter).length === 1;

        function uniqueFilter( value: string, index: number, self: string[] ) {
            return self.indexOf(value) === index;
        }
    }

    function isMultiUserExists<T extends UserIds = UserIds>( userIds: T ): userIds is UserIdsWithUser<T> {
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

 


 

 