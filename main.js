import axios from 'axios'
import express from 'express'
import { createClient, SchemaFieldTypes} from 'redis';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));

app.listen(port, () => console.log(`running on http://localhost:${port}`)
);

(async () => {
  const client = createClient({
    url: 'redis://default:k67uOK5deUJi82Vzr3QVp2zm4X9YsZzm@redis-13410.c10.us-east-1-3.ec2.cloud.redislabs.com:13410',
    legacyMode: true
  });

  await client.connect();
  
  const apiPoint = `https://api.steamapis.com/market/items/252490?api_key=zAhYomtaosX3P6WpnQZv5STbJFE`

  try {
    await client.ft.create('idx:skins', {
      '$.market_name': {
        type: SchemaFieldTypes.TEXT,
        AS: 'market_name'
      },
      '$.market_hash_name': {
        type: SchemaFieldTypes.TEXT,
        SORTABLE: 'UNF'
      },
      '$.image': {
        type: SchemaFieldTypes.TEXT,
        AS: 'image'
      },
    }, {
      ON: 'JSON',
      PREFIX: 'noderedis:skins'
    });
  } catch (e) {
    if (e.message === 'Index already exists') {
      console.log('Index exists already, skipped creation.');
    } else {
      // Something went wrong, perhaps RediSearch isn't installed...
      console.error(e);
      process.exit(1);
    }
  }

  

  // console.log(
  //   // https://oss.redis.com/redisearch/Commands/#ftsearch
  //   JSON.stringify(
  //     await client.ft.search('idx:skins', '@market_name: zebra'), 
  //     null, 
  //     2
  //   )
  // );



async function newData() {
let apiLooped = await axios.get(apiPoint)
let finalResults = await apiLooped.data.data
console.log("new data fetched ")


for (let i = 0; i <= 3379; i++) {
  await client.json.set(`noderedis:skins:${i}`, "$", finalResults[i]);
}
}


setInterval(newData, 1000 * 60 * 60 * 2);


async function getData(){

  
  const searchedData = await client.ft.search('idx:skins', '*', { LIMIT: { from: 0, size: 10000 }});

  return { ...searchedData };
}

let retrievedData = await getData()
  app.get("/route2", (request, response) => {
        
    response.json(retrievedData);
});


})();

