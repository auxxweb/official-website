import React from 'react'
import { motion } from "framer-motion"
import Footer from '../../pages/Footer'
import { Smartphone, Globe, Palette, TestTube, TrendingUp, Cloud, Settings, Box } from 'lucide-react'


const Services = () => {

    const services = [
        {
            icon: Smartphone,
            title: "MOBILE APP",
            description: "Intuitive, high-performance apps for iOS and Android, designed to engage your target audience."
        },
        {
            icon: Globe,
            title: "WEB DEVELOPMENT",
            description: "Custom websites, e-commerce platforms, and web applications tailored to your unique business needs."
        },
        {
            icon: Palette,
            title: "UI/UX DESIGN",
            description: "User-centric designs that enhance user experience and drive engagement."
        },
        {
            icon: TestTube,
            title: "SOFTWARE TESTING",
            description: "Ensuring Quality Through Comprehensive Testing Methodologies."
        },
        {
            icon: TrendingUp,
            title: "DIGITAL MARKETING",
            description: "Comprehensive strategies to increase your online presence and drive growth."
        },
        {
            icon: Cloud,
            title: "CLOUD COMPUTING",
            description: "Transforming Businesses with Scalable Cloud Computing."
        },
        {
            icon: Settings,
            title: "DEVOPS AUTOMATION",
            description: "Streamlining Development with DevOps Automation."
        },
        {
            icon: Box,
            title: "SOFTWARE PROTOTYPING",
            description: "Bringing Ideas to Life with Software Prototyping."
        },
        {
            icon: Box,
            title: "SOFTWARE PROTOTYPING",
            description: "Bringing Ideas to Life with Software Prototyping."
        },

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
            y: 0
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
                        SERVICES
                        <br />

                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-sm text-neutral-400 max-w-md ml-auto mt-24 mb-12"
                >
                    For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                </motion.p>


                <div className="min-h-screen bg-[#111111] text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-20"
                        >
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-3xl font-bold mb-12"
                            >
                                <span className="text-orange-500">What We Do </span>
                                <span className="text-white/50"></span>
                            </motion.h2>
                            <p className="text-xl text-gray-400">
                                Empowering your vision with expert solutions.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Center Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden lg:block"
                            >
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent rounded-full blur-3xl" />
                                    {/* <img
                src="https://www.wespeakiot.com/wp-content/uploads/2017/12/when-products-turn-into-smart-services.jpg"
                alt="Developer"
                className="relative z-10"
              /> */}
                                </div>
                            </motion.div>

                            {/* Services Grid */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20"
                            >
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="group"
                                    >
                                        <div className="relative p-6 rounded-2xl overflow-hidden">
                                            {/* Background Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Border Gradient */}
                                            <div className="absolute inset-0 rounded-2xl border border-teal-500/20 group-hover:border-teal-500/40 transition-colors duration-300" />

                                            {/* Content */}
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors duration-300">
                                                    <service.icon className="w-6 h-6 text-teal-400" />
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 text-teal-400">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center mt-20"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Ready to bring your vision to life?
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-400 transition-colors duration-300"
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    </div>
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

export default Services
