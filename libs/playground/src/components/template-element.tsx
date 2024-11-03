import {c, useCallback, useEffect, useRef} from "atomico";
import {type TemplateSource} from "../wc-stream/use-template-stream";
const templateElement = ({stream}: { stream: ReadableStream<TemplateSource> }) => {
    const refContent = useRef();

    const writeCallback = useCallback((template:TemplateSource) => {
        refContent.current.innerHTML = template?.template.innerHTML || "loading...";
    })
    useEffect(() => {
        stream.pipeTo(new WritableStream({write: writeCallback}))
            .then(() => console.debug("pipeTo:done"))
            .catch((error) => console.error("pipeTo:error", error));
    }, [stream])


    return (
        <host shadowDom={{slotAssignment: "manual"}}>
            <div ref={refContent}>
            </div>
        </host>
    );
}

export function defineElement({name, stream}: { name: string, stream: () => ReadableStream<TemplateSource> }) {
    try {
        customElements.define(name, c(templateElement, {
            props: {
                stream: {
                    type: ReadableStream<TemplateSource>,
                    value: stream
                }
            }
        }))
    } catch (e) {
        console.error('tp:defineElement:error', e, "\tstream", stream);
    }
}
