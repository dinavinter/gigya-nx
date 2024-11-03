import {jwtService} from "./service";
import {Jwt} from "./jwt";

export async  function  getIdToken(): Promise<Jwt> {
  return jwtService.state.matches('authenticated') ? jwtService.state.context.id_token! :
    await new Promise((resolve) => {
      jwtService.subscribe((state) => {
        if (state.matches('authenticated')) {
          resolve(state.context.id_token!)
        }
      })
    })
}
