interface ISessionService {
    isSessionVerified(glt: string): boolean;
    setIsSessionVerified(glt: string, verify: boolean): any;
}
declare class SessionService implements ISessionService {
    isSessionVerified(glt: string, apiKey?: string): boolean;
    setIsSessionVerified(glt: string, verified: boolean, apiKey?: string): void;
    private createKey;
}
export declare const sessionData: SessionService;
export {};
