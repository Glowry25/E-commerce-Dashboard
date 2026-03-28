import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Logo from "../assets/Logo.png";
import UserIcon from "../assets/UserIcon.png";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { User } from "lucide-react";
import { Eye } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { Globe } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSignup = async () => {
    console.log("Signup clicked");


 if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    try {
      const response = await fetch(
      "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            email: email,
            password: password,
          }),
        },
      );

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
    
        navigate("/");
      } else {
        alert(data.message || "Signup failed");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  

  return (
  <div className="min-h-screen flex flex-col">
      
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4">
        <img src={Logo} alt="Logo" className="w-28" />
        <p className="text-sm mt-2 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </div>

      <div className="flex items-center justify-center flex-1 px-4">
        <AuthCard
          title="Create new account"
          icon={
            <img src={UserIcon} alt="Icon" className="w-16 h-16 items-center" />
          }
        >
          <p className="text-sm text-gray-600 text-center mb-4">
            Enter your details to register.
          </p>
          <hr className="mb-5 mt-4 border-t-2 border-gray-300 border-0" />

          <div className="flex flex-col gap-3">
            <label>Full Name</label>
            <div className="flex gap-2 p-4 w-full h-10 rounded-xl border-2 border-gray-200 items-center">
              <User className="text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none w-full text-sm"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h5>Email Address</h5>
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

            <div className="flex flex-col gap-3">
              <h5>Password</h5>
              <div className="flex gap-2 p-4 w-full h-10 rounded-xl border-2 border-gray-200 items-center">
                <Lock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="outline-none w-full text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Eye className="text-gray-400 ml-auto" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h5>Confirm Password</h5>
              <div className="flex gap-2 p-4 w-full h-10 rounded-xl border-2 border-gray-200 items-center">
                <Lock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="outline-none w-full text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Eye className="text-gray-400 ml-auto" />
              </div>
            </div>

            <div className="flex gap-2 text-xs mb-2 items-start">
              <CircleAlert className="text-gray-500 w-4" />
              <h6 className="text-">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </h6>
            </div>

            <button
              onClick={handleSignup}
              className="w-full bg-blue-500 text-white p-3 rounded-xl"
            >
              Register
            </button>

            <h6 className="text-xs text-center mt-2">
              By clicking Register, you agree to accept Scissor Terms and
              Privacy Policy.
            </h6>
            <p className="text-sm text-center mt-2">
              <Link to="/reset-password" className="underline font-medium">
                Forgot password?
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
      <div className="flex justify-between px-8 py-4 text-xs">
        <h6 className="text-xs">© 2026 SCISSOR TECHNOLOGIES INC. ALL RIGHTS RESERVED.</h6>
        <div className="flex gap-2 items-center ">
          <Globe className="text-gray-500 w-4" />
          <h6 className="text-xs">ENG</h6>
          <ChevronDown className="text-gray-500 w-4" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
