"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      image: "/image.png",
      title: "Experience the Magic",
      description:
        "From pristine beaches to lush mountains, experience a vibrant island full of culture, wildlife, and unforgettable memories.",
    },
    {
      image: "/imageanuradhapura.webp",
      title: "Discover Ancient Wonders",
      description:
        "Step back in time and explore Sri Lanka’s UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and Polonnaruwa.",
    },
    {
      image: "/imageMirissa.jpg",
      title: "Paradise Beaches Await",
      description:
        "Unwind on golden sands and swim in turquoise waters at stunning beaches like Mirissa, Unawatuna, and Trincomalee.",
    },
    {
      image: "/imagebadulla.jpg",
      title: "Breathtaking Hill Country",
      description:
        "Ride through misty mountains and tea plantations in Ella and Nuwara Eliya—Sri Lanka’s lush highland heart.",
    },
    {
      image: "/imageyala.jpg",
      title: "Wild Encounters",
      description:
        "Get close to nature with unforgettable safaris in Yala, Udawalawe, and Minneriya National Parks.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Image Carousel Container */}
      <motion.div
        className="flex w-full h-full"
        style={{ width: `${data.length * 100}%` }}
        animate={{ x: `-${index * 20}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 relative"
            style={{ width: `${100 / data.length}%` }}
          >
            <img
              src={item.image}
              className={`w-full h-full object-cover ${
                scrolled ? "rounded-b-4xl" : ""
              }`}
              alt={`slide-${i}`}
            />
            <div className={`absolute inset-0 bg-black opacity-50 z-10 ${scrolled ? "rounded-b-4xl" : ""}`}></div>
            {/* Text Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12">
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold hero-text">
                  {item.title}
                </h1>
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-xl md:max-w-2xl hero-description">
                  {item.description}
                </p>
                <button className="text-white border px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base rounded-2xl border-white hover:bg-white hover:text-green-500 transition cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
        <div className="flex gap-2">
          {data.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === i ? "bg-green-500 scale-110" : "bg-white opacity-60"
              }`}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
