import { FaCheck } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";



function Pricing(){


const plans = [

{
name:"Free",
price:"$0",
desc:"For getting started with AI",
features:[
"Basic AI Chat",
"Limited Messages",
"Community Support"
]
},


{
name:"Pro",
price:"$19",
desc:"For creators and professionals",
popular:true,
features:[
"Unlimited AI Chat",
"Advanced AI Models",
"Priority Support",
"Faster Responses"
]
},


{
name:"Enterprise",
price:"$49",
desc:"For teams and businesses",
features:[
"Everything in Pro",
"Team Collaboration",
"Advanced Security",
"Dedicated Support"
]
}


];





return(

<div className="min-h-screen bg-black text-white">


<Header />





{/* Hero */}


<section className="pt-40 pb-20 text-center">


<div className="max-w-4xl mx-auto px-6">


<p className="text-blue-400 font-semibold mb-4">

SIMPLE PRICING

</p>



<h1 className="text-5xl md:text-6xl font-bold">

Choose The Right

<span className="text-blue-400">

 AI Plan

</span>

</h1>




<p className="text-gray-400 mt-6 text-lg">

Flexible plans designed for students, creators and businesses.

</p>



</div>


</section>









{/* Pricing Cards */}


<section className="pb-24">


<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">



{

plans.map((plan,index)=>(


<div

key={index}

className={`
relative
rounded-3xl
border
p-8
bg-white/5
border-white/10
${plan.popular ? "scale-105 border-blue-500" : ""}
`}


>


{

plan.popular && (

<div className="
absolute
top-0
left-1/2
-translate-x-1/2
-translate-y-1/2
bg-blue-600
px-5
py-2
rounded-full
text-sm
font-semibold
">

Most Popular

</div>

)

}






<h2 className="text-2xl font-bold">

{plan.name}

</h2>




<p className="text-gray-400 mt-3">

{plan.desc}

</p>




<div className="mt-6 text-5xl font-bold">

{plan.price}

<span className="text-lg text-gray-400">

/month

</span>

</div>





<ul className="mt-8 space-y-4">


{

plan.features.map((feature,i)=>(


<li

key={i}

className="flex items-center gap-3 text-gray-300"

>

<FaCheck className="text-blue-400"/>

{feature}

</li>


))

}


</ul>







<button

className="
w-full
mt-8
rounded-xl
bg-blue-600
py-3
font-semibold
hover:bg-blue-700
transition
"

>

Get Started

</button>





</div>


))

}


</div>


</section>









{/* Why Pricing */}


<section className="py-20 bg-white/5">


<div className="max-w-5xl mx-auto px-6 text-center">


<h2 className="text-4xl font-bold">

Powerful AI For Everyone

</h2>


<p className="text-gray-400 mt-5 text-lg">

Start free and upgrade anytime as your needs grow.
No complicated setup, just powerful AI assistance.

</p>



</div>


</section>








{/* CTA */}


<section className="py-24 text-center">


<h2 className="text-4xl font-bold">

Ready To Start?

</h2>


<p className="text-gray-400 mt-4">

Join AIFlow and experience the future today.

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


export default Pricing;