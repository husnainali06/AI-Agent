import {
  FaBrain,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";


import Header from "../components/Header";
import Footer from "../components/Footer";



function About(){



const values = [

{
icon:<FaBrain />,
title:"Smart AI Technology",
desc:"We build intelligent AI solutions that help users work faster and smarter."
},


{
icon:<FaRocket />,
title:"Innovation First",
desc:"We continuously improve our platform with modern AI technologies."
},


{
icon:<FaShieldAlt />,
title:"Privacy & Security",
desc:"Your data and conversations are protected with secure systems."
},


{
icon:<FaUsers />,
title:"User Focused",
desc:"Everything we create is designed around user experience."
}


];




return(


<div className="min-h-screen bg-black text-white">


<Header />





{/* Hero Section */}


<section className="pt-40 pb-24">


<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">



<div>


<p className="text-blue-400 font-semibold mb-4">

ABOUT AI FLOW

</p>




<h1 className="text-5xl md:text-6xl font-bold leading-tight">

Building The Future With

<span className="text-blue-400">

 Artificial Intelligence

</span>

</h1>





<p className="text-gray-400 mt-6 text-lg leading-relaxed">

AIFlow is an intelligent AI assistant platform designed
to help people learn, create, automate tasks and improve
productivity using modern artificial intelligence.

</p>



</div>







<div className="
rounded-3xl
bg-white/5
border
border-white/10
p-6
">


<img

src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900"

alt="AI Technology"

className="
rounded-2xl
w-full
"

/>


</div>




</div>


</section>









{/* Story Section */}


<section className="
py-24
bg-white/5
">


<div className="
max-w-5xl
mx-auto
px-6
text-center
">



<h2 className="text-4xl font-bold">

Our Story

</h2>




<p className="
text-gray-400
mt-6
text-lg
leading-relaxed
">


AIFlow started with a simple idea:
make artificial intelligence accessible for everyone.
We believe AI should not be complicated — it should help
people solve problems, learn new skills and create better results.


</p>



</div>


</section>









{/* Mission Vision */}


<section className="py-24">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-8
">



<div className="
rounded-3xl
bg-white/5
border
border-white/10
p-10
">


<FaLightbulb className="text-blue-400 text-4xl mb-5"/>


<h3 className="text-3xl font-bold">

Our Mission

</h3>



<p className="text-gray-400 mt-5 leading-relaxed">

Our mission is to provide powerful AI tools that make
technology simple, useful and available for everyone.

</p>


</div>







<div className="
rounded-3xl
bg-white/5
border
border-white/10
p-10
">


<FaRocket className="text-blue-400 text-4xl mb-5"/>


<h3 className="text-3xl font-bold">

Our Vision

</h3>



<p className="text-gray-400 mt-5 leading-relaxed">

We imagine a future where AI helps every person
learn faster, create more and achieve their goals.

</p>


</div>




</div>


</section>









{/* Values */}



<section className="
py-24
bg-white/5
">


<div className="
max-w-7xl
mx-auto
px-6
">



<h2 className="
text-4xl
font-bold
text-center
mb-14
">

Why Choose AIFlow?

</h2>





<div className="
grid
md:grid-cols-4
gap-6
">



{

values.map((item,index)=>(


<div

key={index}

className="
rounded-3xl
bg-black
border
border-white/10
p-7
hover:-translate-y-2
transition
"


>


<div className="
text-blue-400
text-3xl
mb-5
">

{item.icon}

</div>



<h3 className="
text-xl
font-semibold
mb-3
">

{item.title}

</h3>




<p className="text-gray-400 text-sm">

{item.desc}

</p>




</div>


))


}



</div>


</div>


</section>









{/* Stats */}


<section className="py-20">


<div className="
max-w-5xl
mx-auto
px-6
grid
grid-cols-2
md:grid-cols-4
gap-6
text-center
">



<div>
<h2 className="text-4xl font-bold text-blue-400">
10K+
</h2>
<p className="text-gray-400">
Users
</p>
</div>



<div>
<h2 className="text-4xl font-bold text-blue-400">
99%
</h2>
<p className="text-gray-400">
Accuracy
</p>
</div>



<div>
<h2 className="text-4xl font-bold text-blue-400">
24/7
</h2>
<p className="text-gray-400">
Available
</p>
</div>



<div>
<h2 className="text-4xl font-bold text-blue-400">
100%
</h2>
<p className="text-gray-400">
Innovation
</p>
</div>



</div>


</section>









{/* CTA */}


<section className="
py-24
text-center
bg-white/5
">


<h2 className="
text-4xl
font-bold
">

Experience AIFlow Today

</h2>



<p className="text-gray-400 mt-4">

Start using intelligent AI tools and improve your productivity.

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


export default About;