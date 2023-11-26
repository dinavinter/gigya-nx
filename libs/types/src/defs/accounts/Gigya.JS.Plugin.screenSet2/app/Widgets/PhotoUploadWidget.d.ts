import { BaseUploadWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseUploadWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { ServerStates } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget';
export declare const PhotoUploadWidget_CONSTS: {
    selector: string;
};
export declare class PhotoUploadWidget extends BaseUploadWidget<HTMLDivElement> {
    private photoElementID;
    private pathContainerID;
    private defaultBGImage;
    private uiHtml;
    private uiDiv;
    private lastResponseId;
    static CONSTS: {
        selector: string;
    };
    constructor(_form: BaseForm, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    private restoreDefaultBg;
    getFormHtml(): string;
    getFormElement(): HTMLFormElement;
    getFileElement(): HTMLInputElement;
    submitUploadForm(): Promise<void>;
    serverQueryDone(newState: ServerStates): Promise<void>;
    private onUploadSavedResponse;
    private onUploadSuccess;
    private onServerError;
}
