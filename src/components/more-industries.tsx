"use client"

import * as React from "react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CollapsibleIndustries() {
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
                        title: "Marketing",
                        img: "/megaphone.png",
                        desc: "Expand globally with fast, accurate marketing translations that drive real results."
                    },
                    {
                        title: "Manufacturing",
                        img: "/factory.png",
                        desc: "PEnable clear, precise communication in manufacturing with expert translation services."
                    },
                    {
                        title: "Financial",
                        img: "/graph.png",
                        desc: "Asia Translation enables accurate, multilingual communication for financial institutions worldwide."
                    },
                    {
                        title: "Legal",
                        img: "/balance.png",
                        desc: "Asia Translation delivers precise, cost-effective legal translations—accurate, reliable, and always on time."
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
                            title: "Software",
                            img: "/monitor.png",
                            desc: "Expand globally with precise IT and software translation that works seamlessly across languages and markets."
                        },
                        {
                            title: "Business",
                            img: "/briefcase.png",
                            desc: "ISO-certified business translations delivering quality, speed, and confidentiality worldwide."
                        },
                        {
                            title: "Life Sciences",
                            img: "/dna.png",
                            desc: "Expert medical and pharmaceutical translations across 120+ languages."
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
                    {isOpen ? "View Less Industries" : "View All Industries"}
                </Button>
            </CollapsibleTrigger>

        </Collapsible>
    )
}
