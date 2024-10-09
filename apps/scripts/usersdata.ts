import * as fs from "node:fs";
import { env } from "node:process";


const ids =`7873911-045398dd3e954f868745274dadfec5e9
7873911-072031ed36424ea4953ff48139d01008
7873911-0d4aa6f579a84157b9b0d463782c0e9b
7873911-145a6f5ab9a94bc399dd34dea33c8be3
7873911-19dccbc74f464a55b8c4e96c363a57a5
7873911-20a758bf80194235ae16e671d4388dbc
7873911-21a39c6aedb4409fa32f6a82b42b244e
7873911-2cfb4a09ff0c444e861251c07dd1fb9f
7873911-3e3061d8d1d246eaa446816435a622e6
7873911-3e8f32a1ed424e00867c9f38b1fe5f9b
7873911-3fe455c56e5f49cfbbd7d5a5878e75bf
7873911-4514574ba7b145ceaee383b4b1a5228e
7873911-45393ecfabae48cb850ec7dad781fc0d
7873911-516423998e884497b7134e9e3543d2cf
7873911-5171bca83e1d46018c3dc16c099c9c28
7873911-58ebbd7183584804949f6e5ebb1bc568
7873911-67e7b2fd3a1042e099ee4e7a909463e7
7873911-752adefe021a4d398ffd881d85ae3a8b
7873911-7778e90724f049d8bc64394b707f2506
7873911-8496e8edc3f2430ba63a18861ab5daa4
7873911-870d2f8f7c0b418084732dfc80429328
7873911-879d618454924318926389d9ec580812
7873911-87eb6c2e2c92489a82a59edc2afd8781
7873911-89d113e7d6d6497e847b8009e7f09e74
7873911-8e94fdf64e9b4863aa0f659c61c2983d
7873911-8f31f7d94dbb47ae88922ec105f23f17
7873911-91acc5ecc6ef4905844fcb4e3d05efbe
7873911-96c00a449d764470a81c3bb8b25589fd
7873911-971bbc0813f8424289534a5b77a37e8c
7873911-98f8f3d4350144289a5bff0cbcae03ba
7873911-9b9fcef5d18a446ca2af0ac7f8bfddcd
7873911-9d290a9a484246529f15d36aea2646c3
7873911-9de66447e2ce4424ae45f5773287d8cc
7873911-9f6e665c6aa54d0488e0b8cffc0f01d3
7873911-a11b4afd599244a59c78ef35970a66b1
7873911-a41aa0a625d54bf6a7c1da8d1b9ad4e4
7873911-a4202e646fde47278ccb9f85000a8e90
7873911-a656d7af6b6441ffba85e5944940273c
7873911-a79deb74eee947b295fbd7d0d284b490
7873911-b672c9e4e28f473a802a6a66db21f1c4
7873911-b7a8f0c6ee824123ab4ae527dd7a0351
7873911-b9eefd3638db4a138c5608b848b538dc
7873911-bd0a3a079e374ceea7cf625c6adf5e4c
7873911-c144e22320a7431badb072f669bd8e94
7873911-c232af2eb39c45da92f6048a627c5e17
7873911-c47231b222c944ffa16322170324b896
7873911-c5441c238c7e4c1fbd0cc27835849bea
7873911-c853b6f3f02b40c6a1964276adc09b35
7873911-cd273031397246e8bdafc71df5ae06a6
7873911-ceb809db34024e8a87fda0acf679faec
7873911-d727334962e14c75b358b0aea82b839e
7873911-e021e1358c014b69bbe56e320369522c
7873911-e780842a1bdc4111975fb814925a868b
7873911-ed97cba542784724bde61b8493f13e1b
7873911-f24fb02ca9944c6098355a747e29a6bb
7873911-f30a208616a843a9a22e4a5e001434e8
7873911-fee8a83f1bbb480295d15439d41a5875
`.split('\n').map(x => x.trim().split('-')).map(x => {
    return {
        site: x[0],
        uuid: x[1]
    }
});

main().then(() => console.log('done'))

async function debugData() {
  fs.writeFileSync('users.jsonl', '')
  for (let i = 0; i < ids.length; i++) {
    const user = ids[i];
    const data = await userApi(user)
    fs.appendFileSync('users.jsonl', JSON.stringify(data, null, 0) + '\n')
  }
}

async function main() {
  // await debugData();
  await auditLog();
}




// let env = import.meta.env


async function userApi({uuid, site}) {

   const response = await fetch(`https://accounts.${env.GIGYA_DOMAIN}/accounts.lite.dev.getRawAccountData`, {
    body: new URLSearchParams({
      identifier: uuid,
      identifierType: 'uuid',
      apiKey: env.GIGYA_API_KEY,
      userKey: env.GIGYA_APP_KEY,
      secret: env.GIGYA_APP_SECRET,
      httpStatusCodes: "true",
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors'
  })
  const account = await fetch(`https://accounts.${env.GIGYA_DOMAIN}/accounts.lite.dev.getAccount`, {
    body: new URLSearchParams({
      uuid: uuid,
      apiKey: env.GIGYA_API_KEY,
      userKey: env.GIGYA_APP_KEY,
      secret: env.GIGYA_APP_SECRET,
      httpStatusCodes: "true",
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors'
  })


  const record= await response.json()
  const accountRecord = await account.json()
  return {
    ...record,
    uuid,
    site,
    id: `${site}-${uuid}`,
    uid: accountRecord.UID,
    _source: accountRecord,
  }
}

async function auditLog(){
  const uids=[10381681,10461041,10696757,10877916,11013137,11046283,11144166,11251158,11628516,11824484,11940393,12240157,12527201,12549041,13133143,13282558,13308381,13377283,13445603,13587564,13989815,14063517,14110740,14112471,14250207,14312633,14550669,14578230,14868809,14895715,15294222,15308300,15459808,15799395,15813808,15900560,15992777,16166855,16171625,16238598,16287881,16564664,16583420,16612916,16639841,16693666,16697999,16746485,16766796,16781493,16790438,16794384,16816196,16817821,9600864,9656243,9973679].map(x => `"${x}"`).join(',')

  const response = await fetch(`https://accounts.${env.GIGYA_DOMAIN}/audit.search`, {
    body: new URLSearchParams({
      apiKey: env.GIGYA_API_KEY,
      userKey: env.GIGYA_APP_KEY,
      secret: env.GIGYA_APP_SECRET,
      httpStatusCodes: "true",
      includeGigyaUserNames: "false",
      query: `select * from audit where uid in (${uids}) limit 5000`
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors'
  })

  const records = await response.json()
  fs.writeFileSync('audit.json', JSON.stringify({results:records.results}, null, 0))

}



