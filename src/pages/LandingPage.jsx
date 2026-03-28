import { useState } from "react"; 
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HeroImage from "../assets/HeroImage.webp";
import Feature1 from "../assets/image1.webp";
import Feature2 from "../assets/image5.jpg";
import Feature3 from "../assets/image4.webp";
import AboutImage from "../assets/image2.avif";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Plane,
  ShieldCheck,
  Menu, 
  X,    
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-blue-100">
     
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 px-6 md:px-16 py-4 flex justify-between items-center border-b border-gray-100">
        <img src={Logo} alt="Scissor Logo" className="w-20 md:w-28" />

      
        <nav className="hidden lg:flex gap-8 text-sm text-gray-600 font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/login" className="hidden md:block text-gray-700 font-bold text-sm">
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-gray-900 transition-all shadow-lg"
          >
            Sign Up
          </Link>
          
         
          <button 
            className="lg:hidden text-blue-500" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-4 lg:hidden shadow-xl animate-in slide-in-from-top duration-300">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-bold uppercase tracking-widest">Home</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-bold uppercase tracking-widest">Features</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-bold uppercase tracking-widest">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-bold uppercase tracking-widest">Contact</a>
            <hr />
            <Link to="/login" className="text-blue-600 font-bold uppercase tracking-widest">Log In</Link>
          </div>
        )}
      </header>

     
      <section id="home" className="relative pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
            Sell Globally. <br />
            <span className="text-blue-600">Scale Effortlessly.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-xl mb-10 px-4">
            Connect your business to customers across Africa, Europe, and
            beyond. The all-in-one platform for international commerce and
            lightning-fast logistics.
          </p>
          <div className="flex justify-center mb-12 md:mb-16">
            <Link
              to="/signup"
              className="bg-gray-900 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 hover:bg-blue-600 transition-all"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative mx-auto max-w-5xl group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100">
            <img
              src={HeroImage}
              alt="Global Dashboard"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg md:text-2xl">
                Enterprise Ready
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section id="features" className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              World-Class Solutions
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
            <div className="bg-white p-6 rounded-3xl group cursor-pointer shadow-sm hover:shadow-xl transition-all">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48 md:h-52">
                <img src={Feature1} alt="Worldwide Shipping" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <Plane className="text-white opacity-0 group-hover:opacity-100" size={40} />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Worldwide Shipping</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Seamless delivery paths from local warehouses to international doorsteps.
              </p>
            </div>

           
            <div className="bg-white p-6 rounded-3xl group cursor-pointer shadow-sm hover:shadow-xl transition-all">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48 md:h-52">
                <img src={Feature2} alt="Multi-Currency" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <Globe className="text-white opacity-0 group-hover:opacity-100" size={40} />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Global Payments</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Accept payments in USD, EUR, NGN, and more with instant currency conversion.
              </p>
            </div>

          
            <div className="bg-white p-6 rounded-3xl group cursor-pointer shadow-sm hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48 md:h-52">
                <img src={Feature3} alt="Secure Trade" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <ShieldCheck className="text-white opacity-0 group-hover:opacity-100" size={40} />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Secure Trade</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Bank-grade security ensures every cross-border transaction is protected.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section id="about" className="py-16 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl order-2 md:order-1">
          <img src={AboutImage} alt="Our Vision" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center p-8">
            <p className="text-white opacity-0 group-hover:opacity-100 text-center font-medium">
              Bridging the gap between continents.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Built for the Next Generation of Global Merchants.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            Scissor was founded on the idea that geography shouldn't limit
            business growth. We provide the digital tools, logistics network,
            and security infrastructure needed to sell products across every
            continent.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-center text-gray-700 font-semibold">
              <CheckCircle size={20} className="text-blue-600" /> 180+ Countries Supported
            </div>
            <div className="flex gap-3 items-center text-gray-700 font-semibold">
              <CheckCircle size={20} className="text-blue-600" /> 24/7 Global Support
            </div>
          </div>
        </div>
      </section>

   
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <img src={Logo} alt="Logo" className="w-24 mb-6 brightness-200" />
            <p className="text-gray-400 text-sm">
              Empowering trade across Africa, Europe, and the world.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-blue-400">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-blue-400">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} /> +234 705 842 79</li>
              <li className="flex items-center gap-2"><Mail size={14} /> hello@scissor.com</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-blue-400">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition" />
              <FaTiktok className="hover:text-blue-500 cursor-pointer transition" />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-[10px] md:text-xs border-t border-gray-800 pt-8">
          © 2026 SCISSOR TECHNOLOGIES INC. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;