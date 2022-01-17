import { MongoClient } from "mongodb";
import { environment } from "../../environment/environment";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const uri = environment.mongoDBConnection;

    const client = await MongoClient.connect(uri);

    console.log("client", client)

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log("result", result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
