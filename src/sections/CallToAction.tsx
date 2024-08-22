"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";

export const CallToAction = () => {
  const [seen, setSeen] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  function handlePopUp() {
    setSeen(!seen);
  }

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#D2DCFF] to-[#fff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">
            Partner with Us for Unmatched Logistics
          </h2>
          <p className="section-description mt-5">
            Take the Next Step: Partner with Us for Unmatched Logistics
            Solutions, Reliable Service, and a Seamless Experience from Start to
            Finish
          </p>
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button
            className="btn bg-[#293a8c] text-white gap-1"
            onClick={handlePopUp}
          >
            <span>Book an Appointment</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        {seen && <ContactForm />}
      </div>
    </section>
  );
};
