import { BaseTfaProvider } from "../TfaProviders/BaseTfaProvider";
export declare function getElementByClassName<T extends HTMLElement>(container: any, className: any): T;
export declare function createActionInterval(tfaProvider: BaseTfaProvider, action: (count?: number) => Promise<void>, interval: number, cancelCondition?: (count?: number) => boolean): void;
export declare function bindEnterKey(buttonEl: HTMLElement): any;
export declare function bindEnterKey(inputEl: HTMLElement, buttonEl: HTMLElement): any;
