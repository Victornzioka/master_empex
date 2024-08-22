"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 741 707783",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sunmoonventure@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Haile Selassie Avenue, Coffee Plaza Building, Nairobi Kenya",
  },
];

const Contact = () => {
  const [visible, setVisible] = useState(false);

  function handlePopUp() {
    setVisible(!visible);
  }

  const handleOnClose = () => setVisible(false);

  return (
    <div className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <div className="container">
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Reach Out</div>
          </div>
          <h2 className="section-title mt-5">
            Get in Touch: We're Here to Help!
          </h2>
          <p className="section-description mt-5">
            Reach Out to Us: Your Dedicated Pathway to Seamless and Efficient
            Logistics Solutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 bg-white p-4">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[40px] h-[40px] xl:w-[72px] xl:h-[72px] bg-[#293a8c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[18px] text-white">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-md">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white flex-1">
            <motion.button
              drag
              dragConstraints={{
                top: -20,
                left: 50,
                right: 300,
                bottom: 200,
              }}
              className="bg-[#293a8c] text-white p-4 rounded-lg"
              onClick={handlePopUp}
            >
              Lets Connect
            </motion.button>
          </div>
        </div>

        <ContactForm onClose={handleOnClose} visible={visible} />
      </div>
    </div>
  );
};

export default Contact;
