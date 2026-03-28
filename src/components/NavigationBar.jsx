import { useEffect, useState } from "react";
import Avatar from "../assets/Avatar.png";
import { Search } from "lucide-react";

function NavigationBar({ setIsOpen }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-3">
        <img src={Avatar} alt="" />

        <div>
          <h3 className="font-semibold text-sm">
            Hi {user ? user.name : "Guest"}
          </h3>

          <p className="text-xs text-gray-500">Welcome back 👋</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-fit max-w-md hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="Search products, orders, or SKU..."
            className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm 
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                     focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>
        <span className="cursor-pointer text-gray-500">🔔</span>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-2xl text-blue-500"
      >
        ☰
      </button>
    </div>
  );
}

export default NavigationBar;
