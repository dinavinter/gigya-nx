import * as dom from 'dts-dom'
import {DeclarationFlags, ParameterFlags} from 'dts-dom'
import {BaseApi} from "./type-maker";
import {ContextFlags} from "dts-dom/lib";
import {ap} from "vitest/dist/reporters-5f784f42";


function getType(value: any):dom.Type  {
    switch (typeof value) {
        case 'string':
            return `"${value}"`;
        case 'number':
            return dom.type.number;
        case 'boolean':
            return value ? dom.type.true: dom.type.false;
        case 'object':
            if (Array.isArray(value) && value.length > 0) {
                return JSON.stringify(value);
            } 
            return crateObjectType(value) ;
        case 'undefined':
            return dom.type.undefined;
         default:
            return dom.type.any;
    }
}
function crateObjectType(obj: object):dom.Type {
return dom.create.objectType( Object.entries(obj).map(([key, value]) => {
        return dom.create.property(key, getType(value))
    }));
}

export function apiType(api: BaseApi) {
    return dom.create.objectType(Object.entries(api).map(([key, value]) => {
        return dom.create.property(key, getType(value))
    }))  
}
apiType.prototype.toString = function () {
    dom.emit(this );
}

apiType.prototype.toTsLiteral = function () {
   dom.create.typeParameter(this.methodName, this);
}
function apiTypeProperty(api: BaseApi) {
     return dom.create.property(api.namespace? `${api.namespace}.${api.methodName}`:  api.methodName, apiRunner(api)  );
}

function apiRunner(api: BaseApi) {
    const apiReference = dom.create.namedTypeReference('Runner');
    apiReference.typeArguments.push(apiType(api));
    return apiReference;
}

 function apiParameter(api: BaseApi) {
     const apiReference = dom.create.namedTypeReference('Params');
     apiReference.typeArguments.push(apiType(api));

     return dom.create.parameter('params', apiReference);
 }
function apiMap(apiList: BaseApi[]) {
    return dom.create.objectType(apiList.map(apiTypeProperty));
}

export function createApiMap(apiList:  BaseApi[]) {
  return dom.create.alias('APIMap',  apiMap(apiList));
}

function defaultIfNullOrEmpty( pop: string, gig: string ) {
    return pop ==='' || !pop ?  gig : pop;
    
}

function apiInterfaces( api: BaseApi[]): Record<string, dom.NamespaceDeclaration>  {
    const interfaces = api.reduce(( acc, api ) => {
        const apiName=api.namespace? `${api.namespace}.${api.methodName}`:  api.methodName;
        const identifier = apiName.split('.');
        const name = identifier.pop()!;
        const namespace = identifier.join('.');
        const namecpaceName = defaultIfNullOrEmpty(identifier.pop(), 'gig') ;
         const apiT = apiType(api);
         const apiReference = dom.create.namedTypeReference('Runner');
            apiReference.typeArguments.push(apiT);
         
        acc[namespace] = acc[namespace] ??  dom.create.module(namecpaceName);
        acc[namespace].members.push(dom.create.const(name, apiReference));
        // acc[namespace].members.push(dom.create.property(name, apiReference))

        // acc[namespace].members.push(dom.create.function(name, [dom.create.parameter("args",apiReference, ParameterFlags.Optional)], dom.type.void, [dom.DeclarationFlags.None]));
        // acc[namespace].members.push(dom.create.method(name, [dom.create.parameter("params", dom.type.any)], dom.type.void, dom.DeclarationFlags.ReadOnly));
        return acc;
    }, {} as Record<string, dom.NamespaceDeclaration>);
    return interfaces;
}

function moduleAPI( api: BaseApi[] ) {
    
     return dom.emit(
        createModule(api),
        {rootFlags: ContextFlags.Module});
}

export function createApiMapFile(api: BaseApi[]) {
    const module = dom.create.module('APIMap');
    module.members.push(createApiMap(api));
    module.members.push(dom.create.exportDefault('APIMap'));
    return moduleAPI(api);
}

 type Node={id:string, parent:string,   declartion: dom.InterfaceDeclaration | dom.NamespaceDeclaration} & any;


function nest(items:Node[], root : Node):dom.NamespaceDeclaration | dom.InterfaceDeclaration {
    root.declartion = root.declartion ?? dom.create.namespace(root.name);
    const children = items.filter(item => item.parent !== item.id).filter(item => item.parent === root.id);
    if (!children.length) {
        return root.declartion;
    }
    const item = root.declartion;
    
    item.members.push(...children.map(item => nest(items, item)));
  

    return item;
}

