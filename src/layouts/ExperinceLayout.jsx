'use client'

import ExperianceCard from "@/components/ExperianceCard";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExperinceLayout = () => {
  const [background, setBackground] = useState("/bg1.jpg");
  const [scrollY, setScrollY] = useState(0);

  const data = [
    {
      userimg: "/user.png",
      userName: "Amelia",
      message: "The mountain trail was breathtaking. Everything was well-organized and safe!",
      image: "/user.png",
    },
    {
      userimg: "/user.png",
      userName: "Liam",
      message: "Best experience ever! The food, guides, and views were absolutely amazing.",
      image: "/bg2.jpg",
    },
    {
      userimg: "/user.png",
      userName: "Emma",
      message: "Loved every moment of the trip. Would highly recommend to my friends.",
      image: "/bg3.jpg",
    },
    {
      userimg: "/user.png",
      userName: "Noah",
      message: "Incredible service and a truly memorable journey through the rainforest!",
      image: "/bg4.jpg",
    },
    {
      userimg: "/user.png",
      userName: "Olivia",
      message: "The beach tour was like a dream. I’m already planning my next one! incredible",
      image: "/bg5.jpg",
    },
    {
      userimg: "/user.png",
      userName: "James",
      message: "Amazing cultural immersion. I learned so much while having a blast.",
      image: "/bg6.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-[2vw] py-10 gap-6 overflow-hidden text-white"
      style={{
        backgroundImage: "url('/imagebadulla.jpg')",
        backgroundSize: `calc(100% + ${scrollY * 0.3}px) calc(100% + ${scrollY * 0.3}px)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        transition: "background-size 0.3s ease-out",
      }}
    >
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000c1aee] to-[#06244de0] z-[-1]" />

      {/* Hovered background image with blending */}
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-opacity duration-700 ease-out z-[-1]"
      />

      {/* Left - Title Block */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/3 h-[200px] lg:h-[80vh] flex items-center justify-center text-center bg-white/10 rounded-[2rem_0_2rem_2rem] shadow-lg border border-white/25 backdrop-blur-xl p-10"
      >
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            What People Say
          </h1>
          <p className="mt-4 text-gray-300 text-md max-w-xs mx-auto font-light">
            Real feedback from travelers who’ve lived the adventure.
          </p>
        </div>
      </motion.div>

      {/* Right - Experience Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[85vh] px-2"
      >
        {data.map((d, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="transition-transform duration-300"
            onMouseEnter={() => setBackground(d.image)}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.8rem_1.8rem_1.8rem_0.7rem] p-6 shadow-md cursor-default select-none">
              <ExperianceCard
                userName={d.userName}
                userImage={d.userimg}
                onHover={() => setBackground(d.image)}
                message={d.message}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperinceLayout;
