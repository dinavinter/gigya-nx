import { CardListItemWidget } from '../CardListItemWidget';
import { TfaManagementEvent } from 'src/core/Gigya.Js/app/TFA/TfaManagementService';
import { TranslatedWidget } from '../TranslatedWidget';
export declare const TfaManagementItemBase_CONSTS: {
    deleteDialogButtonSelector: string;
    removeButtonSelector: string;
    deleteDialogCancelButtonSelector: string;
    deleteDialogClass: string;
    deps: (typeof TranslatedWidget)[];
};
export declare abstract class TfaManagementItemBase extends CardListItemWidget {
    protected abstract readonly removeEvent: TfaManagementEvent;
    protected abstract readonly listUpdateEvent: TfaManagementEvent;
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    protected init(): void;
    protected updateRemoveButtonState(): void;
    protected enableRemoveButton(): void;
    protected openDeleteDialog(): void;
    protected closeDeleteDialog(): void;
    protected disableRemoveButton(): void;
    protected onRemoveDeviceClicked(): Promise<void>;
    protected abstract removeDevice(): Promise<void>;
    protected get removeButtonEl(): Element;
    protected get deleteDialogButtonEl(): Element;
    protected get deleteDialogCancelButtonEl(): Element;
    protected get buttonEventKey(): string;
}
