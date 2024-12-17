import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 1, title: "AI-Driven Efficiency", icon: "⚡" },
  { id: 2, title: "Scalable Solutions", icon: "⚡" },
  { id: 3, title: "Strategic Consulting", icon: "⚡" },
  { id: 4, title: "Smart Automation", icon: "⚡" },
  { id: 5, title: "Winning Advantage", icon: "⚡" },
  { id: 6, title: "Operational Excellence", icon: "⚡" },
];

const images = [
  {
    id: 1,
    src: "https://etimg.etb2bimg.com/photo/99959880.cms",
    alt: "Office space",
  },
  {
    id: 2,
    src: "https://etimg.etb2bimg.com/photo/99959880.cms",
    alt: "City view",
  },
  {
    id: 3,
    src: "https://etimg.etb2bimg.com/photo/99959880.cms",
    alt: "Team meeting",
  },
  {
    id: 4,
    src: "https://etimg.etb2bimg.com/photo/99959880.cms",
    alt: "Working space",
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate services on scroll
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      // Animate images with parallax effect
      const images = gsap.utils.toArray(".gallery-image");
      images.forEach((image) => {
        gsap.to(image, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Floating animation for images
      gsap.to(".gallery-container", {
        y: "20px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-[700px] pt-10  pr-20 bg-[#111111] ">
      <div className="container ml-10 mx-auto px-4  lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-8">
            <div className="inline-block">
              <span className="text-blue-500 text-2xl font-semibold tracking-wider">
                Who We Are
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Your Trusted Tech Partner.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              We offer a wide range of comprehensive software development and
              digital marketing services aimed at helping your business succeed
              and grow in the rapidly evolving digital world.
              <br /> Our team of
              skilled professionals works closely with clients to create
              tailored solutions that not only address their immediate needs but
              also position them for future success. With expertise in modern
              technologies and a deep understanding of market trends, we build
              innovative software applications that streamline operations,
              improve efficiency, and enhance the customer experience. 
             
              
            </p>

            <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500">{service.icon}</span>
                    <span className="text-blue-500">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imagesRef}
            className="gallery-container relative h-[400px] hidden lg:block"
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-image relative overflow-hidden rounded-lg ${
                    index === 0
                      ? "col-span-3 row-span-3"
                      : index === 1
                      ? "col-span-3 row-span-4 col-start-4 row-start-1"
                      : index === 2
                      ? "col-span-3 row-span-3 col-start-1 row-start-4"
                      : "col-span-3 row-span-2 col-start-4 row-start-5"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
