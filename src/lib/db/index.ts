import { Db, MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://m8ypie:<password>@pcp.wlsiehi.mongodb.net/?retryWrites=true&w=majority";
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

interface Podcast {
  episodeNumber: number;
  episodeName: string;
  description: string;
  thumbnail: string;
  spotify: string;
  apple: string;
  google: string;
  simpleCast: string;
}
