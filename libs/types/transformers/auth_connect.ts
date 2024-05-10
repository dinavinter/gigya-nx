

export namespace client {

    import Identity = identities.Identity;
    import Authentication = auth.Authentication;
    import GuestInput = identities.GuestInput;

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




    async function guestFlow(input:GuestInput) {
        let context = {
            source: "reg_source",
            locale: "en",
            site: "123456789",
            device: "a7c918b0-0788-4383-95bb-b907c3496a2e"
        };

        

        let authToken =await auth.guest(input);
        if(!authToken) {
            authToken = await auth.any(identity);
        }

        await identities.connect(authToken);
    }


}



declare namespace auth {
    
    type token = { 
        "iss": "https://oauth2.gigya.com",
        "jti": "1234567890", 
        "events": {
            "gigya.com://secevent/event-type/authentication": {
                "exp": 1234567890,
                "iat": 1234567890,
                "iss": "https://oauth2.gigya.com",
                "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
                "amr": ["otp"],
                "dc" : "us1",
                "user": {
                    "format": "email",
                    "email": "jon@emaoi.com"
                },
                "tenant": {
                    "format": "site_id",
                    "sub": "1234"
                },
                "device": {
                    "format": "opaque",
                    "id": "e9297990-14d2-42ec-a4a9-4036db86509a"
                } 
            },
            "gigya.com://secevent/event-type/account-create": {
                "exp": 1234567890,
                "iat": 1234567890,
                "iss": "https://oauth2.gigya.com",
                "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
                "credential_type": "social",
                "subject": {
                    "format": "social",
                    "provider": "google",
                    "id": "ssoi9hjjjnj"
                },
                "claims": {
                    "profile": {
                        "email": "jane.smith@example.com",
                        "name": "Jane Smith",
                    },
                    "ids": {
                        "email": "jane.smith@example.com"
                    }
                } 
                
            },
            "gigya.com://secevent/event-type/credential-update": {
                "exp": 1234567890,
                "iat": 1234567890,
                "iss": "https://oauth2.gigya.com",
                "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
                "change_type": "create",
                "credential_type": "social",
                "subject": {
                    "format": "social",
                    "provider": "google",
                    "id": "jane.smith@example.com"
                },
                "claims": {
                    "profile": {
                        "email": "jane.smith@example.com",
                         "name": "Jane Smith",
                    } ,
                    "ids": {
                       "email": "jane.smith@example.com"
                    }
                }
            }
        }
    }
    
    
    
    
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
    export async function guest(identity: GuestInput) {
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

    
    export interface GuestInput {
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
        }
     }
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

    /* { _email:"email@ddd"} */
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

 

///diffrent draft authentication token types to composite as an input to the connect api

//when google id not found
const google_token_create= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "type": "https://accounts.gigya.com/secevent/event-type/credential-updata",
    "credential_type": "social",
    "change_type": "create",
    "context": {
        "tenant": {
            "format": "site",
            "site_id": 1234567890,
        },
        "origin": "https://accounts.gigya.com",
        "device": {
            "format": "mobile",
            "id": "gmid.1234567890",
            "name": "iPhone 7",
            "os": "iOS",
            "os_version": "13.3.1",
            "type": "phone",
            "vendor": "Apple",
        }
    },
    "subject": {
        "format": "social",
        "provider": "google",
        "id": "ssoi9hjjjnj",
        "res": "us1",
    },
    "claims": {
        "profile": {
            "email": "jane.smith@example.com",
            "name": "Jane Smith",
        },
        "ids": [{
            "format": "email",
            "email": "jane.smith@example.com",
            "verified": true
        }, {
            "format": "google",
            "id": "ssoi9hjjjnj",
            "verified": true
        }]
    }
}

//when google id exists
const google_token_update= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "res": "us1",
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "social",
    "change_type": "update",
    "channel" : "social",
    "factor" : "google",

    "amr": ["google"],
    "subject": {
        "format": "uid",
        "id": "ssoi9hjjjnj",
        "res": "us1"
    },
    "claims": {
        "profile": {
            "email": "<EMAIL>",
            "name": "Jane Smith",
        },
        "ids": [{
            "format": "email",
            "email": "<EMAIL>",
            "verified": true
        }]
    }
}

