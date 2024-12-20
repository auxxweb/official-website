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
    src: "https://st.depositphotos.com/1907633/2378/i/450/depositphotos_23781507-stock-photo-businessman-hand-working-with-new.jpg",
    alt: "Office space",
  },
  {
    id: 2,
    src: "https://etimg.etb2bimg.com/photo/99959880.cms",
    alt: "City view",
  },
  {
    id: 3,
    src: "https://t4.ftcdn.net/jpg/05/85/00/55/360_F_585005559_YNUJFQaDLRWN61mGNxWzz9GZypXSrOgz.jpg",
    alt: "Team meeting",
  },
  {
    id: 4,
    src: "https://t4.ftcdn.net/jpg/04/26/71/99/360_F_426719952_WtHWVePXzO2iBOdAX5IjGyCumcgj467Q.jpg",
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
    <div ref={containerRef} className="pt-10 pr-20 bg-[#111111]">
      <div className="container ml-10 mx-auto px-4 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section (Text) */}
          <div ref={textRef} className="space-y-8">
            <div className="inline-block">
              <span className="text-[#008d92] text-2xl font-semibold tracking-wider font-mono uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#008d92] via-[#2b4f51] to-[#008d92] text-transparent bg-clip-text uppercase">
              Your Trusted Tech Partner.
            </h2>

            <p className="text-gray-400 text-lg sm:text-md md:text-2xl leading-relaxed font-mono">
              We offer a wide range of comprehensive software development and
              digital marketing services aimed at helping your business succeed
              and grow in the rapidly evolving digital world.
              <br /> Our team of skilled professionals works closely with
              clients to create tailored solutions that not only address their
              immediate needs but also position them for future success. With
              expertise in modern technologies and a deep understanding of
              market trends, we build innovative software applications that
              streamline operations, improve efficiency, and enhance the
              customer experience.
            </p>

            {/* Services Section */}
            {/* <div className="services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500 bg-white">{service.icon}</span>
                    <span className="text-blue-500">{service.title}</span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Section (Gallery/Images) */}
          <div ref={imagesRef} className="gallery-container relative">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 grid-rows-6 gap-4 h-full">
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
                    className="object-cover transition-transform duration-700 hover:scale-110 w-full h-full"
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
