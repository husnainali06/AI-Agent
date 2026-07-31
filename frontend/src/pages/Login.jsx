import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import api from "../api/axios";
import toast from "react-hot-toast";


function Login(){

const navigate = useNavigate();


// Already Login User Redirect

const token = localStorage.getItem("token");

if(token){

  return <Navigate to="/" replace />;

}



const [showPassword,setShowPassword]=useState(false);



const [formData,setFormData]=useState({

email:"",
password:""

});





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};








const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const res = await api.post("/auth/login", formData);

    // Save Token
    localStorage.setItem("token", res.data.token);

    // Save User
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // Clear Form
    setFormData({
      email: "",
      password: ""
    });

    // Success Toast
    toast.success("Login Successful");

    // Redirect Home
    navigate("/", { replace: true });

  } catch (error) {
  toast.error(error.response?.data?.message || "Login Failed");
}
};






return(


<div className="min-h-screen bg-black text-white flex items-center justify-center px-6">



<div className="w-full max-w-md rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">





<div className="flex justify-center gap-2 mb-6">


<HiSparkles className="text-blue-400 text-3xl"/>


<h1 className="text-2xl font-bold">

AI Agent

</h1>


</div>







<h2 className="text-3xl font-bold text-center">

Welcome Back

</h2>







<form


onSubmit={handleSubmit}


autoComplete="off"


className="space-y-5 mt-8"


>







<input


name="email"


type="email"


autoComplete="off"


placeholder="Email"


value={formData.email}


onChange={handleChange}


className="w-full rounded-xl bg-white/10 px-5 py-3 outline-none"


/>









<div className="relative">



<input


name="password"


type={showPassword ? "text" : "password"}


autoComplete="new-password"


placeholder="Password"


value={formData.password}


onChange={handleChange}


className="w-full rounded-xl bg-white/10 px-5 py-3 pr-12 outline-none"


/>






<button


type="button"


onClick={()=>setShowPassword(!showPassword)}


className="absolute right-4 top-3 text-gray-400"


>


{

showPassword ?

<FaEyeSlash/>

:

<FaEye/>

}


</button>







</div>









<button


className="w-full rounded-xl bg-white text-black py-3 font-semibold"


>


Login


</button>






</form>









<p className="text-center text-gray-400 mt-6">



Don't have account?



<span


onClick={()=>navigate("/signup")}


className="text-blue-400 ml-2 cursor-pointer"


>


Signup


</span>



</p>








</div>



</div>


)


}


export default Login;