

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from "../components/ui/button"
import { Star } from 'lucide-react'

const ratings = [
  {
    platform: 'Google',
    rating: 4.5,
    reviews: 'Based on Google',
    icon: '/placeholder.svg?height=24&width=24',
    bgColor: 'bg-white'
  },
  {
    platform: 'Facebook',
    rating: 4.5,
    reviews: 'Based on Facebook',
    icon: '/placeholder.svg?height=24&width=24',
    bgColor: 'bg-white'
  },
  {
    platform: 'Clutch',
    rating: 4.9,
    reviews: 'Based on 11 Clutch reviews',
    icon: '/placeholder.svg?height=24&width=24',
    bgColor: 'bg-white'
  }
]

export default function ConnectWithUs() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.animate-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Animate description
      gsap.from('.animate-description', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      })

      // Animate rating cards
      gsap.from('.rating-card', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.8,
        ease: 'back.out(1.7)'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    
    <div 
      ref={containerRef}
      className=" h-[450px] ml-10 mr-10 mt-10 mb-10 rounded-3xl flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-400"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
         
          <h2 className="animate-title text-4xl md:text-6xl font-bold text-white leading-tight">
            Connect With Us <br />
            Let us bring your ideas to life.
          </h2>
        </div>

        <p className="animate-description text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          When you succeed, we succeed. Our team of experts will go above and beyond to understand your business and implement a solution that shows immediate impact.
        </p>

        <Button 
          className="animate-description bg-white text-emerald-900 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full"
        >
          Contact us
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {ratings.map((rating, index) => (
            <div
              key={rating.platform}
              className="rating-card transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-xl p-4 flex items-center space-x-3">
                <img
                  src={rating.icon}
                  alt={rating.platform}
                  className="w-6 h-6"
                />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-bold text-gray-900">{rating.rating}</span>
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(rating.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 fill-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{rating.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

