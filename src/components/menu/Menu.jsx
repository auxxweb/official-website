import React, { useState, useEffect, useRef } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../../assets/1.png"
import Logo1 from "../../assets/3.png"


const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "about" },
  { path: "/services", label: "services" },
  { path: "/careers", label: "careers" },
  { path: "/blogs", label: "blogs" },
  { path: "/contact", label: "contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const handleClick = () => {
    window.open(`https://wa.me/+918590037942`, "_blank");
  };

  return (
    <div className="menu-container " ref={container}>
      <div className="menu-bar">
        <div className="menu-logo  inline-block px-3 py-1 rounded-xl bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3">
          <NavLink to="/" exact>
            <img
              src={Logo}
              alt="Logo"
              className="object-contain"
              style={{ width: "220px", height: "60px" }}
            />
          </NavLink>
        </div>
        <div
          className="menu-open mr-2 flex items-center cursor-pointer px-2 py-4 rounded-xl bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8  md:w-10 md:h-10 text-[#008d92]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>

        <div className="menu-overlay">
          <div className="menu-ovrlay-bar">
            <div className="menu-logo">
              <NavLink to="/" exact>
                <img
                  src={Logo1}
                  alt="Logo"
                  className="object-contain"
                  style={{ width: "220px", height: "60px" }}
                />
              </NavLink>
            </div>
          </div>

          {/* Always show the close icon */}
          <div className="menu-close-icon">
            <div className="menu-close" onClick={toggleMenu}>
              <p>&#x2715;</p>
            </div>
          </div>

          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <NavLink to={link.path} exact className="menu-link">
                      {link.label}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info">
            <div className="menu-info-cool">
  <a href="https://x.com/AuxxWeb" target="_blank" rel="noopener noreferrer">
    X&#8599;
  </a>
  <a href="https://www.instagram.com/auxxweb_solutions/" target="_blank" rel="noopener noreferrer">
    Instagram &#8599;
  </a>
  <a href="https://www.facebook.com/profile.php?id=61571207122327" target="_blank" rel="noopener noreferrer">
    Facebook &#8599;
  </a>
  <a onClick={handleClick} href="" target="_blank" rel="noopener noreferrer">
    Whatsapp &#8599;
  </a>
  <a href="https://www.linkedin.com/company/auxxweb-solutions/" target="_blank" rel="noopener noreferrer">
    Linkedin &#8599;
  </a>
</div>

              <div className="menu-info-cool">
                <p>Auxxweb@gmail.com</p>
                <p>+91 8590037942</p>
              </div>
            </div>
          </div>
          <div className="menu-preview"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
