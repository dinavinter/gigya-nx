import {Ref, useEffect, useMemo} from "atomico";
import {createStore, useProviderStore} from "@atomico/store";
import {TemplateSource} from "./use-template-stream";

export type WriteStreamProps<T = any> = {
    writeStream: WritableStream<T>,
    update: (value: T) => void | PromiseLike<void> | boolean
}
export const WriteStreamStore = createStore<WriteStreamProps>({
    writeStream: undefined,
    update: async (value) => {
        console.debug('tp:WriteStreamStore:update', "\tvalue", value);
        return;
    }
});

export function useWriteStreamProvider(host: Ref<HTMLElement>) {
    const store = useProviderStore(WriteStreamStore, (state) => (
        {
            ...state,
            update: async (value) => {
                console.debug('tp:useTemplateStoreProvider:update', "\tvalue", value);
                const writer = store.writeStream.getWriter();
                await writer.write(value).then(() => {
                    console.debug('tp:useTemplateStoreProvider:update:done', "\tvalue", value)
                    writer.releaseLock()
                }).catch((error) => {
                    console.error('tp:useTemplateStoreProvider:update:error', error)
                    writer.releaseLock()
                });
            }
        }
    ), [host.current]);

    return store;

}

export const bindWithReadable = (store: WriteStreamProps) => {
    return useMemo(() => new ReadableStream<TemplateSource>({
        async start(controller) {
            store.writeStream = new WritableStream<TemplateSource>({
                write(chunk) {
                    console.debug('tp:useTemplateStoreProvider:write', "\tchunk", chunk);
                    controller.enqueue(chunk);
                }
            })
        }
    }), [store]);

}

export function usePipeStream <T>(stream: ReadableStream<T>, writeStream: WritableStream<T>)  {
    useEffect(() => {
        stream.pipeTo(writeStream)
            .then(() => console.debug("pipeTo:done"))
            .catch((error) => console.error("pipeTo:error", error));
    }, [writeStream])

}
