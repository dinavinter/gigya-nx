import { gigyaSdk } from './lib/gigya-sdk';
import { accounts } from './lib/accounts';
export * from './lib/gigya-sdk';
// import  * as gigyaJs from './latest/gigya';
import account_api_list from './lib/accounts-api-list';
import { apiList } from './lib/apiList';

export const apis = apiList;
export const gigya = {
  accounts: accounts,
};

export async function gigyaSdkAsync() {
  return await import('./latest/gigya').then((gigyaJs) => {
    return gigyaJs.default;
  });
}
