import express from "express";
import auth from "../middleware/authMiddleware.js";

import {
  createChat,
  sendMessage,
  getChatHistory,
  getSingleChat,
  deleteChat,
} from "../controllers/chatController.js";

const router = express.Router();

// Create New Chat
router.post("/new", auth, createChat);

// Send Message
router.post("/:chatId/message", auth, sendMessage);

// Sidebar History
router.get("/history", auth, getChatHistory);

// Open Chat
router.get("/:chatId", auth, getSingleChat);

// Delete Chat
router.delete("/:chatId", auth, deleteChat);

export default router;