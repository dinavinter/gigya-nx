import {
  createMachine,
  interpret,
  assign,
  type StateMachine,
  EventObject,
  Typestate,
  ServiceFrom,
  ContextFrom, EventFrom
} from '@xstate/fsm';
import type {StateFrom} from '@xstate/fsm';
import {Jwt} from './jwt';
import type { ILoginEvent, ILogoutEvent} from '../types';
import { useGigya} from "../loader";
import {stateIterator} from "./state-iterator";


export type AuthEvent =
  { type: 'gigya.ready', gigya: typeof gigya } |
  { type: 'auth.check.success'  } |
  { type: 'auth.check' } |
  { type: 'auth.check.fail' } |
  { type: 'login.callback',  }  & ILoginEvent|
  { type: 'logout.callback'  } & ILogoutEvent
  | { type: 'logout'}


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
            target: 'auth.check',
            actions:  assign({
              gigya: (_ctx, e) => e.gigya
            })
          }
        }
      },
      'auth.check': {
        entry: [log('auth'),'auth.check'],
        on: {
          ['auth.check.success']: {
            actions: log('auth.check.success'),
            target: 'authenticated'
          },
          ["auth.check.fail"]: {
            actions: [log('auth.check.fail')],
            target: 'not-authenticated'
          }

        }
      },
      'not-authenticated': {
        entry: [log('not-authenticated')],
        on: {
          ["login.callback"]: {
            target: 'authenticated',
            actions:  assign({
              event: (_ctx, e) => e
            })
          }
        }
      },
      'authenticated': {
        entry: [log('authenticated')],
        on: {
          ["logout"]: {
            actions: ['logout']
          },
          ["logout.callback"]: {
            target: 'not-authenticated',
            actions:   assign({
              id_token: (_c, _e) => undefined
            })
          }
        }
      }
    }
  },
  {
    actions: {
      ['gigya.pending']: () => {
        useGigya(gigya => {
          service.send({gigya: gigya, type: 'gigya.ready'});
        }).catch(console.error)
      },
      ['auth.check']: ({gigya}, _e) => {
        gigya!.hasSession().then(has => {
          has ?
            service.send({type: 'auth.check.success' }) :
            service.send({type: 'auth.check.fail' });
         })
      },
      ['logout']: ({gigya}, _e) => {
        gigya!.accounts.logout();
      },

    },
  }
);

 const service = interpret(authMachine)

useGigya(gigya => {
  gigya!.socialize.addEventHandlers({
    onLogin: (e) => {
      service.send({...e, type: 'login.callback'});
    },
    onLogout: (e) => {
      console.log('logout', e);
      service.send({...e, type: 'logout.callback'});
    }
  })
})
export const authService =service.start();




export  const  authIterator= stateIterator.bind(authService)


//
// export const createAuthMachine =(context:AuthContext, implementations?: {
//   actions?: StateMachine.ActionMap<AuthContext, AuthEvent>;
// })=> {
//   const authMachine = createMachine<AuthContext, AuthEvent>(
//     {
//       id: 'gigya-login',
//       initial: 'authenticate',
//       context: context,
//       states: {
//         // ['js.loading']: {
//         //   entry: 'gigya.wait',
//         //   on: {
//         //     ['gigya.ready']: {
//         //       target: 'auth',
//         //       actions:  assign({
//         //         gigya: (_ctx, e) => e.gigya
//         //       })
//         //     }
//         //   }
//         // },
//         'authenticate': {
//           entry: [log('auth'), 'auth.subscribe', 'jwt.fetch'],
//           on: {
//             ['jwt.fetch.success']: {
//               actions: [log('jwt.fetch.success'),
//                 assign((context, e) => ({
//                   ...context,
//                   id_token: e.id_token
//                 }))],
//               target: 'authenticated'
//             },
//             ["jwt.fetch.fail"]: {
//               actions: [log('jwt.fetch.fail')],
//               target: 'not-authenticated'
//             }
//
//           }
//         },
//         'not-authenticated': {
//           on: {
//             ["login.callback"]: {
//               target: 'auth',
//               actions: [log('not-authenticated:login.callback'), assign({
//                 event: (_ctx, e) => e
//               })]
//             }
//           }
//         },
//         'authenticated': {
//           entry: [log('authenticated'), "refresh-reminder"],
//           on: {
//             ['jwt.fetch.refresh']: {
//               target: 'auth'
//             },
//             ["logout.request"]: {
//               actions: ['logout']
//             },
//             ["logout.callback"]: {
//               target: 'idle',
//               actions: [log('logged out'), "reset"]
//             }
//           }
//         }
//       }
//     },
//     {
//       actions: {
//         ['gigya.wait']: () => {
//           useGigya(gigya => {
//             authService.send({gigya: gigya, type: 'gigya.ready'});
//           }).catch(console.error)
//         },
//         // ['auth.check']: ({gigya}) => {
//         //   gigya!.hasSession().then(has => {
//         //     has ?
//         //       authService.send({type: 'auth.check.success' }) :
//         //       authService.send({type: 'auth.check.fail' });
//         //    })
//         // },
//         ['auth.subscribe']: ({gigya}) => {
//           gigya!.socialize.addEventHandlers({
//             onLogin: (e) => {
//               authService.send({...e, type: 'login.callback'});
//             },
//             onLogout: (e) => {
//               console.log('logout', e);
//               authService.send({...e, type: 'logout.callback'});
//             }
//           })
//         },
//         ['jwt.fetch']: ({gigya}, _e) => {
//           gigya!.accounts.getJWT({
//             fields: "profile, data, preferences, subscriptions, communications",
//             callback: (res) => {
//               if (res.errorCode === 0) {
//                 authService.send({type: 'jwt.fetch.success', id_token: new Jwt(res.id_token)})
//               }
//             }
//           })
//         },
//         ["refresh-reminder"]: () => {
//           setTimeout(() => {
//             authService.send({type: 'jwt.fetch.refresh'})
//           }, 1000 * 60)
//         },
//         ['logout']: ({gigya}, _e) => {
//           gigya!.accounts.logout();
//         },
//         ["reset"]: assign({
//           id_token: (_c, _e) => undefined
//         }),
//         ...implementations?.actions
//       },
//     }
//   );
//
//   const authService = interpret(authMachine).start();
//   type AuthState = StateFrom<typeof authMachine>;
//
//
//   authService.subscribe((state: { value: any }) => {
//     console.log(state.value);
//   });
//
//   return authService
// }


