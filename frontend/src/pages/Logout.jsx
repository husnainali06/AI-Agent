import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  useEffect(() => {

    // Remove Login Data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect Home Page
    navigate("/", { replace: true });

  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white">

      <div className="text-center">

        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl animate-spin">
          ✨
        </div>

        <h1 className="mt-5 text-2xl font-bold">
          Logging out...
        </h1>

        <p className="text-gray-400 mt-2">
          Please wait...
        </p>

      </div>

    </div>
  );
}

export default Logout;