import { createMachine, assign, interpret, ContextFrom } from "@xstate/fsm";

const assignLoadRequest = assign((context, event: LoadEvent) => ({
  ...context,
  ...event,
}));

const clearError = assign({ error: (context, event) => undefined });
const setError = assign({ error: (context, event) => event });

type LoadEvent = {
  apiKey: string;
  domain: string;
  type: "LOAD";
};

type ErrorEvent = {
  type: "ERROR";
  error: string | Error | Event;
};

type LoadedEvent = {
  type: "LOADED";
};

declare type GigyaStagingDomain =
  | "eu1-st1.gigya.com"
  | "us1-st1.gigya.com"
  | "au1-st1.gigya.com"
  | "cn1-st1.gigya-api.cn";

export type GigyaDomain =
  | "eu1.gigya.com"
  | "eu2.gigya.com"
  | "us1.gigya.com"
  | "au1.gigya.com"
  | "cn1.gigya-api.cn"
  | GigyaStagingDomain;

export type GigyaServiceState = "idle" | "loading" | "loaded" | "error";
export type GigyaServiceProps = { apikey?: string; domain: GigyaDomain };
export type GigyaLoaderContext = GigyaServiceProps & {
  error?: string;
} & Record<string, unknown>;

type Events = LoadEvent | ErrorEvent | LoadedEvent;

export class GigyaJsLoader {
  constructor() {
    this.service.start();
    this.loadScript.bind(this);
  }
  machine = createMachine<GigyaLoaderContext, Events>(
    {
      id: "gigya",
      initial: "idle",
      context: {
        domain: "us1.gigya.com",
      },

      states: {
        idle: {
          on: {
            LOAD: {
              target: "loading",
              actions: [console.log, assignLoadRequest],
            },
          },
        },
        loading: {
          entry: "loadScript",
          on: {
            LOADED: {
              target: "loaded",
              actions: clearError,
            },
            ERROR: {
              target: "error",
              actions: setError,
            },
          },
        },
        loaded: {
          on: {
            LOAD: {
              target: "loading",
              actions: assignLoadRequest,
            },
          },
        },
        error: {
          on: {
            LOAD: {
              target: "loading",
              actions: assignLoadRequest,
            },
          },
        },
      },
    },
    {
      actions: {
        loadScript: this.loadScript.bind(this), //(context, event) => this.loadScript(context, event),
      },
    }
  );

  service = interpret(this.machine);

  sendError(error: string | Error | Event) {
    this.service.send({
      type: "ERROR",
      error: error || "Failed to load Gigya script.",
    });
  }

  sendLoaded() {
    this.service.send("LOADED");
  }

  loadScript({ apiKey, domain }: GigyaLoaderContext, _event: unknown) {
    // Removing the old script element if it exists
    const oldScript = document.querySelector("#gigyaScript");
    if (oldScript) {
      document.body.removeChild(oldScript);
    }

    // Creating a new script element
    const script = document.createElement("script");
    script.id = "gigyaScript";
    script.src = `https://cdns.${domain}/js/gigya.js?apikey=${apiKey}`;
    console.log(this);
    script.onerror = this.sendError.bind(this);
    script.onload = this.sendLoaded.bind(this);

    document.body.appendChild(script);
  }
}

export const gigyaJsLoader = new GigyaJsLoader().service;
