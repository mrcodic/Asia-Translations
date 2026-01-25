"use client"

import AnimatedSection from "@/components/animatedSection";
import Languages from "@/components/languages";
import { CollapsibleIndustries } from "@/components/more-industries";
import { CollapsibleServices } from "@/components/more-services";
import QuoteForm from "@/components/quoteForm";
import Footer from "@/includes/footer";
import Navbar from "@/includes/navbar";
import { scrollToSection } from "@/lib/scrollToSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" className="p-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
          {/* Content Side */}
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-5xl text-[#1F3A4A] font-bold">Professional Asian Language Translation Services</h1>
            <p className="text-[20px]">Reach your audience across Asia with Asia Translation and connect with them on a deeper level. Grow your global presence through translations that reflect not only the language, but the culture behind it.</p>
            <button className="bg-linear-to-l from-[#D4AF37] to-[#dac172] text-[#1F3A4A] hover:translate-y-1 font-semibold text-[20px] px-6 py-2 rounded-md transition cursor-pointer"
              onClick={() => scrollToSection("join-us")}>
              Get a free Quote
            </button>
          </div>

          {/* Hero Side */}
          <div>
            <Image src={"/hero.png"} alt="hero" width={1090} height={500} />
          </div>
        </div>
        {/* Icons */}
        <div className="flex flex-wrap items-center gap-6">
          <Image src={"/amazon-icon.png"} alt="visa icon" width={50} height={30} />
          <Image src={"/hp-icon.png"} alt="visa icon" width={50} height={30} />
          <Image src={"/microsoft-icon.png"} alt="visa icon" width={120} height={30} />
          <p className="text-[20px] text-[#747474] font-normal">+ Trusted by leading global brands</p>
        </div>
      </section>

      {/* About Us Section */}
      <AnimatedSection id="about-us" animation="left" className="flex flex-col gap-4 items-center p-8 py-20 mx-auto">
        <h1 className="text-5xl text-[#1F3A4A] font-bold">About Asia Translations</h1>
        <p className="text-[20px] text-center">Asia Translation is a certified language services provider with over a decade of experience helping businesses grow across global markets.
          With a trusted network of native-speaking linguists across Asia, we deliver accurate, culturally relevant translation and localization services.
          We help brands communicate clearly, authentically, and on time—every time.</p>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services" animation="right" className="flex flex-col gap-4 items-center p-8 py-20 mx-auto">
        <h1 className="text-5xl text-[#1F3A4A] font-bold">Our Services</h1>
        <p className="text-[20px] text-center">Comprehensive translation solutions for all your business needs.</p>
        <CollapsibleServices />
      </AnimatedSection>

      {/* Industries Section */}
      <AnimatedSection id="industries" animation="zoom" className="flex flex-col gap-4 items-center p-8 py-20 mx-auto">
        <h1 className="text-5xl text-[#1F3A4A] font-bold">Industries</h1>
        <CollapsibleIndustries />
      </AnimatedSection>

      {/* Languages Section */}
      <AnimatedSection id="languages" animation="up" className="p-8 mx-auto">
        <h1 className="text-5xl text-[#1F3A4A] font-bold text-center pb-4">Languages</h1>
        <Languages />
      </AnimatedSection>

      {/* Join Us Section */}
      <AnimatedSection id="join-us" animation="zoom" className="flex flex-col gap-4 items-center p-8 mx-auto">
        <h1 className="text-5xl text-[#1F3A4A] font-bold text-center">Get a Free Quote for Your Global Needs</h1>
        <QuoteForm />
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </>
  );
}

const sectionStyle = {
  height: "100vh",
  padding: "50px",
  margin: "0 auto",
  background: "#f5f5f5",
  borderBottom: "1px solid #ddd",
};
