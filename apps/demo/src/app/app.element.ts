import './app.element.css';
import '@gigya/web';
import { useGigya } from '@gigya/loader';

export class AppElement extends HTMLElement {
  constructor() {
    super();
    console.log(
      'screen:ctor',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
      window.gigya
    );
    const button = this.appendChild(document.createElement('button'));
    button.innerHTML = 'Reload...';

    button.onclick = () => {
      console.debug(
        'screen:button',
        import.meta.env.GIGYA_DOMAIN,
        import.meta.env.GIGYA_API_KEY,
        window.gigya
      );
      window.gigya?.accounts.showScreenSet({
        screenSet: 'Default-RegistrationLogin',
        startScreen: 'gigya-register-screen',
        containerID: 'screen-container',
      });
    };

    const div = this.appendChild(document.createElement('div'));
    div.id = 'screen-container';



  }

  connectedCallback() {

    useGigya(gigya => {
      console.log('app:loaded  🥳', gigya);
       gigya.accounts.showScreenSet({
        screenSet: 'Default-RegistrationLogin',
        startScreen: 'gigya-register-screen',
        containerID: 'screen-container',
      });
      }
    ).catch(console.error);

    console.debug(
      'screen:connectedCallback',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
      window.gigya,
      this.parentNode
    );

  }

  disconnectedCallback() {
    console.debug(
      'screen:disconnectedCallback',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
      window.gigya
    );
  }
}
customElements.define('registration-screen', AppElement);
