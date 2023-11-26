export declare const getParentUrl: (win?: Window & typeof globalThis, doc?: Document) => string;
export declare const getBodyElement: (doc?: Document) => Promise<HTMLElement>;
export declare const validateOrigin: (origin: string, checked: string) => boolean;
export declare const createIframe: (title?: string, doc?: Document) => HTMLIFrameElement;
export declare const generateId: () => string;
export declare const getAllClassMethodsNames: (type: Object | (new () => any)) => string[];
