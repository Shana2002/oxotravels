"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import TopNav from "@/layouts/TopNav"
import HeroLayout from "@/layouts/HeroLayout"

export default function LoginPage() {
  return (
    <div className="overflow-x-hidden">
      <TopNav />
      <HeroLayout />
    </div>
  )
}
