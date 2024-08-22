"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import kenafric from "@/assets/kenafric_logo.png";
import kapa from "@/assets/Kapa-Logo.png";
import chandaria from "@/assets/chandaria_logo.jpg";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="contaner">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={kenafric}
              alt="acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={kapa}
              alt="quantum logo"
              className="logo-ticker-image"
            />
            <Image
              src={chandaria}
              alt="echo logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              className="logo-ticker-image"
            />

            {/* ------------second set of logos for animation------------------- */}
            <Image
              src={kenafric}
              alt="acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={kapa}
              alt="quantum logo"
              className="logo-ticker-image"
            />
            <Image
              src={chandaria}
              alt="echo logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
