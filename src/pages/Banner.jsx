import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedHero() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const leftImageRef = useRef(null)
  const rightImageRef = useRef(null)
  const titleRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const nextComponentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Animation: Fade-in and Slide-in
      gsap.fromTo(
        [leftImageRef.current, rightImageRef.current],
        { x: 0, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.2,
        }
      )

      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: 'power3.out',
        }
      )

      // Scroll-based animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true, // Smooth animation on scroll
          pin: true,
          anticipatePin: 1,
        },
      })

      // Left and Right images move smoothly out
      tl.to(
        leftImageRef.current,
        {
          x: '-120%',
          opacity: 0,
          duration: 2,
          ease: 'power2.inOut',
        },
        0
      )

      tl.to(
        rightImageRef.current,
        {
          x: '120%',
          opacity: 0,
          duration: 2,
          ease: 'power2.inOut',
        },
        0
      )

      // Title moves to the top and fades slightly
      tl.to(
        titleRef.current,
        {
          y: '-100%',
          scale: 1.2,
          opacity: 0.5,
          duration: 2,
          ease: 'power2.inOut',
        },
        0
      )

      // Scroll Indicator fades out
      tl.to(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0
      )

      // Next Component fades in
      tl.to(
        nextComponentRef.current,
        {
          opacity: 1,
          duration: 2,
          ease: 'power2.inOut',
        },
        '-=0.5'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Content Area */}
      <div ref={contentRef} className="absolute inset-0 flex items-center justify-center">
        {/* Left Image */}
        <div ref={leftImageRef} className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3">
          <img
            src="https://etimg.etb2bimg.com/photo/99959880.cms"
            alt="Left decorative image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div ref={rightImageRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3">
          <img
            src="https://etimg.etb2bimg.com/photo/99959880.cms"
            alt="Right decorative image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <div
        ref={titleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          AuxxwebAbove
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg md:text-xl uppercase tracking-widest">
          AHVSHJABJH AJSHBDVJAH SDG AJSHDJASDGJH HGASHJDG
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-500 text-sm tracking-wider"
      >
        <div className="animate-bounce">scroll</div>
      </div>

      {/* Next Component */}
      <div
        ref={nextComponentRef}
        className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-0"
      >
        <h2 className="text-white text-4xl">Next Component Content</h2>
      </div>
    </div>
  )
}
