import * as fs from "node:fs";
type key =  `um_${string}/accounts/${string}U${string}`;
export type UserRecord ={
  [key: key]: {
    _history: {
      [key: string]: {
        'content:document': {
          time: number,
          lastLoginLocation: {
            country: string,
          },
          lastUpdated: Date,
          lastLoginTimestamp: number,
          lastLogin: Date,
          registeredTimestamp: number,
          registered: Date,
          verified: Date,
          lockedUntil: Date,
          identities: any[],
          profile: any
        }
      }
    },
    _source: {
      lastLoginLocation: {
        country: string,
      },
      lastUpdated: Date,
      lastLoginTimestamp: number,
      lastLogin: Date,
      registeredTimestamp: number,
      registered: Date,
      verified: Date,
      created: Date,
      profile: {
        email: {
          encrypted: string,
        },
      },
      identities: any[],
      lockedUntil: Date,
    }
  },
  _source: {
    UID: string,

    lastLoginLocation: {
      country: string,
    },
    lastUpdated: Date,
    lastLoginTimestamp: number,
    lastLogin: Date,
    registeredTimestamp: number,
    registered: Date,
    verified: Date,
    created: Date,
    profile: {
      email: string,
    },
    identities: any[],
    lockedUntil: Date,
  }
}

async function  main () {
  const data = fs.readFileSync('users.jsonl', 'utf-8');
  const lines = data.split('\n');
  const records = lines.filter(x => x.trim() !== '').map(x => JSON.parse(x) as UserRecord);
  const users = records.map(x => {
    const [key, user] = Object.entries(x).find(([key, value]) => key.startsWith('um_'));
    if (x._source === undefined) {
      return {
        error: 'no data',
        user
      }
    }
    console.log(`${key.split("um_")[1].split("/")[0]}-${key.split("accounts/")[1].split("U")[0]}`);
    return {
      id: `${key.split("um_")[1].split("/")[0]}-${key.split("accounts/")[1].split("U")[0]}`,
      email: x._source.profile?.email,
      uid: x._source.UID,
      registered: x._source.registered,
      verified: x._source.verified,
      lastLogin: x._source.lastLogin,
      country: x._source.lastLoginLocation?.country,
      created: x._source.created,
      lockedUntil: x._source.lockedUntil,
      raw: x._source,
      history:  Object.values("_history" in user && user._history || {}).map(x => ({
        key: Object.keys(x).join(''),
        ...Object.values(x)[0]['content:document']
      })).map(x => {
        return {
          key:x.key,
          timestamp: Number.parseInt(x.key.split(" ")[0]),
          time: Date.parse(x.key.split(" ")[1].replace('[', '').replace(']', '')),
          lastLogin: x.lastLogin,
          updated: x.lastUpdated,
          country: x.lastLoginLocation?.country,
          verified: x.verified,
          lockedUntil: x.lockedUntil,
          raw: x

        }
      }, [])
        .sort((a,b) => a.timestamp - b.timestamp)
        .reduce((prevs, curr) => {
          const prev = prevs[0] || {};
         return [...prevs, {
            ...curr,
             time: new Date(curr.timestamp),
            // date: new Date(curr.timestamp * 1000).getDate(),
            date:new Date(curr.timestamp ).toDateString()  ,
           datetime: new Date(curr.timestamp).toUTCString(),
            login: curr.lastLogin > prev.lastLogin,
            verify: curr.verified > prev.verified,
            locked: curr.lockedUntil > prev.lockedUntil,
            lastLogin: curr.lastLogin || prev.lastLogin,
            updated: curr.updated || prev.updated,
            country: curr.country || prev.country,
            verified: curr.verified || prev.verified,
            lockedUntil: curr.lockedUntil || prev.lockedUntil
          }
      ]},[])

    }



  });
  fs.writeFileSync('users-history.csv', 'id,timestamp,date,country,login,verify,lock,lockedUntil,login,verify,lock\n');
  fs.writeFileSync('users.csv', 'id,uid,email,registered,verified,lastLogin,country,lockedUntil\n');
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.error) {
      console.log('error' + user);
      continue;
    }

    fs.appendFileSync('users.csv', `${user.id},${user.uid},${user.email},${user.registered},${user.verified},${user.lastLogin},${user.country},${user.lockedUntil}'\n`);

    for (let j = 0; j < user.history.length; j++) {
      const history = user.history[j];
      fs.appendFileSync('users-history.csv', `${user.id},${history.timestamp},"${history.datetime}",${history.country},${history.login},${history.verify},${history.locked},${history.lockedUntil}\n`);

    }

  }
}

main().then(() => console.log('done'))
