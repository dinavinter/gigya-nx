import { IDisposable } from 'src/core/Gigya.Js/interfaces/IDisposable';
export declare class LoadDimmer implements IDisposable {
    private _container;
    private _isActive;
    private _dimmer;
    private _loader;
    constructor(_container: HTMLElement);
    show(): void;
    private setElementOverContainer;
    isActive(): boolean;
    hide(): void;
    private unlinkElement;
    dispose(): void;
}