function isInterface(item:dom.NamespaceDeclaration | dom.InterfaceDeclaration): item is dom.NamespaceDeclaration{
    return item.kind === "interface";

}
   function isNamespace(item:dom.NamespaceDeclaration | dom.InterfaceDeclaration): item is dom.NamespaceDeclaration{
       return item.kind === "namespace";
        
   }

    function getNamespace( member: dom.NamespaceDeclaration ) {
        const namespace= dom.create.namespace(member.name);
        namespace.members.push(...member.members);
        return namespace;
    }
    
    function getInterface( member: dom.InterfaceDeclaration ) {
        const namespace= dom.create.interface(member.name);
        namespace.members.push(...member.members);
        return namespace;
    }

export function createModule(apiList: BaseApi[]) {
    
    const interfaces=apiInterfaces(apiList)
    const module = dom.create.module('gigya');
    for (const [key, value] of Object.entries(interfaces)){
        const identifiers = key.split('.');
        const name = identifiers.pop()!;
        const parent = identifiers.join('.');
        const parentName= defaultIfNullOrEmpty(parent, 'root');
        interfaces[parent] = interfaces[parent] ?? dom.create.module(parentName);
        interfaces[parent].members.push( value);
    }
    
    const importClause = dom.create.importNamed('APIParams', '@gigya/types')
        ;
    module.members.push(importClause);
    module.members.push(dom.create.importNamed('Runner', '@gigya/types'));
    for (const [key, value] of Object.entries(interfaces)){
        if(key === "" || value.name == 'gig') continue;
        console.log(key,value); 
        module.members.push(value);
        console.log(dom.emit(module)); 

    }
    return module;
    
    
   
    console.log(interfaces);
     const distinct = ( value: Node, index: number, self: Node[] ) =>  self.findIndex(item => item.id === value.id) === index;
     const distictById =(array:Node[]) => {
           return [...new Map(array.map(item =>
                [item[item.id], item])).values()];

        }
    function apiTypeProperty(api: BaseApi) {
        return dom.create.property(api.namespace? `${api.namespace}.${api.methodName}`:  api.methodName, apiRunner(api)  );
    }

        function member( item: string, index: number, self: string[] ) {
            return {
                declartion: dom.create.namespace(item),
                id: self.slice(0, index + 1).join('.'),
                name: item,
                parent: self.slice(index - 1).join('.')
            } as Node;
        }
        
        

        const apiNodes = Object.values(interfaces)
         .flatMap(int => {
             const identifiers = int.name.split('.');
             const name = identifiers.pop()!;
             const parent = identifiers.join('.');
             return identifiers.map(member).concat({
                    declartion: dom.create.namespace(name),
                    id: int.name,
                    interface: int,
                    name,
                    parent
                });
             })
            .filter(distinct)
        ; 

         console.log(apiNodes);

     const tree =
         apiNodes
             .flatMap(api =>  api)
             .filter(a => a.id === ""  )
             .map(a => nest(apiNodes, a));
     console.log(tree);
 
 

     const gigyaModule = dom.create.module('gigs');
     console.log(interfaces[""]);
     gigyaModule.members.push(...Object.values(interfaces).map((int) => {
         return int;
     }));
     
     gigyaModule.flags = DeclarationFlags.Export;
     gigyaModule.kind = "module";
      
     
     return gigyaModule;

 }

 //
 //
 //     const createInterface = (identifier:string, interfaces ={} as Record<string,dom.InterfaceDeclaration>) => {
 //         const identifierParts = identifier.split('.');
 //         while (identifierParts.length) {
 //                const identifier = identifierParts.pop();
 //                const parent = identifierParts.join('.');
 //                if (identifier) {
 //                    interfaces[identifier] = interfaces[identifier] ?? dom.create.interface(identifier);
 //                    if (parent) {
 //                        interfaces[parent] = interfaces[parent] ?? dom.create.interface(parent);
 //                        interfaces[parent].members.push(dom.create.property(identifier, dom.create.namedTypeReference(identifier)));
 //                    }
 //                   
 //                }
 //         }
 //         return interfaces;
 //        
 //      }
 //    
 //     module.members.push(createApiMap(apiList));
 //     return module;
 // }