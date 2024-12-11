import React from "react";

// CardContainer will define the outer container for the card
export function CardContainer({ className, children, ...props }) {
  return (
    <div
      className={`group perspective-[1500px] relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// CardBody will define the actual card content
export function CardBody({ className, children, ...props }) {
  return (
    <div
      className={`group-hover:transform group-hover:translate-z-10 transition-transform bg-white rounded-xl shadow-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// CardItem will define individual items inside the card, like text or images
export function CardItem({ className, translateZ, children, ...props }) {
  return (
    <div
      className={`transform transition-transform ${translateZ ? `translateZ(${translateZ}px)` : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}