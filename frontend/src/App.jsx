import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Logout from "./pages/Logout";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./Pages/Pricing";


import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";


function App() {

  return (

    <Routes>


      {/* Home Page */}
      <Route 
        path="/" 
        element={<Home />} 
      />



      {/* Signup Only For Guest */}
      <Route 
        path="/signup" 
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />



      {/* Login Only For Guest */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />





      {/* Protected Chat Page */}
      <Route 
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />




      {/* Logout */}
      <Route 
        path="/logout" 
        element={<Logout />} 
      />


       <Route
path="/about"
element={<About />}
/>

<Route
 path="/features"
 element={<Features />}
/>

<Route
 path="/pricing"
 element={<Pricing />}
/>
    </Routes>
    

  );

}


export default App;