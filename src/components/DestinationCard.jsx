import React from "react";
import { motion } from "framer-motion";

const DestinationCard = ({ title, image, description, price, d = 0.5 }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: d }}
      className="group relative rounded-3xl bg-cover bg-center overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 transform transition-shadow transition-transform duration-500 ease-in-out transform hover:scale-[1.03] w-full h-80 lg:h-96"
      style={{ backgroundImage: `url(${image})` }}
      aria-label={`${title} destination`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
        <h2 className="text-2xl font-bold drop-shadow-md">{title}</h2>

        {/* Description */}
        <p className="mt-2 text-sm max-h-14 overflow-hidden line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>

        <p className="absolute right-4 top-4 bg-green-600 px-3 py-1 rounded-full font-semibold text-sm drop-shadow-md">
          ${price}
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
