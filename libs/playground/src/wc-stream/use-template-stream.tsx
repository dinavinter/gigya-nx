import {Ref, useEffect, useHost} from "atomico";
import {useStore} from "@atomico/store";
import {WriteStreamProps, WriteStreamStore, bindWithReadable, useWriteStreamProvider} from "./writeable-stream-store";
import {StreamStore, StreamStoreProps, useStream} from "./readable-stream-store";
import {useEventStreamStore} from "./use-event-stream";


export type TemplateSource = {
    template: HTMLTemplateElement,
    content: string

}

function useReadableWriteableProvider(host: Ref<HTMLElement>) {
    const writable = useWriteStreamProvider(host);
    const readable = bindWithReadable(writable);
    return {
        readable,
        update:writable.update
    };
}

 
export const useTemplateStoreProvider = (id: string, initialValue: TemplateSource[]) => {
    const host = useHost();
    const {update, readable} = useReadableWriteableProvider(host ); 
    // const {update, readable} = useEventStreamStore(host, 'sourceChange'); 

    useEffect(() => {
        initialValue?.forEach(update)

    }, [update])

 
    return useStream(readable);
}


export function useTemplateStoreValue ():StreamStoreProps<TemplateSource> & WriteStreamProps<TemplateSource> {
    const readable = useStore(StreamStore);
    const writeable = useStore(WriteStreamStore);
    return {
        ...readable,
        ...writeable
    }
}