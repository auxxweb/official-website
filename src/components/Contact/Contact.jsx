import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Footer from '../../pages/Footer';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    })

    const containerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const itemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted:", formData)
    }

    return (
        <div>
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
                        <h1 className="text-[8rem] md:text-[12rem] lg:text-[11rem] font-light tracking-tight leading-[0.85]">
                            CONTACT US
                            <br />
                        </h1>
                    </motion.div>
                    {/* <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-sm text-neutral-400 max-w-md ml-auto mt-24 mb-12"
                    >
                        For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                    </motion.p> */}

                    <div className="min-h-screen mt-24  text-white p-4 md:p-8 lg:p-8">
                        {/* Motion Div */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-6xl mx-auto"
                        >
                            {/* Header Section */}
                            <div className="space-y-6 text-left">
                                <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                    Have a{" "}
                                    <span className="text-purple-400 inline-block hover:scale-105 transition-transform">
                                        question?
                                    </span>
                                </span>
                                <br />
                                <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                    Ready to{" "}
                                    <span className="text-purple-400 inline-block hover:scale-105 transition-transform">
                                        start?
                                    </span>
                                </span>
                                <p className="text-gray-400 text-lg">
                                    Let&apos;s start a conversation! Fill out our contact form, and we&apos;ll get back to you as soon as possible.
                                </p>
                            </div>

                            {/* Form Section */}
                            <motion.form
                                onSubmit={handleSubmit}
                                className="w-full space-y-8 mt-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                {/* Form Inputs */}
                                {/* Name Input */}
                                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                    <label htmlFor="name" className="text-xl md:text-4xl">
                                        Hello 😊 My name is
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="flex-1 bg-transparent border-b border-gray-700 px-2 py-2 text-xl text-white focus:outline-none focus:border-purple-400 transition-colors"
                                    />
                                </div>

                                {/* Company Input */}
                                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                    <label htmlFor="company" className="text-xl md:text-4xl">
                                        I&apos;m from
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="Enter your company name"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="flex-1 bg-transparent border-b border-gray-700 px-2 py-2 text-xl text-white focus:outline-none focus:border-purple-400 transition-colors"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                    <label htmlFor="email" className="text-xl md:text-4xl">
                                        Here is my email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="flex-1 bg-transparent border-b border-gray-700 px-2 py-2 text-xl text-white focus:outline-none focus:border-purple-400 transition-colors"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                    <label htmlFor="message" className="text-xl md:text-4xl">
                                        And message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="flex-1 bg-transparent border-b border-gray-700 px-2 py-2 text-xl text-white focus:outline-none focus:border-purple-400 transition-colors min-h-[100px] resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="pt-4"
                                >
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-400 text-black rounded-full text-xl py-4 font-bold hover:bg-purple-500 transition-colors group relative overflow-hidden"
                                    >
                                        Submit
                                    </button>
                                </motion.div>
                            </motion.form>
                        </motion.div>
                    </div>

                    <div className="min-h-screen bg-gradient-to-br  text-white p-6 md:p-12">
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                            {/* Left side: Google Map */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.184522525117!2d75.83155997525179!3d11.247832550321265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe50ea0b7d%3A0xc4e01eaa6234847e!2sHiLITE%20Business%20Park%2C%20Poovangal%2C%20Pantheeramkavu%2C%20Kerala%20673014!5e0!3m2!1sen!2sin!4v1721609750089!5m2!1sen!2sin"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </motion.div>

                            {/* Right side: Contact Information */}
                            <motion.div
                                className="w-full lg:w-1/2 flex flex-col justify-center space-y-12"
                                variants={containerVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h2
                                    className="text-4xl font-bold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                                    variants={itemVariant}
                                >
                                    Get in Touch
                                </motion.h2>

                                <motion.div className="space-y-8" variants={containerVariant}>
                                    {/* Address */}
                                    <motion.div className="flex items-center gap-6 group" variants={itemVariant}>
                                        <div className="bg-purple-500 rounded-full p-4 shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-purple-400">Address</h4>
                                            <p className="text-gray-300 group-hover:text-white transition-colors">
                                                4671 Sugar Camp Road,<br />Owatonna, Minnesota, 55060
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Phone */}
                                    <motion.div className="flex items-center gap-6 group" variants={itemVariant}>
                                        <div className="bg-pink-500 rounded-full p-4 shadow-lg group-hover:shadow-pink-500/50 transition-shadow duration-300">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-pink-400">Phone</h4>
                                            <p className="text-gray-300 group-hover:text-white transition-colors">507-475-8094</p>
                                        </div>
                                    </motion.div>

                                    {/* Email */}
                                    <motion.div className="flex items-center gap-6 group" variants={itemVariant}>
                                        <div className="bg-blue-500 rounded-full p-4 shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-blue-400">Email</h4>
                                            <p className="text-gray-300 group-hover:text-white transition-colors">wrub7d78i0e@temporary-mail.net</p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Social Media Icons */}
                                <motion.div
                                    className="flex justify-center lg:justify-start gap-6 pt-8 border-t border-gray-700"
                                    variants={containerVariant}
                                >
                                    {[
                                        { Icon: Facebook, color: "bg-blue-600", hover: "hover:bg-blue-700" },
                                        { Icon: Twitter, color: "bg-sky-500", hover: "hover:bg-sky-600" },
                                        { Icon: Instagram, color: "bg-pink-600", hover: "hover:bg-pink-700" },
                                        { Icon: Linkedin, color: "bg-blue-700", hover: "hover:bg-blue-800" },
                                        { Icon: Github, color: "bg-gray-800", hover: "hover:bg-gray-900" },
                                    ].map(({ Icon, color, hover }, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            variants={itemVariant}
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            className={`${color} ${hover} p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>



                    {/* Bottom Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-sm text-neutral-400 max-w-md ml-auto  mb-12"
                    >
                        For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                    </motion.p>
                </div>

                {/* Overlay Gradient */}
                <Footer />
            </div>
        </div>
    )
}

export default Contact
