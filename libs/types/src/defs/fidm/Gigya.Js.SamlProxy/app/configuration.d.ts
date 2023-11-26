import { IConfiguration } from 'src/fidm/Gigya.Js.SamlProxy/app/IConfiguration';
export interface IUnparsecConfiguration {
    apiKey: string;
    configJson: string;
}
export declare function findConfiguration(): IUnparsecConfiguration;
export declare function parseConfiguration(unparsedConfig: IUnparsecConfiguration): IConfiguration;
