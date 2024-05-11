import './app.element.css';
import '@gigya/js';

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
    button.innerHTML = 'Register...';

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
    // const div =this.appendChild(document.createElement('div'));
    // div.id="screen-container";
    // div.innerHTML = "Loaded.";

    console.debug(
      'screen:connectedCallback',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
      window.gigya,
      this.parentNode
    );
    window.gigya?.accounts.showScreenSet({
      screenSet: 'Default-RegistrationLogin',
      startScreen: 'gigya-register-screen',
      containerID: 'screen-container',
    });

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
