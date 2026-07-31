import Groq from "groq-sdk";
import Chat from "../models/chat.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


// =========================
// CREATE NEW CHAT
// POST /api/chat/new
// =========================

export const createChat = async (req, res) => {
  try {

    const chat = await Chat.create({
      userId: req.user.id,
      title: "New Chat",
      messages: [],
    });

    res.status(201).json({
      success: true,
      chat,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// =========================
// SEND MESSAGE
// POST /api/chat/:chatId/message
// =========================

export const sendMessage = async (req, res) => {

  try {

    const { chatId } = req.params;
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }


    const chat = await Chat.findOne({
      _id: chatId,
      userId: req.user.id,
    });


    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }


    // Add user message

    chat.messages.push({
      role: "user",
      content: message,
    });


    // Auto Title

    if (
      chat.title === "New Chat" &&
      chat.messages.length === 1
    ) {

      chat.title =
        message.length > 40
          ? message.substring(0, 40) + "..."
          : message;

    }


    // Last 20 Messages

    const history = chat.messages
      .slice(-20)
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));


    // System Prompt

    history.unshift({
      role: "system",
      content: `
You are an AI Assistant.

Rules:

- Keep answers concise.
- Use Markdown formatting.
- Use headings.
- Use bullet points where appropriate.
- If possible, keep the answer under 200 words.
- Write clean, professional responses.
`,
    });


    // GROQ

    const completion =
      await groq.chat.completions.create({

        model: "llama-3.1-8b-instant",

        messages: history,

      });


    const aiReply =
      completion.choices[0].message.content;


    // Save AI Message

    chat.messages.push({

      role: "assistant",

      content: aiReply,

    });


    await chat.save();


    res.status(200).json({

      success: true,

      chatId: chat._id,

      title: chat.title,

      aiResponse: aiReply,

      messages: chat.messages,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// =========================
// GET ALL CHAT HISTORY
// GET /api/chat/history
// =========================

export const getChatHistory = async (req, res) => {
  try {

    const chats = await Chat.find({
      userId: req.user.id,
    })
      .select("_id title updatedAt")
      .sort({
        updatedAt: -1,
      });

    res.status(200).json({
      success: true,
      chats,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// =========================
// GET SINGLE CHAT
// GET /api/chat/:chatId
// =========================

export const getSingleChat = async (req, res) => {

  try {

    const { chatId } = req.params;

    const chat = await Chat.findOne({
      _id: chatId,
      userId: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }

    res.status(200).json({
      success: true,
      chat,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// =========================
// DELETE CHAT
// DELETE /api/chat/:chatId
// =========================

export const deleteChat = async (req, res) => {

  try {

    const { chatId } = req.params;

    const chat = await Chat.findOneAndDelete({
      _id: chatId,
      userId: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Chat deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};