export declare function setGroupContext(groupContext: any): Promise<void>;
export declare function setSSOToken(...args: any[]): Promise<void>;
export declare function syncGroupGltExp(gltexp?: string): Promise<void | {
    hasChanged: boolean;
    oldExpiration: number;
    newExpiration: number;
}>;
