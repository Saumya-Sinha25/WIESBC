"use client"

import { useState } from "react"
// import GalaxyBackground from "./components/GalaxyBackground"
import Navbar from "./components/Navbar"
import HeroSection from "./components/Hero"
import About from "@/app/components/About"
import EventsSection from "./components/Events"
import TeamSection from "./components/Team"
import ResourcesSection from "./components/Resources"
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* <GalaxyBackground /> */}
      <div className="relative z-10">
        <Navbar />
        <main className="overflow-x-hidden pt-16">
          <HeroSection />
          <About />
          <EventsSection />
          <TeamSection />
          <ResourcesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}