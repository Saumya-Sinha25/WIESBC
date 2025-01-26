import React, { memo } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CustomLogo from "../public/cslogo.jpg";

const VortexDemoSecond = memo(() => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={1200}
        particleCount={1500}
        baseHue={225}
        baseSpeed={0.15}
        rangeSpeed={1.5}
        baseRadius={0.7}
        rangeRadius={1.4}
        className="flex items-center justify-center w-full h-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="text-center space-y-8 md:space-y-12">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 opacity-75 blur-lg animate-pulse" />
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <Image
                    src={CustomLogo.src}
                    alt="CS Logo"
                    width={80}
                    height={80}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcUDQwMDBcVExMVGhEYGBsdGhwcICghICokJSgqLCMhJi0uKyguLTUzMjM1QkFCRUBHREZNUP/bAEMBFRcXGhobKR0dKUJCQlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUP/AABEIAAUACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k="
                    className="w-full h-full object-cover animate-pulse"
                  />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent px-4">
                IEEE Computer Society
              </h1>
              
              <p className="text-lg sm:text-xl md:text-3xl text-amber-100/80 max-w-3xl mx-auto font-light px-4">
                Galgotias University Student Branch Chapter
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 w-full px-4">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-amber-500 hover:bg-amber-600 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 transform group">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-spin transition-transform" />
                  <span className="text-base md:text-lg">Join Our Chapter</span>
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 transform border border-amber-500/30 hover:border-amber-500 text-base md:text-lg backdrop-blur-sm text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
});

VortexDemoSecond.displayName = 'VortexDemoSecond';

export default VortexDemoSecond;