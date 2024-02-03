import { Db, MongoClient, ServerApiVersion } from "mongodb";
import { DB_CONNECTION_URI } from "$env/static/private";
const uri = DB_CONNECTION_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
let db: Db;
let connected = false;
export const connect = async () => {
  if (!connected) {
    await client.connect();
    db = client.db("pcp");
    await db.command({ ping: 1 });
    connected = true;
  }
};

export const saveEpisode = async (podcast: Podcast) => {
  await db
    .collection("podcasts")
    .findOneAndUpdate({ episodeNumber: podcast.episodeNumber }, { $set: { ...podcast } }, { upsert: true });
};

export const getEpisodeList = async (ascending = false) => {
  return await db
    .collection<Podcast>("podcasts")
    .find()
    .sort(ascending ? -1 : 1)
    .toArray();
};
