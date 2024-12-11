import React, { useLayoutEffect, useRef } from "react";
import "./hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const bg1 = useRef(null);
    const imgContainer = useRef(null);
    const centerImg = useRef(null);
    const leftImg = useRef(null);
    const rightImg = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Pin background section
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom",
                markers: true, // Debug markers
            });

            // Initial container offset setup
            gsap.set(container.current, {
                marginTop: -(container.current.offsetHeight),
            });

            // Parallax effect with zoom-out and text fade-out
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: imgContainer.current,
                        pin: imgContainer.current,
                        scrub: 3, // Controls scroll speed (increase value for slower scroll)
                        start: "0% 0%",
                    },
                })
                .to(centerImg.current, { transform: "translateZ(-500px)", duration: 1 }, 0) // Zoom-out effect
                .to(leftImg.current, { x: "-50%", opacity: 0, duration: 1 }, 0.05)
                .to(rightImg.current, { x: "50%", opacity: 0, duration: 1 }, 0.05)
                .to(
                    text1.current,
                    { y: -200, opacity: 0, duration: 1, ease: "power1.out" }, // Fade-out and move up
                    0.1
                )
                .to(
                    text2.current,
                    { y: -200, opacity: 0, duration: 1, ease: "power1.out" }, // Fade-out and move up
                    0.15
                )
                .fromTo(
                    container.current,
                    { yPercent: 100, scaleY: 2 },
                    { yPercent: 0, scaleY: 1, duration: 1 }
                );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative">
            {/* Background */}
            <div
                ref={bg1}
                className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"
            ></div>

            <section>
                {/* Main Image Container */}
                <div
                    ref={imgContainer}
                    className="perspective img-container flex items-center justify-center h-screen w-screen"
                >
                    {/* Left Image */}
                    <img
                        ref={leftImg}
                        src="https://www.dogseechew.in/storage/editor_61ef6aa53fc7d-joe-caione-qo-pif84vxg-unsplash-min.jpg"
                        alt="Left Image"
                        className="absolute left-[-20%] w-2/4  h-100vh object-cover"
                    />

                    {/* Center Image */}
                    <img
                        ref={centerImg}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "140%",
                            height: "100vh",
                            objectFit: "cover",
                            zIndex: -3,
                        }}
                        src="https://static.vecteezy.com/system/resources/previews/001/217/374/non_2x/black-mosaic-background-vector.jpg"
                        alt="Center Image"
                    />


                    {/* Right Image */}
                    <img
                        ref={rightImg}
                        src="https://www.dogseechew.in/storage/editor_61ef6aa53fc7d-joe-caione-qo-pif84vxg-unsplash-min.jpg"
                        alt="Right Image"
                        className="absolute right-[-20%] w-2/4 h-100vh object-cover"
                    />

                    {/* Text Overlay */}
                    <div className="text-white  absolute flex flex-col mr-24 items-center justify-center">
                        <h1 ref={text1} className=" text-[100px] font-bold">
                            <span className="text-stroke">Auxxweb</span>Above
                        </h1>
                        <br />
                        <p ref={text2} className="opacity-50 mt-20 w-[60-px] text-[19px] text-white text-center">
                            ahvshjabjh ajshbdvjah sdg ajshdjasdgjh hgashjdg
                        </p>
                    </div>
                </div>

                {/* Secondary Content */}
                <div
                    ref={container}
                    className="container py-12 flex flex-wrap items-center justify-around"
                >
                    <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
                        <img
                            className="w-[450px] h-[350px]"
                            src="./img/pic (4).jpg"
                            alt=""
                        />
                        <img
                            className="w-[400px] h-[350px]"
                            src="./img/pic (3).jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-2 flex flex-col gap-16">
                        <img
                            className="w-[600px] h-[350px]"
                            src="./img/pic (1).jpg"
                            alt=""
                        />
                        <img
                            className="w-[400px] h-[350px] last"
                            src="./img/pic (2).jpg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
