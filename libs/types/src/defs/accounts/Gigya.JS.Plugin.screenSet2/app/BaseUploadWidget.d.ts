import { BaseServerWidget, ServerStates } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseServerWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare var BaseUploadWidget_CONSTS: {
    setDimentionsDelay: number;
    uploadCheckInterval: number;
    uploading: string;
    uploadForm: string;
};
export declare class BaseUploadWidget<T extends HTMLElement> extends BaseServerWidget<T> {
    _uploadIframeID: string;
    private formDivID;
    private listenOnIframe;
    private uploadIframe;
    _lastQueryId: number;
    private uploadCheckInterval;
    _formDiv: HTMLDivElement;
    private setFormDimentionsInterval;
    _uploadForm: HTMLFormElement;
    private fileInput;
    private fileInputChanged;
    constructor(form: BaseForm, el: T, resetCSS?: boolean);
    onFileInputChange(): void;
    linkInstanceElement(parent: HTMLElement): void;
    getFormHtml(): string;
    getFormElement(): HTMLFormElement;
    getFileElement(): HTMLInputElement;
    private setFormDimentions;
    unlinkInstanceElement(): void;
    stopUploadCheck(): void;
    serverQueryDone(newState: ServerStates): void;
    submitUploadForm(): void;
    startServerQuery(): number;
    getServerParameters(): Promise<any>;
}
