import './style.css'
import '@gigya/wc'
import './compiler-element.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>  
<!--  <gigya-js api-key="%GIGYA_API_KEY%" domain="%GIGYA_DOMAIN%" }"></gigya-js>-->
<!--      <div slot="loading" ></div>-->
<!--      <div slot="ready" ></div>-->
<!--      <span slot="error" >An error occurred while loading the Gigya script.</span>-->

<!--      <template id="ready">-->
<!--        <script type="application/javascript" name="script">-->
<!--          gigya.accounts.showScreenSet({-->
<!--            screenSet: "Default-RegistrationLogin",-->
<!--            startScreen: "gigya-register-screen",-->
<!--            apiKey: "%GIGYA_API_KEY%"});-->
<!--        </script>-->

<!--      </template>-->
<!--    </gigya-js>-->
     <compiler></compiler>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
