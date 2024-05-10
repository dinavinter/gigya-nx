//when google id not found
const google_token_create= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "type": "https://accounts.gigya.com/secevent/event-type/credential-create",
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
    "pending_verification": {
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
}

//google id and email not exists, email not verified (verifyProviderEmail = true || harvesting = true)
const email_not_verified_create= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "aud": ["receiver.example.com/web", "receiver.example.com/mobile"],
    "type": "https://accounts.gigya.com/secevent/event-type/credential-create",
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
    "type": "https://accounts.gigya.com/secevent/event-type/credential-create",
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
    "profile":{
        "name": "Jane Smith",
    },
    "pending_verification": {
        "provider": "site",
        "profile": {
            "address": "TLV",
        }
    } 
}

//guest token, claims not verified, user not exists
const guest_token_create_not_verified= {
    "iss": "https://oauth2.gigya.com",
    "jti": "1234567890",
    "exp": 1234567890,
    "iat": 1234567890,
    "type": "https://accounts.gigya.com/secevent/event-type/credential-create",
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

        

