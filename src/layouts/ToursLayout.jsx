import DestinationCard from '@/components/DestinationCard'
import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    id: 1,
    title: "Sigiriya Lion Rock",
    image: "/image.png",
    description:
      "Climb the iconic Sigiriya Rock Fortress and explore ancient frescoes, royal gardens, and breathtaking panoramic views.",
    price: "120",
  },
  {
    id: 2,
    title: "Ella Scenic Adventure",
    image: "/imagebadulla.jpg",
    description:
      "Experience the famous Nine Arch Bridge, Ella Rock hike, and fresh mountain atmosphere in Sri Lanka’s hill country.",
    price: "150",
  },
  {
    id: 3,
    title: "Kandy Cultural Tour",
    image: "https://thatswhatshehad.com/wp-content/uploads/2018/07/chathura-anuradha-subasinghe-40uQmE9Zq8g-unsplash-1024x683.jpg",
    description:
      "Visit the Temple of the Tooth Relic, enjoy the vibrant cultural show, and explore beautiful lakeside views.",
    price: "140",
  },
  {
    id: 4,
    title: "Galle Dutch Fort Tour",
    image: "https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg",
    description:
      "Walk through the historic Galle Fort, admire colonial architecture, and relax by the stunning southern coastline.",
    price: "110",
  },
  {
    id: 5,
    title: "Mirissa Whale Watching",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJewuBOmrekGK9FL9IQg6QjD3sbBvV06qKXA&s",
    description:
      "Enjoy an early-morning boat journey to spot blue whales, dolphins, and other marine life in Mirissa.",
    price: "180",
  },
  {
    id: 6,
    title: "Yala Wildlife Safari",
    image: "https://www.civitatis.com/f/sri-lanka/ella/safari-parque-yala-589x392.jpg",
    description:
      "Explore Yala National Park and experience close encounters with leopards, elephants, and diverse wildlife.",
    price: "160",
  },
];

const ToursLayout = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center px-4 py-8 bg-gray-50">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm"
      >
        Explore Our Tours
      </motion.h1>

      {/* Responsive Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <DestinationCard
              title={d.title}
              image={d.image}
              description={d.description}
              price={d.price}
            />
          </motion.div>
        ))}
      </div>

      {/* Show All Button */}
      <button
        type="button"
        className="mt-12 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Show All Tours
      </button>
    </section>
  )
}

export default ToursLayout