//when google id exists without email, and email not verified (verifyProviderEmail = true)
const google_token_email_not_verified= {
    token: {
        "iss": "https://oauth2.gigya.com",
        "jti": "1234567890",
        "exp": 1234567890,
        "iat": 1234567890,
        "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
        "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
        "credential_type": "social",
        "change_type": "update",
        "subject": {
            "format": "uid",
            "uid": "ssoi9hjjjnj",
            "res": "us1"
        },
        "require_authentication": {
            "ids": [{
                "format": "email",
                "email": "<EMAIL>"
            }]
        },
        "claims": {
            "profile": {
                "name": "Jane Smith",
            }
        }
    },
    error: "partial_success",
    require_authentication: { 
       ids: [{
            format: "email",
            email: "<EMAIL>"
        }]
    }
}

//google id and email not exists, email not verified (verifyProviderEmail = true || harvesting = true)
const email_not_verified_create= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "social",
    "change_type": "create",
    "subject": {
        "format": "social",
        "provider": "google",
        "id": "ssoi9hjjjnj",
        "res": "us1"
    },
    "pending_verification": {
        "ids": [{
            "format": "email",
            "email": "<EMAIL>"
        }]
    },
    "claims": {
        "profile": {
            "email": "<EMAIL>",
            "name": "Jane Smith",
        } ,
        "ids": [{
            "format": "google",
            "id": "ssoi9hjjjnj"
        }]
    }
}

//google id not exists, email exists with another provider 
const google_email_conflict_to_another= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "social",
    "change_type": "create",
    "subject": {
        "format": "social",
        "provider": "google",
        "id": "ssoi9hjjjnj",
        "res": "us1"
    },
    "pending_verification":  [{
        "format": "email",
        "email": "<EMAIL>",
        "res": "us1"
    }],

    "claims": {
        "profile": {
            "email": "<EMAIL>",
            "name": "Jane Smith",
        }
    }
}
 
     




//guest token, all clims verified, user not exists
const guest_token_create= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "guest",
    "change_type": "create",
    "context": {
        "tenant": {
            "format": "site",
            "site_id": 1234567890,
        },
        "origin": "https://accounts.gigya.com",
        "device": {
            "format": "mobile",
            "id": "gmid.1234567890",
            "name": "iPhone 7",
            "os": "iOS",
            "os_version": "13.3.1",
            "type": "phone",
            "vendor": "Apple",
        }
    },
    "subject": {
        "format": "email",
        "email": "jon@njnjn.com",
        "res": "us1",
    },
    "claims": {
        "profile": {
            "email": "jon@njnjn.com",
            "name": "Jane Smith",
        },
        "ids": [{
            "format": "email",
            "email": "jon@njnjn.com"
        }]
    }
}

//guest token, all clims verified, user exists
const guest_token_update= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "res": "us1",
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "guest",
    "change_type": "update",
    "subject": {
        "format": "uid",
        "uid": "ssoi9hjjjnj",
    },
    "claims": {
        "profile": {
            "email": "<EMAIL>",
            "name": "Jane Smith",
        }
    }
}

//guest token, claims not verified, user exists
const guest_token_update_not_verified= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "res": "us1",
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "guest",
    "change_type": "update",
    "subject": {
        "format": "uid",
        "uid": "ssoi9hjjjnj",
    },
    "pending_verification": {
        "profile": {
            "name": "Jane Smith",
        }
    }
}

//guest token, claims not verified, user not exists
const guest_token_create_not_verified= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "credential_type": "guest",
    "change_type": "create",
    "context": {
        "tenant": {
            "format": "site",
            "site_id": 1234567890,
        },
        "origin": "https://accounts.gigya.com",
        "device": {
            "format": "gmid",
            "id": "gmid.1234567890",
        }
    },
    "subject": {
        "format": "email",
        "email": "jon@dcdf.com"
    },
    "pending_verification": {
        "profile": {
            "name": "Jane Smith",
        },
        "ids": [{
            "format": "email",
            "email": "email@mail.com"
        }]
    }

}


