import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { gsap } from 'gsap'
// Tech stack data organized in rows
const techRows = [
  // Row 1
  [
    { name: "Swift", image: "./Logo/client-(1).jpg" },
    { name: "Docker", image: "./Logo/client-(1).jpg" },
    { name: "Kubernetes", image: "./Logo/client-(1).jpg" },
    { name: "Python", image: "./Logo/client-(1).jpg" },
    { name: "Ethereum", image: "./Logo/client-(1).jpg" },
    { name: "Solana", image: "./Logo/client-(1).jpg" },
    { name: "GraphQL", image: "./Logo/client-(1).jpg" },
    { name: "Rust", image: "./Logo/client-(1).jpg" },
    { name: "Polygon", image: "./Logo/client-(1).jpg" },
  ],
  // Row 2
  [
    { name: "Django", image: "./Logo/client-(1).jpg" },
    { name: "TensorFlow", image: "./Logo/client-(1).jpg" },
    { name: "Flutter", image: "./Logo/client-(1).jpg" },
    { name: "MongoDB", image: "./Logo/client-(1).jpg" },
    { name: "Google Cloud", image: "./Logo/client-(1).jpg" },
    { name: "Jenkins", image: "./Logo/client-(1).jpg" },
    { name: "PostgreSQL", image: "./Logo/client-(1).jpg" },
    { name: "Redis", image: "./Logo/client-(1).jpg" },
    { name: "Azure", image: "./Logo/client-(1).jpg" },
  ],
  // Row 3
  [
    { name: "JavaScript", image: "./Logo/client-(1).jpg" },
    { name: "React", image: "./Logo/client-(1).jpg" },
    { name: "Angular", image: "./Logo/client-(1).jpg" },
    { name: "Vue", image: "./Logo/client-(1).jpg" },
    { name: "TypeScript", image: "./Logo/client-(1).jpg" },
    { name: "HTML5", image: "./Logo/client-(1).jpg" },
    { name: "AWS", image: "./Logo/client-(1).jpg" },
    { name: "Node.js", image: "./Logo/client-(1).jpg" },
    { name: "CSS3", image: "./Logo/client-(1).jpg" },
  ],
];

const ScrollingRow = ({ tech, direction = 1, speed = 25 }) => {
    const controls = useAnimationControls();
    const rowRef = useRef(null);
  
    useEffect(() => {
      const animate = async () => {
        await controls.start({
          x: direction > 0 ? "-100%" : "100%",
          transition: {
            duration: speed,
            ease: "linear",
            repeat: Infinity, // Ensures infinite repeat
          },
        });
      };
      animate();
    }, [controls, direction, speed]);
  
    return (
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          ref={rowRef}
          className="flex gap-8 min-w-full"
          initial={{ x: direction > 0 ? "0%" : "-100%" }}
          animate={controls}
        >
          {[...tech, ...tech].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className=" rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain" // Increased width and height
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };
  

export default function TechStack() {
  return (
    <div className="m bg-[#111111] text-[#008d92]  py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#008d92] via-[#3e6668] to-[#548f91] text-transparent bg-clip-text">
            Trusted Clients
          </span>
          <br />
          <span className="from-[#008d92] via-[#3e6668] to-[#548f91]">
            Believe in our ability to deliver results.
          </span>
        </motion.h2>
{/* 
        <LogoSlider/> */}

        {/* <div className="space-y-12">
          {techRows.map((row, index) => (
            <ScrollingRow
              key={index}
              tech={row}
              direction={index % 2 ? 1 : -1}
              speed={30 + index * 5}
            />
          ))}
        </div> */}



        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-center text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Our team of developers have worked across multiple technologies. Let
          us assist you in making informed technology decisions.
        </motion.p>
      </div>
    </div>
  );
}




const logos = [
    {
      id: 1,
      name: 'Skill Sync',
      image: './Logo/client-(1).jpg'
    },
    {
      id: 2,
      name: 'Aswasam',
      image: './Logo/client-(2).jpg'
    },
    {
      id: 3,
      name: 'K Stories',
      image: './Logo/client-(3).jpg'
    },
    {
      id: 4,
      name: 'Gold Leaf',
      image: './Logo/client-(4).jpg'
    },
    {
      id: 5,
      name: 'Tech Corp',
      image: './Logo/client-(5).jpg'
    },
    {
      id: 6,
      name: 'Digital Solutions',
      image: './Logo/client-(6).jpg'
    },
    {
      id: 7,
      name: 'Innovation Labs',
      image: './Logo/client-(7).jpg'
    },
    {
      id: 8,
      name: 'Future Tech',
      image: './Logo/client-(8).jpg'
    },
    {
      id: 9,
      name: 'Cloud Systems',
      image: './Logo/client-(9).jpg'
    }
  ]


  const logos1 = [
    {
      id: 1,
      name: 'Skill Sync',
      image: './Logo/client-(1).png'
    },
    {
      id: 2,
      name: 'Aswasam',
      image: './Logo/client-(2).png'
    },
    {
      id: 3,
      name: 'K Stories',
      image: './Logo/client-(3).png'
    },
    {
      id: 4,
      name: 'Gold Leaf',
      image: './Logo/client-(4).png'
    },
    {
      id: 5,
      name: 'Tech Corp',
      image: './Logo/client-(5).png'
    },
    {
      id: 6,
      name: 'Digital Solutions',
      image: './Logo/client-(6).png'
    },
    {
      id: 7,
      name: 'Innovation Labs',
      image: './Logo/client-(7).png'
    },
    {
      id: 8,
      name: 'Future Tech',
      image: './Logo/client-(8).png'
    },
    {
      id: 9,
      name: 'Cloud Systems',
      image: './Logo/client-(9).png'
    }
  ]
  
  // Triple the logos array for seamless infinite scroll
  const allLogos = [...logos, ...logos1, ...logos]
  
   function LogoSlider() {
    const sliderRefs = [useRef(null), useRef(null), useRef(null)]
    const containerRef = useRef(null)
  
    useEffect(() => {
      const animations = sliderRefs.map((ref, index) => {
        const direction = index % 2 === 0 ? -1 : 1
        const speed = index === 1 ? 50 : 40 // Middle row slightly faster
  
        return gsap.to(ref.current, {
          x: direction * -50 + '%',
          duration: speed,
          ease: 'none',
          repeat: -1,
          onComplete: () => {
            gsap.set(ref.current, { x: 0 })
          }
        })
      })
  
      // Pause on hover
      const container = containerRef.current
      const handleMouseEnter = () => animations.forEach(anim => anim.pause())
      const handleMouseLeave = () => animations.forEach(anim => anim.play())
  
      container?.addEventListener('mouseenter', handleMouseEnter)
      container?.addEventListener('mouseleave', handleMouseLeave)
  
      return () => {
        animations.forEach(anim => anim.kill())
        container?.removeEventListener('mouseenter', handleMouseEnter)
        container?.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [])
  
    return (
      <div className="w-full bg-[#111111] py-20 overflow-hidden" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="relative">
            {[0, 1, 2].map((rowIndex) => (
              <div
                key={rowIndex}
                ref={sliderRefs[rowIndex]}
                className="flex items-center gap-8 mb-8 last:mb-0"
              >
                {allLogos.map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="flex-none w-[200px] h-20  rounded-lg flex items-center justify-center   border-gray-800 hover:border-green-500 transition-colors duration-300"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="max-w-[200px] max-h-full object-cover  filter invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-2xl text-green-500 font-semibold">
              Code. Collaborate. Conquer.
            </p>
          </div>
        </div>
      </div>
    )
  }
  