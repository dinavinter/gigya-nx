import { IPluginParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
import { IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
import { IPluginConfig } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig';
import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
export declare enum ServerStates {
    NotStarted = 0,
    InProgress = 1,
    Done = 2,
    Error = 3
}
export declare var IframeUploadInfo: {
    setDimentionsDelay: number;
    uploadCheckInterval: number;
    uploading: string;
};
export declare enum ProfilePhotoModes {
    display = 0,
    upload = 1
}
export declare enum ProfilePhotoUploadModes {
    formSubmit = 0,
    serverApi = 1
}
export interface IPhotoDimensions {
    width: Number;
    height: Number;
}
export declare enum ProfilePhotoErrorType {
    fileSizeError = 0,
    serverError = 1,
    none = 2
}
export declare enum ProfilePhotoEditModes {
    upload = 0,
    update = 1,
    remove = 2
}
export interface IProfilePhotoParams extends IPluginParams {
    mode: string;
    cssPrefix: string;
    tooltipTimeout: number;
    apiDomain?: string;
    deviceType?: string;
    regToken?: string;
    loginToken?: string;
    hasMobileUI?: boolean;
    allowModal?: boolean;
    fixImageOrientation?: boolean;
    allowRemove?: boolean;
}
export interface IProfilePhotoUploadTemplates extends IPluginTemplates {
    display: string;
    upload: string;
    tooltipFileSize: string;
}
export interface IProfilePhotoUploadPluginCSS extends IPluginCSS {
    style: string;
}
export interface IEnumerable<T> {
    length: number;
    [i: number]: T;
}
export declare function ForEach<T>(arr: IEnumerable<T>, action: (element: T, index?: number, arr?: IEnumerable<T>) => void): void;
declare const BasePluginGlobal: typeof BasePlugin;
export declare class MyPhotoPlugin extends BasePluginGlobal<IProfilePhotoParams, IProfilePhotoUploadTemplates, IProfilePhotoUploadPluginCSS> {
    static PLUGIN_NAME: string;
    static MAX_IMAGE_BYTE_SIZE: number;
    static TOOLTIP_TIMEOUT: number;
    static SERVER_ERROR_TEXT: string;
    static USER_INFO_CHANGE_EVENT: string;
    static IMAGE_CLASS: string;
    static DEFAULT_IMAGE_NAME: string;
    static FULL_DEFAULT_IMAGE_PATH: string;
    static UPDATE_PHOTO_TEXT: string;
    static UPLOAD_PHOTO_TEXT: string;
    static CLASSES_STATES: {
        upload: string;
        update: string;
        error: string;
        loading: string;
    };
    static EVENT_TYPES: {
        onlogin: string;
        onUserInfoChanged: string;
        onlogout: string;
    };
    private _photoDimensions;
    private _currentErrorType;
    private _fileSizeErrorText;
    private _currnetErrorText;
    private _isPhotoUploaded;
    private _pluginInitialized;
    private _photoProfileState;
    private _uploadIframe;
    private innerContainer;
    private _nextServerQueryId;
    private _lastResponseId;
    private _isFilesFeatureSupported;
    private _formID;
    private listenOnIframe;
    private uploadCheckInterval;
    private _imageElement;
    private _currentPhotoURL;
    private _iconElement;
    private _removePhotoButton;
    private _infoTooltipElement;
    private _uploadTextElement;
    private _pluginWrapperDiv;
    private _formWrapper;
    private _fileInput;
    private _fileInputChanged;
    private _fileInputClicked;
    private _iconMouseHover;
    private _removePhotoButtonClicked;
    private onUserStateChange;
    private _nextGeneratedId;
    private _uploadIframeID;
    private _lastQueryId;
    private _pluginMode;
    private _uploadMode;
    private _editMode;
    private _base64PhotoData;
    private _imageBase;
    private _tooltipContainer;
    private _tooltipTextContainer;
    private _loadedCallback;
    _uploadForm: HTMLFormElement;
    _dummyBtn: HTMLInputElement;
    static injectionInfo(): IInjectionInfo;
    getConfig(): IPluginConfig<IProfilePhotoParams>;
    private validateUserInputParams;
    init(loadedCallback: (success?: boolean) => void): void;
    private resetContainer;
    checkForProfilePhoto(): void;
    private onAccountInfoCheckCompleted;
    private afterImageDimensionsRetreival;
    private onAccountInfoSuccess;
    private getProfilePhotoURL;
    private setProfilePhotoURL;
    private updatePluginState;
    private onAccountInfoError;
    private onAccountInfoErrorWithRegToken;
    private setPhotoImage;
    private render;
    private getDOMElements;
    private setDOMEvents;
    private registerLocalEvents;
    private setRemovePhotoButton;
    updateUserPhoto(res: any): void;
    private registerToGlobalEvents;
    private unregisterToGlobalEvents;
    private unregisterLocalEvents;
    onRemovePhotoButtonClicked(): Promise<void>;
    onFileInputClicked(): boolean;
    onIconHovered(): void;
    onFileInputChange(): Promise<void>;
    startServerQuery(): number;
    onServerQueryEnd<D>(serverQueryId: number, newState: ServerStates, data?: D): Promise<void>;
    stopUploadCheck(): void;
    private submitPhoto;
    private sendPhotoWithFormSubmit;
    private sendPhotoWithServerApi;
    getServerParameters(): Promise<any>;
    serverQueryDone<D>(newState: ServerStates, data?: D): Promise<void>;
    private onUploadSavedResponse;
    private onUpdatedPhotoCompleted;
    private resetPhotoContainer;
    private onPhotoDimensionsRetreived;
    private setImageDimensions;
    private getProfilePhotoUsingRegToken;
    private buildUrlForProfilePhotoAPI;
    private getImageDimensions;
    private arePhotoDimensionsWider;
    dispose(): void;
    private getControlHtml;
    private createIFrameElement;
    private createFormElement;
    private createInputFileElement;
    private userStateChanged;
    private resetPlugin;
    showLoader(el: HTMLElement): void;
    hideLoader(el: HTMLElement): void;
    displayTooltip(): void;
    toggleErrorIndication(showError: boolean): void;
    private getServerErrorText;
}
export {};
