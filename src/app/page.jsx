"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import TopNav from "@/layouts/TopNav"
import HeroLayout from "@/layouts/HeroLayout"
import AboutLayout from "@/layouts/AboutLayout"
import DestinationLayout from "@/layouts/DestinationLayout"
import ExperinceLayout from "@/layouts/ExperinceLayout"
import ToursLayout from "@/layouts/ToursLayout"
import ContactUsLayout from "@/layouts/ContactUsLayout"

export default function LoginPage() {
  return (
    <div className="overflow-x-hidden">
      <TopNav />
      <HeroLayout />
      <AboutLayout />
      <DestinationLayout />
      <ExperinceLayout />
      <ToursLayout/>
      <ContactUsLayout />
    </div>
  )
}
