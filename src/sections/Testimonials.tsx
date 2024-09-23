"use client";

import avatar from "@/assets/avatar.jpg";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Sunmoon ventures is the real deal. I have always recieved my goods in Rwanda in good time and the perfect condition, I recommend.",
    imageSrc: avatar.src,
    name: "Eric",
    username: "@Meerata Investments, Kigali",
  },
  {
    text: "Talk of professionalism and charisma. These guys are top notch. You need to try them out.",
    imageSrc: avatar.src,
    name: "African Global Logistics",
    username: "@African Global Logistics",
  },
  {
    text: "Perfect partners, keeping their word always. Among the best partners to ever engage with. ",
    imageSrc: avatar.src,
    name: "Gorilla Logistics",
    username: "@Gorilla Logistics",
  },
  {
    text: "Sunmoon ventures is the real deal. I have always recieved my goods in Rwanda in good time and the perfect condition, I recommend.",
    imageSrc: avatar.src,
    name: "Eric",
    username: "@Meerata Investments, Kigali",
  },
  {
    text: "Talk of professionalism and charisma. These guys are top notch. You need to try them out.",
    imageSrc: avatar.src,
    name: "African Global Logistics",
    username: "@African Global Logistics",
  },
  {
    text: "Perfect partners, keeping their word always. Among the best partners to ever engage with. ",
    imageSrc: avatar.src,
    name: "Gorilla Logistics",
    username: "@Gorilla Logistics",
  },
  {
    text: "Sunmoon ventures is the real deal. I have always recieved my goods in Rwanda in good time and the perfect condition, I recommend.",
    imageSrc: avatar.src,
    name: "Eric",
    username: "@Meerata Investments, Kigali",
  },
  {
    text: "Talk of professionalism and charisma. These guys are top notch. You need to try them out.",
    imageSrc: avatar.src,
    name: "African Global Logistics",
    username: "@African Global Logistics",
  },
  {
    text: "Perfect partners, keeping their word always. Among the best partners to ever engage with. ",
    imageSrc: avatar.src,
    name: "Gorilla Logistics",
    username: "@Gorilla Logistics",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6 "
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={username}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />

                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our clients say</h2>
          <p className="section-description mt-5">
            Delivering excellence, one shipment at a time, ensuring reliability
            and satisfaction with every delivery.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
