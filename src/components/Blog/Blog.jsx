import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Footer from "../../pages/Footer";
import Menu from "../menu/Menu";

const Blog = () => {
  const mainArticle = {
    title: "Guardians of the Pride: The Urgency of Lion Conservation Efforts",
    category: "Species",
    img: "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png",
    description:
      "Fauna & Flora has been using the collective knowledge and experience to protect nature",
  };

  const sideArticles = [
    {
      title: "Unveiling the Enigmatic World of Giant Pandas",
      category: "Species",
      img: "https://marketing4ecommerce.net/wp-content/uploads/2023/04/webs-para-crear-un-blog-gratis.jpg",
      description:
        "Unveiling the enigmatic world of giant pandas and conservation challenges",
    },
    {
      title: "Protecting the unique and threatened seas",
      category: "Species",
      img: "https://st.depositphotos.com/17338290/61611/i/450/depositphotos_616117134-stock-photo-how-start-blog-blogging-beginners.jpg",
      description:
        "Fauna & Flora has been using the collective knowledge and experience to protect nature",
    },
    {
      title: "Exploring the Fascinating Realm of Birds",
      category: "Species",
      img: "https://img.freepik.com/free-photo/blogging-gone-viral-camera-concept_53876-127618.jpg?semt=ais_hybrid",
      description:
        "Exploring the Fascinating Realm of Birds and Their Ecological Significance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      <Menu />
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
            BLOGS
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
      </div>

      {/* Main Content */}
      <div className="relative pt-10 px-4 sm:px-6 lg:px-8">
        {/* Top Text */}
        <div className="ml-4 mr-4 min-h-screen bg-[#111111] text-white p-6 sm:p-8">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12"
            >
              Popular <span className="text-[#008d92]">Articles</span>
              <span className="text-[#008d92]">/</span>
            </motion.h2>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {/* Main Article */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-3 group"
              >
                <NavLink href="#" className="block">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={mainArticle.img}
                      alt={mainArticle.title}
                      width={800}
                      height={600}
                      className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4 sm:p-6">
                      <span className="inline-block  px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3">
                        {mainArticle.category}
                      </span>
                      <h2 className="text-lg sm:text-xl text-white bg-white/10 rounded-full p-4 backdrop-blur-sm lg:text-2xl font-bold mb-1 sm:mb-2">
                        {mainArticle.title} 
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {mainArticle.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </motion.div>

              {/* Side Articles */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {sideArticles.map((article, index) => (
                  <motion.div
                    key={article.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <NavLink
                      href="#"
                      className="flex gap-3 sm:gap-4 items-start"
                    >
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={article.img}
                          alt={article.title}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full text-white bg-white/10 text-sm backdrop-blur-sm mb-1 sm:mb-2">
                          {article.category}
                        </span>
                        <h3 className="text-sm text-white sm:text-base font-semibold mb-1 group-hover:text-gray-300 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {article.description}
                        </p>
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reversed Layout on Mobile */}
            <div className="grid mt-8 sm:mt-10 grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {sideArticles.map((article, index) => (
                  <motion.div
                    key={article.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <NavLink
                      href="#"
                      className="flex gap-3 sm:gap-4 items-start"
                    >
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={article.img}
                          alt={article.title}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 text-white py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-1 sm:mb-2">
                          {article.category}
                        </span>
                        <h3 className="text-sm sm:text-base text-white font-semibold mb-1 group-hover:text-gray-300 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {article.description}
                        </p>
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Main Article */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-3 group"
              >
                <NavLink href="#" className="block">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={mainArticle.img}
                      alt={mainArticle.title}
                      width={800}
                      height={600}
                      className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4 sm:p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3">
                        {mainArticle.category}
                      </span>
                      <h2 className="text-lg  bg-white/10 text-white p-4 rounded-full backdrop-blur-sm sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                        {mainArticle.title}
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {mainArticle.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mt-16 sm:mt-24 mb-8 sm:mb-12"
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

export default Blog;
