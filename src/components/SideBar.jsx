import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  Headphones, 
  LogOut 
} from "lucide-react";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
    
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

   
      <aside
        className={`
          fixed top-0 left-0 z-[70] w-64 bg-white border-r border-gray-100
          h-screen flex flex-col transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
          md:translate-x-0 md:sticky md:top-0
        `}
      >
     
        <div className="p-6 mb-2 flex justify-between items-center">
          <img src={Logo} alt="Scissor Logo" className="w-28 object-contain" />
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1.5 hover:bg-gray-100 rounded-full transition text-gray-400"
          >
            ✕
          </button>
        </div>

      
        <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
         
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4 px-4">
            MAIN
          </p>
          <nav className="flex flex-col gap-1.5 mb-10">
            <div 
              onClick={() => navigate("/dashboard")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm cursor-pointer transition-all
                ${isActive("/dashboard") 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-100" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"}`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </div>

            <div 
              onClick={() => navigate("/products")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm cursor-pointer transition-all
                ${isActive("/products") 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-100" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"}`}
            >
              <Package size={18} />
              Products
            </div>
          </nav>

          
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4 px-4">
            OTHERS
          </p>
          <nav className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-blue-600 font-bold text-sm cursor-pointer transition-all">
              <Settings size={18} />
              Settings
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-blue-600 font-bold text-sm cursor-pointer transition-all">
              <Headphones size={18} />
              Support
            </div>
          </nav>
        </div>

        
        <div className="p-4 border-t border-gray-100 bg-white">
          <div
            onClick={() => {
              localStorage.removeItem("user");
              setIsOpen(false);
              navigate("/");
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-bold text-sm cursor-pointer transition-all"
          >
            <LogOut size={18} />
            Logout
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;