"use client"
import React from 'react'
import { TypingAnimation } from "@/components/ui/TypingAnimation"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { LampContainer } from "@/components/ui/LampContainer";
import { motion } from "framer-motion"
import LeaderCard from '@/components/LeaderCard';
import Partners from '@/components/Partners';
import image from "@public/1.jpg"
import image1 from "@public/2.jpg"
import image2 from "@public/3.jpg"
import { WavyBackground } from '@/components/wavy-background';
const page = () => {
  return (
<>
<WavyBackground height={600} className="max-w-4xl mx-auto">
  <div className="relative max-w-3xl text-center md:text-left z-10 space-y-6 h-full flex flex-col justify-center">
    <h1 className="text-5xl md:text-7xl text-center font-bold tracking-tight leading-tight text-black dark:text-white">
      About <span className="text-green-600 dark:text-green-600">Our Journey</span>
    </h1>

    <TypingAnimation className="text-lg md:text-xl leading-relaxed text-center text-gray-800 dark:text-blue-200">
      We're driven by a passion to create meaningful experiences that empower innovation and transform ideas into impact.
    </TypingAnimation>
  </div>
</WavyBackground>




   
<div className="flex flex-col md:flex-row items-center justify-center gap-14 px-6 py-16">

  {/* Left Text Section */}
  <div className="flex-1 max-w-xl md:ml-[10%] text-center md:text-left">
 <h1
  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4
    dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-600
    dark:bg-clip-text dark:text-transparent">  OUR STORY
</h1>
    <p className="text-gray-600 leading-relaxed text-base md:text-lg dark:text-white mb-4">
      For the past six years, we’ve grown from a hardware-focused company into a software innovator, delivering cutting-edge solutions that help businesses thrive.

From building robust systems to creating innovative, user-centric software, we combine experience, technology, and creativity to solve real-world challenges.

Our mission is  transform ideas into impactful technology solutions, empowering our clients to stay ahead in a fast-paced digital world.
    </p>

    {/* Cards Section */}
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 py-12">
      {/* Card 1 */}
  <NeonGradientCard className="w-56 h-28 md:w-60 md:h-32 rounded-2xl flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md">
  <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-900 dark:text-blue-400">80+</h1>
  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 tracking-wide">Projects Completed</p>
</NeonGradientCard>

<NeonGradientCard className="w-56 h-28 md:w-60 md:h-32 rounded-2xl flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md">
  <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-900 dark:text-blue-400">35+</h1>
  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 tracking-wide">Team Members</p>
</NeonGradientCard>

<NeonGradientCard className="w-56 h-28 md:w-60 md:h-32 rounded-2xl flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md">
  <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-900 dark:text-blue-400">5+</h1>
  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 tracking-wide">Global Clients</p>
</NeonGradientCard>


     
    </div>
  </div>

  {/* Right Image Section */}
    <div className="flex-1 flex justify-center mb-8 sm:mb-0">
    <img
      src="storyimage.jpeg"
      alt="Our vision"
      className="rounded-xl w-full  ml-4 max-w-[500px] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[700px] object-cover shadow-lg"
    />
  </div>


</div>
{/* Our Vision */}
<div className=" mr-[6%] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
  {/* Left Image Section */}
  <div className="flex-1 flex justify-center mb-8 sm:mb-0">
    <img
      src="vision.jpg"
      alt="Our Vision"
      className="rounded-xl w-full  ml-4 max-w-[500px] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[700px] object-cover shadow-lg sm:ml-[0%]"
    />
  </div>

  {/* Left Text Section */}
  <div className="flex-1 max-w-xl text-center sm:text-left sm:ml-5 md:ml-10 lg:ml-16">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-600 dark:bg-clip-text dark:text-transparent">
      Our Vision
    </h1>
    <p className=" text-gray-600 leading-relaxed text-base sm:text-lg dark:text-white mb-4">
         To become India’s leading force in intelligent automation, 
         driving a future where industries are sustainable, resilient,
         and globally competitive. We envision a world where technology
         and innovation empower every manufacturer to solve real-world
         challenges, optimize efficiency, and accelerate growth,
       shaping a smarter, greener, and more prosperous industrial ecosystem.    </p>
  </div>
</div>
{/* Our Mission */}

<div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
  {/* Left Text Section */}
  <div className="flex-1 max-w-xl text-center  lg:ml-[10%] sm:text-left sm:ml-4 md:ml-10 lg:ml-16 mb-8 sm:mb-0">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-600 dark:bg-clip-text dark:text-transparent">
      Our Mission
    </h1>
    <p className="text-gray-600 leading-relaxed text-base sm:text-lg dark:text-white mb-4">
      To drive nationwide sustainable industrial transformation
       by 2047 through advanced automation, AI-powered solutions,
        and seamless integration of hardware and software enabling
         industries to operate smarter, safer, and more efficiently,
          and establishing Miraki Labs as a leading force in the industrial innovation ecosystem.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex-1 flex justify-center mb-8 sm:mb-0">
    <img
      src="mission.png"
      alt="Our Mission"
      className="rounded-xl w-full max-w-[500px] sm:max-w-[600px] sm:mr-20px md:max-w-[600px] lg:max-w-[700px] object-cover shadow-lg"
    />
  </div>
</div>



{/* Core Values */}
{/* Our Vision */}
<div className="mr-[6%] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
  {/* Left Image Section */}
  <div className="flex-1 flex justify-center mb-8 sm:mb-0">
    <img
      src="c1.jpg"
      alt="Our Mission"
      className="rounded-xl ml-10 w-full max-w-[500px] sm:max-w-[600px] sm:mr-4px md:max-w-[600px] lg:max-w-[700px] object-cover shadow-lg"
    />
  </div>

  {/* Left Text Section */}
  <div className="flex-1 max-w-xl text-center sm:text-left sm:ml-4 md:ml-10 lg:ml-16">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-600 dark:bg-clip-text dark:text-transparent">
     Core Value
    </h1>
    <p className="text-gray-600 leading-relaxed text-base sm:text-lg dark:text-white mb-4">
At the heart of our company are our core values: sustainability, innovation, and collaboration. 
We are committed to creating solutions that are responsible and future-ready, ensuring our growth 
benefits both businesses and the planet. Through innovation, we embrace creativity and cutting-edge
 technology to solve real-world challenges and push boundaries. And through collaboration, we foster
  strong partnerships,teamwork, and open communication, working closely with clients and communities
   to achieve shared success.
    </p>
  </div>
</div>

<div className="our-partners">
  <Partners />
</div>

{/* Goals */}

<div>
  {/* <LampContainer className="mt-0 relative"> */}
   {/* <motion.h1
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="
    relative 
    z-50 
    text-center 
    font-bold 
    text-4xl sm:text-5xl md:text-4xl 

    text-black        
     dark:text-white

    mt-[95%] sm:mt-[70%] md:mt-[35%] lg:mt-[32%] xl:mt-[30%]
  "
>
OUR GREATEST MIND
</motion.h1> */}


     {/* Container for LeaderCards */}
    {/* <div className="flex flex-wrap justify-center gap-8 sm:gap-22 mt-25 sm:mt-26">
      <LeaderCard image="2.jpg" role="COO" name="Ram" />
      <LeaderCard image="1.jpg" role="CEO" name="Snajev" />
      <LeaderCard image="3.jpg" role="CTO" name="Harish" />
            <LeaderCard image="2.jpg" role="CTO" name="Harish" />

    </div> */}
  {/* </LampContainer> */}
</div>

</>
  )
}

export default page