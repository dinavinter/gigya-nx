import { BaseTfaProvider } from "../TfaProviders/BaseTfaProvider";
export interface IBackupCodesManager {
    getBackupCodes(): Promise<{
        backupCodes: string[];
    }>;
    generateNewCodes(): Promise<{
        backupCodes: string[];
    }>;
    prepareBackupCodesForView(backupCodes: any): {
        backupCodes: string[];
    };
    printBackupCodes(html: any): any;
}
export declare class BackupCodesManager implements IBackupCodesManager {
    private _tfaProvider;
    private static readonly ExpectedNumberOfBackupCodes;
    constructor(_tfaProvider: BaseTfaProvider);
    getBackupCodes(): Promise<{
        backupCodes: string[];
    }>;
    generateNewCodes(): Promise<{
        backupCodes: string[];
    }>;
    prepareBackupCodesForView(backupCodes: string[]): {
        backupCodes: string[];
    };
    printBackupCodes(html: string): boolean;
}
