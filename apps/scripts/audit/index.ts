import fs from "node:fs";
import {Parser as json2csv} from "json2csv";
function group(records: {uid:string, [key:string]:any} ) {
  return records.reduce((acc, x) => {
    return {
      ...acc,
      [x.uid]: [...(acc[x.uid] || []), x].sort((a, b) => a['@timestamp'] - b['@timestamp'])
    }
  }, {});
}

function getKeys(x) {
  if (!x) return [];
  const keys =Object.entries(x).filter(([key, value]) => typeof value !== 'object').map(([key, value]) => key);
  return keys
    .concat(getKeys(x["params"])?.map(x => `params.${x}`) || [])
    .concat(getKeys(x["httpReq"])?.map(x => `httpReq.${x}`) || [])
    .concat(getKeys(x["userAgent"])?.map(x => `userAgent.${x}`) || [])
    .filter(onlyUnique);
}
function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

function csv(records) {
  const keys =records.flatMap(getKeys).filter(onlyUnique).sort();
  fs.writeFileSync('audit.csv',keys.join(',') + '\n');
  for (const r of records.results as any[]) {
    const {params,httpReq,userAgent, ...rest} = r as any;
    const record = {
      ...rest,
      ...(userAgent || {}),
      country: r['httpReq']?.['country'] || '',
      ...(params || {}),
      ...(httpReq || {})
    }


    fs.appendFileSync('audit.csv', keys.map(key=>record[key] || '').join(',') + '\n');
  }


  console.log('done csv');
}

function csvtojson(records) {
  const parser = new json2csv({fields: records.results.flatMap(getKeys).filter(onlyUnique).sort()});
  for (const r of records.results as any[]) {
    const {params, httpReq, userAgent, ...rest} = r as any;
    const record = {
      ...rest,
      country: r['httpReq']?.['country'] || '',
      ...(params || {}),
      ...(httpReq || {}),
      ...(userAgent || {})
    }
    fs.appendFileSync('audit.csv', parser.parse(record) + '\n');
  }
}

function csvRecords(records: any) {
  //@timestamp,SDK,XffFirstIp,addLoginEmails,apiKey,apikey,authMode,authType,callID,country,endpoint,errCode,errDetails,errMessage,format,httpStatusCodes,include,includeUserInfo,ip,isActive,lang,loginID,login_token,newPassword,nonce,pageURL,password,passwordResetToken,profile,removeLoginEmails,riskScore,sdk,sdkBuild,secret,securityOverride,sendEmail,serverIP,sessionExpiration,sig,targetEnv,timestamp,uid,userAgent,userKey,userKeyDetails,username,uuid

 const fields=
   [
     'uid',
     'user-identity',
     '@timestamp',
     'XffFirstIp',
     'apikey',
     'authType',
     'callID',
     'endpoint',
     'errCode',
     'errDetails',
     'errMessage',
     'httpReq.SDK',
     'httpReq.country',
     'ip',
     'params._ignored',
     'params.addLoginEmails',
     'params.apiKey',
     'params.authMode',
     'params.format',
     'params.httpStatusCodes',
     'params.include',
     'params.includeUserInfo',
     'params.isActive',
     'params.lang',
     'params.loginID',
     'params.login_token',
     'params.newPassword',
     'params.nonce',
     'params.pageURL',
     'params.password',
     'params.passwordResetToken',
     'params.profile',
     'params.removeLoginEmails',
     'params.sdk',
     'params.sdkBuild',
     'params.secret',
     'params.securityOverride',
     'params.sendEmail',
     'params.sessionExpiration',
     'params.sig',
     'params.targetEnv',
     'params.timestamp',
     'params.uid',
     'params.userKey',
     'params.username',
     'params.uuid',
     'riskScore',
     'serverIP',
     'userAgent.browser',
     'userAgent.language',
     'userAgent.os',
     'userAgent.platform',
     'userAgent.raw',
     'userAgent.version',
     'userKey'
   ]
 ;

  fs.writeFileSync('audit.csv',fields.join(',') + '\n');
  for (const r of records as any[]) {



    const {params,httpReq,userAgent, ...rest} = r as any;
    const userscsv = fs.readFileSync('users.csv', 'utf-8').split('\n').slice(1).map(x => x.split(',')).map(x => ({id: x[0], uid: x[1]})).reduce((acc, x) => ({...acc, [x.uid]: x}), {});
    const uuid = userscsv[r['uid']]?.id || '';
    const record = {
      ['user-identity']:uuid,
      ...rest,
       ...fields.filter(key=>key.startsWith('params'))
         .reduce((acc,key)=>({...acc,[key]:params[key.replace('params.','')]}),{}),
        ...fields.filter(key=>key.startsWith('httpReq'))
          .reduce((acc,key)=>({...acc,[key]:httpReq[key.replace("httpReq.", '')]}),{}),

        ...fields.filter(key=>key.startsWith('userAgent'.replace('userAgent.','')))
          .reduce((acc,key)=>({...acc,[key]:userAgent[key]}),{}),
    }


    fs.appendFileSync('audit.csv', fields.map(key=>`"${record[key]}"` || '""').join(',') + '\n');
  }

}

async function groupByUser() {
  const records = JSON.parse(fs.readFileSync('audit.json', 'utf-8')).results;
  //csv(records.results);
 csvRecords(records);
  fs.writeFileSync('audit-group.json', JSON.stringify(group(records.results)));
  console.log('done group');



}

async function main() {

  csvRecords(JSON.parse(fs.readFileSync('audit.json', 'utf-8')).results);
  // console.log(JSON.parse(fs.readFileSync('audit.json', 'utf-8')).results.flatMap(getKeys).filter(onlyUnique).sort());
  // await groupByUser();
}

main().catch(console.error).finally(() => console.log('done'));
