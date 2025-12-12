"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
 <LampContainer>
  <motion.h1
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="
      mt-8
      py-4
      text-center
      text-4xl
      font-medium
      tracking-tight
      text-white
      md:text-7xl
      dark:text-transparent
      dark:bg-clip-text
      dark:bg-gradient-to-br
      dark:from-cyan-300
      dark:to-purple-400
    "
  >
    Build lamps <br /> the right way
  </motion.h1>
</LampContainer>

    
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-black w-full rounded-md z-0",
        className
      )}
    >
      {/* Gradient glow behind the card */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div
          className="rounded-xl blur-3xl opacity-30 w-80 h-80 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500"
          style={{
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-10">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          {/* edge masks — white in light mode, black in dark mode */}
          <div className="absolute w-[100%] left-0 h-40 bottom-0 z-20 bg-white dark:bg-black [mask-image:linear-gradient(to_top,white,transparent) dark:mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bottom-0 z-20 bg-white dark:bg-black [mask-image:linear-gradient(to_right,white,transparent) dark:mask-image:linear-gradient(to_right,black,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bottom-0 z-20 bg-white dark:bg-black [mask-image:linear-gradient(to_left,white,transparent) dark:mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="absolute w-[100%] right-0 h-40 bottom-0 z-20 bg-white dark:bg-black [mask-image:linear-gradient(to_top,white,transparent) dark:mask-image:linear-gradient(to_top,black,transparent)]" />
        </motion.div>

        {/* remove dark blur — black in dark mode */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white dark:bg-black blur-2xl" />

        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* main blue glow */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        {/* bottom filler — white in light mode, black in dark mode */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
