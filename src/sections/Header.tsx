import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
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
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src={Logo} alt="logo" height={40} width={40} />
            </Link>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="/about">About</a>
              <a href="/features">Features</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              {/* <a href="#">Help</a> */}
              <button className="bg-[#293a8c] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Book a call
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
