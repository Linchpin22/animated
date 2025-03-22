"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust visibility trigger
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center text-center text-white justify-center relative px-4 md:px-8 lg:px-16">
      {/* Emoji + Text */}
      <div className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full font-bold">
        <span>👋</span>
        <span>Let’s Save our Environment</span>
      </div>

      {/* Main Heading */}
      <h1 className="font-bold text-[40px] md:text-[70px] leading-[100%] tracking-[-5%] text-center text-[#2D2D2D] mt-6">
        Streamline Your Sustainability
        <br />
        Reporting With <span className="text-[#28B30E]">CARBON CRUNCH</span>
      </h1>

      {/* Underline */}
      <div className="mt-4 text-[#2D2D2D] font-black text-[14px] md:text-[16px] leading-[100%] tracking-[0%]">
        <span className="text-[#28B30E] font-medium">95%</span> Accurate Carbon
        Calculations Trusted by Industry Leaders
      </div>

      {/* Buttons */}
      <div className="mt-6 space-x-4">
        <button className="px-[16px] py-[8px] md:px-[22px] md:py-[10px] bg-white text-[#28B30E] font-bold rounded-md shadow-[0px_4px_8.8px_2px_#FEAB4F66]">
          Free Calculator
        </button>
        <button className="px-[16px] py-[8px] md:px-[22px] md:py-[10px] bg-[#28B30E] text-black font-bold rounded-md">
          Book Demo
        </button>
      </div>

      {/* Background & Cards Section */}
      <div
        ref={ref}
        className="relative w-full max-w-[1200px] mx-auto mt-10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0"
      >
        {/* Left Rectangle */}
        <motion.div
          className="bg-[#C4C4C4] w-[90%] md:w-[610px] h-[300px] md:h-[742px]"
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>

        {/* Right Side Cards Container */}
        <div className="flex flex-col space-y-6 md:space-y-4 w-full md:w-auto">
          {/* First Card */}
          <motion.div
            className="bg-[#28B30E] text-left text-[#222222] w-[90%] sm:w-[446px] h-[200px] md:h-[246px] z-40 rounded-[12px] p-4 font-normal text-[20px] md:text-[29.31px] leading-[100%] tracking-[1%] capitalize transition-transform duration-300 ease-in-out hover:scale-105 hover:z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-bold text-[40px] md:text-[87.92px] leading-[100%] uppercase">
              3X
            </span>
            <br />
            ESG high performers deliver a higher total shareholder return
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="bg-[#3A3A3A] w-[90%] sm:w-[492px] h-[140px] md:h-[173px] -translate-y-4 md:-translate-y-8 rounded-[11px] z-30 -translate-x-4 sm:-translate-x-64 p-4 font-normal text-[20px] md:text-[31.31px] leading-[100%] tracking-[1%] capitalize text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-bold text-[40px] md:text-[55.34px] leading-[100%] uppercase">
              98%
            </span>
            <br />
            of CEOs agree sustainability is their responsibility
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="bg-[#2D2D2D] w-[90%] sm:w-[380px] h-[140px] md:h-[186px] rounded-[13px] z-20 p-4 -translate-y-8 md:-translate-y-16 font-normal text-[18px] md:text-[25.31px] leading-[100%] tracking-[1%] capitalize text-right transition-transform duration-300 ease-in-out hover:scale-105 hover:z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-bold text-[40px] md:text-[51.34px] leading-[100%] uppercase">
              18%
            </span>
            <br />
            of companies are cutting emissions fast enough to reach net zero by 2050
          </motion.div>

          {/* Fourth Card */}
          <motion.div
            className="bg-[#FFFFFF] text-[#28B30E] w-[90%] sm:w-[446px] h-[130px] md:h-[181px] -translate-y-12 md:-translate-y-24 rounded-[10px] -translate-x-4 sm:-translate-x-64 p-4 font-normal text-[18px] md:text-[24px] leading-[100%] tracking-[1%] capitalize text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="font-bold text-[40px] md:text-[48px] leading-[100%] uppercase">
              37%
            </span>
            <br />
            of the world's largest companies have a public net zero target. Nearly all are off track
          </motion.div>
        </div>
      </div>
    </div>
  );
}
