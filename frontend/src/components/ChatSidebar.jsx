import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FaPlus,
  FaTrash,
  FaBars,
  FaTimes,
  FaRobot,
} from "react-icons/fa";


export default function ChatSidebar({
  currentChat,
  setCurrentChat,
  setMessages,
  loadChat,
  refreshChats,
}) {

  const [chats, setChats] = useState([]);
  const [open, setOpen] = useState(false);


  const navigate = useNavigate();


  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));


  // ==========================
  // Logout
  // ==========================
const logout = () => {
  // Remove Login Data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Success Message
  toast.success("Logged out successfully");

  // Close Mobile Menu (agar ho)
  setOpen(false);

  // Redirect Home
  navigate("/", { replace: true });
};

  // ==========================
  // Load Chat History
  // ==========================

  const loadChats = async () => {

    try {

      const res = await axios.get("/chat/history", {

        headers: {
          Authorization: token,
        },

      });


      setChats(res.data.chats);


    } catch (err) {

      console.log(err);

    }

  };



 useEffect(() => {

  loadChats();

}, [refreshChats]);





// ==========================
// New Chat
// ==========================

const createChat = async () => {

  try {

    const res = await axios.post(
      "/chat/new",
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );


    console.log("Create Chat Response:", res.data);


    const chatId = res.data.chat._id;


    setCurrentChat(chatId);


    setMessages([]);


    loadChats();



    if (loadChat) {

      loadChat(chatId);

    }



    if (window.innerWidth < 768) {

      setOpen(false);

    }


  } catch (err) {

    console.log(err.response?.data || err);

  }

};





// ==========================
// Open Chat
// ==========================

const openChat = async (id) => {

  try {

    const res = await axios.get(`/chat/${id}`, {

      headers:{
        Authorization:token,
      },

    });



    setCurrentChat(id);



    const formatted = res.data.chat.messages.map((msg)=>({

      role:msg.role,
      text:msg.content,

    }));


    setMessages(formatted);



    if(window.innerWidth < 768){

      setOpen(false);

    }


  }catch(err){

    console.log(err);

  }

};






// ==========================
// Delete Chat
// ==========================

const deleteChat = async(id)=>{

try{


await axios.delete(`/chat/${id}`,{

headers:{
Authorization:token,
},

});



loadChats();



if(currentChat === id){

setCurrentChat(null);

setMessages([]);

}



}catch(err){

console.log(err);

}

};





return (

<>


{/* Mobile Button */}

<button

onClick={()=>setOpen(true)}

className="md:hidden fixed top-4 left-4 z-50 bg-[#2b2b2b] p-3 rounded-lg"

>

<FaBars />

</button>





{open && (

<div

onClick={()=>setOpen(false)}

className="fixed inset-0 bg-black/50 z-40 md:hidden"

/>

)}






{/* Sidebar */}

<div

className={`

fixed md:static

top-0

left-0

z-50

h-screen

w-72

bg-[#171717]

border-r

border-gray-800

transition-all

duration-300


${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}

`}

>




<div className="flex justify-between items-center p-5 border-b border-gray-800">


<div className="flex items-center gap-2">


<FaRobot className="text-green-500 text-xl"/>


<h2 className="font-bold text-lg text-white">

AI Assistant

</h2>


</div>



<button

onClick={()=>setOpen(false)}

className="md:hidden"

>

<FaTimes />

</button>



</div>





<div className="p-4">


<button

onClick={createChat}

className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 rounded-xl py-3 font-semibold transition"

>

<FaPlus/>

New Chat


</button>


</div>






<div className="px-3 overflow-y-auto h-[calc(100vh-180px)]">


<p className="text-xs text-gray-500 uppercase mb-3">

Previous Chats

</p>



{chats.length===0 && (

<p className="text-gray-500 text-sm">

No chats yet

</p>

)}




{chats.map((chat)=>(


<div

key={chat._id}

className={`

flex justify-between items-center mb-2 rounded-lg cursor-pointer transition

${

currentChat===chat._id

?

"bg-green-700"

:

"bg-[#2b2b2b] hover:bg-[#3a3a3a]"

}

`}

>



<div

onClick={()=>openChat(chat._id)}

className="flex-1 px-3 py-3 truncate text-sm"

>

{chat.title}

</div>



<button

onClick={()=>deleteChat(chat._id)}

className="px-3 text-red-400 hover:text-red-500"

>

<FaTrash/>

</button>


</div>


))}


</div>





{/* Footer */}

<div className="absolute bottom-0 left-0 w-full border-t border-gray-800 p-4 bg-[#171717]">


<div className="flex items-center gap-3">


<div className="
w-10
h-10
rounded-full
bg-green-600
flex
items-center
justify-center
font-bold
text-white
">

{
user?.name 
?
user.name.charAt(0).toUpperCase()
:
"U"
}

</div>



<div>

<h3 className="font-semibold text-white">

{
user?.name || "User"
}

</h3>


<p className="text-xs text-gray-400">

AI User

</p>


</div>



</div>




{/* Logout Button */}

<button

onClick={logout}

className="
mt-4
w-full
py-2.5
rounded-lg
bg-red-500/10
border
border-red-500/30
text-red-400
hover:bg-red-500/20
transition
font-semibold
"

>

Logout

</button>



</div>





</div>


</>

);


}