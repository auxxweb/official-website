import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "../components/ui/button";
import { Star, StarHalf } from "lucide-react";

const ratings = [
  {
    platform: "Google",
    rating: 4.5,
    reviews: "Based on Google reviewsss",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    platform: "Facebook",
    rating: 4.5,
    reviews: "Based on Facebook reviews",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#1877F2"
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    platform: "Clutch",
    rating: 4.9,
    reviews: "Based on 12 Clutch reviews",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#000"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
        />
      </svg>
    ),
  },
];

function RatingCard({ logo, rating, reviewText }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl py-2 px-4 shadow-lg hover:scale-105 transition-transform">
      <div className="flex-shrink-0 w-10 h-10">{logo}</div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-600">{reviewText}</span>
      </div>
    </div>
  );
}

export default function ConnectWithUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rating-card", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#111111]">

   
    <div
      ref={containerRef}
      className="h-auto mx-4  rounded-3xl flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-[#008d92] via-[#528e90] to-[#4f9fa2]"
    >
      <div className="text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Connect With Us <br />
          Let us bring your ideas to life.
        </h2>
        <p className="text-lg sm:pl-16 sm:pr-16 md:text-xl text-white/90 ">
          When you succeed, we succeed. Our team of experts will go above and
          beyond to understand your business and implement a solution that
          shows immediate impact.
        </p>
        <Button  className="bg-[#008d92] text-emerald-900 hover:bg-white/10 font-semibold px-8 py-4 rounded-full">
          Contact Us
        </Button>
        <div className="flex flex-wrap gap-6 items-center justify-center mt-8">
          {ratings.map((rating, index) => (
            <RatingCard
              key={index}
              logo={rating.icon}
              rating={rating.rating}
              reviewText={rating.reviews}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
