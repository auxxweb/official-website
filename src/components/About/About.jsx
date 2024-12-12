import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../pages/Footer';
import { NavLink } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react'


const About = () => {


    const team = [
        {
            name: "Andrew Tate",
            role: "Motivator",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        },
        {
            name: "Mr Beast",
            role: "Gamer",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        },
        {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        }, {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        }, {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        },
        {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        },
        {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        },
        {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        },
        {
            name: "Olivia Rodrigo",
            role: "Digital Marketing",
            image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
        }
    ]
    return (
        <div className="relative min-h-screen bg-[#111111] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    opacity: 0.2
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
                        ABOUT US
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

                <br /><br />

                {/* Background Texture */}
                <div className="max-w-7xl ml-6 mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Left Side: Text Content */}
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white/80 italic text-lg md:text-xl tracking-wider"
                        >
                            SINCE 2023
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white text-3xl md:text-5xl lg:text-4xl xl:text-5xl tracking-wider"
                        >
                            Welcome to Auxxweb Solutions
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-white/80 text-sm md:text-base tracking-wider mt-4"
                        >
                            We offer a wide range of comprehensive software development
                            and digital marketing services tailored to meet the unique needs
                            of your business. Whether you’re a startup seeking to establish your
                            presence or an established company aiming to scale new heights, our
                            dedicated team of professionals is here to guide you every step of the way.
                            <br />
                            Our software development services focus on creating scalable,
                            user-friendly, and innovative solutions, including custom web
                            and mobile applications that align perfectly with your goals.
                            On the digital marketing front, we employ cutting-edge strategies
                            such as search engine optimization (SEO), social media marketing,
                            pay-per-click (PPC) advertising, and content marketing to ensure
                            your brand gets the visibility and recognition it deserves.

                        </motion.p>
                    </div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative rounded-lg overflow-hidden h-[550px] shadow-lg w-full max-w-md">
                            <img
                                src="https://img.freepik.com/premium-photo/low-angle-view-buildings-city_1048944-26718418.jpg?semt=ais_hybrid" // Replace with your image URL
                                alt="Auxxweb Solutions"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>


                {/* Image Grid */}
                <div>
                    {/* Header Section */}
                    <div className="flex justify-center mt-28">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white text-center text-3xl md:text-5xl lg:text-4xl xl:text-5xl tracking-wider"
                        >
                            Our Team
                        </motion.p>
                    </div>

                    {/* Grid Section */}
                    {/* <div className="relative mt-28 grid grid-cols-3 gap-4 h-[70vh]">
                        {[1, 2, 3].map((_, index) => (
                            <motion.div
                                key={index}
                                className="relative h-full overflow-hidden bg-neutral-800"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                                <motion.div
                                    className="h-full w-full"
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div
                                        className="h-full w-full bg-center bg-cover"
                                        style={{
                                            backgroundImage: `url(https://media.istockphoto.com/id/496603695/vector/abstract-black-and-white-modern-building-pattern-background.jpg?s=612x612&w=0&k=20&c=Ko1uR24b-lthdLtMx3VQwZp5ronPx29wB9sz6OrvuJg=)`,
                                            filter: 'grayscale(100%)',
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div> */}
                    <div className="grid mt-16 ml-14 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl w-full">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <motion.div
                                        className="absolute inset-0 bg-emerald-500/20 opacity-0 transition-opacity duration-300"
                                        whileHover={{ opacity: 1 }}
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <motion.h3
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        className="font-medium text-lg"
                                    >
                                        {member.name}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                        className="text-sm text-gray-300"
                                    >
                                        {member.role}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}

                        {/* See all reviews card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -5 }}
                        >
                            <NavLink href="/reviews">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 p-6 group">
                                    <div className="h-full flex flex-col justify-between">
                                        <h3 className="text-white text-2xl font-medium leading-tight">
                                            See all reviews by our Customers
                                        </h3>
                                        <motion.div
                                            initial={{ x: 0, y: 0 }}
                                            whileHover={{ x: 5, y: 5 }}
                                            className="text-emerald-400"
                                        >
                                            <ArrowDownRight size={32} />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="absolute inset-0 bg-emerald-500/10 opacity-0 transition-opacity duration-300"
                                        whileHover={{ opacity: 1 }}
                                    />
                                </div>
                            </NavLink>
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
    );
};

export default About;