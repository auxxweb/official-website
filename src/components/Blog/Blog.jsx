import React from 'react'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import Footer from '../../pages/Footer'




const Blog = () => {

    const mainArticle = {
        title: "Guardians of the Pride: The Urgency of Lion Conservation Efforts",
        category: "Species",
        img: "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png",
        description: "Fauna & Flora has been using the collective knowledge and experience to protect nature"
      }
      
      const sideArticles = [
        {
          title: "Unveiling the Enigmatic World of Giant Pandas",
          category: "Species",
          img: "https://marketing4ecommerce.net/wp-content/uploads/2023/04/webs-para-crear-un-blog-gratis.jpg",
          description: "Unveiling the enigmatic world of giant pandas and conservation challenges"
        },
        {
          title: "Protecting the unique and threatened seas",
          category: "Species",
          img: "https://st.depositphotos.com/17338290/61611/i/450/depositphotos_616117134-stock-photo-how-start-blog-blogging-beginners.jpg",
          description: "Fauna & Flora has been using the collective knowledge and experience to protect nature"
        },
        {
          title: "Exploring the Fascinating Realm of Birds",
          category: "Species",
          img: "https://img.freepik.com/free-photo/blogging-gone-viral-camera-concept_53876-127618.jpg?semt=ais_hybrid",
          description: "Exploring the Fascinating Realm of Birds and Their Ecological Significance"
        }
      ]



      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5
          }
        }
      }
    
    

    return (
        <div className="relative min-h-screen bg-[#111111] text-white">



            {/* Main Content */}
            <div className="relative pt-32 px-6">
                {/* Top Text */}
                {/* ABOUT CAST Text */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h1 className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-light tracking-tight leading-[0.85]">
                        BLOGS
                        <br />

                    </h1>
                </motion.div>
{/* 
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-sm text-neutral-400 max-w-md ml-auto mt-24 mb-12"
                >
                    For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                </motion.p> */}

                <br /><br /><br />

                <div className="ml-8 mr-8 min-h-screen bg-[#111111] text-white p-8">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl font-bold mb-12"
                    >
                        Popular  <span className="text-orange-500">Articles</span>
                        <span className="text-white/50">/</span>
                    </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
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
                                            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 p-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-3">
                                                {mainArticle.category}
                                            </span>
                                            <h2 className="text-2xl font-bold mb-2">
                                                {mainArticle.title}
                                            </h2>
                                            <p className="text-gray-300">
                                                {mainArticle.description}
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </motion.div>

                            {/* Side Articles */}
                            <div className="lg:col-span-2 space-y-6">
                                {sideArticles.map((article, index) => (
                                    <motion.div
                                        key={article.title}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <NavLink href="#" className="flex gap-4 items-start">
                                            <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                                                <img
                                                    src={article.img}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-2">
                                                    {article.category}
                                                </span>
                                                <h3 className="font-semibold mb-1 group-hover:text-gray-300 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    {article.description}
                                                </p>
                                            </div>
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="grid mt-10 grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                                {sideArticles.map((article, index) => (
                                    <motion.div
                                        key={article.title}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <NavLink href="#" className="flex gap-4 items-start">
                                            <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                                                <img
                                                    src={article.img}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-2">
                                                    {article.category}
                                                </span>
                                                <h3 className="font-semibold mb-1 group-hover:text-gray-300 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-sm text-gray-400">
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
                                            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 p-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-3">
                                                {mainArticle.category}
                                            </span>
                                            <h2 className="text-2xl font-bold mb-2">
                                                {mainArticle.title}
                                            </h2>
                                            <p className="text-gray-300">
                                                {mainArticle.description}
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </motion.div>

                            {/* Side Articles */}
                            
                        </div>
                    </motion.div>
                </div>
                {/* Bottom Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-sm text-neutral-400 max-w-md ml-auto mt-24 mb-12"
                >
                    For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                </motion.p>
            </div>

            {/* Overlay Gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
            <Footer />
        </div>
    )
}

export default Blog
