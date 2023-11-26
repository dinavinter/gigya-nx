import { siteData } from '../Services/SiteData';
export declare function getPreferredLoginMethod(identifier: string): string | '';
export declare function setPreferredLoginMethod(method: string, identifier: string): void;
export declare type IAuthApis = Pick<typeof siteData, 'getPreferredLoginMethod' | 'setPreferredLoginMethod'>;
