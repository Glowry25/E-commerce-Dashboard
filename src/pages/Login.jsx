import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import CustomIcon from "../assets/CustomIcon.png";
import Logo from "../assets/Logo.png";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      console.log("LOGIN DATA:", data);

      if (response.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data?.user?.name || "User",
            email: data?.user?.email || email,
          }),
        );

        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
     
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4">
        <img src={Logo} alt="Logo" className="w-28" />
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-blue-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>

 
      <div className="flex items-center justify-center flex-1 px-4">
        <AuthCard
          title="Login to your account"
          icon={<img src={CustomIcon} className="w-16 h-16" />}
        >
          <p className="text-sm text-gray-600 text-center mb-4">
            Enter your details to login.
          </p>
          <hr className="mb-5 mt-4 border-t-2 border-gray-300 border-0" />

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

            <div className="flex flex-col gap-3">
              <h5>Password</h5>
              <div className="flex gap-2 p-4 w-full h-10 rounded-xl border-2 border-gray-200 items-center">
                <Lock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-none w-full text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Eye className="text-gray-400 ml-auto" />
              </div>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                <span className="text-gray-600">Remember me</span>
              </label>

              <Link
                to="/reset-password"
                className="text-blue-500 font-medium underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-4 md:px-8 py-4 text-xs">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white p-2 rounded-xl"
              >
                Login
              </button>
            </div>
          </div>
        </AuthCard>
      </div>

      <div className="flex justify-between px-8 py-4 text-xs">
        <p>© 2026 SCISSOR TECHNOLOGIES INC. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-2 items-center">
          <Globe className="text-gray-500 w-4" />
          <span className="text-xs">ENG</span>
          <ChevronDown className="text-gray-500 w-4" />
        </div>
      </div>
    </div>
  );
}

export default Login;
