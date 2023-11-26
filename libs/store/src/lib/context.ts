import {createContext} from "@lit/context";
import {gigya} from "@gigya/types";

const gigyaContext = createContext<gigya>(Symbol('logger'));
