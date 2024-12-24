import React from "react";
import { AnimatedTooltip } from "./acertinityComponents/AnimatedTools";
import { motion } from "framer-motion";

const PeopleCards = () => {
  const items = [
    {
      id: 1,
      name: "Adharsh Raj",
      designation: "Founder & CEO",
      image: "./team/adarsh.jpeg",
    },
    {
      id: 2,
      name: "Gurupriyan",
      designation: "Chief Technical Officer",
      image: "./team/aux-cto.jpeg",
    },
    {
      id: 3,
      name: "Jithin",
      designation: "Chief Operating Officer",
      image: "./team/jithin.jpg",
    },
    {
      id: 4,
      name: "Sooraj",
      designation: " Chief Client Relations Officer",
      image: "./team/sooraj.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#111111] pt-20  h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center font-bold">
          <span className="text-white">Making Social Media</span>{" "}
          <span className="text-[#008d92]">Making Again</span>
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-8xl text-center font-bold">
          <span className="text-white font-mono">Our</span>{" "}
          <span className="text-[#008d92] font-mono">Values</span>
        </h2>
      </motion.div>

      {/* Scrollable content */}
      <div className="mx-auto w-full max-w-5xl">
        <AnimatedTooltip items={items} />
      </div>
    </div>
  );
};

export default PeopleCards;