/// a google token, but in event based format, i.e. include authentication event, account found event, account create event, account update event
const google_token_event_based= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "res": "us1",
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "events": {
        "authentication": {
            "amr": ["google"],
            "method": "google",
            "channel": "social",
            "subject": {
                "format": "social",
                "id": "ssoi9hjjjnj",
                "provider": "google",
                "res": "us1"
            },
            "claims": {
                "profile": {
                    "email": "<EMAIL>",
                    "name": "Jane Smith",
                },
                "ids": [{
                    "format": "google",
                    "id": "ssoi9hjjjnj",
                    "verified": true
                }, {
                    "format": "email",
                    "email": "<EMAIL>",
                    verified: true
                }]
            }
        },
        "account_found": {
            "subject": {
                "format": "uid",
                "uid": "ssoi9hjjjnj",
                "res": "us1"
            },
            "ids": [{
                "format": "google",
                "id": "ssoi9hjjjnj",
                "verified": true
            }, {
                "format": "email",
                "email": "<EMAIL>",
                verified: true
            }],
        },
        "account_update": {
            "subject": {
                "format": "uid",
                "uid": "ssoi9hjjjnj",
                "res": "us1"
            },
            "claims": {
                "profile": {
                    "email": "<EMAIL>",
                    "name": "Jane Smith",
                }
            }
        }

    }

}

// event based token, google id not exists, email exists.
const google_token_event_based_email_exists= {
    "iss": "https://oauth2.gigya.com", "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "res": "us1",
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "events": {
        "authentication": {
            "amr": ["google"],
            "method": "google",
            "channel": "social",
            "subject": {
                "format": "social",
                "id": "ssoi9hjjjnj",
                "provider": "google",
                "res": "us1"
            },
            "claims": {
                "profile": {
                    "email": "<EMAIL>",
                    "name": "<NAME>",
                },
                "ids": [{
                    "format": "email",
                    "email": "<EMAIL>",
                    "verified": true
                }]
            }
        },
        "account_found": {
            "subject": {
                "format": "email",
                "email": "<EMAIL>",
                "res": "us1"
            },
            "ids": [{
                "format": "email",
                "email": "<EMAIL>",
                "verified": true
            }],
        },
        "account_update": {
            "subject": {
                "format": "email",
                "email": "<EMAIL>",
                "res": "us1"
            },
            "claims": {
                "profile": {
                    "email": "<EMAIL>",
                    "name": "<NAME>",
                }
            }
        }
    }
}


// create different event based format, that support simple validation on the authentication with acccounts event when authentication can come from both google and email provider

const google_token_event_based_email_exists_google_not_exists= {
    "iss": "https://oauth2.gigya.com", "jti": "1234567890",      "exp": 1234567890,
    "iat": 1234567890,
    "res": "us1",
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-update",
    "events": {
        "google": {
            "authentication": {
                "amr": ["google"],
                "method": "google",
                "channel": "social",
                "subject": {
                    "format": "social",
                    "id": "ssoi9hjjjnj",
                    "provider": "google",
                    "res": "us1"
                },
                "claims": {
                    "profile": {
                        "email": "<EMAIL>",
                        "name": "<NAME>",
                    },
                    "ids": [{
                        "format": "email",
                        "email": "<EMAIL>",
                        "verified": true
                    }]
                }
            },
        },
        "email": {
            "account_found": {
                "subject": {
                    "format": "email",
                    "email": "<EMAIL>",
                    "res": "us1"
                },
                "ids": [{
                    "format": "email",
                    "email": "<EMAIL>",
                    "verified": true
                }],
            },
            "authentication": {
                "amr": ["email"],
                "method": "email",
                "channel": "email",
                "subject": {
                    "format": "email",
                    "email": "<EMAIL>",
                    "res": "us1"
                },
                "claims": {
                    "profile": {
                        "email": "<EMAIL>",
                        "name": "<NAME>",
                    },
                    "ids": [{
                        "format": "email",
                        "email": "<EMAIL>",
                        "verified": true
                    }]
                }
            },

        }

    }
}

        


 