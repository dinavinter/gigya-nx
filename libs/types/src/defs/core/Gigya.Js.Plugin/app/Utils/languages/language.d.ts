export declare type Translations = {
    [key: string]: string;
};
export declare type TranslationsContainer = {
    [langCode: string]: Translations;
};
export declare type TranslationWrapper = {
    langKey: string;
    translations: Translations;
};
export declare function getLocalizedText(plugin: string, textKey: string, lang: string, replaceStr?: string, withStr?: string): any;
export declare function getTranslationsFromContainer(container: {
    translations: TranslationsContainer;
}, lang: string, fallbackEnabled?: boolean, defaultTranslationsLang?: string): TranslationWrapper | undefined;
export declare function getFallbackLang(lang: string, defaultLang: string): string | undefined;
