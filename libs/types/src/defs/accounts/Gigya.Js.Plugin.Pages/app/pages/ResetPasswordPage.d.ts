import { IPagesParams } from '../PagesPlugin';
import { GenericPage } from './GenericPage';
export declare class ResetPasswordPage extends GenericPage {
    constructor(params: IPagesParams);
    start(callback: (isSuccess: boolean) => void): Promise<void>;
}
