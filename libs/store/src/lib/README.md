# Gigya JS Loader
This project is a custom web component that dynamically loads the Gigya JavaScript SDK based on given API key and domain. It uses LitElement for the component structure and XState FSM for internal state management. The component dispatches events and allows content to be projected into it based on the current loading state of the Gigya script.

## Usage
First, you need to import the component:

```javascript
import '@gigya/web';
```
Then you can use the gigya-js component in your HTML file. You need to specify the api-key and domain attributes:

```html
<gigya-js api-key="YOUR_API_KEY" domain="YOUR_DOMAIN">
  <span slot="loading">Loading...</span>
  <span slot="loaded">Gigya script loaded successfully.</span>
  <span slot="error">An error occurred while loading the Gigya script.</span>
</gigya-js>
```

The gigya-js component has three slots corresponding to the loading states of the Gigya script: loading, loaded, and error. You can put any HTML content into these slots, and the content will be shown based on the current state.

Example Usage with Conditional Rendering of Another Component
Suppose you have another custom component my-component that depends on the Gigya SDK, and you want to render it only after the Gigya script has finished loading. You can put my-component into the loaded slot of gigya-js:

```html
<gigya-js api-key="YOUR_API_KEY" domain="YOUR_DOMAIN">
  <span slot="loading">Loading...</span>
  <my-component slot="loaded"></my-component>
  <span slot="error">An error occurred while loading the Gigya script.</span>
</gigya-js>
```

In this way, my-component will be rendered only after the Gigya script has loaded successfully.

## Componnent Structure
GigyaJs.ts - This is the main file for the gigya-js web component.
GigyaJsLoader.ts - This file defines the XState FSM for the internal state management of the gigya-js component.
Please note that you need to replace "YOUR_API_KEY" and "YOUR_DOMAIN" with your actual Gigya API key and domain.

License
MIT