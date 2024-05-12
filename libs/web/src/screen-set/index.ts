import {h, html, c, css, useEffect, useState, useRef, useProp} from "atomico";
import {useChildNodes} from "@atomico/hooks";
import {useGigya} from "../loader";

export const GigyaScreen = c(({
                                screenSet, screen,container, ...props
                              }) => {

  const [containerId] = useState(container || `screen-container-${screenSet}-${screen}`)
  const template = useChildNodes().find((node) => node.nodeName == "TEMPLATE") as HTMLTemplateElement;;
  const ref= useRef();

  useEffect(() => {
    useGigya(({accounts}) => accounts.showScreenSet({
      screenSet: screenSet,
      startScreen: screen,
      containerID: containerId
    })).catch(console.error);
  },[template?.content, containerId])

  useEffect(() => {
    if (template?.content ) {
      ref.current.innerHTML = template.innerHTML
    }
  }, [template?.content])


  return (html`
      <host>
        <div id=${containerId}></div>
        <div id=${screenSet} class="gigya-screen-set" style=${{display: "none"}}>
          <div id=${screen} class="gigya-screen" ref="${ref}">
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
      value: 'default-screen-set',
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

    }

  }
});

customElements.define("gigya-screen", GigyaScreen);
