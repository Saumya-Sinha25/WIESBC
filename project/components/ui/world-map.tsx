"use client";

import { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{ lat: number; lng: number }>;
  lineColor?: string;
  className?: string;
  animateLines?: boolean;
}

export default memo(function WorldMap({
  dots = [],
  lineColor = "#f59e0b",
  className = "",
  animateLines = false,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();
  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#404040",
    shape: "circle",
    backgroundColor: "#000000",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className={`w-full aspect-[2/1] bg-black rounded-lg relative font-sans ${className}`}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full opacity-75 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {animateLines && dots.map((dot, i) => {
          if (i < dots.length - 1) {
            const startPoint = projectPoint(dot.lat, dot.lng);
            const endPoint = projectPoint(dots[i + 1].lat, dots[i + 1].lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * i,
                    ease: "easeOut",
                  }}
                />
              </g>
            );
          }
          return null;
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`point-group-${i}`}>
            <circle
              cx={projectPoint(dot.lat, dot.lng).x}
              cy={projectPoint(dot.lat, dot.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.8"
            />
            <circle
              cx={projectPoint(dot.lat, dot.lng).x}
              cy={projectPoint(dot.lat, dot.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="4"
                to="10"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
});