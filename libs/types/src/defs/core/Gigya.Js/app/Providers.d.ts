export declare var _aliases: {};
export declare class Provider {
    ID: number;
    displayName: string;
    width: number;
    height: number;
    explicitOnly?: boolean;
    aliases?: string;
    name: string;
    arDefaultCapabilities: string[];
    constructor(ID: number, displayName: string, width: number, height: number, defaultCapabilities: string, explicitOnly?: boolean, aliases?: string);
    toString(): string;
}
export declare var arProviders: Provider[];
export declare function getProviderByName(provider: any, providersEnum?: Provider[]): Provider;
export declare function replaceProviderAliases(providers: string): string;
export declare function getProviderById(providerID: any, providersEnum?: Provider[]): Provider;
export declare function hideProvidersByName(providers: Provider[], providersToHide?: string, providersEnum?: Provider[]): Provider[];
export declare function getProvidersForRequiredCapabilities(providers: any, capabilities: any): any[];
export declare function getAllProviders(): Provider[];
export declare function getProvidersByName(providers: string, providersEnum?: Provider[]): any[];
export declare function replaceWildcard(providersToReplace: string[], providersEnum: Provider[]): any[];
