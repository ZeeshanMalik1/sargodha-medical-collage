import express from "express";
import mongoose from "mongoose";
import User from "../models/User.js"; 
import cors from "cors"

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/sihs";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
    origin: "*"
}))
app.get("/api/users", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.listen(port, () =>
  console.log(` Server running on http://localhost:${port}`)
);
