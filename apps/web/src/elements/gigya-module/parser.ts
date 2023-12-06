
export function  exportGigyaModule(gigya: any) {
    const modules = Object.entries(gigya).filter(([key, value]) => typeof value === 'object' && !key.startsWith('_'));
    const mainProperties = Object.entries(gigya).filter(([key, value]) => typeof value!== 'object' && typeof value !== 'function');
    const mainFunctions = Object.entries(gigya).filter(([key, value]) => typeof value === 'function') as [string, Function][];
    const internal = Object.entries(gigya).filter(([key, value]) => key.startsWith('_'));
    console.log(modules);
    console.log(mainProperties);
    console.log(mainFunctions);
    console.log(internal);
    const moduleJavascript = modules.map(([key, value]) => {
            return `export const ${key} = ${toModule(value)};`;
        }
    ).join('\n');


    const mainFunctionsJavascript = mainFunctions.map(([key, value]) => {
        return `function ${key}() {   }`;
    }).join('\n');

    const mainPropertiesJavascript = mainProperties.map(([key, value]) => {
            return `export const ${key} = ${JSON.stringify(value)};`;
        }
    ).join('\n');
    return `${moduleJavascript}\n${mainPropertiesJavascript}\n${mainFunctionsJavascript}`;
}

export function toModule(gigya: any) {
    const replacerFunc = () => {
        const visited = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (visited.has(value)) {
                    return;
                }
                visited.add(value);
            }
            return value;
        };
    };

    const nativeFunctionReplacer = (key, value) => {
        //handle cases of native code, like function assign() { [native code] }
        if (typeof value === 'function' && value.toString().includes('[native code]')) {
            return 'function() { /*native code*/ }';
        }


        // if (typeof value === 'function' ) {
        //
        //     return `function() { /* ${key}  */ }`;
        // }

        return value;
    };

    const functionReplacer = (key, value) => {
        //handle function print with arguments
        if (typeof value === 'function') {
            return value.toString();
        }
        return value;
    }


    const replacer = replacerFunc();


    let json = JSON.stringify(
        {...gigya},
        (key, value) => {
            if (key == "_win") return;
            if (key == "4_aeFS_UyzRnmP5k_MI59ejg_gig") return;


            if (typeof value === 'function') {
                return '[FUNCTION]' + nativeFunctionReplacer(key, value);
            }
            return replacer(key, value);
        },
        '    '
    );

    //wrap all nesting properties that start with digits with quotes
    //  json = json.replace(/"(\d+)":/g, '"$1":');


    let moduleJavascript = json.replace(
        /"(\[FUNCTION])?((?:\\.|[^\\"])*)"(:)?/g,
        (match, group1, group2, group3) => {
            if (group1) return JSON.parse('"' + group2 + '"');
            if (group3 && /^\w+$/.test(group2)) return group2 + ':';
            return match;
        }
    );
    return moduleJavascript;
}