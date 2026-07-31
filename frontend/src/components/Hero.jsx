import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

function Hero() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));


  const handleSubmit = () => {

  if (!message.trim()) return;


  const token = localStorage.getItem("token");


  if (token) {

    navigate("/chat", {
      state: {
        prompt: message,
      },
    });


  } else {


    localStorage.setItem(
      "pendingPrompt",
      message
    );


    navigate("/login");


  }

};
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">


      {/* Glow Background */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"></div>

      <div className="absolute bottom-0 right-20 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]"></div>



      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">


        <div className="w-full text-center">



          {/* Badge */}

          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">

            <HiSparkles className="text-blue-400 text-lg"/>

            AI Research Assistant

          </div>




          {/* Heading */}

          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">

  {
    user?.name
    ?
    `Welcome Back ${user.name}`
    :
    "What can I help"
  }


  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

    {
      user?.name
      ?
      "What can I help you with?"
      :
      "you with?"
    }

  </span>

</h1>




          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">

            Ask questions, generate ideas, write code, research topics
            and solve problems with advanced AI.

          </p>





          {/* Search Box */}

<div className="mx-auto mt-10 flex max-w-3xl items-center rounded-[28px] border border-white/10 bg-[#171717]/80 p-3 shadow-2xl backdrop-blur-xl">

  <input
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    }}
    placeholder="Ask anything..."
    className="flex-1 bg-transparent px-5 py-4 text-lg outline-none placeholder:text-gray-500"
  />

  <button
    onClick={handleSubmit}
    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
  >
    <FaArrowUp />
  </button>

</div>





          {/* Suggestions */}

          <div className="mt-8 flex flex-wrap justify-center gap-3">


            {
              [
                "Explain AI",
                "Write code",
                "Research topic",
                "Generate ideas"
              ].map((item)=>(

                <button

                  key={item}

                  onClick={()=>setMessage(item)}

                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl transition hover:bg-white/10"

                >

                  {item}

                </button>


              ))
            }


          </div>





          {/* Feature Cards */}


          <div className="mt-20 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl">

              <h3 className="text-xl font-semibold">
                Smart Research
              </h3>

              <p className="mt-3 text-gray-400">
                Get intelligent answers powered by AI.
              </p>

            </div>



            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl">

              <h3 className="text-xl font-semibold">
                Coding Assistant
              </h3>

              <p className="mt-3 text-gray-400">
                Build and debug applications faster.
              </p>

            </div>



            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl">

              <h3 className="text-xl font-semibold">
                Creative AI
              </h3>

              <p className="mt-3 text-gray-400">
                Generate ideas and content instantly.
              </p>

            </div>



          </div>



        </div>


      </div>


    </section>
  );
}


export default Hero;