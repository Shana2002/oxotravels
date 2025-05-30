"use client"

import DestinationCard from "@/components/DestinationCard";
import { motion } from "framer-motion";
import TopNav from '@/layouts/TopNav'
import React from 'react'

const page = () => {
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
    },
    {
      id: 7,
      title: "Polonnaruwa",
      image: "https://www.bluelankatours.com/wp-content/uploads/2023/08/lankathilake.jpg",
      description:
        "Step back in time with the ancient ruins and cultural heritage sites.",
      price: "190",
    },
    {
      id: 8,
      title: "Polonnaruwa",
      image: "https://www.bluelankatours.com/wp-content/uploads/2023/08/lankathilake.jpg",
      description:
        "Step back in time with the ancient ruins and cultural heritage sites.",
      price: "190",
    },
    {
      id: 9,
      title: "Polonnaruwa",
      image: "https://www.bluelankatours.com/wp-content/uploads/2023/08/lankathilake.jpg",
      description:
        "Step back in time with the ancient ruins and cultural heritage sites.",
      price: "190",
    },
    {
      id: 10,
      title: "Polonnaruwa",
      image: "https://www.bluelankatours.com/wp-content/uploads/2023/08/lankathilake.jpg",
      description:
        "Step back in time with the ancient ruins and cultural heritage sites.",
      price: "190",
    },
  ];
  return (
    <div className="w-full overflow-x-hidden">
        <TopNav isScroll={true}/>
        <section className="w-full px-[5vw] mx-auto py-12 flex flex-col items-center mt-[10vh]">
        <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900"
        >
            Top Destinations
        </motion.h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
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
    </section>
    </div>
  )
}

export default page