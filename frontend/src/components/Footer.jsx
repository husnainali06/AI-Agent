import { 
  FaRobot,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Footer(){


return(

<footer className="
relative
bg-black
text-white
border-t
border-white/10
overflow-hidden
">



{/* Glow */}

<div className="
absolute
top-0
left-1/2
-translate-x-1/2
w-96
h-96
bg-blue-600/20
blur-3xl
rounded-full
">
</div>





<div className="
relative
max-w-7xl
mx-auto
px-6
py-16
">





<div className="
grid
md:grid-cols-4
gap-10
">






{/* Brand */}

<div>


<div className="
flex
items-center
gap-3
mb-5
">


<div className="
w-11
h-11
rounded-xl
bg-blue-600
flex
items-center
justify-center
">


<FaRobot className="text-xl"/>


</div>



<h2 className="text-2xl font-bold">

AI<span className="text-blue-400">Flow</span>

</h2>



</div>




<p className="text-gray-400 leading-relaxed">

Your intelligent AI assistant that helps you
learn, create and work smarter.

</p>




<div className="
flex
gap-4
mt-6
">


<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/5
border
border-white/10
flex
items-center
justify-center
hover:bg-blue-600
transition
"
>

<FaGithub />

</a>




<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/5
border
border-white/10
flex
items-center
justify-center
hover:bg-blue-600
transition
"
>

<FaLinkedin />

</a>




<a
href="#"
className="
w-10
h-10
rounded-full
bg-white/5
border
border-white/10
flex
items-center
justify-center
hover:bg-blue-600
transition
"
>

<FaTwitter />

</a>



</div>



</div>









{/* Product */}


<div>


<h3 className="text-lg font-semibold mb-5">

Product

</h3>


<ul className="space-y-3 text-gray-400">


<li>
<Link 
to="/chat"
className="hover:text-white"
>
AI Chat
</Link>
</li>


<li>
<Link
to="/about"
className="hover:text-white"
>
About AI
</Link>
</li>


<li>
<a
href="#features"
className="hover:text-white"
>
Features
</a>
</li>


<li>
<a
href="#pricing"
className="hover:text-white"
>
Pricing
</a>
</li>


</ul>


</div>









{/* Company */}


<div>


<h3 className="text-lg font-semibold mb-5">

Company

</h3>



<ul className="space-y-3 text-gray-400">


<li>
<Link
to="/"
className="hover:text-white"
>
Home
</Link>
</li>


<li>
<Link
to="/about"
className="hover:text-white"
>
About Us
</Link>
</li>


<li>
<span className="hover:text-white cursor-pointer">
Contact
</span>
</li>


<li>
<span className="hover:text-white cursor-pointer">
Privacy Policy
</span>
</li>


</ul>



</div>









{/* CTA */}


<div>


<h3 className="text-lg font-semibold mb-5">

Start Using AI

</h3>



<p className="text-gray-400 mb-5">

Experience the power of artificial intelligence today.

</p>




<Link

to="/chat"

className="
inline-block
bg-blue-600
px-6
py-3
rounded-xl
font-semibold
hover:bg-blue-700
transition
"

>

Try AI Now

</Link>



</div>






</div>








{/* Bottom */}


<div className="
border-t
border-white/10
mt-12
pt-6
text-center
text-gray-500
text-sm
">


© 2026 AIFlow. All rights reserved.


</div>





</div>



</footer>


)

}


export default Footer;