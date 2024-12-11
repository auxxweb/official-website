import { useState } from "react";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Twitter, Music } from "lucide-react";
import { NavLink } from "react-router-dom";
import Menu from "../components/menu/Menu";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[330px] bg-neutral-800 text-white flex flex-col justify-center items-center relative p-8 rounded-t-[120px]">
    
      {/* Main Text with Button Overlay */}
      <div className="relative text-center w-full max-w-7xl mt-24">
        <h1
          className={`text-6xl  md:text-8xl font-light transition-opacity duration-500 whitespace-nowrap ${
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
            className={`
              bg-transparent border border-[#00FF00] text-[#00FF00] rounded-full px-8 py-6 text-lg
              transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_#00FF00] 
              hover:scale-110 hover:rounded-[30px]
              ${isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}
            `}
          >
            Get Early Access Now
            <span className="ml-2 text-2xl">+</span>
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-7xl px-6 mt-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <span>All Rights Reserved ©2024</span>
            <span>contact@flashquad.com</span>
          </div>

          {/* Middle Section - Social Icons */}
          <div className="flex items-center justify-center gap-4 my-4 md:my-0">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Music, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, index) => (
              <NavLink
                key={index}
                to={href}
                className="bg-neutral-900 p-2.5 rounded-full transition-all duration-300
                           hover:bg-[#00FF00] hover:scale-110 hover:shadow-[0_0_15px_#00FF00]"
              >
                <Icon className="w-4 h-4 text-white" />
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex gap-4 text-neutral-400 text-xs">
            <NavLink  to="#" className="hover:text-white transition-colors text-sm">
              Terms & Conditions
            </NavLink>
            <NavLink to="#" className="hover:text-white transition-colors text-sm">
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}