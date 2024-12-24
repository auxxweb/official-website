import React from "react";
import { motion } from "framer-motion";
import Footer from "../../pages/Footer";
import { NavLink } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import Menu from "../menu/Menu";

const About = () => {
  const team = [
    {
      name: "Andrew Tate",
      role: "Motivator",
      image:
        "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=",
    },
    {
      name: "Mr Beast",
      role: "Gamer",
      image:
        "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=",
    },
    {
      name: "Olivia Rodrigo",
      role: "Digital Marketing",
      image:
        "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=",
    },
    // Add additional team members here if needed...
  ];

  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      <Menu />
      {/* Background Overlay */}
      <div
        className="pt-10 absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          opacity: 0.2,
        }}
      />

      {/* Main Content */}
      <div className="relative pt-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Top Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="pt-8 text-6xl md:text-8xl lg:text-9xl font-light leading-none">
            ABOUT US
          </h2>
        </motion.div>

        <motion.p
          className="text-neutral-400 text-center mt-6 max-w-xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          For four generations, we've been crafting the legacy of metal,
          transforming it from a raw material into timeless art.
        </motion.p>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mt-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <motion.p
              className="text-lg md:text-xl italic text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Build Something Great Together
            </motion.p>
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to Auxxweb Solutions
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Welcome to Auxxweb Solutions, the best IT company in Calicut. We
              are a group of specialists who are passionate and devoted to
              providing outstanding digital solutions. Using cutting-edge
              technology and creative approaches, our goal is to empower
              businesses. 
              <br />At Auxxweb Solutions, we specialize in providing a
              comprehensive range of IT services tailored to meet the unique
              needs of our clients. From web development and mobile app creation
              to digital marketing and IT consulting, we offer solutions that
              drive growth and success.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://img.freepik.com/premium-photo/low-angle-view-buildings-city_1048944-26718418.jpg?semt=ais_hybrid"
                alt="Auxxweb Solutions"
                className="w-full object-cover h-72 md:h-96"
              />
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <motion.h2
            className="text-3xl md:text-5xl text-center font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group rounded-lg overflow-hidden bg-neutral-800 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-neutral-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
