import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import logo from "./assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-[59px]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]" />
        <span className="font-bold text-[18px] md:text-[20.86px] font-['DM_Sans']">
          Carboncrunch
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-between items-center w-[497px] h-[53px] bg-white rounded-[16px] px-[24px] py-[16px] text-lg">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>

      {/* Buttons - Shown in Desktop */}
      <div className="hidden md:flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(40, 179, 14, 0.7)" }}
          whileTap={{ scale: 0.9 }}
          className="px-[18px] py-[8px] bg-[#D6FFD0] text-[#28B30E] rounded-md font-bold text-[14px] md:text-[16px] transition-all"
        >
          Login
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(40, 179, 14, 0.7)" }}
          whileTap={{ scale: 0.9 }}
          className="px-[18px] py-[8px] bg-[#28B30E] text-black rounded-md font-bold text-[14px] md:text-[16px] transition-all"
        >
          Sign Up
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          {/* Buttons for Mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-[18px] py-[8px] bg-[#D6FFD0] text-[#28B30E] rounded-md font-bold text-[16px] transition-all"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-[18px] py-[8px] bg-[#28B30E] text-black rounded-md font-bold text-[16px] transition-all"
          >
            Sign Up
          </motion.button>
        </ul>
      </motion.div>
    </nav>
  );
}
