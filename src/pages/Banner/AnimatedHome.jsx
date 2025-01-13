import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GeometricFrame from "./Geomatric";
import { ArrowUpRight } from "lucide-react";
import AboutSection from "../AboutSection";

gsap.registerPlugin(ScrollTrigger);

const frames = [
  {
    dimensions: "421.26 × 631.89",
    position: "-left-70 top-20 -rotate-12",
    image: "./banner/bnr (1).png",
  },
  {
    dimensions: "193.71 × 290.57",
    position: "right-10 -top-10 rotate-12",
    image: "./banner/bnr (2).png",
  },
  {
    dimensions: "193.71 × 290.57",
    position: "right-400 -top-50 rotate-12",
    image: "./banner/bnr (4).png",
  },
  {
    dimensions: "163.72 × 195.58",
    position: "right-0 top-40 rotate-12",
    image: "./banner/right.png",
  },
  {
    dimensions: "438 × 548",
    position: "right-80 bottom-10 rotate-12",
    image: "./banner/bnr (4).png",
  },
  {
    dimensions: "193.71 × 290.57",
    position: "-left-10 bottom--10 -rotate-6",
    image: "./banner/bnr (2).png",
  },
];

export default function Home() {
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for all elements
      gsap.from(".frame", {
        opacity: 0,
        scale: 0.8,
        rotation: -15,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".content-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".center-image", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        delay: 1,
        ease: "elastic.out(1, 0.5)",
      });

      // Scroll-based animations for home section
      ScrollTrigger.create({
        trigger: homeRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      gsap.to(homeRef.current, {
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.8,
        filter: "blur(90px)",
      });

      // About section reveal animation
      // gsap.from(aboutRef.current, {
      //   scrollTrigger: {
      //     trigger: aboutRef.current,
      //     start: "top bottom",
      //     end: "top center",
      //     scrub: 1,
      //   },
      //   opacity: 0,
      //   y: 100,
      // });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="w-full  bg-black relative overflow-hidden">
      <div
        ref={homeRef}
        className="min-h-screen"
        style={{
          backgroundImage: `url('https://blog.stockvault.net/wp-content/uploads/2020/07/preview-319.jpg')`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div ref={contentRef} className="container mx-auto px-4 py-20">
          <div className="relative min-h-[70vh]">
            {/* Center content */}
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <div className="relative center-container">
                <div
                  className="w-[450.95px] h-[450.95px] rounded-lg overflow-hidden frame 
                              sm:w-[314.95px] sm:h-[314.95px] 
                              md:w-[450.95px] md:h-[450.95px]"
                >
                  <div className="relative flex flex-col items-center justify-center h-full p-2 text-center">
                    <div className="relative w-80 h-80 mt-2 center-image">
                      <img
                        src="./banner/bnr (7).png"
                        alt="Center Banner"
                        className="object-cover rounded-full w-full h-full"
                      />
                    </div>
                    <h1 className="text-6xl mt-14 font-bold text-white content-text font-sans">
                      Auxxweb
                    </h1>
                    <p className="text-gray-200 max-w-md content-text">
                      The Heatz Wireless Mouse combines pinpoint accuracy with
                      an ergonomic build, designed for precision for long hours
                    </p>
                    <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:opacity-90 transition-opacity">
                      <ArrowUpRight className="w-8 bg-black text-white rounded-full h-8" />
                      <span className="text-sm font-medium">connect</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Geometric frames */}
            {frames.map((frame, index) => (
              <GeometricFrame
                key={index}
                dimensions={frame.dimensions}
                className={`absolute ${frame.position} frame`}
                imagePath={frame.image}
              />
            ))}
          </div>
        </div>
      </div>
      <div >   
        <AboutSection />
      </div>
    </main>
  );
}
