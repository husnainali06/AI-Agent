import { 
  FaBolt, 
  FaShieldAlt, 
  FaBrain, 
  FaClock 
} from "react-icons/fa";


function WhyChooseUs(){


const reasons = [

{
icon:<FaBrain />,
title:"Smart AI Technology",
desc:"Powered by advanced AI models to understand your questions and provide accurate answers."
},


{
icon:<FaBolt />,
title:"Fast Responses",
desc:"Get instant AI responses and complete your tasks faster with powerful automation."
},


{
icon:<FaShieldAlt />,
title:"Secure & Private",
desc:"Your conversations and data are protected with secure authentication."
},


{
icon:<FaClock />,
title:"Save Your Time",
desc:"Automate daily tasks, learn faster and improve your productivity."
}

];



return(

<section className="py-24 bg-black text-white">


<div className="max-w-7xl mx-auto px-6">



<div className="text-center mb-14">


<h2 className="text-4xl md:text-5xl font-bold">

Why Choose Us?

</h2>


<p className="text-gray-400 mt-4 max-w-2xl mx-auto">

Experience a smarter way to work, learn and create with AI.

</p>


</div>







<div className="grid md:grid-cols-4 gap-6">



{
reasons.map((item,index)=>(


<div

key={index}

className="
rounded-3xl 
bg-white/5 
border 
border-white/10 
p-7
hover:bg-white/10
hover:-translate-y-2
transition-all
duration-300
"


>


<div className="
w-14 
h-14 
rounded-2xl 
bg-blue-500/20 
flex 
items-center 
justify-center 
text-blue-400 
text-2xl 
mb-5
">

{item.icon}

</div>





<h3 className="text-xl font-semibold mb-3">

{item.title}

</h3>





<p className="text-gray-400 text-sm leading-relaxed">

{item.desc}

</p>



</div>


))

}



</div>




</div>


</section>

)

}


export default WhyChooseUs;