import {h, c, css, useEffect, useState} from "atomico";
import {useChildNodes} from "@atomico/hooks";
import {useGigya} from "../gigya-service/actions";

let id = 0;

export const ScreenContainer = c(({
                                  screenSet, screen , container , ...props
                              }) => {
    const childNodes = useChildNodes();
    const template = childNodes.find((node) => node.nodeName == "TEMPLATE") as HTMLTemplateElement;
    const [Content, setContent] =  useState(template?.content)
    const [containerId, setContainerId] = useState(container || `screen-container-${screenSet}-${screen}`)
    
    useEffect(() => {
        Content && useGigya(gigya => gigya.accounts.showScreenSet({
            screenSet: screenSet,
            screen: screen,
            containerID:containerId
        }))
    }, [Content]) 
    
    useEffect(() => {
        if(template?.content != Content) {
            setContent(template.content)
        }
    }, [template?.content])


    return (
        <host >
            <div id={containerId}  ></div>
            <div id={screenSet} class="gigya-screen-set" style={{display:"none"}} >
                <div  id={screen}  class="gigya-screen"> {// @ts-ignore 
                        <Content  />
                    }</div>
            </div>
        </host>
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
            value: 'default-screen-set' ,
            attr:"screen-set"
        },
        screen:{
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
 
customElements.define("screen-container", ScreenContainer);