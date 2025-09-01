import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50 
        w-[1024px] h-[75px] bg-white shadow-md rounded-md transition-transform duration-300 
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-center h-full space-x-10">
       
        <div className="w-12 h-auto mr-6"><img src="/logo3.png" alt="logo" /></div>

        <Link to="/" className="text-black hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/About" className="text-black hover:text-blue-600 transition-colors">
          About
        </Link>
        {/* <div className="text-black cursor-pointer hover:text-blue-600 transition-colors">About</div> */}

        {/* <div className="relative">
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={20} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 border rounded-md shadow 
              transition-all duration-300 bg-white
              ${searchOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          />
        </div> */}
      </div>
    </div>
  );
}
