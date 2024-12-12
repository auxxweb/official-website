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

    const Corner = () => (
        <span className="absolute w-4 h-4 text-gray-600">+</span>
    )

    return (
        <div className="relative min-h-screen bg-[#111111] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    opacity: 0.1
                }}
            />


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
                <br />
                {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-sm text-neutral-400 max-w-md ml-auto mt-24 mb-12"
                >
                    For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                </motion.p> */}


                <div className="min-h-screen  mt-10 text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-10"
                        >
                           <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <h2 className="text-5xl  font-bold">
                                <span className="text-white">What</span>{" "}
                                <span className="text-gray-500">We Do</span>
                                <span className="text-orange-500">/</span>
                            </h2>
                        </motion.div>
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
                               
                            </motion.div>
                        </div>


                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
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
                                    <span className="absolute top-0 right-0 w-4 h-4 text-gray-600">+</span>
                                    <span className="absolute bottom-0 left-0 w-4 h-4 text-gray-600">+</span>
                                    <span className="absolute bottom-0 right-0 w-4 h-4 text-gray-600">+</span>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <motion.h3
                                            className="text-2xl font-bold"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.2 }}
                                        >
                                            {service.title}
                                        </motion.h3>
                                        <motion.div
                                            className="space-y-1"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.3 }}
                                        >
                                            <p className="text-gray-400">
                                                {service.description}
                                                {/* {service.additionalText && (
                                                    <>
                                                        <br />
                                                        {service.additionalText}
                                                    </>
                                                )} */}
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
