"use client";
import React, { memo, useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";

const TypewriterEffectSmooth = dynamic(
  () => import("@/components/ui/typewriter-effect").then((mod) => mod.TypewriterEffectSmooth),
  { 
    ssr: false, 
    loading: () => <div className="h-20 w-full"></div> // Add placeholder
  }
);

const WorldMap = dynamic(
  () => import("@/components/ui/world-map").then((mod) => mod.default),
  { 
    ssr: false, 
    loading: () => <div className="h-80 w-full bg-black"></div> // Add placeholder
  }
);

const About = memo(() => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const words = useMemo(() => [
    {
      text: "Together",
      className: "text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    },
    {
      text: "We",
      className: "text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    },
    {
      text: "Advance",
      className: "text-amber-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    }
  ], []);

  const dots = useMemo(() => [
    { lat: 64.2008, lng: -149.4937 }, 
    { lat: 34.0522, lng: -118.2437 },
    { lat: -15.7975, lng: -47.8919 }, 
    { lat: 38.7223, lng: -9.1393 }, 
    { lat: 51.5074, lng: -0.1278 }, 
    { lat: 28.6139, lng: 77.209 }, 
    { lat: 43.1332, lng: 131.9113 }, 
    { lat: -1.2921, lng: 36.8219 },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="py-12 bg-black" ref={sectionRef}>
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8 pb-4">
          <div className="flex flex-col items-center justify-center min-h-[20rem]">
            {hasAnimated && (
              <TypewriterEffectSmooth 
                words={words} 
                cursorClassName="bg-amber-400"
              />
            )}

            <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl mt-8 max-w-3xl text-center">
              A Global Network of Innovators: Connected Across Continents, United by Technology.
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 w-full flex justify-center bg-black">
        {hasAnimated && (
          <WorldMap
            dots={dots}
            className="w-[85%] h-80"
          />
        )}
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
