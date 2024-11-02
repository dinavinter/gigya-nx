import {createMachine, interpret, assign} from '@xstate/fsm';
import type {StateFrom} from '@xstate/fsm';
import {Jwt} from './jwt';
import type { ILoginEvent, ILogoutEvent} from '../types';
import {useGigya} from "../loader";


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

const authMachine = createMachine<AuthContext, AuthEvent>(
  {
    id: 'gigya-login',
    initial: 'js.loading',
    context: {
          gigya: undefined as unknown as typeof gigya
    },
    states: {
      ['js.loading']: {
        entry: 'gigya.wait',
        on: {
          ['gigya.ready']: {
            target: 'auth',
            actions:  assign({
              gigya: (_ctx, e) => e.gigya
            })
          }
        }
      },
      'auth': {
        entry: [log('auth'), 'auth.subscribe', 'jwt.fetch' ],
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
            target: 'auth',
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
            target: 'auth'
          } ,
          ["logout.request"]: {
            actions: ['logout']
          },
          ["logout.callback"]: {
            target: 'idle',
            actions: [log('logged out'), "reset"]
          }
        }
      }
    }
  },
  {
    actions: {
     ['gigya.wait']: () => {
        useGigya(gigya => {
          gigyaService.send({gigya: gigya, type: 'gigya.ready'});
        }).catch(console.error)
      },
      // ['auth.check']: ({gigya}) => {
      //   gigya!.hasSession().then(has => {
      //     has ?
      //       gigyaService.send({type: 'auth.check.success' }) :
      //       gigyaService.send({type: 'auth.check.fail' });
      //    })
      // },
      ['auth.subscribe']: ({gigya}) => {
        gigya!.socialize.addEventHandlers({
          onLogin: (e) => {
            gigyaService.send({...e, type: 'login.callback'});
          },
          onLogout: (e) => {
            console.log('logout', e);
            gigyaService.send({...e, type: 'logout.callback'});
          }
        })
      } ,
      ['jwt.fetch']: ({gigya}, _e) => {
        gigya!.accounts.getJWT({
          fields: "profile, data, preferences, subscriptions, communications",
          callback: (res) => {
            if (res.errorCode === 0) {
              gigyaService.send({type: 'jwt.fetch.success', id_token: new Jwt(res.id_token)})
            }
          }
        })
      },
      ["refresh-reminder"]: () => {
        setTimeout(() => {
          gigyaService.send({type: 'jwt.fetch.refresh'})
        }, 1000 * 60 )
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

export const gigyaService = interpret(authMachine).start();
export type GigyaState = StateFrom<typeof authMachine>;

gigyaService.subscribe((state: { value: any }) => {
  console.log(state.value);
});


