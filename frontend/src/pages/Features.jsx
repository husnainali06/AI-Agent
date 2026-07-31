import {
  FaRobot,
  FaCode,
  FaBrain,
  FaBolt,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";



function Features(){


const features = [

{
icon:<FaRobot />,
title:"AI Chat Assistant",
desc:"Chat with powerful AI that understands your questions and provides intelligent answers instantly."
},


{
icon:<FaCode />,
title:"Code Assistant",
desc:"Generate, explain and debug code faster with AI powered programming support."
},


{
icon:<FaBrain />,
title:"Smart Learning",
desc:"Learn complex topics easily with personalized AI explanations."
},


{
icon:<FaBolt />,
title:"Fast Responses",
desc:"Get accurate answers quickly and improve your productivity."
},


{
icon:<FaShieldAlt />,
title:"Secure Platform",
desc:"Your account and conversations stay protected with secure authentication."
},


{
icon:<FaChartLine />,
title:"Boost Productivity",
desc:"Automate tasks and focus on what matters most."
}


];




return(


<div className="min-h-screen bg-black text-white">


<Header />





{/* Hero Section */}


<section className="pt-40 pb-24">


<div className="max-w-7xl mx-auto px-6 text-center">



<p className="text-blue-400 font-semibold mb-4">

POWERFUL AI FEATURES

</p>



<h1 className="text-5xl md:text-6xl font-bold">

Everything You Need

<span className="text-blue-400">

 With AI

</span>

</h1>




<p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">

Explore powerful AI tools designed to help you
learn, create and work smarter.

</p>



</div>


</section>









{/* Features Cards */}


<section className="pb-24">


<div className="max-w-7xl mx-auto px-6">



<div className="grid md:grid-cols-3 gap-8">


{

features.map((item,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:bg-white/10
hover:-translate-y-2
transition-all
duration-300
"


>


<div className="
w-16
h-16
rounded-2xl
bg-blue-500/20
flex
items-center
justify-center
text-blue-400
text-3xl
mb-6
">

{item.icon}

</div>



<h2 className="text-2xl font-semibold mb-3">

{item.title}

</h2>




<p className="text-gray-400 leading-relaxed">

{item.desc}

</p>



</div>


))

}


</div>



</div>


</section>









{/* AI Workflow Section */}


<section className="
py-24
bg-white/5
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
">



<div>


<h2 className="text-4xl font-bold">

AI That Works For You

</h2>



<p className="text-gray-400 mt-6 text-lg">

Our AI assistant helps you solve problems,
generate ideas, learn new skills and complete
daily tasks faster.

</p>




<ul className="mt-8 space-y-4 text-gray-300">


<li>
✓ Instant intelligent responses
</li>


<li>
✓ Personalized AI experience
</li>


<li>
✓ Available anytime anywhere
</li>


</ul>



</div>







<div className="
rounded-3xl
bg-blue-600/20
border
border-white/10
p-10
flex
items-center
justify-center
">


<FaRobot className="text-blue-400 text-[180px]"/>


</div>




</div>


</section>









{/* CTA */}


<section className="py-24 text-center">


<h2 className="text-4xl font-bold">

Ready To Experience AI?

</h2>



<p className="text-gray-400 mt-4">

Start chatting with your personal AI assistant today.

</p>



<a

href="/chat"

className="
inline-block
mt-8
bg-blue-600
px-8
py-3
rounded-xl
font-semibold
hover:bg-blue-700
"

>

Start Using AI

</a>


</section>








<Footer />



</div>


)

}


export default Features;