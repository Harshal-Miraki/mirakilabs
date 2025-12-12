"use client";
import React from "react";
import StickyScroll from "./sticky-scroll-reveal";

// Define the Item structure
interface StickyItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

// Define props for this component
interface StickyScrollRevealDemoProps {
  content: StickyItem[];
  contentClassName?: string;
}

export function StickyScrollRevealDemo({
  content,
  contentClassName,
}: StickyScrollRevealDemoProps) {
  return (
    <div className="w-full py-4 px-4   sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center text-gray-800 dark:text-white">
            Solution
          </h2>
<div className="flex justify-center">
  <div className="w-24 h-1 bg-[#2ecc71] mt-2 rounded-full mb-9"></div>
</div>

      <StickyScroll
        content={content}
        contentClassName={  contentClassName="rounded-none"
}
        // Responsive min height: 100vh on mobile, 120vh on medium+
        minSectionHeight="min-h-[100vh] sm:min-h-[120vh]"
      />
    </div>
  );
}
