import { Link, useNavigate } from "react-router-dom";
import { FaRobot, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";


function Header() {


const [open,setOpen] = useState(false);

const navigate = useNavigate();


const token = localStorage.getItem("token");

const user = JSON.parse(localStorage.getItem("user")) || {};



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




const closeMenu = ()=>{

setOpen(false);

};




return (


<header className="
fixed
top-0
left-0
z-50
w-full
border-b
border-white/10
bg-[#030712]/80
backdrop-blur-xl
">


<div className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-6
lg:px-10
">





{/* Logo */}


<Link
to="/"
className="flex items-center gap-3"
onClick={closeMenu}
>


<div className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-blue-600
">


<FaRobot className="text-xl text-white"/>


</div>




<h1 className="text-2xl font-bold text-white">

AI<span className="text-blue-400">Flow</span>

</h1>


</Link>








{/* Desktop Navigation */}


<nav className="
hidden
items-center
gap-8
md:flex
">


<Link
to="/"
className="text-gray-300 hover:text-white"
>
Home
</Link>




<Link
to="/features"
className="text-gray-300 hover:text-white"
>
Features
</Link>




<Link
to="/pricing"
className="text-gray-300 hover:text-white"
>
Pricing
</Link>




<Link
to="/about"
className="text-gray-300 hover:text-white"
>
About
</Link>



</nav>









{/* Desktop Auth */}



<div className="
hidden
items-center
gap-4
md:flex
">


{

token ? (

<>


<div className="
flex
items-center
gap-3
text-white
">


<div className="
w-10
h-10
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
flex
items-center
justify-center
font-bold
">


{

user?.name
?
user.name.charAt(0).toUpperCase()
:
"U"

}


</div>



<span>

{user?.name || "User"}

</span>


</div>






<button

onClick={logout}

className="
rounded-xl
border
border-red-500/30
bg-red-500/10
px-5
py-2
text-red-400
hover:bg-red-500/20
"

>

Logout

</button>



</>


)

:

(


<>


<Link

to="/login"

className="
rounded-xl
border
border-white/20
px-5
py-2
text-white
hover:bg-white/10
"

>

Login

</Link>





<Link

to="/signup"

className="
rounded-xl
bg-blue-600
px-5
py-2
font-semibold
text-white
hover:bg-blue-700
"

>

Get Started

</Link>


</>


)


}



</div>







{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
text-2xl
text-white
md:hidden
"

>


{

open ?

<FaTimes/>

:

<FaBars/>

}


</button>



</div>









{/* Mobile Menu */}


{

open && (


<div className="
absolute
top-20
left-0
w-full
border-t
border-white/10
bg-[#030712]
px-6
py-6
md:hidden
">


<nav className="flex flex-col gap-5">



<Link

to="/"

onClick={closeMenu}

className="text-gray-300 hover:text-white"

>

Home

</Link>





<Link

to="/features"

onClick={closeMenu}

className="text-gray-300 hover:text-white"

>

Features

</Link>





<Link

to="/pricing"

onClick={closeMenu}

className="text-gray-300 hover:text-white"

>

Pricing

</Link>





<Link

to="/about"

onClick={closeMenu}

className="text-gray-300 hover:text-white"

>

About

</Link>







{

token ? (

<>


<div className="
flex
items-center
gap-3
text-white
mt-3
">


<div className="
w-10
h-10
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
flex
items-center
justify-center
font-bold
">

{
user?.name
?
user.name.charAt(0).toUpperCase()
:
"U"
}

</div>


<span>

{user?.name || "User"}

</span>


</div>





<button

onClick={logout}

className="
rounded-xl
bg-red-500/10
border
border-red-500/30
px-5
py-3
text-red-400
"

>

Logout

</button>


</>


)

:

(

<>


<Link

to="/login"

onClick={closeMenu}

className="
rounded-xl
border
border-white/20
px-5
py-3
text-center
text-white
"

>

Login

</Link>





<Link

to="/signup"

onClick={closeMenu}

className="
rounded-xl
bg-blue-600
px-5
py-3
text-center
font-semibold
text-white
"

>

Get Started

</Link>


</>


)

}



</nav>


</div>


)


}



</header>


)

}


export default Header;