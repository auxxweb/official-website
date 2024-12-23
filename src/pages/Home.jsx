import React from "react";
import  Heroo from "../components/Hero/Hero";
import Menu from "../components/menu/Menu";
import Footer from "./Footer";
import PricingCards from "./Pricing";
import PeopleCards from "./PeopleCards";
import TechStack from "./TechPlatforms";
import ServiceCard from "../components/HorizontalScroll/HorizontalScroll";
import ConnectWithUs from "./Connect";
import FloatingBubbles from "./Companies";
import { FaWhatsapp } from "react-icons/fa";
import FAQ from "./FAQ";
import AnimatedHome from "./Banner/AnimatedHome";
import AboutSection from "./AboutSection";

const Home = () => {
  const handleClick = () => {
    window.open(`https://wa.me/8590037942`, "_blank");
  };

  return (
    <div className="bg-[#111111] relative">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
        style={{
          backgroundSize: "50px 50px",
        }}
      >
        {/* Menu is fixed at the top */}
        <Menu />
        {/* Hero Section */}
        {/* <Heroo /> */}
        <AnimatedHome/>
        {/* <AboutSection/> */}
        <ServiceCard />
        <PeopleCards />      
        <TechStack />
        <FloatingBubbles />
        <PricingCards />
        <FAQ/>
        <ConnectWithUs />
        <Footer />

        {/* WhatsApp Button */}
        <button
          className="fixed bottom-8 right-8 z-50 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          onClick={handleClick}
        >
          <FaWhatsapp size={34} />
        </button>
      </div>
    </div>
  );
};

export default Home;
