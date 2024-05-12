import { c, useProp, css } from "atomico";
import "@gigya/web";

// WebComponent

export const MyForm = c(() => {
  return (<form class="gigya-register-form  ">
      <fieldset class="block *:my-2 *:w-full">
        <input type="text" name="firstName" placeholder="First Name" autocomplete="given-name" />
        <input type="text" name="lastName" placeholder="Last Name" autocomplete="family-name" />
        <input type="email" name="email" placeholder="Email" autocomplete="email" />
        <input type="password" name="password" placeholder="Password" autocomplete="new-password" />
      </fieldset>
      <button type="submit"
              class="w-full py-[0.4375rem] *:text-[#626890] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <span class="sr-only lg:not-sr-only lg:ml-2">Register</span>
        <iconify-icon class="ms-1 me-2" data-icon="account-add" icon="line-md:account-add"
                      height="1.5rem"></iconify-icon>
      </button>
    </form>
  );
})


export const MyComponent = c(({apiKey}) => {
  return (<host shadowDom>
    <gigya-js api-key={apiKey}  >
      <gigya-screen>
        <template>
          <MyForm />
          <script src="https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js"></script>
          <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>

        </template>
      </gigya-screen>
    </gigya-js>
  </host>)
},{
  props: {
    apiKey: { type: String, value: "4_qfguwzMx5jiJuBcKrSZe4w" },
  },
  styles: css`
      @tailwind base;
      @tailwind components;
     @tailwind utilities;
     @layer utilities {
    .content-auto {
            content-visibility: auto;
          }
  `
});

// Render JSX content in body
export default (
  <host center>
    <MyComponent />
  </host>
);
