import * as gigya_int from "./gigya-interface";
export type Gigya = typeof gigya_int & {isReady: boolean};

export {}
declare global {
 interface Window {
  gigya: Gigya;
 }
 var onGigyaServiceReady: () => void;
 var gigya: Gigya;

}
 