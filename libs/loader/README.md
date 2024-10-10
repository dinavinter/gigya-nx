# @gigya/loader

This package contains the Gigya Web SDK loader.
 

## Usage

Use promise chaining to load the Gigya SDK and execute code after it is loaded.

```javascript
import { useGigya } from '@gigya/loader';

async function initializeGigya() {
    const gigya = await useGigya();
    console.log('Gigya is ready:', gigya);
}

```


Call the useGigya function with a callback function that receives the Gigya object as a parameter. The callback function is executed once the Gigya SDK is loaded and ready to use.

```javascript
import { useGigya } from '@gigya/loader';

useGigya((gigya) => {
  // Your code using the gigya object
  console.log('Gigya is ready:', gigya);
})
```
 

## Installation

```sh
npm install @gigya/loader
```

