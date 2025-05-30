import DestinationCard from "@/components/DestinationCard";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const DestinationLayout = () => {
  const data = [
    {
      id: 1,
      title: "Sigiriya",
      image: "/image.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
      price: "200",
    },
    {
      id: 2,
      title: "Ella",
      image: "/imagebadulla.jpg",
      description:
        "Explore the serene hills of Ella with breathtaking views and refreshing hikes.",
      price: "180",
    },
    {
      id: 3,
      title: "Mirissa",
      image: "https://assets.telegraphindia.com/telegraph/2023/Aug/1691497505_cms001.jpg",
      description:
        "Relax on golden beaches and enjoy whale watching tours at Mirissa.",
      price: "150",
    },
    {
      id: 4,
      title: "Nuwara Eliya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyp1H59kF0IBtQpa5uIte4SqHZ6gNsuwplQ&s",
      description:
        "Visit the cool hill station known as ‘Little England’ with its lush tea gardens.",
      price: "220",
    },
    {
      id: 5,
      title: "Galle",
      image: "https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg",
      description:
        "Discover the rich history of Galle Fort and its charming streets.",
      price: "210",
    },
    {
      id: 6,
      title: "Polonnaruwa",
      image: "https://www.bluelankatours.com/wp-content/uploads/2023/08/lankathilake.jpg",
      description:
        "Step back in time with the ancient ruins and cultural heritage sites.",
      price: "190",
    }
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-center">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900"
      >
        Top Destinations
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {data.map((item, index) => (
          <DestinationCard
            d={0.4 + index * 0.1}
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <Link
        href={"/destinations"}
        className="mt-12 px-12 py-3 bg-green-600 rounded-full text-white font-semibold shadow-md hover:bg-green-700 transition-colors duration-300"
        aria-label="Show all destinations"
      >
        Show All
      </Link>
    </section>
  );
};

export default DestinationLayout;
