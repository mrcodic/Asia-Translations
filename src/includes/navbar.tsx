"use client";

import { scrollToSection } from "@/lib/scrollToSection";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#1F3A4A] text-white w-full">
        <div className="flex items-center justify-between py-1 nav-container">
          {/* Logo */}
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => scrollToSection("home")}>
            <Image src={"/logo-icon.PNG"} alt="logo" width={100} height={80} />
            <h1 className={`${dancingScript.className} text-2xl md:text-4xl font-bold`}>Asia Translations</h1>
          </div>

          {/* Links */}
          <ul className="hidden lg:flex items-center justify-between w-full max-w-xl font-medium">
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("home")}>
              Home
            </button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("about-us")}>
              About Us
            </button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("industries")}>
              Industries
            </button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("languages")}>
              Languages
            </button>
          </ul>

          {/* Button */}
          <button
            className="hidden lg:flex bg-linear-to-l from-[#D4AF37] to-[#ecd895] text-[#1F3A4A] hover:translate-y-1 font-semibold text-md px-5 py-2 rounded-md transition cursor-pointer"
            onClick={() => scrollToSection("join-us")}
          >
            Get a Quote
          </button>

          {/* Burger button */}
          <FaBars size={24} className="lg:hidden" onClick={() => setOpen(true)} />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`p-4 fixed top-0 right-0 h-full bg-[#1F3A4A] text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <FaX size={12} onClick={() => setOpen(false)} />
        <div className="flex justify-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <Image src={"/logo-icon.PNG"} alt="logo" width={100} height={80} />
            <h1 className={`${dancingScript.className} text-2xl md:text-4xl font-bold`}>Asia Translations</h1>
          </div>
        </div>

        <ul className="flex flex-col gap-6 w-40 py-4 text-md">
          <button
            onClick={() => {
              scrollToSection("home"), setOpen(false);
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("about-us"), setOpen(false);
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("services"), setOpen(false);
            }}
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection("industries"), setOpen(false);
            }}
          >
            Industries
          </button>
          <button
            onClick={() => {
              scrollToSection("languages"), setOpen(false);
            }}
          >
            Languages
          </button>
          <button
            className="bg-linear-to-l from-[#D4AF37] to-[#ecd895] text-[#1F3A4A] font-semibold text-md px-5 py-2 rounded-md transition cursor-pointer"
            onClick={() => {
              scrollToSection("join-us"), setOpen(false);
            }}
          >
            Get a Quote
          </button>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
