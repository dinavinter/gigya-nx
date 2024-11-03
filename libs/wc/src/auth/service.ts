import {assign, createMachine, interpret} from "@xstate/fsm";
import {useGigya} from "../loader";
import {Jwt} from "./jwt";
 import type {ILoginEvent, ILogoutEvent} from "../types";


export type AuthEvent =
  { type: 'gigya.ready', gigya: typeof gigya } |
  { type: 'login.callback',  }  & ILoginEvent|
  { type: 'jwt.fetch.success' , id_token: Jwt } |
  { type: 'jwt.fetch.refresh' } |
  { type: 'jwt.fetch.fail' } |
  { type: 'logout.request'} |
  { type: 'logout.callback'  } & ILogoutEvent


export type AuthContext = { id_token?: Jwt | undefined, event?: ILoginEvent | undefined, container?: string, gigya: typeof gigya};

function log(message: string) {
  return (context: any, event: any) => console.log(message, context, event);
}

export const authMachine = createMachine<AuthContext, AuthEvent>(
  {
    id: 'gigya-login',
    initial: 'js.loading',
    context: {
      gigya: undefined as unknown as typeof gigya,
    },
    states: {
      ['js.loading']: {
        entry: 'gigya.pending',
        on: {
          ['gigya.ready']: {
            target: 'refresh',
            actions:  assign({
              gigya: (_ctx, e) => e.gigya
            })
          }
        }
      },
      'refresh': {
        entry: [log('auth'),'jwt.fetch'],
        on: {
          ['jwt.fetch.success']: {
            actions: [log('jwt.fetch.success'),
              assign((context, e) => ({
                ...context,
                id_token: e.id_token
              }))],
            target: 'authenticated'
          },
          ["jwt.fetch.fail"]: {
            actions: [log('jwt.fetch.fail')],
            target: 'not-authenticated'
          }

        }
      },
      'not-authenticated': {
        on: {
          ["login.callback"]: {
            target: 'refresh',
            actions: [log('not-authenticated:login.callback'), assign({
              event: (_ctx, e) => e
            })]
          }
        }
      },
      'authenticated': {
        entry: [log('authenticated'), "refresh-reminder"],
        on: {
          ['jwt.fetch.refresh']: {
            target: 'refresh'
          },
          ["logout.request"]: {
            actions: ['logout']
          },
          ["logout.callback"]: {
            target: 'not-authenticated',
            actions: [log('logged out'), "reset"]
          }
        }
      }
    }
  },
  {
    actions: {
      ['gigya.pending']: () => {
        useGigya(gigya => {
          jwtService.send({gigya: gigya, type: 'gigya.ready'});
        }).catch(console.error)
      },
      ['jwt.fetch']: ({gigya}, _e) => {
        gigya!.accounts.getJWT({
          fields: "profile, data, preferences, subscriptions, communications",
          callback: (res) => {
            if (res.errorCode === 0) {
              jwtService.send({type: 'jwt.fetch.success', id_token: new Jwt(res.id_token)})
            } else {
              jwtService.send({type: 'jwt.fetch.fail'})
            }
          }
        })
      },
      ["refresh-reminder"]: () => {
        setTimeout(() => {
          jwtService.send({type: 'jwt.fetch.refresh'})
        }, 1000 * 60)
      },
      ['logout']: ({gigya}, _e) => {
        gigya!.accounts.logout();
      },
      ["reset"]: assign({
        id_token: (_c, _e) => undefined
      })
    },
  }
);


export const jwtService =interpret(authMachine).start();
