import {gigyaService} from "./service";
import {Jwt} from "./jwt";

export async  function  getIdToken(): Promise<Jwt> {
  return gigyaService.state.matches('authenticated') ? gigyaService.state.context.id_token! :
    await new Promise((resolve) => {
      gigyaService.subscribe((state) => {
        if (state.matches('authenticated')) {
          resolve(state.context.id_token!)
        }
      })
    })
}
