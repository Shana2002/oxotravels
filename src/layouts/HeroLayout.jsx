import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroLayout = () => {
  const data = [
    {
      image: "/image.png",
      title: "Experience the Magic",
      description: "From pristine beaches to lush mountains, experience a vibrant island full of culture, wildlife, and unforgettable memories."
    },
    {
      image: "/imageanuradhapura.webp",
      title: "Discover Ancient Wonders",
      description: "Step back in time and explore Sri Lanka’s UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and Polonnaruwa."
    },
    {
      image: "/imageMirissa.jpg",
      title: "Paradise Beaches Await",
      description: "Unwind on golden sands and swim in turquoise waters at stunning beaches like Mirissa, Unawatuna, and Trincomalee."
    },
    {
      image: "/imagebadulla.jpg",
      title: "Breathtaking Hill Country",
      description: "Ride through misty mountains and tea plantations in Ella and Nuwara Eliya—Sri Lanka’s lush highland heart."
    },
    {
      image: "/imageyala.jpg",
      title: "Wild Encounters",
      description: "Get close to nature with unforgettable safaris in Yala, Udawalawe, and Minneriya National Parks."
    }
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
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={data[index].image}
          initial={{ x: 20, opacity: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full object-cover rounded-b-4xl"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-b-4xl z-10 overflow-hidden"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="text-white text-5xl font-bold">{data[index].title}</h1>
            <p className="text-white max-w-2xl">{data[index].description}</p>
            <button className="text-white border px-6 py-2 rounded-2xl border-white hover:bg-white hover:text-green-500 transition">
              Get Started
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {data.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === i ? 'bg-green-500 scale-110' : 'bg-white opacity-60'
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
