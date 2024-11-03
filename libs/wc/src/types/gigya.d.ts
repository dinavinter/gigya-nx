import { Gigya } from './service'; 

export {}
declare global {

 interface Window {
  gigya: Gigya;
 }

 let onGigyaServiceReady: () => void;
 let gigya: Gigya;

}
 