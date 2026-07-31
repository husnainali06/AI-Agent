import { FaUserPlus, FaComments, FaRobot } from "react-icons/fa";


function HowItWorks(){

const steps = [

{
icon:<FaUserPlus />,
title:"Create Account",
desc:"Sign up in seconds and get access to your personal AI assistant."
},

{
icon:<FaComments />,
title:"Ask Anything",
desc:"Ask questions, solve problems, write code or get creative ideas."
},

{
icon:<FaRobot />,
title:"AI Gives Answers",
desc:"Our AI analyzes your request and provides smart responses instantly."
}

];


return(

<section className="py-24 bg-black text-white">


<div className="max-w-7xl mx-auto px-6">



<div className="text-center mb-14">


<h2 className="text-4xl md:text-5xl font-bold">

How It Works

</h2>


<p className="text-gray-400 mt-4 max-w-2xl mx-auto">

Start using your AI assistant in three simple steps.

</p>


</div>





<div className="grid md:grid-cols-3 gap-8">



{
steps.map((step,index)=>(

<div

key={index}

className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition"


>


<div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-3xl mb-6">

{step.icon}

</div>




<h3 className="text-2xl font-semibold mb-3">

{step.title}

</h3>




<p className="text-gray-400 leading-relaxed">

{step.desc}

</p>



</div>


))

}



</div>





</div>


</section>


)

}


export default HowItWorks;