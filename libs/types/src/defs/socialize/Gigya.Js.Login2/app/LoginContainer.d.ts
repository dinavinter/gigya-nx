import { IProvidersGridDimensions } from 'src/socialize/Gigya.Js.Login2/app/Interfaces';
import { ContainerBase } from 'src/socialize/Gigya.Js.Login2/app/ContainerBase';
import { LoginPlugin, NavigationDirection } from 'src/socialize/Gigya.Js.Login2/app/LoginPlugin';
export declare class LoginContainer extends ContainerBase {
    private plugin;
    private gridSize;
    private _mainElement;
    private _containerElement;
    private _leftArrow;
    private _rightArrow;
    private _loginContainers;
    private _providersContainer;
    private template;
    private ElementsSelector;
    constructor(plugin: LoginPlugin, gridSize: IProvidersGridDimensions);
    getHtmlElement(): HTMLElement;
    private setPaging;
    expandInContainerAfterRender(): void;
    private createContainers;
    private attachEvents;
    private getProvidersCells;
    private getProviderImage;
    private isConnectionCompleted;
    private getGroupProvidersRows;
    private getProvidersGroups;
    private createElemnetBlock;
    private changeNavigationState;
    setNavigationArrowState(direction: NavigationDirection, disabled: boolean): void;
}
