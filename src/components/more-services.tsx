"use client"

import * as React from "react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CollapsibleServices() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex flex-col gap-6"
        >
            {/* Visible Services */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: "Document Translation",
                        img: "/document.png",
                        desc: "Accurate and culturally appropriate translations for your documents."
                    },
                    {
                        title: "Interpreting Services",
                        img: "/headphone.png",
                        desc: "Professional on-site and remote interpretation for meetings and events."
                    },
                    {
                        title: "Localization Services",
                        img: "/planet-earth.png",
                        desc: "Adapt your website content to response with Asian audiences."
                    },
                    {
                        title: "MTPE Services",
                        img: "/edit.png",
                        desc: "Refine machine-generated translations with professional post-editing."
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-between gap-2 bg-white rounded-md p-4 w-56"
                    >
                        <div className="flex items-center gap-2">
                            <Image src={item.img} alt={item.title} width={45} height={45} />
                            <h2 className="text-lg font-semibold text-[#1F3A4A]">
                                {item.title.split(" ").map((w, i) => (
                                    <span key={i} className="block">{w}</span>
                                ))}
                            </h2>
                        </div>
                        <p className="text-md text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Hidden Services */}
            <CollapsibleContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "AI Services",
                            img: "/robot.png",
                            desc: "Turn your vision into reality—let’s build smart data solutions for your AI needs."
                        },
                        {
                            title: "Translation Services",
                            img: "/translation.png",
                            desc: "Achieve global success with translation solutions in 200+ languages."
                        },
                        {
                            title: "E-Learning Services",
                            img: "/graduation.png",
                            desc: "We create engaging eLearning experiences that work seamlessly across all devices and LMS platforms."
                        },
                        {
                            title: "Digital Marketing",
                            img: "/bar-graph.png",
                            desc: "Grow globally with multilingual marketing, SEO, and culturally adapted campaigns."
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col justify-between gap-2 bg-white rounded-md p-4 w-56"
                        >
                            <div className="flex items-center gap-2">
                                <Image src={item.img} alt={item.title} width={45} height={45} />
                                <h2 className="text-lg font-semibold text-[#1F3A4A]">
                                    {item.title.split(" ").map((w, i) => (
                                        <span key={i} className="block">{w}</span>
                                    ))}
                                </h2>
                            </div>
                            <p className="text-md text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </CollapsibleContent>

            {/* Trigger */}
            <CollapsibleTrigger>
                <Button className="w-fit bg-linear-to-l from-[#D4AF37] to-[#dac172] text-[#1F3A4A] hover:translate-y-1 font-semibold text-[20px] px-6 py-2 rounded-md transition cursor-pointer">
                    {isOpen ? "View Less Services" : "View All Services"}
                </Button>
            </CollapsibleTrigger>

        </Collapsible>
    )
}
