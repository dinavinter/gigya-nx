import { IFormInput } from './Inputs/FormInput';
export declare class BehaviorTrackingContext {
    private document;
    private static registeredEvents;
    private startTime;
    private focusCount;
    private clickCount;
    private submitCount;
    private mouseMovement;
    private scrolls;
    private fieldsToTrack;
    private clientFeatures;
    private increaseFocusCount;
    private increaseClickCount;
    private trackMouseMovement;
    private trackScrolling;
    constructor(document?: Document);
    get riskContext(): {
        b0: number;
        b1: number[];
        b2: number;
        b3: string[];
        b4: number;
        b5: number;
        b6: string;
        b7: {
            name: string;
            filename: string;
            length: number;
        }[];
        b8: string;
        b9: number;
        b10: {
            state: string;
        };
        b11: boolean;
        b12: {
            charging: boolean;
            chargingTime: number;
            dischargingTime: number;
            level: number;
        };
        b13: [number, string, boolean, boolean];
    };
    addFields(fields?: IFormInput[]): void;
    startMonitoring(): void;
    stopMonitoring(): void;
    reset(): void;
    onSubmit(): void;
    private static removeAllEvents;
    private static registerEvent;
}
