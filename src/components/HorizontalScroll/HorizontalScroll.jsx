"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcaseItems = [
  {
    id: 1,
    number: "1",
    title: "Mobile App Development",
    subtitle:
      "Creating innovative and user-friendly mobile applications for both Android and iOS platforms is our specialty as an IT company in Calicut.",
    description: " ",
  },
  {
    id: 2,
    number: "2",
    title: "Web Development",
    subtitle:
      "As a premier IT company in Calicut, we craft responsive and engaging websites tailored to your business needs.",
    description:
      "",
  },
  {
    id: 3,
    number: "3",
    title: "UI/UX Design",
    subtitle:
      "User-centric designs that enhance user experience and drive engagement.",
    description:
      "Reimagining architectural possibilities through bold vision and transformative design thinking.",
  },
  {
    id: 4,
    number: "4",
    title: "Software Testing",
    subtitle: "Ensuring Quality Through Rigorous Software Testing",
    description:
      "Creating immersive environments that engage and inspire through thoughtful architectural design.",
  },
  {
    id: 5,
    number: "5",
    title: "Digital Marketing",
    subtitle:
      "Comprehensive strategies to increase your online presence and drive growth.",
    description:
      "Evolving architectural practices to meet future challenges and environmental responsibilities.",
  },
  {
    id: 6,
    number: "6",
    title: "Cloud Computing",
    subtitle: "Transforming Businesses with Scalable Cloud Computing.",
    description:
      "Creating harmony between aesthetic beauty and practical functionality in every design.",
  },
  {
    id: 7,
    number: "7",
    title: "Devops Automation",
    subtitle: "Streamlining Development with DevOps Automation.",
    description:
      "Creating harmony between aesthetic beauty and practical functionality in every design.",
  },
  {
    id: 8,
    number: "8",
    title: "Software Prototyping",
    subtitle: "Bringing Ideas to Life with Software Prototyping.",
    description:
      "Creating harmony between aesthetic beauty and practical functionality in every design.",
  },
  {
    id: 7,
    number: "7",
    title: "Devops Automation",
    subtitle: "Streamlining Development with DevOps Automation.",
    description:
      "Creating harmony between aesthetic beauty and practical functionality in every design.",
  },
  {
    id: 8,
    number: "8",
    title: "Software Prototyping",
    subtitle: "Bringing Ideas to Life with Software Prototyping.",
    description:
      "Creating harmony between aesthetic beauty and practical functionality in every design.",
  },
];

export default function ServiceCard() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!container || cards.length === 0) return;

    let ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill());

      if (isMobile) {
        // Mobile animation
        gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (cards.length - 1),
            end: () => "+=" + container.offsetWidth * (cards.length - 1),
          },
        });
      } else {
        // Desktop animation
        gsap.to(cards, {
          xPercent: -100 * (cards.length - 5),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (cards.length - 5),
            end: () => "+=" + (container.offsetWidth * (cards.length - 5)) / 5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isMobile]);

  const handleCardHover = (index) => {
    if (!isMobile) {
      setActiveCard(index);
      const card = cardsRef.current[index];
      if (card) {
        gsap.to(card.querySelector(".content"), {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  const handleCardLeave = (index) => {
    if (!isMobile) {
      setActiveCard(null);
      const card = cardsRef.current[index];
      if (card) {
        gsap.to(card.querySelector(".content"), {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <div className="overflow-hidden ">
      <div className="bg-[#111111] h-[300px] pt-16 md:pt-32  py-2 md:h-[300px]">
        <div className="container mx-auto bg-[#111111] px-4">
          <h2 className="font-mono text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-[#008d92] to-[#295455] bg-clip-text text-transparent mb-4 md:mb-8">
            Our Services
          </h2>
          <p className="font-mono pb-10 text-center text-lg md:text-2xl text-gray-500 px-4">
            At Auxxweb Solutions, the leading IT company in Calicut, we offer a
            range of services to help your business thrive in the digital world:
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className={`${
          isMobile ? "h-[100vh] bg-[#111111] pt-40 pl-4 " : "h-screen"
        } relative bg-[#111111] h-[100vh] pt-40 flex gap-4 md:gap-6 px-2 md:px-4`}
      >
        {showcaseItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={`flex-none ${
              isMobile ? "w-[90vw]" : "w-1/3"
            } h-[74vh] relative border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-cover bg-center bg-no-repeat`}
            style={{
              backgroundImage:
                "url('https://www.thecuneiform.com/wp-content/uploads/2024/04/MicrosoftTeams-image-58-1024x683.webp')",
            }}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardLeave(index)}
          >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8  ">
              <div>
                <h2 className="font-mono text-3xl md:text-5xl text-start font-bold bg-gradient-to-r from-[#ffffff] to-[#295455] bg-clip-text text-transparent mb-2 relative">
                  {item.title}
                </h2>

                <div
                  className={`inline-block px-3 py-1 rounded-xl bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3 content mt-4 md:mt-8 mr-2 ${
                    isMobile ? "" : "opacity-0 transform translate-y-4"
                  }`}
                >
                  <p className="inline-block px-3 py-1 rounded-xl bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3 text-xl md:text-2xl font-mono text-black mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-base md:text-lg font-mono text-white">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="number text-2xl md:text-[30px] font-bold text-gray-100 pointer-events-none opacity-30">
                <button>View more</button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
