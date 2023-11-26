export declare enum MessagingMethod {
    LocalStorageListener = 0,
    PostMessage = 1,
    Flash = 2
}
export declare function checkCompleteRegistration(res: Object, params: Object, methodName: string, callback: (response: any, suppressEvents?: boolean, retry?: boolean) => void): void;
export declare function checkGroupInvitation(params: any): Promise<void>;
export declare function getGigyaSettings(group: string): string;
export declare function setGigyaSettings(group: string, settings: Object): void;
export declare function delGigyaSettings(group: string): void;
export declare function handleSpecialFields(o: any): void;
export declare function convertIdentitiesArrayToObject(o: any): void;
export declare function addUserInfoToEvent(response: Object, targetObject: Object, addLoginProperties?: boolean, useBasePhotoURL?: string): Object;
export declare function sendEmailNative(params: Object): void;
