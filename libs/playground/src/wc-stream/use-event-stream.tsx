import {Ref, useEffect, useEvent, useHost, useMemo} from "atomico";
import {HandlerEvent, useListener} from "@atomico/hooks";

import {useProviderStore} from "@atomico/store";
import { WriteStreamStore} from "./writeable-stream-store";
import {TemplateSource} from "./use-template-stream";


export type EventType<TEventName extends keyof HTMLElementEventMap, TDatails> = CustomEvent<TDatails> & {
    type: keyof TEventName
}

export function useEventStream<TEventName extends string & keyof HTMLElementEventMap, TDatails extends any = any, TEvent extends EventType<TEventName, TDatails> & HTMLElementEventMap[TEventName] = EventType<TEventName, TDatails> & HTMLElementEventMap[TEventName]>(
    host: Ref<HTMLElement>,
    event: TEventName) {

    const update = useEvent(event, {bubbles: true, composed: true});
    const listener = (handler: (event: HandlerEvent<HTMLElement, TEventName>) => any, options: AddEventListenerOptions) => useListener(host, event, handler, {capture: true, ...options})

    const stream = useMemo(() => new ReadableStream<TDatails>({
        start(controller) {
            host.current.addEventListener<TEventName>(event, e => {
                console.debug('tp:useEventListenrStream:onmessage', "\te", e);
                controller.enqueue((e as TEvent).detail);
            }, {capture: true});
        }
    }), [host.current])


    return {
        stream: stream,
        update: update,
        listener: listener
    };
}


export const useEventStreamStore = <TEventName extends string & keyof HTMLElementEventMap, TDatails extends any = any, TEvent extends EventType<TEventName, TDatails> & HTMLElementEventMap[TEventName] = EventType<TEventName, TDatails> & HTMLElementEventMap[TEventName]>(
    host:Ref<HTMLElement>, eventName:TEventName ) => {
    const {stream, update} = useEventStream<TEventName, TDatails, TEvent>(host, eventName); 
    const store=  useProviderStore(WriteStreamStore, (state) =>({
        ...state,
        writeStream: new WritableStream<TDatails>({
            write(chunk) {
                console.debug('tp:useEventStreamStore:write', "\tchunk", chunk);
                update(chunk);
            }
        }),
        update
    }), [host.current]);
    
    return {
        readable: stream,
        update: store.update,
        
    }
 }




export type TemplateUpdatedEvent = CustomEvent<TemplateSource>
declare global {
    interface HTMLElementEventMap {
        sourceChange: TemplateUpdatedEvent
    }
}


