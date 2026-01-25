import { scrollToSection } from "@/lib/scrollToSection"
import {
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
} from "lucide-react"
import Image from "next/image"
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
weight: "400",
subsets: ["latin"],
});

export default function Footer() {
    return (
        <footer className="bg-linear-to-r from-[#1F3A4A] to-[#254658] text-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left */}
                    <div className="flex flex-col gap-4">
                        {/* Logo */}
                        <div className='flex items-center cursor-pointer' onClick={() => scrollToSection("home")}>
                            <Image src={"/logo-icon.png"} alt='logo' width={100} height={80} />
                            <h1 className={`${dancingScript.className} text-2xl md:text-4xl font-bold`}>Asia Translations</h1>
                        </div>

                        <p className="text-md text-gray-300 max-w-md">
                            Your bridge to professional Asian language translation
                            services. Expert linguists, fast translation and
                            exceptional quality.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex md:justify-end">
                        <div className="flex flex-col justify-between gap-4 md:items-start">
                            <ul className="flex flex-wrap items-center gap-8 font-medium pb-2 border-b">
                                <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("home")}>Home</button>
                                <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("about-us")}>About Us</button>
                                <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("services")}>Services</button>
                                <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("industries")}>Industries</button>
                                <button className="hover:text-[#D4AF37] cursor-pointer" onClick={() => scrollToSection("languages")}>Languages</button>
                            </ul>
                            <div className="flex gap-6 text-md">
                                <a href="#" className="hover:text-[#D4AF37]">
                                    Privacy Policy
                                </a>
                                <a href="#" className="hover:text-[#D4AF37]">
                                    Terms of Service
                                </a>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                {/* Partners */}
                                <div className="flex flex-wrap items-center gap-6">
                                    <Image src={"/amazon-icon.png"} alt="visa icon" width={30} height={30} />
                                    <Image src={"/hp-icon.png"} alt="visa icon" width={30} height={30} />
                                    <Image src={"/microsoft-icon.png"} alt="visa icon" width={100} height={30} />
                                </div>

                                {/* Social */}
                                <div className="flex gap-4">
                                    <Facebook className="w-4 h-4 text-[#D4AF37]" />
                                    <Twitter className="w-4 h-4 text-[#D4AF37]" />
                                    <Linkedin className="w-4 h-4 text-[#D4AF37]" />
                                    <Youtube className="w-4 h-4 text-[#D4AF37]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}