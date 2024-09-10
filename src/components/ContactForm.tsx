"use client";

import React, { useState } from "react";

const ContactForm = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "formWrapper") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="formWrapper"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[#293a8c]/30 backdrop-blur-sm flex justify-center items-center top-12"
    >
      <form className="flex flex-col gap-6 p-10 rounded-xl bg-[#293a8c] w-[800px] z-1000">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl">Reach Out</h1>
          <button
            onClick={onClose}
            className="bg-white text-[#293a8c] p-2 rounded-lg "
          >
            Close
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <input
            type="name"
            placeholder="Name"
            name="name"
            required
            className="p-2 rounded-lg text-[#293a8c] outline-none"
          />

          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
            className="p-2 rounded-lg text-[#293a8c] outline-none"
          />
        </div>

        {/* ----------------textarea------------------ */}
        <textarea
          className="h-[200px] p-2 rounded-lg text-[#293a8c] outline-none"
          placeholder="Type your message."
          name="message"
          required
        />

        {/* --------------button------------------- */}
        <button className="bg-white text-[#293a8c] max-w-40 rounded-lg p-2 hover:bg-black hover:text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
