import React from "react";
import { AnimatedTooltip } from "./acertinityComponents/AnimatedTools";
import { motion } from "framer-motion";

const PeopleCards = () => {
    const items = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image:
                "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
        },
        {
            id: 2,
            name: "Jane Smith",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
        },
        {
            id: 3,
            name: "Alice Johnson",
            designation: "UX Designer",
            image:
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
        },
        {
            id: 4,
            name: "Bob Brown",
            designation: "Data Scientist",
            image:
                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
        },
    ];

    return (
        <div className="w-full bg-[#111111] pt-20  h-[700px]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <h2 className="text-md text-center font-bold">
                    <span className="text-white">Making Social Media</span>{" "}
                    <span className="text-gray-500">Making Again</span>
                </h2>
                <h2 className="text-7xl text-center font-bold">
                    <span className="text-white">Our</span>{" "}
                    <span className="text-gray-500">Values</span>
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
