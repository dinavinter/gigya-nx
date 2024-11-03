import {createStore, useProviderStore} from "@atomico/store";

export interface StreamStoreProps<T extends any = any, TStream extends ReadableStream<T> = ReadableStream<T>> {
    backStream: TStream,
    getStream: () => TStream,
    current: T 
}

export const StreamStore = createStore<StreamStoreProps>({
    backStream: undefined,
    getStream: undefined,
    current: undefined
 });

class CurrentPipeTransform<T> extends TransformStream<T, T> { 
    constructor(setCurrent: (chunk: T) => void) {
        super({...CurrentPipeTransform.transformContent(setCurrent)});
    }

    static transformContent<T>(setCurrent: (chunk: T) => void): Transformer<T, T> {
        return ({
            start() {
                console.debug('tp:CurrentPipeTransform:start')
                
            }, // required.
            async transform(chunk, controller) {
                console.debug('tp:CurrentPipeTransform:transform', "\tchunk", chunk);
                controller.enqueue(chunk)
                setCurrent(chunk)

            }
        })

    }
}

export const useStream = <T extends any = any, TStream extends ReadableStream<T> = ReadableStream<T> >(stream: TStream) => {
    function getStream(this: StreamStoreProps<T>) {
        const [stream0, stream1] = this.backStream.tee();
        this.backStream = stream1;
        return stream0;
    }
    console.debug('tp:useStream', "\tstream", stream);
    const store = useProviderStore(StreamStore, (state) => (
        {
            ...state,
            getStream() {
                const [stream0, stream1] = store.backStream.tee();
                store.backStream = stream1;
                return stream0;
            },
            backStream: stream.pipeThrough(new CurrentPipeTransform(cur => {
                console.debug('tp:useStream:pipeThrough', "\tcur", cur);
                if(cur) store.current = cur
            }))
        }
    ), [stream]);
    console.debug('tp:useStream:store', "\tstream", stream, store);

 

    return store;
}