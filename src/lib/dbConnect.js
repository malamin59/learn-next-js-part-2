import { MongoClient, ServerApiVersion } from "mongodb";
// Import MongoDB driver and versioning API

export const collectionName = {
  TEST_USER: "users-collection",
  MY_COMMENT: "my-comment"
};

const uri = process.env.MONGO_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1, // use stable API v1
    strict: true, // throw error if using deprecated features
    deprecationErrors: true, // log errors for deprecated MongoDB commands
  },
};

let client;
let clientPromise;
if (!uri) {
  throw new Error("Please add MONGO_URI to your .env.local");
}


if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);

    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

/**
 * dbConnect: Reusable function to get a collection
 * @param {string} collectionName - the name of the collection (example: "posts")
 * @returns {Collection} - MongoDB collection object you can query
 */
export async function dbConnect(collectionName) {
  // Wait until MongoDB client is connected
  const client = await clientPromise;

  // Select the database (from .env DB_NAME) and collection
  return client.db(process.env.DB_NAME).collection(collectionName);
}
