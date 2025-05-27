import React from "react";
import { motion } from "framer-motion";
import IconCard from "@/components/IconCard";

const AboutLayout = () => {
  return (
    <div className="w-full h-[180vh] lg:h-[90vh] flex flex-col items-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-5 font-bold text-2xl text-center"
      >
        Explore the infinity
      </motion.h1>
      <div className="w-full h-full px-[2vw] flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 relative">
          <img
            src="/image1.png"
            alt=""
            className="w-full h-full object-cover absolute left-0 top-0 "
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 text-2xl"
            >
              Welcome to Sri Lanks
            </motion.h2>
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold my-2"
            >
              Ayubowan
            </motion.h3>
            <motion.hr
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-2/6 my-2 text-green-400 h-2"
            />
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-10/12 text-justify mb-2 mx-auto lg:mx-0"
            >
              Sri Lanka is a tropical island nation in South Asia, known for its
              stunning beaches, ancient temples, rich wildlife, and vibrant
              culture. From the misty hills of Ella to the historic city of
              Anuradhapura, Sri Lanka offers a unique blend of adventure,
              relaxation, and heritage all in one breathtaking destination.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-10/12 text-justify mb-2 mx-auto lg:mx-0"
            >
              A land of endless beauty and vibrant culture, Sri Lanka offers
              unforgettable experiences for every kind of traveler:
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
             className="flex w-11/12 mt-auto justify-around mx-auto flex-wrap gap-2">
              <IconCard text={"Relax on Golden Beaches"} icon={"/1.png"}/>
              <IconCard text={"Relax on Golden Beaches"} icon={"/1.png"}/>
              <IconCard text={"Relax on Golden Beaches"} icon={"/1.png"}/>
              <IconCard text={"Relax on Golden Beaches"} icon={"/1.png"}/>
              <IconCard text={"Relax on Golden Beaches"} icon={"/1.png"}/>
            </motion.div>
          </div>
        </div>
        <div className="w-full bg-black h-1/2 lg:w-5/12 relative">
          <motion.img
            whileInView={{opacity:1,right:1}}
            initial={{opacity:0,right:-100}}
            transition={{duration:0.5}}
            src="/corrol.png"
            alt=""
            className="object-cover w-10/12 h-11/12 rounded-4xl absolute top-0 right-0"
          />
          <motion.img
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:+100}}
            transition={{duration:0.5}}
            src="/kesbewa.png"
            alt=""
            className="absolute top-20 w-10/12 h-8/12 object-cover left-[-10vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
