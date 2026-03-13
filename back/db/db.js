import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

let client;
let db;

export default async function connectDB() {

    if (db) return db;

    try {
        client = new MongoClient(uri);

        await client.connect();

        db = client.db("moneyfrenzy");

        console.log("Connected to MongoDB");

        return db;

    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }

}