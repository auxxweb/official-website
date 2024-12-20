import React from "react";
import { motion } from "framer-motion";
import Footer from "../../pages/Footer";
import "./career.css";
import Menu from "../menu/Menu";

const CareerPage = () => {
  const jobs = [
    {
      title: "Backend Developers",
      positions: "3 positions",
      additionalText: "",
    },
    {
      title: "Frontend Developers",
      positions: "2 positions",
      additionalText: "",
    },
    {
      title: "QA",
      positions: "1 position",
      additionalText: "",
    },
    {
      title: "UX/UI Designers",
      positions: "0 positions",
      additionalText: "but you can send us a resume",
    },
    {
      title: "HR",
      positions: "1 position",
      additionalText: "",
    },
    {
      title: "Data Analysts",
      positions: "0 positions",
      additionalText: "but you can send us a resume",
    },
  ];

  const benefits = [
    {
      title: "Wellness Program",
      description:
        "Take care of your body and mind, get fit, relax and have fun with our wellness activities.",
    },
    {
      title: "Dedicated Team",
      description:
        "Join a family-like team, work together towards success and enjoy a friendly work environment.",
    },
    {
      title: "Health Insurance",
      description:
        "Stay healthy and worry-free with our comprehensive health coverage.",
    },
    {
      title: "Corporate Education",
      description:
        "Boost your skills, stay up-to-date with the latest trends and get promoted!",
    },
  ];

  const hashtags = [
    "#TravelAssistance",
    "#LogisticsSupport",
    "#AccommodationSupport",
    "#LegalAssistance",
    "#FamilyRelocationSupport",
    "#SettlingIn",
    "#LeisureActivities",
    "#LanguageStudies",
  ];

  const Corner = () => (
    <span className="absolute w-4 h-4 text-gray-600">+</span>
  );

  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
        <Menu/>
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
            CAREERS
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

        <div className="min-h-screen mt-20 text-white font-mono">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-12"
          >
            why choose <span className="text-[#008d92]">Auxxweb</span>
            <span className="text-white/50">/</span>
          </motion.h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 bg-[#111111] border border-gray-800 group"
                >
                  {/* Corners */}
                  <Corner /> {/* Top Left */}
                  <span className="absolute top-0 right-0 w-4 h-4 text-gray-600">
                    +
                  </span>{" "}
                  {/* Top Right */}
                  <span className="absolute bottom-0 left-0 w-4 h-4 text-gray-600">
                    +
                  </span>{" "}
                  {/* Bottom Left */}
                  <span className="absolute bottom-0 right-0 w-4 h-4 text-gray-600">
                    +
                  </span>{" "}
                  {/* Bottom Right */}
                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3
                      className="text-3xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {benefit.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 font-mono text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {benefit.description}
                    </motion.p>
                  </div>
                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    whileHover={{ scale: 1.02 }}
                  />
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/0 to-gray-800/0 group-hover:from-gray-800/5 group-hover:to-gray-800/10 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-screen  text-white pt-8 font-mono">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold">
                <span className="text-white">job</span>{" "}
                <span className="text-[#008d92]">listings</span>
                <span className="text-[#008d92]">/</span>
              </h2>
            </motion.div>

            {/* Job Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 bg-[#111] rounded-sm border border-gray-800 group cursor-pointer"
                >
                  {/* Corners */}
                  <Corner /> {/* Top Left */}
                  <span className="absolute top-0 right-0 w-4 h-4 text-gray-600">
                    +
                  </span>
                  <span className="absolute bottom-0 left-0 w-4 h-4 text-gray-600">
                    +
                  </span>
                  <span className="absolute bottom-0 right-0 w-4 h-4 text-gray-600">
                    +
                  </span>
                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3
                      className="text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {job.title}
                    </motion.h3>
                    <motion.div
                      className="space-y-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      <p className="text-gray-400">
                        {job.positions}
                        {job.additionalText && (
                          <>
                            <br />
                            {job.additionalText}
                          </>
                        )}
                      </p>
                    </motion.div>
                  </div>
                  {/* Hover Effects */}
                  <motion.div
                    className="absolute inset-0 border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    whileHover={{ scale: 1.02 }}
                  />
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/0 to-gray-800/0 group-hover:from-gray-800/5 group-hover:to-gray-800/10 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <section className="cascade">
                <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <h2 className=" cascade__title title text-4xl font-bold">
                                <span className="text-white text_grey">Tips for acing the </span>{" "}
                                <span className="text-gray-500">interview</span>
                                <span className="text-orange-500 text-accent_orange">/</span>
                            </h2>
                        </motion.div>

                    <div className="cascade__slider cascade-slider">
                        <div className="cascade-slider__item cascade-item block-cross-out">
                            <div className="cascade-item__wrapper">
                                <div className="cascade-item__row">
                                    <div className="cascade-item__numbers text_grey">
                                        <div className="numbers-column"></div>
                                    </div>
                                    <div className="cascade-item__text text-cascade-item">
                                        <div className="text-cascade-item__title text-accent_aqua">
                                            # First things first.
                                        </div>
                                        <div className="text-cascade-item__main">
                                            <p className='text-white'>
                                                Apply for a job or just send us your CV. Our HR managers will
                                                contact you shortly.
                                            </p>
                                        </div>
                                        <div className=" text-white text-cascade-item__tips text_grey">
                                            <p className='text-white'>
                                                ---<br />
                                                <strong>Tip:</strong> If you attach a cover letter, your chances
                                                of landing an interview rise significantly!
                                                <br />
                                                ---
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="cascade-slider__item cascade-item block-cross-out">
                            <div className="cascade-item__wrapper">
                                <div className="cascade-item__row">
                                    <div className="cascade-item__numbers text_grey">
                                        <div className="numbers-column"></div>
                                    </div>
                                    <div className="cascade-item__text text-cascade-item">
                                        <div className="text-cascade-item__title text-accent_aqua">
                                            # First things first.
                                        </div>
                                        <div className="text-cascade-item__main">
                                            <p className='text-white'>
                                                Apply for a job or just send us your CV. Our HR managers will
                                                contact you shortly.
                                            </p>
                                        </div>
                                        <div className="text-cascade-item__tips text_grey">
                                            <p className='text-white'>
                                                ---<br />
                                                <strong>Tip:</strong> If you attach a cover letter, your chances
                                                of landing an interview rise significantly!
                                                <br />
                                                ---
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cascade-slider__item cascade-item block-cross-out">
                            <div className="cascade-item__wrapper">
                                <div className="cascade-item__row">
                                    <div className="cascade-item__numbers text_grey">
                                        <div className="numbers-column"></div>
                                    </div>
                                    <div className="cascade-item__text text-cascade-item">
                                        <div className="className='text-white' text-cascade-item__title text-accent_aqua">
                                            # First things first.
                                        </div>
                                        <div className="text-cascade-item__main">
                                            <p className='text-white'>
                                                Apply for a job or just send us your CV. Our HR managers will
                                                contact you shortly.
                                            </p>
                                        </div>
                                        <div className="text-cascade-item__tips text_grey">
                                            <p className='text-white'>
                                                ---<br />
                                                <strong>Tip:</strong> If you attach a cover letter, your chances
                                                of landing an interview rise significantly!
                                                <br />
                                                ---
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cascade-slider__item cascade-item block-cross-out">
                            <div className="cascade-item__wrapper">
                                <div className="cascade-item__row">
                                    <div className="cascade-item__numbers text_grey">
                                        <div className="numbers-column"></div>
                                    </div>
                                    <div className="cascade-item__text text-cascade-item">
                                        <div className="text-cascade-item__main">
                                            <p className='text-white'>We prepare an offer and set a date for your first day at work.</p>
                                        </div>
                                        <div className="text-cascade-item__title text-accent_aqua">
                                            <strong>Welcome to the Auxxweb team!</strong>
                                        </div>
                                        <div className="text-cascade-item__ascii text-cascade-item__ascii_desktop">
                                            <pre>
                                                ██╗ ██████╗ ██████╗ ██╗███████╗███████╗██████╗ ██╗███████╗██████╗ ██╗██████╗
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        <div className="h-[500px]  text-white pt-8 font-mono relative overflow-hidden">
          {/* Particle/Star Effect Background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
            style={{
              backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              opacity: 0.1,
            }}
          />

          <div className="max-w-7xl  relative z-10">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold">
                <span className="text-white">relocate</span>{" "}
                <span className="text-[#008d92]">with us</span>
                <span className="text-[#008d92]">/</span>
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-cyan-400"
            >
              We can help you
              <br />
              move to Calicut
            </motion.h2>

            {/* Hashtags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {hashtags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className={`text-lg md:text-4xl font-medium cursor-pointer
                         bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 
                         bg-clip-text text-transparent
                         hover:opacity-80 transition-opacity`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm text-neutral-400 max-w-md ml-auto mb-12"
        >
          For four generations, we've been crafting the legacy of metal,
          transforming it from a raw material into timeless art.
        </motion.p>
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <Footer />
    </div>
  );
};

export default CareerPage;
