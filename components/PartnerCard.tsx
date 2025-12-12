import React from 'react';
import Image from 'next/image';

interface PartnerCardProps {
  name: string;
  logo: string;
}

export default function PartnerCard({ name, logo }: PartnerCardProps) {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 h-28 sm:h-32">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain filter dark:brightness-110"
        />
      </div>
    </div>
  );
}
