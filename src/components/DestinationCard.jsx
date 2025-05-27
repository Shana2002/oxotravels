import React from "react";
import { motion } from "framer-motion";

const DestinationCard = ({ title, image, description, price ,d=0.5 }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: d }}
      className="w-full h-full rounded-3xl bg-cover bg-center relative overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl z-0"></div>

      {/* Content */}
      <div className="text-white p-4 h-full flex flex-col justify-end relative z-10">
        <h2 className="text-xl font-bold">{title}</h2>

        {/* Description: hidden by default, shown on hover */}
        <p className="text-sm mt-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-24 group-hover:mt-2 line-clamp-2">
          {description}
        </p>

        {/* Price Tag */}
        <p className="text-sm px-2 py-1 rounded-xl bg-green-500 mt-2 absolute right-2 top-2">
          ${price}
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
