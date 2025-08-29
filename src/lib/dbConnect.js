import { MongoClient, ServerApiVersion } from "mongodb"; 
// Import MongoDB driver and versioning API

// Load MongoDB URI from .env file
// Example: MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/
const uri = process.env.MONGO_URI; 

// Options for MongoClient (set server API version and enable stricter checks)
const options = {
  serverApi: {
    version: ServerApiVersion.v1, // use stable API v1
    strict: true,                 // throw error if using deprecated features
    deprecationErrors: true,      // log errors for deprecated MongoDB commands
  },
};

// Declare variables for MongoClient instance and the promise of connecting
let client;
let clientPromise;

// If no URI is provided, throw an error to avoid silent failure
if (!uri) {
  throw new Error("Please add MONGO_URI to your .env.local");
}

/**
 * In development (next dev), Next.js hot-reloads the code on every change.
 * If we create a new MongoClient every reload, it opens too many connections.
 * To fix that, we reuse the same client by storing it in the global object.
 */
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    // Create a new MongoClient with the URI + options
    client = new MongoClient(uri, options);

    // Connect once and store the promise globally
    global._mongoClientPromise = client.connect();
  }
  // Reuse the global client promise
  clientPromise = global._mongoClientPromise;
} else {
  // In production, just create a new client and connect normally
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
