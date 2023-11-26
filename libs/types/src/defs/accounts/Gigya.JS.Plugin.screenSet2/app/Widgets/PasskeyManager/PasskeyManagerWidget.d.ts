import { CardListWidget } from '../CardListWidget';
import { IPasskey } from '../../ScreenSetData';
export declare const PasskeyManager_CONSTS: {
    selector: string;
};
export declare class PasskeyManagerWidget extends CardListWidget {
    static CONSTS: {
        selector: string;
    };
    protected readonly itemId = "id";
    private refreshList;
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    unlinkInstanceElement(): void;
    protected reloadData(): Promise<IPasskey[]>;
    private addEventHandlers;
    private removeEventHandlers;
    private getValue;
    private credentialMapper;
}
