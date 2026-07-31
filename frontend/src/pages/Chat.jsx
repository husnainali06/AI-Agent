import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import { useLocation } from "react-router-dom";

import ChatSidebar from "../components/ChatSidebar";
import ChatMessage from "../components/ChatMessage";

import {
  FiMenu,
  FiSend,
  FiPaperclip,
  FiMic,
  FiCpu,
} from "react-icons/fi";

export default function Chat() {


  const location = useLocation();


  const token = localStorage.getItem("token");



  const [messages, setMessages] = useState([]);


  const [input, setInput] = useState("");



  const [loading, setLoading] = useState(false);



  const [currentChat, setCurrentChat] = useState(null);

  const [refreshChats, setRefreshChats] = useState(false);



  const messagesEndRef = useRef(null);




  // ==========================
  // Receive Hero Message
  // ==========================

  useEffect(() => {


    const prompt = location.state?.prompt;



    if (prompt) {


      // Direct Send Message

      setTimeout(() => {

        sendMessage(prompt);

      }, 500);



      // Remove state after use

      window.history.replaceState(
        {},
        document.title
      );


    }



  }, []);





  // ==========================
  // Auto Scroll
  // ==========================

  useEffect(() => {


    messagesEndRef.current?.scrollIntoView({

      behavior: "smooth",

    });


  }, [messages, loading]);




  // ==========================
  // Load Selected Chat
  // ==========================

  const loadChat = async (chatId) => {

    try {

      const res = await axios.get(

        `/chat/${chatId}`,

        {
          headers: {
            Authorization: token,
          },
        }

      );

      setCurrentChat(chatId);

      const oldMessages = [];

      res.data.chat.messages.forEach((msg) => {

        oldMessages.push({
          role: msg.role,
          text: msg.content,
        });

      });

      setMessages(oldMessages);

    } catch (err) {

      console.log(err);

    }

  };

  const sendPendingMessage = async (prompt) => {
  if (!currentChat) return;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text: prompt,
    },
  ]);

  setLoading(true);

  try {
    const res = await axios.post(
      `/chat/${currentChat}/message`,
      {
        message: prompt,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: res.data.aiResponse,
      },
    ]);
  } catch (err) {
    console.log(err);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "❌ Something went wrong.",
      },
    ]);
  }

  setLoading(false);
};

// ==========================
// Send Message
// ==========================

const sendMessage = async (prompt = null) => {


  const userMessage = prompt || input.trim();


  if (!userMessage) return;



  let chatId = currentChat;



  try {



    // ==========================
    // Auto Create Chat
    // ==========================

    if (!chatId) {


      const newChat = await axios.post(

        "/chat/new",

        {},

        {
          headers: {
            Authorization: token,
          },
        }

      );


      chatId = newChat.data.chat._id;


      setCurrentChat(chatId);


      // ⭐ Sidebar refresh
      setRefreshChats((prev) => !prev);


    }






    // ==========================
    // Show User Message
    // ==========================


    setMessages((prev) => [

      ...prev,

      {
        role: "user",
        text: userMessage,
      },

    ]);




    setInput("");

    setLoading(true);







    // ==========================
    // Send Message Backend
    // ==========================


    const res = await axios.post(

      `/chat/${chatId}/message`,

      {
        message: userMessage,
      },

      {
        headers: {
          Authorization: token,
        },
      }

    );







    // ==========================
    // Show AI Response
    // ==========================


    setMessages((prev) => [

      ...prev,

      {
        role: "assistant",
        text: res.data.aiResponse,
      },

    ]);




    // ⭐ Refresh sidebar after message save
    setRefreshChats((prev) => !prev);




  } catch (err) {


    console.log(err);



    setMessages((prev) => [

      ...prev,


      {
        role: "assistant",
        text: "❌ Something went wrong.",
      },


    ]);


  }




  setLoading(false);


};
  // ==========================
// Auto Send Pending Prompt
// ==========================

useEffect(() => {
  const pendingPrompt = localStorage.getItem("pendingPrompt");

  if (currentChat && pendingPrompt) {
    setInput(pendingPrompt);

    localStorage.removeItem("pendingPrompt");

    setTimeout(() => {
      sendPendingMessage(pendingPrompt);
    }, 300);
  }
}, [currentChat]);


// ==========================
// Pending Prompt
// ==========================

