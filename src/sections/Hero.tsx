"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import ects from "@/assets/ects.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 ] overflow-x-clip"
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="max-w-[800px]">
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#293a8c] mt-16">
            STREAMLINE YOUR LOGISTICS OPERATIONS WITH{" "}
            <span className="text-[#f09f21] font-bold">MASTER EMPEX</span>
          </h1>
        </div>
        <div className="mt-6 max-w-[450px]">
          <p className="text-center text-black/40 text-2xl ">
            A comprehensive logistics platform that revolutionazes your supply
            chain
          </p>
        </div>
        <div className="mt-10 md:mt-20">
          <motion.p
            className="bg-[#f09f21] text-white font-bold rounded-md py-1 text-center"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            Track your cargo while on transit, Be at peace!
          </motion.p>
          <motion.img
            src={ects.src}
            alt="cog image"
            className=""
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};
