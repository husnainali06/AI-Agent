// backend/server.js

import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import authRoutes from "./routes/authRoutes.js";


const app = express();


// Connect Database
connectDB();


// CORS Configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-agent-psi-one.vercel.app"
  ],
  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS"
  ],
  allowedHeaders: [
    "Content-Type",
    "Authorization"
  ],
  credentials: true
}));


// Body Parser
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);


// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Agent Backend Running 🚀"
  });
});


export default app;