import React, { useLayoutEffect, useRef } from "react";
import "./hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "../../pages/AboutSection";

gsap.registerPlugin(ScrollTrigger);

export const Heroo = () => {
  const imgContainer = useRef(null);
  const centerImg = useRef(null);
  const leftImg = useRef(null);
  const rightImg = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create the scroll animation for the hero content
      gsap
        .timeline({ 
          scrollTrigger: {
            trigger: imgContainer.current,
            pin: true,
            scrub: 2, // Smooth scrolling effect
            start: "top top",
            end: "bottom top", // Transition ends as the section scrolls up
            pinSpacing: true, // Ensures space after the pinned section
          },
        })
        .to(centerImg.current, { scale: 0.8, duration: 1 }, 0)
        .to(leftImg.current, { x: "-50%", opacity: 0, duration: 1 }, 0.1)
        .to(rightImg.current, { x: "50%", opacity: 0, duration: 1 }, 0.1)
        .to(text1.current, { y: -150, opacity: 0, duration: 1 }, 0.2)
        .to(text2.current, { y: -150, opacity: 0, duration: 1 }, 0.3);
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return ( 
    <>
      {/* Hero Section */}
      <div className="relative bg-[#111111] h-[110vh]">
        {/* Main Image Container */}
        <div
          ref={imgContainer}
          className="perspective img-container flex items-center justify-center h-full w-screen overflow-hidden"
        >
          {/* Left Image */}
          <img
            ref={leftImg}
            src="https://png.pngtree.com/png-vector/20241017/ourmid/pngtree-design-a-dynamic-flowing-splash-of-paint-in-multiple-bright-colors-png-image_14107624.png"
            alt="Left"
            className="absolute left-[-20%] w-2/4 object-cover"
          />

          {/* Right Image */}
          <img
            ref={rightImg}
            src="https://png.pngtree.com/png-vector/20241017/ourmid/pngtree-design-a-dynamic-flowing-splash-of-paint-in-multiple-bright-colors-png-image_14107624.png"
            alt="Right"
            className="absolute right-[-20%] w-2/4 object-cover"
          />

          {/* Text Overlay */}
          <div className="text-white absolute flex flex-col items-center justify-center">
            <h1 ref={text1} className="text-[100px] font-bold">
              <span className="text-stroke">Auxxweb Solutions</span>
            </h1>
            <p
              ref={text2}
              className="opacity-50 mt-8 text-[19px] text-white text-center"
            >
              Uniting Efforts to Achieve Greater Success Together
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative">
        <AboutSection />
      </div>
    </>
  );
};
  