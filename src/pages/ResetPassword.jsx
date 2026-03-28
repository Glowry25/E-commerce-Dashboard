import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Logo from "../assets/Logo.png";
import KeyIcon from "../assets/KeyIcon.png";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const handleReset = async () => {
    try {
      const response = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
   <div className="min-h-screen flex flex-col">
     <div className="flex justify-between items-center w-full px-4 md:px-8 py-4">
        <img src={Logo} alt="Logo" className=" w-28" />
        <p className="text-sm mt-2 text-center">
          Changed your mind?{" "}
          <Link to="/" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </div>

      <div className="flex items-center justify-center flex-1 px-4">
        <AuthCard
          title="Reset Password"
          icon={
            <img src={KeyIcon} alt="Icon" className="w-16 h-16 items-center" />
          }
        >
          <p className="mb-4 text-sm  text-gray-600 text-center ">
            {" "}
            Enter your email to reset your password.
          </p>
          <hr className="mb-5 mt-4 border-t-2 border-gray-300 border-0" />

          <div className="flex flex-col gap-3 mb-5">
            <h5> Email Address *</h5>
            <div className="flex gap-2 p-4 w-full h-10 rounded-xl border-2 border-gray-200 items-center">
           
              <Mail className="text-gray-400" />
              <input
                type="email"
                placeholder="hello@alignui.com"
               className="outline-none w-full text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full bg-blue-500 text-white p-3 rounded-xl"
          >
            Reset Password
          </button>
          <div className="text-xs text-center mt-2 rounded-xl">
            <h6>Don't have access anymore?</h6>
            <h6>
              <Link to="" className="underline font-medium">
                Try another method
              </Link>
            </h6>
          </div>
        </AuthCard>
      </div>
      <div className="flex justify-between px-8 py-4 text-xs">
        <h6 className="text-xs"> © 2026 SCISSOR TECHNOLOGIES INC. ALL RIGHTS RESERVED.</h6>
        <div className="flex gap-2 items-center ">
          <Globe className="text-gray-500 w-4" />
          <h6 className="text-xs">ENG</h6>
          <ChevronDown className="text-gray-500 w-4" />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
