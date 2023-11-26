import { EventWrapper } from 'src/core/Gigya.Js/app/BaseObject/EventWrapper';
export interface IDisposable {
    dispose: () => void;
    onDisposedEvent?: () => EventWrapper<() => void>;
}
