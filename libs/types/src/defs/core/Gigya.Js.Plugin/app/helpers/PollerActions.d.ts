import { IPollerAction } from 'src/core/Gigya.Js.Plugin/app/helpers/Poller';
import { IElementActualSize, IViewportSize } from 'src/core/Gigya.Js/app/Interfaces';
export declare class InvalidPropertyAction implements IPollerAction {
    private _object;
    private _propery;
    callback: () => void;
    constructor(_object: any, _propery: string, callback: () => void);
    act(): void;
    dispose(): void;
}
export declare class SizeChangeAction implements IPollerAction {
    callback: (old: IElementActualSize, curr: IElementActualSize) => void;
    private _last;
    constructor(callback: (old: IElementActualSize, curr: IElementActualSize) => void);
    act(): void;
    dispose(): void;
    protected getCurrSize(): IElementActualSize;
    protected isChanged(last: IElementActualSize, curr: IElementActualSize): boolean;
}
export declare class ContainerSizeAction extends SizeChangeAction {
    private _container;
    constructor(_container: HTMLElement, callback: (old: IElementActualSize, curr: IElementActualSize) => void);
    protected getCurrSize(): IElementActualSize;
    dispose(): void;
}
export declare class ViewportSizeAction extends SizeChangeAction {
    constructor(callback: (old: IViewportSize, curr: IViewportSize) => void);
    protected getCurrSize(): IViewportSize;
    protected isChanged(last: IViewportSize, curr: IViewportSize): boolean;
}
