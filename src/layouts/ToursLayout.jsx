import DestinationCard from '@/components/DestinationCard'
import React from 'react'
import { motion } from 'framer-motion'

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
    title: "Sigiriya",
    image: "/image.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
    price: "200",
  },
  {
    id: 3,
    title: "Sigiriya",
    image: "/image.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
    price: "200",
  },
  {
    id: 4,
    title: "Sigiriya",
    image: "/image.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
    price: "200",
  },
  {
    id: 5,
    title: "Sigiriya",
    image: "/image.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
    price: "200",
  },
  {
    id: 6,
    title: "Sigiriya",
    image: "/image.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum quae, doloremque exercitationem culpa deserunt maiores dolorum magni dicta debitis quam eaque laboriosam ipsam autem deleniti. Eligendi eius nesciunt veritatis!",
    price: "200",
  },
]

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
