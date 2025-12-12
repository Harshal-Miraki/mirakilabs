'use client';

import React from 'react';
import PartnerCard from './PartnerCard';
import { motion } from 'framer-motion';

const PARTNERS_DATA = [
  {
    category: 'Technology Partners',
    partners: [
      { name: 'Hewlett-Packard', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Technology%20Partner/Hewlett-Packard-Logo-2009.png?updatedAt=1765533556637' },
      { name: 'Cisco', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Technology%20Partner/Cisco_logo_blue_2016.svg.png?updatedAt=1765533556446' },
      { name: 'Lenovo', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Technology%20Partner/Lenovo_logo_2015.svg.png?updatedAt=1765533556404' },
      { name: 'Dell', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Technology%20Partner/Dell_logo.svg.png?updatedAt=1765533556449' },
      { name: 'HPE', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Technology%20Partner/Hewlett_Packard_Enterprise_logo_2025.svg.png?updatedAt=1765533556373' },
      { name: 'ASUS', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Technology%20Partner/ASUS_Corporate_Logo.svg.png?updatedAt=1765533556382' },
    ]
  },
  {
    category: 'Industrial Automation',
    partners: [
      { name: 'Beckhoff', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/Beckhoff_Logo.svg.png?updatedAt=1765533587082' },
      { name: 'Honeywell', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/Honeywell_logo.svg.png?updatedAt=1765533587022' },
      { name: 'ABB', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/ABB_logo.svg.png?updatedAt=1765533587044' },
      { name: 'Rockwell Automation', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/2560px-Rockwell_Automation_logo.svg.png?updatedAt=1765533587030' },
      { name: 'Siemens', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/Siemens-logo1.png?updatedAt=1765533587098' },
      { name: 'Danfoss', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/2560px-Danfoss-Logo.svg.png?updatedAt=1765533586625' },
      { name: 'Bosch', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/Bosch-logo.svg.png?updatedAt=1765533586568' },
      { name: 'Yaskawa', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/Yaskawa_logo.svg.png?updatedAt=1765533586550' },
      { name: 'OMRON', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Automation/OMRON_Logo.svg.png?updatedAt=1765533586451' },
    ]
  },
  {
    category: 'Industrial Customers',
    partners: [
      { name: 'Wonder Cement', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Customer/Wonder_Cement.svg.png?updatedAt=1765533609256' },
      { name: 'Innomotics', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Customer/Innomotics.png?updatedAt=1765533609204' },
      { name: 'LG', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Customer/LG_logo_(2014).svg.png?updatedAt=1765533609175' },
      { name: 'Siemens', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Customer/Siemens-logo1.png?updatedAt=1765533608851' },
      { name: 'CEAT', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Customer/CEAT_Logo.svg.png?updatedAt=1765533608789' },
      { name: 'UTC', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Industrial%20Customer/UTC.png?updatedAt=1765533608680' },
    ]
  },
  {
    category: 'Tech Partners',
    partners: [
      { name: 'Microsoft', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Tech%20Partners/Microsoft_logo_(2012).svg.png?updatedAt=1765533645302' },
      { name: 'Nutanix', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Tech%20Partners/Nutanix-Logo.png?updatedAt=1765533645365' },
      { name: 'VMware', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Tech%20Partners/VMware-Logo.png?updatedAt=1765533645329' },
      { name: 'Red Hat', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Tech%20Partners/Red_Hat_Logo_2019.svg.png?updatedAt=1765533645186' },
      { name: 'Amazon', logo: 'https://ik.imagekit.io/zu9jitfho/Partners/Tech%20Partners/Amazon-Logo.png?updatedAt=1765533645433' },
    ]
  },
];

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver innovative solutions and drive transformation across industries
          </p>
        </motion.div>

        {/* Partner Categories */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {PARTNERS_DATA.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.category}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <PartnerCard
                      name={partner.name}
                      logo={partner.logo}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
