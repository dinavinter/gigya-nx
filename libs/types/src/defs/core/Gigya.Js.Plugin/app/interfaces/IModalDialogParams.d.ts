import { IBaseObjectParam } from 'src/core/Gigya.Js/app/BaseObject/BaseObject';
import { CloseReasons } from 'src/core/Gigya.Js.Plugin/app/CloseReasons';
export interface IModalDialogParams extends IBaseObjectParam {
    newModal?: boolean;
    dimDialogBackground?: boolean;
    captionText?: string;
    modalTemplate?: string;
    modalCss?: string;
    onModalClose?: (reason: CloseReasons) => void;
    closeImage?: string;
}
