"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";

import Image from "next/image";
import Link from "next/link";

import Navbar, { links } from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  function handlePopUp() {
    setVisible(!visible);
  }

  const handleOnClose = () => setVisible(false);
  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-20">
        <div className="flex justify-center items-center py-3 bg-[#293a8c] text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">
            Streamline your workflow and boost your productivity
          </p>
          <div className="inline-flex gap-1 items-center">
            Get Started for free
            <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" />
          </div>
        </div>
        <div className="py-5 bg-[#fff]">
          <div className="container">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image src={Logo} alt="logo" height={200} width={200} />
              </Link>

              <Navbar />

              {/* ------------------------navigation links----------------------------- */}
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                {links.map((link) => (
                  <Link href={link.url} key={link.title}>
                    {link.title}
                  </Link>
                ))}
                <button
                  onClick={handlePopUp}
                  className="bg-[#293a8c] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
                >
                  Book an Appointment
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <ContactForm onClose={handleOnClose} visible={visible} />
    </>
  );
};
