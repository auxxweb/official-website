import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Faq = () => {
  const [hoveredLogo, setHoveredLogo] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const logos = [
    { name: "Google", url: "/seventhSection/google.webp" },
    { name: "Meta", url: "/seventhSection/meta.webp" },
    { name: "OnlyFans", url: "/seventhSection/onlyfans.webp" },
    { name: "NETFLIX", url: "/seventhSection/netflix.webp" },
    { name: "Google", url: "/seventhSection/google.webp" },
    { name: "Meta", url: "/seventhSection/meta.webp" },
    { name: "OnlyFans", url: "/seventhSection/onlyfans.webp" },
    { name: "NETFLIX", url: "/seventhSection/netflix.webp" },
  ];

  const faqs = [
    {
      question: "What is Auxxweb Solution? ",
      answer:
        " Auxxweb Solution is recognized as the best IT company in Calicut, offering comprehensive services in software development, digital marketing, and IT consulting.",
    },
    {
      question: "What services does Auxxweb Solution offer?",
      answer:
        " The best IT company in Calicut, Auxxweb Solution provides Web Development, Mobile App Development, UI/UX Design, Software Testing, Digital Marketing, Cloud Computing, DevOps automation, Software prototyping services.",
    },
    {
      question: "How can I contact Auxxweb Solution?",
      answer:
        "  You can reach them via their website contact form, email, or phone number provided on their website.",
    },
    {
      question:
        "Do you offer custom web development? ",
      answer:
        "Yes, Auxxweb Solution specialises in custom web development tailored to your business needs.",
    },
    {
      question: "What digital marketing services do you provide? ",
      answer:
        "   As the best IT company in Calicut, they offer SEO, social media marketing, and content marketing,Analytics & Insights.",
    },
    {
        question: "Can you develop mobile apps for both Android and iOS? ",
        answer:
          "        Yes, Auxxweb Solution the best IT company in Calicut develops mobile apps for both Android and iOS platforms.",
      },{
        question: "Do you provide website maintenance and support?",
        answer:
          "Yes, the best IT company in Calicut offers ongoing maintenance and support for websites to ensure smooth operation.",
      },{
        question: "What makes Auxxweb Solution the best IT company in Calicut?",
        answer:
          "  Auxxweb Solution, the best IT company in Calicut, stands out for its innovative approach, delivering high-quality web development, app solutions, and digital marketing. Their experienced team of developers and designers work closely with clients to ensure that their app meets business objectives. We also offer ongoing support and maintenance to ensure the app continues to perform at its best.",
      }
      ,{
        question: "What technologies do you use for web development?",
        answer:
          "     Auxxweb Solution,the best IT company in Calicut, uses a variety of technologies including HTML, CSS, JavaScript,PHP,Python,wordpress,react, laravel,node.js,typescript.",
      },
      {
        question: "What is the typical process for mobile app development?",
        answer:
          "        Auxxweb Solution,the best IT company in Calicut process includes initial consultation, high-performance apps for iOS and Android, designed to engage your target audience,requirement analysis, design and prototyping, development, testing and quality assurance, deployment and launch, and post-launch support.",
      },
    // {
    //   question: "Is Proactic suitable for small businesses?",
    //   answer:
    //     "Yes, Proactic allows you to schedule posts in advance across multiple platforms, helping you maintain a consistent online presence.",
    // },
    // {
    //   question: "Does Proactic offer customer support?",
    //   answer:
    //     "Yes, Proactic provides customer support to assist you with any questions or issues you may encounter.",
    // },
    // {
    //   question: "Is there a free trial available for Proactic?",
    //   answer:
    //     "Proactic offers a free trial so you can explore its features and see how it can benefit your social media marketing efforts.",
    // },
    // {
    //   question: "How can I get started with Proactic?",
    //   answer:
    //     "To get started with Proactic, simply sign up on our website and follow the onboarding process to set up your account.",
    // },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-[#111111] h-fit flex items-center justify-center w-full">
      {/* <div className="w-full p-4 md:p-12 h-64 md:h-72 relative">
        <h2 className="text-lg md:text-xl text-center mb-4 md:mb-6 mt-8 md:mt-12 text-gray-300">
          Trusted by big industries
        </h2>

        <div className="absolute left-0 top-0 bottom-0 w-1/4 md:w-1/2 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/2 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>

        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-all  duration-300 ease-in-out p-2"
                onMouseEnter={() => setHoveredLogo(logo.name)}
                onMouseLeave={() => setHoveredLogo("")}
              >
                <img
                  loading="lazy"
                  src={logo.url}
                  alt={logo.name}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    hoveredLogo === logo.name
                      ? "filter-none"
                      : "filter grayscale"
                  }`}
                  style={{ width: "80px", height: "40px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      <div className="h-full w-[900px] flex flex-col items-center justify-center p-4">
        <h2 className="text-transparent font-semibold text-2xl md:text-4xl lg:text-5xl mt-16 md:mt-28 mb-16 md:mb-24 text-center bg-clip-text bg-gradient-to-r from-[#008d92] to-[#397779]">
          Frequently Asked Questions
        </h2>

        <div className="ml-2 mr-2 w-full font-bold text-black space-y-6 md:space-y-11 mb-16 md:mb-32">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#000] rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="w-full text-left p-3 md:p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#A3A3A3] text-md md:text-lg font-bold">
                    {faq.question}
                  </h3>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-[#A3A3A3] font-normal p-3 md:p-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Faq);
