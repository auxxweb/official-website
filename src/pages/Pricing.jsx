"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Code, Shield, HeadsetIcon as HeadsetMic } from "lucide-react";

const features = [
  {
    icon: Code,
    text: "Open source",
  },
  {
    icon: Shield,
    text: "No-logs policy",
  },
  {
    icon: HeadsetMic,
    text: "24/7 Live support",
  },
];

const plans = [
  {
    name: "Core",
    description:
      "Template-based website Digital marketing Services Content Creation",
    price: "9999",
    color: "from-yellow-500/20 to-orange-500/20",
    textColor: "text-yellow-500",
    borderColor: "group-hover:border-yellow-500/50",
    buttonClass: "bg-yellow-500/10 text-yellow-500",
    features: [
      "Responsive template-based website design",
      "Social media integration for digital marketing",
      "SEO-optimized content creation",
    ],
    cta: "GET STARTED",
  },
  {
    name: "Elite",
    description:
      "Custom website Digital marketing Services Content Creation › 30% Sales Consulting UI/UX Devops Services Automation",
    price: "44,444",
    color: "from-purple-500/20 to-violet-500/20",
    textColor: "text-purple-500",
    borderColor: "group-hover:border-purple-500/50",
    buttonClass: "bg-purple-500/10 text-purple-500",
    features: [
      "Custom website with advanced features",
      "Integrated analytics and sales tracking",
      "Dedicated consulting for business growth",
    ],
    cta: "GET STARTED",
  },
  {
    name: "Supreme",
    description:
      "Custom website Digital marketing Services Content Creation > 50% Sales IT Consulting UIUX Devops Services Automation Implementation of AI tools E-Commerce",
    price: "99,999",
    color: "from-red-500/20 to-pink-500/20",
    textColor: "text-red-400",
    borderColor: "group-hover:border-red-500/50",
    buttonClass: " bg-red-500/10 text-red-500",
    features: [
      "Full-scale e-commerce platform with AI tools",
      "Automation of repetitive tasks and processes",
      "Comprehensive DevOps and UI/UX consulting",
    ],
    cta: "GET STARTED",
  },
];

export default function PricingCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <div className="min-h-screen bg-[#111111] p-8">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          opacity: 0.1,
        }}
      />
      <div className="relative min-h-[80vh] overflow-hidden">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                opacity: Math.random() * 0.5 + 0.25,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [null, 0, Math.random() * 0.5 + 0.25],
                scale: [null, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Curved Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,181.3C672,160,768,160,864,181.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160"
            />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-lg mb-6"
          >
            Pricing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Custom Websites. <br />
            Marketing. Automation.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Choose a plan that meets your business needs—template-based, custom
            design, or full-scale automation—with expert support and tools to
            scale your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <feature.icon className="w-5 h-5" />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent pointer-events-none" />
      </div>
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${plan.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Card */}
            <div className="relative bg-[#111111] rounded-3xl p-8 border border-gray-800 backdrop-blur-xl h-full flex flex-col">
              <div className="mb-8">
                <h3
                  className={`text-2xl text-center font-bold mb-2 ${plan.textColor}`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-center  text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 text-center ">
                <div className="flex text-center  justify-center   items-baseline">
                  <span className="text-3xl text-center  text-white">₹</span>
                  <span className="text-6xl text-center   font-bold text-white">
                    {plan.price === "Contact Us" ? "" : plan.price}
                  </span>
                  {plan.price !== "Contact Us" && (
                    <span className="text-gray-400 text-center ">
                      /month
                    </span>
                  )}
                </div>
                {plan.price === "Contact Us" && (
                  <span className="text-3xl text-center  text-white">
                    Contact Us
                  </span>
                )}
              </div>

              <div className="space-y-4 mt-auto">
                {plan.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${plan.textColor} bg-current/10`}
                    >
                      <Check className="w-3 h-3 text-current" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-4 py-4 rounded-xl mb-2 font-medium transition-all duration-200 ${plan.buttonClass}`}
              >
                {plan.cta}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
