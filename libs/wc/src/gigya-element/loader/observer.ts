import { assign, createMachine, interpret } from '@xstate/fsm';
import { gigya } from '@gigya/types';

function waitForGigya(): Promise<gigya> {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const gigya = (window as any).gigya as any;

      if (gigya && gigya.thisScript && gigya.thisScript.APIKey) {
        console.log(`Gigya loaded with APIKey ${gigya.thisScript.APIKey} 🥳`);

        clearInterval(interval);
        resolve(gigya);
      } else if (gigya && gigya.thisScript) {
        console.log('Gigya loaded 🥳');
        clearInterval(interval);
        resolve(gigya);
      }
    }, 100);
  });
}

export async function* GigyaScriptState() {
  yield 'loading';
  await waitForGigya();
  yield 'ready';
}

type ErrorEvent = {
  type: 'ERROR';
  error: string | Error | Event;
};

type LoadedEvent = {
  type: 'LOADED';
  gigya: gigya;
};

declare type GigyaStagingDomain =
  | 'eu1-st1.gigya.com'
  | 'us1-st1.gigya.com'
  | 'au1-st1.gigya.com'
  | 'cn1-st1.gigya-api.cn';

export type GigyaDomain =
  | 'eu1.gigya.com'
  | 'eu2.gigya.com'
  | 'us1.gigya.com'
  | 'au1.gigya.com'
  | 'cn1.gigya-api.cn'
  | GigyaStagingDomain;

// export type GigyaServiceState = "idle" | "loading" | "loaded" | "error";
export type GigyaServiceProps = { apikey?: string; domain?: GigyaDomain };
type Context = GigyaServiceProps & {
  error?: string;
} & Record<string, unknown>;

type Events = ErrorEvent | LoadedEvent;

const scriptMachine = createMachine<Context, Events>(
  {
    id: 'script',
    initial: 'loading',
    context: {
      gigya: undefined as gigya | undefined,
    },
    states: {
      loading: {
        entry: 'subscribeToScriptLoaded',
        on: {
          LOADED: { target: 'ready', actions: ['assignGigya'] },
        },
      },
      ready: {
        entry: 'onReady',
      },
    },
  },
  {
    actions: {
      subscribeToScriptLoaded: () => {
        waitForGigya().then((gigya) => {
          GigyaScriptService.send({ gigya: gigya, type: 'LOADED' });
        });
      },
      assignGigya: assign({
        gigya: (_, event) => (event as LoadedEvent).gigya,
      }),
    },
  }
);

export const GigyaScriptService = interpret(scriptMachine);
GigyaScriptService.start();
