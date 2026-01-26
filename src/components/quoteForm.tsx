"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Label } from "./ui/label";
import { useForm, Controller } from "react-hook-form";

type USER = {
  interest: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  jobTitle: string;
  company: string;
  message: string;
  projectFiles: FileList | null;
};

const interests = [
  {
    label: "Translation Services",
    value: "translation Services",
    image: "/translation.png",
  },
  {
    label: "Digital Marketing",
    value: "Digital marketing",
    image: "/bar-graph.png",
  },
  {
    label: "AI Solutions",
    value: "ai Solutions",
    image: "/robot.png",
  },
  {
    label: "eLearning Creation",
    value: "elearning Creation",
    image: "/graduation.png",
  },
];

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
];

export default function QuoteForm() {
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<USER>({
    defaultValues: {
      interest: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      industry: "",
      jobTitle: "",
      company: "",
      message: "",
      projectFiles: null,
    },
    mode: "all",
  });

  const onFormSubmitted = async (d: USER) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("interest", d.interest);
      formData.append("firstName", d.firstName);
      formData.append("lastName", d.lastName);
      formData.append("email", d.email);
      formData.append("phone", d.phone);
      formData.append("country", d.country);
      formData.append("industry", d.industry);
      formData.append("jobTitle", d.jobTitle);
      formData.append("company", d.company);
      formData.append("message", d.message);

      if (d.projectFiles && d.projectFiles.length > 0) {
        formData.append("projectFiles", d.projectFiles[0]);
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      reset();
      setInterest("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* Title */}
      <h2 className="text-xl font-semibold pb-2">What are you interested in?</h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onFormSubmitted)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Interest */}
        <Controller
          name="interest"
          control={control}
          rules={{ required: "Please select your interest" }}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value);
                setInterest(value);
              }}
              className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {interests.map((item) => (
                <Label
                  key={item.value}
                  className={`border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer
            ${field.value === item.value ? "border-[#1F3A4A]" : "border-gray-200"}`}
                >
                  <RadioGroupItem value={item.value} className="hidden" />
                  <Image src={item.image} alt={item.label} width={40} height={40} />
                  <span className="text-sm font-medium text-center">{item.label}</span>
                </Label>
              ))}
            </RadioGroup>
          )}
        />

        {errors.interest && <p className="text-red-500 text-sm md:col-span-2">{errors.interest.message}</p>}
        <div className="flex flex-col gap-1">
          <Label>First Name *</Label>
          <Input {...register("firstName", { required: true })} placeholder="Mike" type="text" />
          {errors.firstName && <p className="text-red-500 text-sm">First Name Is Required</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label>Last Name *</Label>
          <Input {...register("lastName", { required: true })} placeholder="Daniels" type="text" />
          {errors.lastName && <p className="text-red-500 text-sm">Last name Is Required</p>}
        </div>

        <div className="flex flex-col gap-1">
          <Label>Business Email *</Label>
          <Input
            placeholder="Enter your business email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label>Phone *</Label>
          <Input
            placeholder="Enter Your Phone Number"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{8,15}$/,
                message: "Phone number must be 8–15 digits",
              },
            })}
          />

          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <Label>Country *</Label>
          <Input {...register("country", { required: true })} placeholder="Your Country" type="text" />
          {errors.country && <p className="text-red-500 text-sm">Country Is Required</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label>Select Industry *</Label>
          <Controller
            name="industry"
            control={control}
            rules={{
              required: "Industry is required",
            }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>

                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <Label>Job Title *</Label>
          <Input {...register("jobTitle", { required: true })} placeholder="Marketing Manager" type="text" />
          {errors.jobTitle && <p className="text-red-500 text-sm">Job Title Is Required</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label>Your Company *</Label>
          <Input {...register("company", { required: true })} placeholder="Company" type="text" />
          {errors.company && <p className="text-red-500 text-sm">Company Is Required</p>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <Label>Message</Label>
          <Textarea {...register("message", { required: true })} placeholder="Write a Brief About Your Project" rows={4} />
          {errors.message && <p className="text-red-500 text-sm">Message Is Required</p>}
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <Label className="block text-sm font-medium mb-1">Upload Your Project Files</Label>

          <Input
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            {...register("projectFiles", {
              required: "Project file is required",
              validate: {
                fileType: (files) => {
                  if (!files || files.length === 0) return true;

                  const allowedTypes = [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "image/png",
                    "image/jpeg",
                  ];

                  return allowedTypes.includes(files[0].type) || "File Type Is not Allowed";
                },
                fileSize: (files) => {
                  if (!files || files.length === 0) return true;

                  const maxSize = 5 * 1024 * 1024; // 5MB
                  return files[0].size <= maxSize || "Maximum file size is 5 MB";
                },
              },
            })}
          />

          <p className="text-sm text-gray-500 mt-1">Allowed Files: PDF, Word, PNG, JPG — Max size: 5MB</p>

          {errors.projectFiles && <p className="text-red-500 text-sm mt-1">{errors.projectFiles.message}</p>}
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-linear-to-l from-[#D4AF37] to-[#dac172] 
             text-[#1F3A4A] hover:translate-y-1 font-semibold 
             text-[20px] px-6 py-2 rounded-md transition
             flex items-center justify-center gap-2
             disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-[#1F3A4A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending...
              </>
            ) : (
              "Request Your Free Quote"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
