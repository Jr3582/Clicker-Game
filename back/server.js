import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let db;

async function startServer() {

    db = await connectDB();

    app.post("/sign_up", async (req, res) => {

        const { username, email, password } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const result = await db.collection("users").insertOne({
            username,
            email,
            passwordHash,
            createdAt: new Date()
        });

        res.json({
            message: "User created",
            id: result.insertedId
        });

    });

    app.get("/user/:email", async (req, res) => {
        const { email } = req.params;

        const user = await db.collection("users").findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
        
    })

    app.listen(3000, () => console.log("Server running on port 3000"));
}

startServer();