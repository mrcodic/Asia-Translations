"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { Label } from "./ui/label"



const interests = [
    {
        label: "Translation Services",
        value: "translation",
        image: "/translation.png",
    },
    {
        label: "Digital Marketing",
        value: "marketing",
        image: "/bar-graph.png",
    },
    {
        label: "AI Solutions",
        value: "ai",
        image: "/robot.png",
    },
    {
        label: "eLearning Creation",
        value: "elearning",
        image: "/graduation.png",
    },
]

const industries = [
    { label: "Aerospace & Defense", value: "aerospace-defense" },
    { label: "Automotive", value: "automotive" },
    {
        label: "Banking, Financial Services & Insurance",
        value: "banking-financial-insurance",
    },
    { label: "Business Services", value: "business-services" },
    { label: "Education", value: "education" },
    { label: "Energy", value: "energy" },
    { label: "Engineering", value: "engineering" },
    { label: "Government", value: "government" },
    { label: "Legal", value: "legal" },
    { label: "Life Sciences", value: "life-sciences" },
    { label: "Manufacturing", value: "manufacturing" },
    { label: "Media & Entertainment", value: "media-entertainment" },
    { label: "Non-Profit", value: "non-profit" },
    { label: "PR, Advertising & Marketing", value: "pr-advertising-marketing" },
    { label: "IT/Technology", value: "it-technology" },
    { label: "Telecommunications", value: "telecommunications" },
    { label: "Training & Development", value: "training-development" },
    { label: "Travel & Hospitality", value: "travel-hospitality" },
    { label: "Other", value: "other" },
]

export default function QuoteForm() {
    const [interest, setInterest] = useState("")

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
            {/* Title */}
            <h2 className="text-xl font-semibold pb-2">
                What are you interested in?
            </h2>


            {/* Interest */}
            <RadioGroup
                onValueChange={setInterest}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6"
            >
                {interests.map((item) => (
                    <label
                        key={item.value}
                        className={`border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer
                                 ${interest === item.value ? "border-[#1F3A4A]" : "border-gray-200"}`}
                    >
                        <RadioGroupItem value={item.value} className="hidden" />
                        <Image
                            src={item.image}
                            alt={item.label}
                            width={40}
                            height={40}
                        />
                        <span className="text-sm font-medium text-center">{item.label}</span>
                    </label>
                ))}
            </RadioGroup>


            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <Label>First Name *</Label>
                    <Input placeholder="Mike" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Last Name *</Label>
                    <Input placeholder="Daniels" type="text" required />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>Business Email *</Label>
                    <Input placeholder="business@mail.com" type="email" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Phone *</Label>
                    <Input placeholder="+10798456123" type="text" required />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>Country *</Label>
                    <Input placeholder="Your Country" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Select Industry *</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {industries.map((industry) => (
                                <SelectItem key={industry.value} value={industry.value}>
                                    {industry.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-1">
                    <Label>Job Title *</Label>
                    <Input placeholder="Marketing Manager" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Your Company *</Label>
                    <Input placeholder="Company" type="text" required />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1 md:col-span-2">
                    <Label>Message</Label>
                    <Textarea
                        placeholder="Write a Brief About Your Project"
                        rows={4}
                    />
                </div>


                {/* File Upload */}
                <div className="md:col-span-2">
                    <Label className="block text-sm font-medium mb-1">
                        Upload Your Project Files
                    </Label>
                    <Input type="file" required />
                </div>


                {/* Submit */}
                <div className="md:col-span-2">
                    <Button className="w-full bg-linear-to-l from-[#D4AF37] to-[#dac172] text-[#1F3A4A] hover:translate-y-1 font-semibold text-[20px] px-6 py-2 rounded-md transition cursor-pointer">
                        Request Your Free Quote
                    </Button>
                </div>
            </form>
        </div>
    )
}