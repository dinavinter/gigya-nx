# Gigya Web Component

This project is a custom web component that dynamically loads the Gigya JavaScript SDK based on given API key and domain. It uses LitElement for the component structure and XState FSM for internal state management. The component dispatches events and allows content to be projected into it based on the current loading state of the Gigya script.

## Usage

First, you need to import the component:

```javascript
import '@gigya/wc';
```

Then you can use the gigya-js component in your HTML file. You need to specify the api-key and domain attributes:

```html
<gigya-js api-key="YOUR_API_KEY" domain="YOUR_DOMAIN">
  <span slot="loading">Loading...</span>
  <span slot="loaded">Gigya script loaded successfully.</span>
  <span slot="error">An error occurred while loading the Gigya script.</span>
</gigya-js>
```

### Screen Element

```html
<gigya-js api-key="4_qfguwzMx5jiJuBcKrSZe4w" domain="eu1.gigya.com">
  <gigya-screen  screen-set="Default-RegistrationLogin"  screen="gigya-register-screen"/>
</gigya-js>
```

#### Custom Screen 

```html
  <gigya-js api-key="4_qfguwzMx5jiJuBcKrSZe4w" domain="eu1.gigya.com">
  <gigya-screen slot="not-authenticated" >
    <template>
      <div class="p-5 bg-white dark:bg-gray-900 antialiased min-h-svh min-w-svn max-w-[30rem]   ">
        <form class="gigya-register-form  ">
          <fieldset class="block *:my-2 *:w-full">
            <input type="text" name="firstName" placeholder="First Name" autocomplete="given-name">
            <input type="text" name="lastName" placeholder="Last Name" autocomplete="family-name">
            <input type="email" name="email" placeholder="Email" autocomplete="email">
            <input type="password" name="password" placeholder="Password" autocomplete="new-password">
          </fieldset>
          <button type="submit"
                  class="w-full py-[0.4375rem] *:text-[#626890] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <span class="sr-only lg:not-sr-only lg:ml-2">Register</span>
            <iconify-icon class="ms-1 me-2" data-icon="account-add" icon="line-md:account-add"
                          height="1.5rem"></iconify-icon>
          </button>
        </form>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js"></script>
      <script
        src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
     
      <style type="text/tailwindcss"> 
        @tailwind base; 
        @tailwind components; 
        @tailwind utilities;  
      </style>


    </template>
  </gigya-screen>
</gigya-js>
```



### Conditional Rendering

The gigya-js component has three slots corresponding to the loading states of the Gigya script: loading, loaded, and error. You can put any HTML content into these slots, and the content will be shown based on the current state.

Example Usage with Conditional Rendering of Another Component
Suppose you have another custom component my-component that depends on the Gigya SDK, and you want to render it only after the Gigya script has finished loading. You can put my-component into the loaded slot of gigya-js:

```html
<gigya-js api-key="YOUR_API_KEY"  >
  <span slot="loading">Loading...</span>
  <my-component slot="loaded"></my-component>
  <span slot="error">An error occurred while loading the Gigya script.</span>
</gigya-js>
```

In this way, my-component will be rendered only after the Gigya script has loaded successfully.
Please note that you need to replace "YOUR_API_KEY" and "YOUR_DOMAIN" with your actual Gigya API key and domain.


#### Authentication State
Authentication state is represented with the following slots: `authenticated`, `not-authenticated`, You can use these slots to conditionally render content based on the authentication state of the user.

```html
<gigya-js api-key="4_qfguwzMx5jiJuBcKrSZe4w" domain="eu1.gigya.com">
    <gigya-screen slot="not-authenticated"  screen-set="Default-LoginRegistration" />
     <div slot="authenticated">
      <div class="p-5 bg-white dark:bg-gray-900 antialiased min-h-svh min-w-svn max-w-[30rem]   ">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome back!</h1>
        <p class="text-gray-500 dark:text-gray-400">You are already logged in.</p>
      </div>
    </div>
</gigya-js>
```

License
MIT
