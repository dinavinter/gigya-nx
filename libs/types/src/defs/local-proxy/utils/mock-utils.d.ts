export declare const CoreHeaderPrefix = "\nif (typeof gigya == 'undefined' || !gigya.isGigya) { gigya = { isGigya: true } };\nif (!gigya.__initialized) {\ngigya.__initialized = true;";
export declare const InjectedHeader: string;
export declare const ApiAspxHeaderPrefix = "var gigya = {}; gigya.gmidTicketExpiration = 3600;";
export declare const apiAspx: () => Promise<string>;
export declare const getMockConfig: (reqPath: string) => Promise<string>;
export declare const getCanaryLoader: (target: string) => Promise<string>;
