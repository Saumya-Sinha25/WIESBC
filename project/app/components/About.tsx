"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import WorldMap from "@/components/ui/world-map";

export default function About() {
  const words = [
    {
      text: "Together",
      className: "text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
    },
    {
      text: "We",
      className: "text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
    },
    {
      text: "Advance",
      className: "text-amber-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
    }
  ];

  return (
    <section id="about" className="py-12 bg-black">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8 pb-4">
          <div className="flex flex-col items-center justify-center min-h-[20rem]">
            <TypewriterEffectSmooth 
              words={words} 
              cursorClassName="bg-amber-400"
            />

            <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl mt-8 max-w-3xl text-center">
            A Global Network of Innovators: Connected Across Continents, United by Technology.
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 w-full flex justify-center bg-black">
        <WorldMap
          dots={[
            { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            { lat: 34.0522, lng: -118.2437 }, // Los Angeles
            { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            { lat: 38.7223, lng: -9.1393 }, // Lisbon
            { lat: 51.5074, lng: -0.1278 }, // London
            { lat: 28.6139, lng: 77.209 }, // New Delhi
            { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            { lat: -1.2921, lng: 36.8219 }, // Nairobi
          ]}
          className="w-[85%] h-80"
        />
      </div>
    </section>
  );
}



