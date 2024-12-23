import { useState } from "react";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Twitter, Music, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Menu from "../components/menu/Menu";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[340px] md:h-[400px] lg:h-[400px] bg-neutral-800 mt-10 text-white flex flex-col justify-center items-center relative p-4 md:p-8 rounded-t-[50px] md:rounded-t-[120px]">
      {/* Main Text with Button Overlay */}
      <div className="relative text-center w-full max-w-7xl mt-16 md:mt-24 px-4">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light transition-opacity duration-500 whitespace-nowrap ${
            isHovered ? "opacity-20" : "opacity-100"
          }`}
        >
          Pssst. Waiting you!
        </h1>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            className={`bg-transparent border border-[#00FF00] text-[#00FF00] rounded-full px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg
  transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_#00FF00] 
  hover:scale-110 hover:rounded-[30px] ${
    isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"
  }`}
            onClick={() => (window.location.href = "tel:+91 8590037942")} // Replace with your phone number
          >
            Reach Out to Us
            <span className="ml-2 text-xl sm:text-2xl">+</span>
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-7xl px-4 md:px-6 mt-20 md:mt-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-neutral-400 text-xs md:text-sm">
            <span>All Rights Reserved ©2024</span>
            <span>auxxweb@gmail.com</span>
          </div>

          {/* Middle Section - Social Icons */}
          <div className="flex items-center justify-center gap-4 my-4 md:my-0">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61571207122327" },
              { Icon: Twitter, href: "https://x.com/AuxxWeb" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/auxxweb-solutions/" },
              { Icon: Instagram, href: "https://www.instagram.com/auxxweb_solutions/" },
            ].map(({ Icon, href }, index) => (
              <NavLink
                key={index}
                to={href}
                className="bg-neutral-900 p-2 md:p-2.5 rounded-full transition-all duration-300
                hover:bg-[#008d92] hover:scale-110 hover:shadow-[0_0_15px_#008d92]"
              >
                <Icon className="w-4 h-4 text-white" />
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-neutral-400 text-xs md:text-sm">
            <NavLink
              to="#"
              className="hover:text-[#008d92] text-white transition-colors"
            >
              Terms & Conditions
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-[#008d92] ml-4 text-white transition-colors"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
