import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

const bubbleData = [
  { imgSrc: './Logo/client-(1).jpg', size: "lg", delay: 0 },
  { imgSrc: './Logo/client-(2).jpg', size: "md", delay: 0.2 },
  { imgSrc: './Logo/client-(3).jpg', size: "xl", delay: 0.4 },
  { imgSrc: './Logo/client-(4).jpg', size: "lg", delay: 0.6 },
  { imgSrc: './Logo/client-(5).jpg', size: "sm", delay: 0.8 },
  { imgSrc: './Logo/client-(6).jpg', size: "md", delay: 1 },
  { imgSrc: './Logo/client-(7).jpg', size: "sm", delay: 1.2 },
  { imgSrc: './Logo/client-(8).jpg', size: "xl", delay: 1.4 },
  // Adding more bubbles for better coverage
  { imgSrc: './Logo/client-(9).jpg', size: "md", delay: 1.6 },
  { imgSrc: './Logo/client-(10).jpg', size: "lg", delay: 1.8 },
  { imgSrc: './Logo/client-(11).jpg', size: "sm", delay: 2.0 },
  { imgSrc: './Logo/client-(1).png', size: "md", delay: 2.2 },
  { imgSrc: './Logo/client-(2).png', size: "sm", delay: 1.2 },
  { imgSrc: './Logo/client-(3).png', size: "xl", delay: 1.4 },
  // Adding more bubbles for better coverage
  { imgSrc: './Logo/client-(4).png', size: "md", delay: 1.6 },
  { imgSrc: './Logo/client-(5).png', size: "lg", delay: 1.8 },
  { imgSrc: './Logo/client-(6).png', size: "sm", delay: 2.0 },
  { imgSrc: './Logo/client-(7).png', size: "md", delay: 2.2 },
  { imgSrc: './Logo/client-(5).png', size: "lg", delay: 1.8 },
  { imgSrc: './Logo/client-(8).png', size: "sm", delay: 2.0 },
  { imgSrc: './Logo/client-(9).png', size: "md", delay: 2.2 },
];

const sizeMap = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
};

const iconSizeMap = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
};

export default function FloatingBubbles() {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;

    const bubbles = bubblesRef.current.filter(Boolean);
    const ctx = gsap.context(() => {
      // Clear any existing animations
      gsap.killTweensOf(bubbles);

      // Initial random positions within bounds
      bubbles.forEach((bubble) => {
        if (!bubble) return;
        gsap.set(bubble, {
          x: Math.random() * (dimensions.width - 100),
          y: Math.random() * (dimensions.height - 100),
          opacity: 0,
          scale: 0,
        });
      });

      // Entrance animation
      gsap.to(bubbles, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });

      // Continuous floating animation for each bubble
      bubbles.forEach((bubble, index) => {
        if (!bubble) return;

        const createFloatingAnimation = () => {
          const xDistance = Math.random() * 100 - 50;
          const yDistance = Math.random() * 100 - 50;
          const duration = Math.random() * 3 + 2;

          gsap.to(bubble, {
            x: `+=${xDistance}`,
            y: `+=${yDistance}`,
            duration: duration,
            ease: "sine.inOut",
            onComplete: () => {
              // Keep bubbles within bounds
              const rect = bubble.getBoundingClientRect();
              const newX = Math.max(
                0,
                Math.min(rect.left, dimensions.width - rect.width)
              );
              const newY = Math.max(
                0,
                Math.min(rect.top, dimensions.height - rect.height)
              );

              gsap.set(bubble, { x: newX, y: newY });
              createFloatingAnimation();
            },
          });

          // Independent rotation
          gsap.to(bubble, {
            rotation: "random(-180, 180)",
            duration: Math.random() * 10 + 5,
            ease: "none",
            repeat: -1,
            yoyo: true,
          });
        };

        setTimeout(() => createFloatingAnimation(), index * 100);
      });
    }, containerRef);

    return () => ctx.revert();
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[80vh] overflow-hidden bg-[#111111] "
    >
      {bubbleData.map((bubble, index) => {
        return (
          <div
            key={index}
            ref={(el) => (bubblesRef.current[index] = el)}
            className={`absolute ${sizeMap[bubble.size]} rounded-full 
              bg-green-600/30 backdrop-blur-md flex items-center justify-center
              shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-300
              hover:scale-110 cursor-pointer`}
            style={{
              transform: `translate3d(${Math.random() * 100}px, ${Math.random() * 100}px, 0px)`,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/50 to-green-700/50" />
            <img
              src={bubble.imgSrc}
              alt="bubble image"
              className={`${iconSizeMap[bubble.size]} object-contain z-10`}
            />
          </div>
        );
      })}
    </div>
  );
}
