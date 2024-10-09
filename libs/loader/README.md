# @gigya/loader

This package contains the Gigya Web SDK loader.


```sh
npm install @gigya/loader
```

## Usage

You can use the useGigya function to load the Gigya SDK and execute a callback once the SDK is ready:

```javascript
import { loader } from '@gigya/loader';

useGigya((gigya) => {
  // Your code using the gigya object
  console.log('Gigya is ready:', gigya);
}).catch((error) => {
  console.error('Failed to load Gigya:', error);
});
```

 
 

