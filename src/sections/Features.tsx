"use client";

import ects from "@/assets/ects.png";
import temperature_truck from "@/assets/temperature-controlled-trucks.png";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  return (
    <section className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }}
        // viewport={{ once: true }}
        className="container"
      >
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Features</div>
          </div>
          <h2 className="section-title mt-5">
            Powerful features that set us apart
          </h2>
          <p className="section-description italic text-black/40 mt-5">
            Choose us for reliable, efficient logistics solutions and
            exceptional customer service that exceeds expectations
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            <Image
              src={ects}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-black text-[#293a8c] mb-3 mt-3">
                Electronic Cargo Tracking System
              </h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading. This
                ensures safety of cargo while in transit.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={temperature_truck}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-black text-[#293a8c] mb-3 mt-3">
                Temperature Controlled Trucks
              </h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={ects}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-black text-[#293a8c] mb-3 mt-3">
                Remote Areas Fleet Communication
              </h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-10">
          <Link
            href="/features"
            className="bg-[#293a8c]/70 text-[#fff] p-4 rounded-lg"
          >
            Explore Additional Features
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
