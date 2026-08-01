// backend/server.js
import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-agent-psi-one.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Agent Backend Running 🚀"
  });
});

export default app;