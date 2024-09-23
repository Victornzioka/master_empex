"use client";

import logo from "@/assets/logo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

import { links } from "@/components/Navbar";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#293a8c] text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex">
          <Image
            src={logo}
            height={40}
            alt="logo"
            className="bg-white p-1 rounded-md"
          />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          {/* <SocialPin /> */}
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Sun & Moon Ventures, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
