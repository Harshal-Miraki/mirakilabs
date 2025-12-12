"use client";

import React, { useMemo, useState } from "react";

type Office = {
  address: string;
  phone: string;
  email: string;
};

const OFFICES: Record<"india" | "international", Record<string, Office>> = {
  india: {
    Mumbai: {
      address: "123 Business Park, Andheri East\nMumbai, Maharashtra 400069",
      phone: "+91 22 1234 5678",
      email: "mumbai@company.com",
    },
    Bangalore: {
      address: "456 Tech Hub, Whitefield\nBangalore, Karnataka 560066",
      phone: "+91 80 9876 5432",
      email: "bangalore@company.com",
    },
    Delhi: {
      address: "789 Corporate Tower, Connaught Place\nNew Delhi, Delhi 110001",
      phone: "+91 11 2468 1357",
      email: "delhi@company.com",
    },
  },

  international: {
    USA: {
      address: "21 Madison Ave, Manhattan\nNew York, USA 10010",
      phone: "+1 212-555-7890",
      email: "nyoffice@company.com",
    },
    London: {
      address: "57 King Street\nLondon WC2N 5DU, UK",
      phone: "+44 20 7946 0958",
      email: "london@company.com",
    },
  },
};

export default function OfficeTabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof OFFICES>("india");

  const officeList = useMemo(() => Object.entries(OFFICES[activeTab]), [activeTab]);

  return (
    <section className="bg-white dark:bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-8">
          <h3 className="text-xl md:text-3xl font-semibold text-slate-700 dark:text-white">Our Office Locations</h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Find us at our offices around the world
          </p>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-[#1E1E1E] rounded-full">
              <button
                onClick={() => setActiveTab("india")}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  activeTab === "india"
                    ? "bg-white dark:bg-[#3F4041] shadow-sm text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-white"
                }`}
              >
                India Office
              </button>

              <button
                onClick={() => setActiveTab("international")}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  activeTab === "international"
                    ? "bg-white dark:bg-[#3F4041] shadow-sm text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-white"
                }`}
              >
                International Office
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeList.map(([city, details]) => (
            <div
              key={city}
              className="bg-white dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#A19C9C] rounded-xl p-5 shadow-sm"
            >
              <h4 className="text-base font-semibold text-slate-800 dark:text-white mb-2">{city}</h4>
              <p className="text-sm whitespace-pre-line text-slate-600 dark:text-[#A19C9C] mb-3">{details.address}</p>
              <p className="text-sm text-slate-600 dark:text-[#A19C9C]">{details.phone}</p>
              <p className="text-sm text-slate-600 dark:text-[#A19C9C]">{details.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
