"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image"; 

export type StickyContentItem = {
  title: string;
  description?: string;
  content?: React.ReactNode;
  image?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
};

export const StickyScroll = ({
  content,
  contentClassName,
  centerOffset = 0,
  pinInsideSection = false,
  minSectionHeight = "min-h-[80vh]",
}: {
  content: StickyContentItem[];
  contentClassName?: string;
  centerOffset?: number;
  pinInsideSection?: boolean;
  minSectionHeight?: string;
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const inViewRef = useRef(false);

  const [activeCard, setActiveCard] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const linearGradients = [
    "linear-gradient(135deg,#06b6d4 0%,#10b981 100%)",
    "linear-gradient(135deg,#ec4899 0%,#6366f1 100%)",
    "linear-gradient(135deg,#f97316 0%,#eab308 100%)",
  ];

  // dark-mode detection
  useEffect(() => {
    if (typeof window === "undefined") return;
    const detect = () =>
      document.documentElement.classList.contains("dark") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(detect());
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        inViewRef.current = e.isIntersecting;
        if (pinInsideSection) inViewRef.current = e.isIntersecting;
        if (e.isIntersecting) setTimeout(triggerUpdate, 30);
      },
      { threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [pinInsideSection, content.length]);

  const triggerUpdate = () => {
    const viewportCenter = window.innerHeight / 2 - centerOffset;
    let closestIndex = 0;
    let smallestDistance = Infinity;

    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - itemCenter);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = i;
      }
    }
    setActiveCard((prev) => (prev === closestIndex ? prev : closestIndex));
    rafRef.current = null;
  };

  useEffect(() => {
    const onScrollOrResize = () => {
      if (pinInsideSection && !inViewRef.current) return;
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(triggerUpdate);
    };

    const initTimer = window.setTimeout(triggerUpdate, 60);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [content.length, centerOffset, pinInsideSection]);

  const backgroundGradient = linearGradients[activeCard % linearGradients.length] ?? linearGradients[0];
  const LIGHT_BG = "#FFFFFF";
  const DARK_BG = "#0C5EB4";
  const currentBg = isDark ? DARK_BG : LIGHT_BG;

  return (
    <motion.div
      ref={sectionRef}
      animate={{ backgroundColor: currentBg }}
      transition={{ duration: 0.25 }}
     className={cn(
  "relative flex flex-col lg:flex-row justify-center gap-8 px-4 sm:px-6 py-16",
  minSectionHeight,
  isDark ? "text-white" : "text-slate-900"
)}
    >
      {/* Text content */}
      <div className="w-full lg:max-w-2xl">
        {content.map((item, index) => (
          <div
            key={item.title + index}
  ref={(el: HTMLDivElement | null) => {
      itemRefs.current[index] = el; // TS is happy
    }}            className="my-8 sm:my-12"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.h2
              initial={false}
              animate={{ opacity: activeCard === index ? 1 : 0.35, y: activeCard === index ? 0 : 6 }}
              transition={{ duration: 0.18 }}
              className={cn("text-2xl sm:text-3xl font-bold leading-tight", isDark ? "text-white" : "text-slate-900")}
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={false}
              animate={{ opacity: activeCard === index ? 1 : 0.45 }}
              transition={{ duration: 0.18 }}
              className={cn("mt-4 sm:mt-6 text-base sm:text-lg", isDark ? "text-slate-200" : "text-slate-600")}
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right preview */}
      <div
  aria-hidden
  className={cn(
    "w-full lg:w-[900px] h-94 sm:h-80 lg:h-[750px] overflow-hidden rounded-xl lg:sticky lg:top-24",
    contentClassName ?? ""
  )}
  style={{ background: backgroundGradient, borderRadius: "30px" }}
>

        <div className="h-full w-full flex items-center justify-center pointer-events-none ">
          {content[activeCard]?.image ? (
            content[activeCard]!.image!.width && content[activeCard]!.image!.height ? (
              <div className="relative h-full w-full">
                <Image
                  src={content[activeCard]!.image!.src}
                  alt={content[activeCard]!.image!.alt ?? content[activeCard]!.title}
                  width={content[activeCard]!.image!.width}
                  height={content[activeCard]!.image!.height}
                  style={{ objectFit: "cover" }}
                  priority={Boolean(content[activeCard]!.image!.priority)}
                />
              </div>
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={content[activeCard]!.image!.src}
                  alt={content[activeCard]!.image!.alt ?? content[activeCard]!.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={Boolean(content[activeCard]!.image!.priority)}
                />
              </div>
            )
          ) : (
            content[activeCard]?.content ?? null
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StickyScroll;
