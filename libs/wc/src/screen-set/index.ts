import {html, c, css, useEffect, useState, useRef, useHost} from "atomico";
import {useChildNodes} from "@atomico/hooks/use-child-nodes";
import {useGigya} from "../loader";
import {useMutationObserver, useParent} from "@atomico/hooks";

export const GigyaScreen = c(({
                                screenSet, screen,container, open, popup, ...props
                              }) => {

  const [containerId] = useState<string | undefined>(!container && !popup && `screen-container-${screenSet}-${screen}` || undefined)
  const template = useChildNodes().find((node) => node.nodeName == "TEMPLATE") as HTMLTemplateElement;;
  const host = useHost();
   const ref= useRef();
  useEffect(() => {
   open && useGigya(({accounts}) => accounts.showScreenSet({
      screenSet: screenSet,
      startScreen: screen,
      containerID: popup ? undefined : container || containerId,
    })).catch(console.error);
  },[template?.content, containerId, open])

  useEffect(() => {
    if (template?.content  ) {
      ref.current.innerHTML = template.innerHTML
    }
  }, [template?.content])

  const dataAttributes = Object.keys(props).reduce((acc, key) => {
    if (key.startsWith('data-')) {
      acc[key] = props[key];
    }
    return acc;
  }, {});

  return (html`
      <host>
        ${containerId? html`<div id=${containerId} class="w-full"/>` : undefined}
        <div id=${screenSet} class="gigya-screen-set" style=${{display: "none"}} ...${dataAttributes}>
          <div id=${screen} class="gigya-screen" ref="${ref}" style="height: 100%; width: 100%" ...${dataAttributes}>
          </div>
        </div>
      </host>`
  );


}, {
  styles: css`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :host {
      display: block;
    }
  `,
  props: {
    screenSet: {
      type: String,
      value: ()=>`screen-set-${Math.random().toString(36).substring(7)}`,
      attr: "screen-set"
    },
    screen: {
      type: String,
      value: 'default-screen'

    },
    container: {
      type: String,
      value: undefined,
      attr: "container"

    },
    popup: {
      type: Boolean,
      value: false,
      attr: "popup",
      reflect: true
    },
    open: {
      type: Boolean,
      value: true,
      reflect: true
    }

  }
});

customElements.define("gigya-screen", GigyaScreen);
