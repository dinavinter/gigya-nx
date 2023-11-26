export interface IWarnable {
    warn?(msg: string, id?: string): void;
}
export declare function warn(screensetID: any, msg: any): void;
