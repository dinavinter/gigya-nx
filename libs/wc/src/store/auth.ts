import {Gigya, ILoginEvent} from "../types";
import {useGigya} from "../loader";

export async function* AuthState() {
  const gigya =await useGigya();
  const hasSession = await gigya.hasSession();
  yield * hasSession ?  authenticationStateLoggedIn() : authenticationStateLoggedOut();

  function waitForLogin ():Promise<ILoginEvent> {
    return new Promise<ILoginEvent >(async (resolve) => {
      gigya.socialize.addEventHandlers({
        onLogin: (response) => {
          console.log('logged in', response);
          resolve(response);

        }
      })
    });
  }

  function waitForLogout ():Promise<void> {
    return new Promise((resolve) => {
      gigya.socialize.addEventHandlers({
        onLogout: (response) => {
          console.log('logged out', response);
          resolve();
        }
      })
    });
  }
  async function* authenticationStateLoggedIn() {
    yield 'authenticated';
    await waitForLogout();
    yield * authenticationStateLoggedOut();
  }

  async function* authenticationStateLoggedOut() {
    yield 'not-authenticated';
    await waitForLogin();
    yield * authenticationStateLoggedIn();
  }


}
