"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

import { INDUSTRIES } from "@/lib/industryData";
import { IndustrySection } from "@/lib/IndustrySection";
import StickyScrollPinned from "@/components/StickyScrollPinned";

const Page: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined; // slug from URL: /industry/[slug]

  // Find industry by slug
  const industry: IndustrySection | undefined = Object.values(INDUSTRIES).find(
    (ind) => ind.slug === slug
  );

  if (!industry) {
    return (
      <div className="text-center mt-20 text-xl">
        Industry "{slug}" not found
      </div>
    );
  }

  // Example fallback sticky content (you can replace with industry.stickyContent)
  const stickyContent = [
    {
      title: "Slide 1",
      description: "This is the first slide.",
      image: { src: "/images/slide1.jpg", width: 1600, height: 900, alt: "Slide 1" },
    },
    {
      title: "Slide 2",
      description: "Second slide — uses custom React content.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center px-6">
            <h4 className="text-2xl font-bold">Custom content</h4>
            <p className="mt-2">You can use any React node here (icons, videos, markup).</p>
          </div>
        </div>
      ),
    },
    {
      title: "Slide 3",
      description: "Third slide with image that uses fill",
      image: { src: "/1.jpg", alt: "Slide 3" }, // no width/height -> uses fill
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-[#1E1E1E] text-slate-900 dark:text-white transition-colors duration-300">
        {/* HERO */}
   <section className="relative overflow-hidden bg-white dark:bg-black">
  <div className="absolute inset-0">
    <img
      src={industry.headerImg}
      alt={`${industry.title} banner`}
      className="object-cover opacity-80 w-full h-full"
    />

    {/* FIXED: Strong white/black blending */}
    <div
      className="
        absolute inset-0 
        bg-gradient-to-b 
        from-transparent 
        via-white/70 
        to-white
        dark:via-black/70 
        dark:to-black
      "
    />
  </div>

    

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="pt-6">
                <div className="inline-block h-1 w-12 bg-[#379c51] rounded-full mb-6" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  <span className="block text-[#0C5EB4]">{industry.title}</span>
                  <span className="block dark:text-white">{industry.subtitle}</span>
                </h1>
              </div>
            </div>

            {/* FEATURE MATRIX */}
         <div className="mt-12">
  <div className="flex flex-wrap justify-center gap-6">
    {industry.matrix.map((item, i) => (
      <article
        key={i}
        className="w-40 sm:w-48 md:w-56 rounded-2xl p-3 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        style={{
          background:
            "linear-gradient(180deg,#86efac 0%, #CCF9D2 40%, #1e3a8a 60%, #3b82f6 90%)",
        }}
      >
        {/* SOLID CARD (NO TRANSPARENCY) */}
        <div
          className="
            bg-white dark:bg-[#1E1E1E]
            rounded-2xl p-4 flex items-center justify-center
            h-28 sm:h-32 shadow-inner border border-gray-200 dark:border-gray-700
            transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
          "
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-gray-800 dark:text-white drop-shadow-md">
            {item.number}
          </h1>
        </div>

        <p className="mt-3 text-center text-m font-semibold tracking-wide text-blue-50">
          {item.title}
        </p>
      </article>
    ))}
  </div>
</div>

          </div>
        </section>

        {/* QUOTE SECTION */}
        {industry.quote && (
         <section className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 pb-16">
  <div className="
    relative 
    rounded-3xl overflow-hidden shadow-xl
    bg-gradient-to-b 
    from-[#0C5EB4] to-[#63A4E8]
    dark:from-[#06356B] dark:to-[#000000]
  ">
    
    {/* IMAGE BLEND OVERLAY — SAME LOGIC AS HERO */}
    <div 
      className="
        absolute inset-0 
        pointer-events-none
        bg-gradient-to-b 
        from-transparent 
        via-white/20 
        to-white
        dark:via-black/40 
        dark:to-black
      "
    />

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{industry.quote.text}</h2>
        <p className="text-sm md:text-base text-blue-100 dark:text-blue-200 max-w-xl">
          {industry.quote.description}
        </p>
      </div>

      <div className="p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-md bg-white/20 dark:bg-black/20 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-md">
          <div className="rounded-xl overflow-hidden h-100">
            <img
              src={industry.quote.image}
              alt="Quote image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

        )}

        {/* KEY CHALLENGES */}
         <section className="py-16 px-4 bg-white dark:bg-[#020b13]">
           <div className="w-full flex flex-col items-center">
             <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center text-gray-800 dark:text-white">
               Key Challenges
             </h2>
           <div className="w-24 h-1 bg-[#2ecc71] mt-2 rounded-full" />

             <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.challenge.keyChallenges?.map((title, idx) => { return (
           <motion.div
               key={idx}
               whileHover={{ scale: 1.05 }} // ONLY POP-UP EFFECT
                transition={{ type: "spring", stiffness: 300 }}
             className=" relative flex flex-col items-center justify-center  p-6 rounded-2xl shadow-lg cursor-pointer border border-gray-300 dark:border-gray-600 "
>
 <div
  className="
    mb-4 w-12 h-12 flex items-center justify-center 
    rounded-full 
    bg-gray-200 dark:bg-white/20 
    backdrop-blur-md
    text-black font-bold text-lg
  "
>
  {idx + 1}
</div>


  <h3 className="text-center font-semibold text-black dark:text-white text-lg">
    {title}
  </h3>

  <div
    className="absolute inset-0 rounded-2xl opacity-50 blur-2xl mix-blend-screen pointer-events-none"
  />
</motion.div>

        );
      })}
    </div>
  </div>
</section>


        {/* STICKY SCROLL */}
      <section>
  <div className="relative w-full px-4 md:px-10 lg:px-20 py-16 md:py-24 rounded-3xl 
      bg-gradient-to-br from-white/60 via-white/30 to-white/10 
      dark:from-gray-900/60 dark:via-gray-900/30 dark:to-gray-900/10
      shadow-xl shadow-black/5 backdrop-blur-2xl">
      
    <div className="flex flex-col items-center">
      <h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-center 
        bg-gradient-to-r from-cyan-500 to-blue-600 
        dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent"
      >
        Solution
      </h2>
      <div className="w-24 h-1 mt-2 rounded-full bg-[#2ecc71]" />
    </div>
  </div>

  <StickyScrollPinned
    content={industry.stickyContent.map(item => ({
      ...item,
      content: Array.isArray(item.content)
        ? (
          <div className="h-full lg:w-[80%] relative overflow-hidden rounded-2xl pr-8 sm:pr-16 md:pr-24 lg:pr-32">
            {item.content.map((img, i) => (
              <img
                key={i}
                src={img}
                className="fade-slide-image absolute inset-0 h-full w-full object-cover rounded-2xl"
                alt={item.title}
              />
            ))}
          </div>
        )
        : item.content ? (
          <div className="relative h-full w-full pr-8 sm:pr-16 md:pr-24 lg:pr-32">
            <img
              src={item.content as string}
              className="h-full w-full object-cover rounded-2xl fade-zoom"
              alt={item.title}
            />
          </div>
        ) : null
    }))}
  />
</section>

      </main>

      {industry.trusted.imag && industry.trusted.imag.length > 0 && (
        <section className="py-12 mt-32 sm:mt-40 md:mt-32 bg-white dark:bg-[#1E1E1E] text-black dark:text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-6 text-black dark:text-white">
              Trusted by Leading Organizations
            </h2>

            {/* Divider line */}
            <div className="w-24 h-1 bg-[#1E1E1E] mx-auto mb-8 rounded-full dark:bg-[#1E1E1E]" />

            <div className="flex justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
              {industry.trusted.imag.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`trusted-logo-${i}`}
                  className="h-12 sm:h-16 md:h-20 object-contain brightness-110 hover:brightness-125 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
