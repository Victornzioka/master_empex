"use client";

import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleOnClose = (e) => {
    if (e.target.id === "formWrapper") onClose();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!email) {
      setError("Please enter your email!");
      return;
    }
    if (!message) {
      setError("Please enter your message!");
      return;
    }

    const templateParams = {
      from_name: email,
      to_name: "victor",
      message,
    };

    setError("");
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )

      .then(
        (response) => {
          setEmail("");
          setName("");
          setMessage("");
          setIsLoading(false);
          setSuccess("Your message has been sent successfully.");
        },
        (error) => {
          console.log(templateParams);
          setError("Error in sending message. Please try again.");
          console.log(error);
          setIsLoading(false);
        }
      );
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
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-lg text-[#293a8c] outline-none"
          />

          <input
            type="email"
            placeholder="Email address"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg text-[#293a8c] outline-none"
          />
        </div>

        {/* ----------------textarea------------------ */}
        <textarea
          className="h-[200px] p-2 rounded-lg text-[#293a8c] outline-none"
          placeholder="Type your message."
          id="message"
          name="message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* --------------button------------------- */}
        <button
          onClick={sendEmail}
          disabled={isLoading}
          className="bg-white text-[#293a8c] max-w-40 rounded-lg p-2 hover:bg-black hover:text-white"
        >
          Send Message
        </button>

        {success && (
          <span className="text-green-600 font-semibold">
            Message Send Successfully
          </span>
        )}
        {error && (
          <span className="text-red-600 font-bold">
            Something went wrong, please correctly fill the form.
            <p>{error}</p>
          </span>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
