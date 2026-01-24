"use client"

import { scrollToSection } from '@/lib/scrollToSection';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#1F3A4A] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

          {/* Logo */}
          <Image src={"/logo.svg"} alt='logo' width={200} height={100} className='cursor-pointer'
            onClick={() => scrollToSection("home")} />

          {/* Links */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("home")}>Home</button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("about-us")}>About Us</button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("services")}>Services</button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("industries")}>Industries</button>
            <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("languages")}>Languages</button>
          </ul>

          {/* Button */}
          <button className="hidden lg:flex bg-linear-to-l from-[#D4AF37] to-[#ecd895] text-[#1F3A4A] hover:translate-y-1 font-semibold text-md px-5 py-2 rounded-md transition cursor-pointer"
            onClick={() => scrollToSection("join-us")}>
            Get a Quote
          </button>

          {/* Burger button */}
          <FaBars size={24} className='lg:hidden' onClick={() => setOpen(true)} />
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
          <Image src={"/logo.svg"} alt='logo' width={120} height={100} className='mx-auto' />
        </div>

        <ul className="flex flex-col gap-6 w-40 py-4 text-md">
          <li><Link href="#home" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="#about-us" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="#services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link href="#industries" onClick={() => setOpen(false)}>Industries</Link></li>
          <li><Link href="#languages" onClick={() => setOpen(false)}>Languages</Link></li>
          <button className="bg-linear-to-l from-[#D4AF37] to-[#ecd895] text-[#1F3A4A] font-semibold text-md px-5 py-2 rounded-md transition cursor-pointer"
            onClick={() => { scrollToSection("join-us"), setOpen(false) }}>
            Get a Quote
          </button>
        </ul>
      </aside>
    </>
  )
}

export default Navbar