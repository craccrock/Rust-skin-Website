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
    url: 'redis://default:wDxWW5ZTQ77zqkRGrBI9JN1jOi5GoCLu@redis-10425.c251.east-us-mz.azure.cloud.redislabs.com:10425',
    legacyMode: true
  });

  await client.connect();
  
  const apiPoint = `https://api.steamapis.com/market/items/252490?api_key=M8JyL4CRLBJ5IXLS7RyLHwmwPno`

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



async function bababoey() {
let apiLooped = await axios.get(apiPoint)
let finalResults = await apiLooped.data.data


for (let i = 0; i <= 3157; i++) {
  await client.json.set(`noderedis:skins:${i}`, "$", finalResults[i]);
}
}


// bababoey()

async function getData(){

  
  const searchedData = await client.ft.search('idx:skins', '*', { LIMIT: { from: 0, size: 10000 }});

  return { ...searchedData };
}

let retrievedData = await getData()
  app.get("/route2", (request, response) => {
        
    response.json(retrievedData);
});


})();

