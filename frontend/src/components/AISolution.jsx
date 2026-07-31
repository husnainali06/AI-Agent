import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function AISolution(){

const navigate = useNavigate();
return(

<section className="py-24 bg-black text-white">


<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">



{/* Left Content */}

<div>


<p className="text-blue-400 font-semibold mb-4">
POWERFUL AI ASSISTANT
</p>



<h2 className="text-4xl md:text-5xl font-bold leading-tight">

Work Smarter With 
<span className="text-blue-400">
 Intelligent AI
</span>

</h2>




<p className="text-gray-400 mt-6 text-lg leading-relaxed">

Our AI assistant helps you solve problems, learn new skills,
write content, generate ideas and complete tasks faster with
advanced artificial intelligence.

</p>





<div className="mt-8 flex gap-4">

<button

onClick={()=>navigate("/chat")}

className="
bg-white 
text-black 
px-6 
py-3 
rounded-xl 
font-semibold 
flex 
items-center 
gap-2
"

>

Start Using AI

<FaArrowRight />

</button>



<button

onClick={()=>navigate("/#about")}

className="
border 
border-white/20 
px-6 
py-3 
rounded-xl
"

>

Learn More

</button>


</div>



</div>








{/* Right Image */}

<div className="flex justify-center">


<div className="
relative
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
p-4
">


<img

src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"

alt="AI Technology"

className="
rounded-2xl
w-full
max-w-lg
object-cover
"

/>


</div>


</div>




</div>


</section>


)

}


export default AISolution;