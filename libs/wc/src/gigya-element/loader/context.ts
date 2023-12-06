import {createContext} from "@lit/context";
import type gigya from '@gigya/types/src/index';

export const gigyaContext = createContext<gigya>(Symbol('gigya'));
export default gigyaContext;