useEffect(() => {
  const pendingPrompt = localStorage.getItem("pendingPrompt");

  if (currentChat && pendingPrompt) {
    setInput(pendingPrompt);

    localStorage.removeItem("pendingPrompt");

    setTimeout(() => {
      sendPendingMessage(pendingPrompt);
    }, 300);
  }
}, [currentChat]);



  return (

<div className="h-screen bg-[#0A0A0A] text-white flex overflow-hidden">

  {/* Sidebar */}

  <ChatSidebar
  currentChat={currentChat}
  setCurrentChat={setCurrentChat}
  setMessages={setMessages}
  loadChat={loadChat}
  refreshChats={refreshChats}
/>
  



  {/* Main */}

  <div className="flex-1 flex flex-col">

    {/* Header */}

    <header className="sticky top-0 z-20 h-16 border-b border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-xl">

      <div className="h-full px-6 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <button

            onClick={() => setSidebarOpen(!sidebarOpen)}

            className="lg:hidden"

          >

            <FiMenu size={22} />

          </button>

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

            <FiCpu size={20} />

          </div>

          <div>

            <h1 className="text-xl font-bold">

              AI Assistant

            </h1>

            <p className="text-xs text-gray-400">

              Powered by Groq

            </p>

          </div>

        </div>

        <div className="hidden md:flex items-center gap-3">

          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-sm text-green-400">

            Online

          </span>

        </div>

      </div>

    </header>

    {/* ===========================
    CHAT AREA
=========================== */}

<main className="flex-1 overflow-y-auto">

  {messages.length === 0 ? (

    <div className="h-full flex items-center justify-center">

      <div className="max-w-4xl w-full px-8">

        <div className="text-center">

          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto shadow-2xl">

            <FiCpu size={45} />

          </div>

          <h1 className="text-5xl font-black mt-8">

            Welcome Back 👋

          </h1>

          <p className="text-gray-400 mt-4 text-lg">

            Ask anything about programming, AI, business or your career.

          </p>

        </div>

        {/* Suggestions */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">

          <button
            onClick={() => setInput("Create a React Portfolio")}
            className="rounded-3xl border border-gray-800 bg-[#151515] p-6 text-left hover:border-blue-500 transition"
          >
            <h2 className="font-bold text-lg">
              💻 React Portfolio
            </h2>

            <p className="text-gray-400 mt-2">
              Create a modern portfolio website.
            </p>

          </button>

          <button
            onClick={() => setInput("Explain Artificial Intelligence")}
            className="rounded-3xl border border-gray-800 bg-[#151515] p-6 text-left hover:border-purple-500 transition"
          >
            <h2 className="font-bold text-lg">
              🤖 Explain AI
            </h2>

            <p className="text-gray-400 mt-2">
              Learn Artificial Intelligence simply.
            </p>

          </button>

        </div>

      </div>

    </div>

  ) : (

    <div className="max-w-4xl mx-auto px-8 py-10">

      {messages.map((msg, index) => (

        <ChatMessage

          key={index}

          message={msg}

        />

      ))}

      {loading && (

        <div className="flex items-center gap-3 py-8">

          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>

          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>

          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>

          <span className="text-gray-400">

            AI is thinking...

          </span>

        </div>

      )}

      <div ref={messagesEndRef}></div>

    </div>

  )}

</main>

{/* ===========================
INPUT
=========================== */}

<div className="border-t border-gray-800 bg-[#0A0A0A] p-6">

  <div className="max-w-4xl mx-auto">

    <div className="rounded-3xl bg-[#181818] border border-gray-800 flex items-end">

      <textarea

        rows={1}

        value={input}

        onChange={(e)=>setInput(e.target.value)}

        placeholder="Message AI Assistant..."

        onKeyDown={(e)=>{

          if(e.key==="Enter" && !e.shiftKey){

            e.preventDefault();

            sendMessage();

          }

        }}

        className="

        flex-1

        bg-transparent

        resize-none

        outline-none

        px-6

        py-5

        max-h-52

        "

      />

      <div className="flex items-center gap-3 px-4 pb-4">

        <button className="text-gray-400 hover:text-white">

          <FiPaperclip size={20}/>

        </button>

        <button className="text-gray-400 hover:text-white">

          <FiMic size={20}/>

        </button>

        <button

          onClick={sendMessage}

          disabled={loading}

          className="

          w-12

          h-12

          rounded-2xl

          bg-gradient-to-r

          from-blue-600

          to-purple-600

          hover:scale-105

          transition

          flex

          items-center

          justify-center

          "

        >

          <FiSend size={20}/>

        </button>

      </div>

    </div>

  </div>

</div>

</div>

</div>

);

}