import { Db, MongoClient, ServerApiVersion } from "mongodb";
import type { Podcast } from "../../routes/episodes/types";
const uri = "mongodb+srv://m8ypie:SY6yWvD6KSpd14YH@pcp.wlsiehi.mongodb.net/?retryWrites=true&w=majority";
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
