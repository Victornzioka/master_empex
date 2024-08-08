"user client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/features", title: "Features" },
  { url: "/services", title: "Services" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottoVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {/* ------------------menu--------------------- */}
      <div className="md:hidden">
        {/* --------menu button ------- */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottoVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* ------------menu list --------------- */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-[#293a8c] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((item) => (
              <motion.div
                variants={listItemVariants}
                key={item.title}
                className=""
              >
                <Link href={item.url} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
