"use server";

import { Collection, Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGOURI;

if (typeof uri !== "string") {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Instances
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// connect to Database
const connectDB = async (collectionName: string): Promise<Collection> => {
  if (cachedClient && cachedDb) {
    return cachedDb.collection(collectionName);
  }

  // if not cached client
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    tls: true
  });

  // Connect the client to the server
  await client.connect();
  const db: Db = client.db("eBangladesh");

  // Cache the client and db for future requests
  cachedClient = client;
  cachedDb = db;

  return db.collection(collectionName);
};

export default connectDB;
