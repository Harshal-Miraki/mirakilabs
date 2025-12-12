"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type StickyItem = {
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

export default function StickyScrollPinned({
  content,
  rightWidth = "lg:w-[900px]",
  topOffset = 24,
}: {
  content: StickyItem[];
  rightWidth?: string;
  topOffset?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which left section is active based on visibility
  useEffect(() => {
    if (!itemRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.intersectionRatio >= 0.6) {
            setActiveIndex(idx);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.6, 0.9] }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [content.length]);

  // Outer height ensures right-side stays sticky long enough
  const outerStyle: React.CSSProperties = {
    height: `${content.length * 100}vh`,
  };

  return (
    <>
    <section ref={containerRef} style={outerStyle} className="relative dark:bg-[#1E1E1E]">
    
           
      <div className="container mx-auto px-4 py-16">
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT SIDE SECTIONS */}
          <div className="w-full">
            {content.map((item, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="min-h-[100vh] flex items-start py-8 sm:py-20 "

              >
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-4 text-base sm:text-lg">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE STICKY PREVIEW */}
          <div
            aria-hidden
            className={`w-full ${rightWidth} lg:sticky lg:top-28 mb-24`}
          >
            <div
              className="
                relative 
                h-[45vh] sm:h-[55vh] lg:h-[70vh]
                overflow-hidden 
                rounded-2xl
              "
            >
              <div className="absolute inset-0">
                {content[activeIndex]?.image ? (
                  <Image
                    src={content[activeIndex]!.image!.src}
                    alt={
                      content[activeIndex]!.image!.alt ??
                      content[activeIndex]!.title
                    }
                    fill
                    style={{ objectFit: "cover" }}
                    className="fade-zoom"
                    priority={true}
                  />
                ) : (
                  content[activeIndex]?.content ?? null
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    </>
  );
}
