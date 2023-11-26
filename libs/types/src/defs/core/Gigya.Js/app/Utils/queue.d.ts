export declare function _servicesStatus(): {};
export declare function isActive(service: string): boolean;
export declare function release(id: string, service: string): void;
export declare function hold(id: string, service: string): void;
export declare function waitFor(service: string, fnc: Function, args: any[]): void;
export declare function waitFor(service: string, fnc: Function, args: IArguments): void;
export declare function queueForExecution(service: string, func: Function, args?: any[]): void;
