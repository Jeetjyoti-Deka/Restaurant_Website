import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";
import cors from "cors";
import connectDB from "./db/connectDb.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
