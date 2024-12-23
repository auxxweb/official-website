

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const surroundingImages = [
  { src: './banner/bnr (1).png', alt: 'Surrounding Image 1' },
  { src: './banner/bnr (3).png', alt: 'Surrounding Image 2' },
  { src: './banner/bnr (2).png', alt: 'Surrounding Image 3' },
  { src: './banner/bnr (5).png', alt: 'Surrounding Image 4' },
  { src: './banner/bnr (6).png', alt: 'Surrounding Image 5' },
  { src: './banner/bnr (2).png', alt: 'Surrounding Image 6' },
  { src: './banner/bnr (4).png', alt: 'Surrounding Image 7' },
  { src: './banner/bnr (3).png', alt: 'Surrounding Image 8' },
]

export default function Heroo() {
  const sectionRef = useRef(null)
  const imagesRef = useRef([])

  useEffect(() => {
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
        },
      })

      // Animate surrounding images
      imagesRef.current.forEach((img, index) => {
        if (img) {
          tl.to(
            img,
            {
              opacity: 0,
              scale: 0.8,
              y: index % 2 === 0 ? -50 : 50,
              duration: 1,
            },
            0
          )
        }
      })

      // Animate center image
      tl.to(
        '.center-image',
        {
          opacity: 0,
          scale: 1.2,
          duration: 1,
        },
        0
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="h-screen relative overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="./banner/bnr (7).png"
          alt="Center Image"
          className="center-image w-64 h-64 object-cover rounded-full shadow-lg"
        />    
      </div>
      {surroundingImages.map((img, index) => (
        <img
          key={index}
          ref={(el) => (imagesRef.current[index] = el)} 
          src={img.src}
          alt={img.alt}
          className={`absolute w-32 h-32 object-cover rounded-lg shadow-md transform ${getImagePosition(
            index
          )}`}
        />
      ))}
    </section>
  )
}

function getImagePosition(index) {
  const positions = [
    'top-1/4 left-1/4',
    'top-1/4 right-1/4',
    'bottom-1/4 left-1/4',
    'bottom-1/4 right-1/4',
    'top-1/2 left-10',
    'top-1/2 right-10',
    'left-1/2 top-10',
    'left-1/2 bottom-10',
  ]
  return positions[index % positions.length]
}

