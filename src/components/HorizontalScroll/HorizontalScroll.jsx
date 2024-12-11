import React, { useEffect, useRef } from "react";
import "./HorizontalScroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const wrapperRef = useRef(null);
  const outroRef = useRef(null); // Ref for outro section

  useEffect(() => {
    const cards = [
      { id: "#card-1", endTranslateX: 2000, rotate: 45 },
      { id: "#card-2", endTranslateX: 1000, rotate: -30 },
      { id: "#card-3", endTranslateX: 2000, rotate: 45 },
      { id: "#card-4", endTranslateX: 1500, rotate: -30 },
    ];

    // Horizontal scrolling of the wrapper (right to left)
    const wrapperScroll = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "+=700vh", // Adjust the end point of the scroll
      scrub: 1,
      pin: true, // Pin the wrapper to make sure it stays fixed during the scroll
      onUpdate: (self) => {
        gsap.to(wrapperRef.current, {
          x: `${-350 * self.progress}vw`, // Reverse the direction of the scroll
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    // Animating each card (right to left)
    const cardTriggers = cards.map((card) =>
      ScrollTrigger.create({
        trigger: card.id,
        start: "top top",
        end: "+=1000vh",
        scrub: 3,
        onUpdate: (self) => {
          gsap.to(card.id, {
            x: `${card.endTranslateX * self.progress}px`, // Reverse translation for right to left
            rotate: `${card.rotate * self.progress * 2}deg`,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      })
    );

    // Make outro section visible after horizontal scroll section ends
    const outroScroll = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "bottom bottom",  // When the bottom of the horizontal scroll section is reached
      end: "bottom+=1 top", // The outro will show up after the horizontal section ends
      onEnter: () => {
        gsap.to(outroRef.current, {
          opacity: 1,
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(outroRef.current, {
          opacity: 0,
          duration: 1,
        });
      },
    });

    return () => {
      // Cleanup ScrollTriggers
      wrapperScroll.kill();
      cardTriggers.forEach((trigger) => trigger.kill());
      outroScroll.kill();
    };
  }, []);

  return (
    <div className="container">
      <nav>
        <a href="#">Auxxweb</a>
      </nav>
      <section className="wrapper-404" ref={wrapperRef}>
        <h1>404-page ha kajo kajoid mnjnsdhi fsk dhjfih jhsdfj shd </h1>
        <div className="card" id="card-1">
          <img
            src="https://media.istockphoto.com/id/1390242644/photo/smiling-people-in-the-meeting-room-using-a-laptop-searching-s.jpg?s=612x612&w=0&k=20&c=DtQoaRXByFbFNUXk1ZNIeWuQhTzKjsyC-1PeyenkfcE="
            alt=""
          />
        </div>
        <div className="card" id="card-2">
          <img
            src="https://media.istockphoto.com/id/1369288179/photo/cropped-portrait-of-two-young-businesspeople-standing-with-their-arms-folded-in-the-office.jpg?s=612x612&w=0&k=20&c=6TAJHIq85sZj6pQrSeysNY-vHYZSK6ABDDW8sxmKAz4="
            alt=""
          />
        </div>
        <div className="card" id="card-3">
          <img
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_148197267_970647970450037_90009.jpg"
            alt=""
          />
        </div>
        <div className="card" id="card-4">
          <img
            src="https://img.freepik.com/premium-photo/business-man-woman-working-together-office_23-2149206543.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="outro mt-80" ref={outroRef}>
        <h1>
          This page does not exist. Please check back later or return to the
          homepage.
        </h1>
      </section>
    </div>
  );
};

export default HorizontalScroll;
