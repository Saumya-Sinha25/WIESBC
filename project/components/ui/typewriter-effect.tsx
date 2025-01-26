"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      animate(
        "span",
        {
          width: "fit-content",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, animate]);

  const renderWords = () => {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block mr-2">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${hasAnimated ? 'opacity-100' : 'opacity-0'}`,
                    word.className
                  )}
                >
                  {char}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        ref={scope}
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        animate={{
          width: hasAnimated ? "fit-content" : "0%",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: hasAnimated ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          repeat: hasAnimated ? Infinity : 0,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};