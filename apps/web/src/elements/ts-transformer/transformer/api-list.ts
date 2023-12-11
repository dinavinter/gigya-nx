import * as dom from 'dts-dom';
import {BaseApi} from "./type-maker";
import {ContextFlags} from "dts-dom/lib";
import ts from "typescript";



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
     return dom.create.property(api.methodName, apiRunner(api)  );
}

function apiRunner(api: BaseApi) {
    const apiReference = dom.create.namedTypeReference('Runner');
    apiReference.typeArguments.push(apiType(api));
    return apiReference;
}

function apiTypeExport(api: BaseApi) {
    const apiReference = apiRunner(api);
   const apiVariable = dom.create.alias(api.methodName, apiReference);
    return apiVariable;
}

function apiMap(apiList: BaseApi[]) {
    return dom.create.objectType(apiList.map(apiTypeProperty));
}

export function createApiMap(apiList:  BaseApi[]) {
  return dom.create.alias('APIMap',  apiMap(apiList));
}

export function createApiMapFile(api: BaseApi[]) {
    const module = dom.create.module('APIMap');
    module.members.push(createApiMap(api));
       module.members.push(dom.create.exportDefault('APIMap'));
    return dom.emit(
        createApiMap(api), {
        rootFlags: ContextFlags.Module
    });
}
