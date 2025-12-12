"use client";
import React from "react";
import { motion } from "framer-motion";

interface LeaderCardProps {
  image: string;
  role: string;
  name: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ image, role, name }) => {
  return (
    <>    

       <div className="flex flex-col items-center text-center">

      {/* Image */}
      <div className="w-80 h-80 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Role */}
      <div className="mt-3">
        <h2 className="text-slate-900 font-semibold text-base">{name}</h2>
        <p className="text-slate-500 text-sm mt-1">{role}</p>
      </div>

    </div>
</>
    
  );
};

export default LeaderCard;
