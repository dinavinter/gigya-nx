export interface IAccountService {
    verifyLogin(): Promise<boolean>;
}
export declare class AccountService implements IAccountService {
    verifyLogin(): Promise<boolean>;
    private get lastVerification();
    private set lastVerification(value);
    private get lastVerificationCookieKey();
}
export declare let accountService: IAccountService;
