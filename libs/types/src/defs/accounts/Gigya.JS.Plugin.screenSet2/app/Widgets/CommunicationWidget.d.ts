import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
export declare type OldCommunicationChannels = 'email' | 'SMS' | 'sms';
export declare type CommunicationStatus = 'noticed' | optIn | optOut;
export interface ICommunicationObject {
    topic: string;
    channel: string;
    status?: CommunicationStatus;
    Status?: CommunicationStatus;
    communicationKey: string;
}
export declare enum Channel_Status {
    noticed = "noticed",
    OptIn = "OptIn",
    optIn = "optIn",
    OptOut = "OptOut",
    optOut = "optOut"
}
declare type optIn = 'optIn' | 'OptIn';
declare type optOut = 'optOut' | 'OptOut';
export declare const CommunicationWidget_CONSTS: {
    selector: string;
    channel: string;
    topic: string;
    status: string;
    subscriptionName: string;
    communicationsPrefix: string;
    subscriptionType: string;
    subscriptionTopic: string;
    communicationChannel: string;
};
export declare class CommunicationWidget extends BaseFormWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
        channel: string;
        topic: string;
        status: string;
        subscriptionName: string;
        communicationsPrefix: string;
        subscriptionType: string;
        subscriptionTopic: string;
        communicationChannel: string;
    };
    private communicationData;
    linkInstanceElement(parent: HTMLElement): void;
    private createElement;
    private getCommunicationData;
    private getCommunicationStatus;
    private getCommunicationChannel;
    renderWidget(): void;
}
export {};
