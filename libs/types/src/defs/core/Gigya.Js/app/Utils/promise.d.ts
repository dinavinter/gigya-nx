import { GigyaResponse } from 'gigya';
export declare function promisify<T extends GigyaResponse>(method: Function, params?: any): Promise<T>;
