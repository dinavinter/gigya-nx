import { IPagesParams } from '../PagesPlugin';
import { GenericPage } from './GenericPage';
export declare class RequireSessionPage extends GenericPage {
    constructor(params: IPagesParams);
    start(callback: (isSuccess: boolean) => void): Promise<void>;
    protected onLogout(event: any): void;
}
