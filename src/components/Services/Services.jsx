import React from "react";
import { motion } from "framer-motion";
import Footer from "../../pages/Footer";
import {
  Smartphone,
  Globe,
  Palette,
  TestTube,
  TrendingUp,
  Cloud,
  Settings,
  Box,
} from "lucide-react";
import Menu from "../menu/Menu";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "MOBILE APP",
      description:
        " Our  platoon specializes in developing innovative mobile  operations for both Android and iOS platforms. Being a top IT company in Calicut, we  concentrate on delivering apps that are n't only functional but also offer a  flawless  stoner experience. ",
    },
    {
      icon: Globe,
      title: "WEB DEVELOPMENT",
      description:
        "As a premier IT company in Calicut, we create responsive, engaging, and user-friendly websites tailored to meet your specific business needs. We offer a wide range of web development services, from basic websites to complex web applications.",
    },
    {
      icon: Palette,
      title: "UI/UX DESIGN",
      description:
        " We design intuitive and visually  charming  stoner interfaces that enhance  stoner experience. As the stylish IT company in Calicut, our UI/ UX design services  insure that your digital products are both aesthetically pleasing and easy to navigate. ",
    },
    {
      icon: TestTube,
      title: "SOFTWARE TESTING",
      description:
        "We provide thorough software testing services to ensure your applications are reliable, secure, and bug-free. Our testing processes, offered by the most trusted IT company in Calicut, help identify and resolve issues before they impact your users.",
    },
    {
      icon: TrendingUp,
      title: "DIGITAL MARKETING",
      description:
        "Our digital marketing services are designed to drive online growth and increase your brand's visibility. We offer SEO, social media marketing, content marketing, and more to help you reach your target audience effectively. Our expertise as an IT company in Calicut guarantees results that propel your business forward.",
    },
    {
      icon: Cloud,
      title: "CLOUD COMPUTING",
      description:
        "Transforming Businesses with Scalable Cloud Computing. Cloud computing enables businesses to leverage scalable, flexible, and cost-effective infrastructure that can rapidly adapt to changing demands. By moving to the cloud, organizations can access powerful computing resources on-demand, without the need for costly hardware investments.",
    },
    {
      icon: Settings,
      title: "DEVOPS AUTOMATION",
      description:
        "Streamlining your development and operations for faster and more efficient delivery. Our DevOps automation services, supported by the expertise of an IT company in Calicut, enhance collaboration and productivity.",
    },
    {
      icon: Box,
      title: "SOFTWARE PROTOTYPING",
      description:
        "Bringing Ideas to Life with Software Prototyping. Software prototyping is a critical phase in the product development process that allows businesses and developers to test ideas, validate assumptions, and gather user feedback before committing to a final product. ",
    },
    {
      icon: Box,
      title: "SOFTWARE TESTING",
      description:
        "Ensuring your software is reliable, secure, and bug-free through rigorous testing. Our thorough testing processes, backed by our reputation as an IT company in Calicut, guarantee smooth and secure operation.",
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
    },
  };

  const Corner = () => (
    <span className="absolute w-4 h-4 text-gray-600">+</span>
  );

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
            SERVICES
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

      {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-sm text-neutral-400 max-w-md ml-auto mt-24 mb-12"
                >
                    For four generations, we've been crafting the legacy of metal, transforming it from a raw material into timeless art.
                </motion.p> */}

      <div className="min-h-screen  mt-4 text-white overflow-hidden">
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
                <span className="text-[#008d92]">We Do</span>
                <span className="text-[#008d92]">/</span>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-400 font-mono">
              At Auxxweb Solutions, the leading IT company in Calicut, we offer
              a range of services to help your business thrive in the digital
              world{" "}
            </p>
          </motion.div>

          <div className="relative">
            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden lg:block"
            ></motion.div>
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
                    className="text-2xl font-bold font-mono"
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
                    <p className="text-gray-400 font-mono">
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-neutral-400 text-center mt-6 max-w-xl mx-auto text-sm md:text-base"
            >
              Once you're satisfied with the plan, we'll get to work, ensuring
              timely delivery and exceptional quality to help your business
              thrive. As the best IT company in Calicut, we’ll guide you through
              the best solutions, leveraging our expertise to deliver results
              that exceed your expectations. Our dedicated team is committed to
              providing high-quality services tailored to your business needs,
              ensuring growth and success.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-4 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-400 transition-colors duration-300"
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
        For four generations, we've been crafting the legacy of metal,
        transforming it from a raw material into timeless art.
      </motion.p>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <Footer />
    </div>
  );
};

export default Services;
