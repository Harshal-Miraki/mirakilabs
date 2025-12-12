"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/WorldMap";

import OfficeTabs from "@/components/OfficeTabs"

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  prefProduct: boolean;
  prefWeekly: boolean;
  prefOffers: boolean;
};

export default function Page() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    prefProduct: false,
    prefWeekly: false,
    prefOffers: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function validate() {
    if (!form.firstName.trim() || !form.lastName.trim())
      return "Please enter your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      return "Please enter a valid email.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const v = validate();
    if (v) return setError(v);

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <>
      {/* ------------------ HEADER ------------------ */}
      <div className="py-20 text-center px-4 bg-[#D2E6F5] dark:bg-slate-900 transition-colors duration-300">
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className="h-1 w-10 bg-green-400 rounded-full"></span>

          <span className="tracking-[4px] text-xs font-semibold text-blue-900 dark:text-green-300">
            MIRAKILABS
          </span>

          <span className="h-1 w-10 bg-green-400 rounded-full"></span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-white">
          Contact our team
        </h2>

        <p className="mt-4 max-w-xl mx-auto leading-relaxed text-blue-900/70 dark:text-slate-300">
          We're here to help and answer any questions you might have.
        </p>
      </div>

      {/* ------------------ FORM + MAP ------------------ */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center items-start gap-3 flex-col md:flex-row">
          {/* FORM */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md border border-slate-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col text-sm">
                  <span className="text-slate-600 mb-2">First Name</span>
                  <input
                    value={form.firstName}
                    onChange={(e) =>
                      handleChange("firstName", e.target.value)
                    }
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="First name"
                    required
                  />
                </label>

                <label className="flex flex-col text-sm">
                  <span className="text-slate-600 mb-2">Last Name</span>
                  <input
                    value={form.lastName}
                    onChange={(e) =>
                      handleChange("lastName", e.target.value)
                    }
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="surname"
                    required
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="flex flex-col text-sm">
                  <span className="text-slate-600 mb-2">Email Address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="xyz@example.com"
                    required
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="flex flex-col text-sm">
                  <span className="text-slate-600 mb-2">Phone Number</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="flex flex-col text-sm">
                  <span className="text-slate-600 mb-2">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </label>
              </div>

              <div className="mt-5 border-t pt-4">
                <span className="text-sm font-medium text-slate-700">
                  Communication Preferences
                </span>

                <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={form.prefProduct}
                      onChange={(e) =>
                        handleChange("prefProduct", e.target.checked)
                      }
                    />
                    Product updates and announcements
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={form.prefWeekly}
                      onChange={(e) =>
                        handleChange("prefWeekly", e.target.checked)
                      }
                    />
                    Weekly newsletter and insights
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={form.prefOffers}
                      onChange={(e) =>
                        handleChange("prefOffers", e.target.checked)
                      }
                    />
                    Special offers and promotions
                  </label>
                </div>
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-600">{error}</p>
              )}
              {success && (
                <p className="mt-4 text-sm text-green-600">
                  Message sent!
                </p>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* MAP */}
          <div className="py-40 dark:bg-black bg-white w-full flex-1 text-center">
            <WorldMap
              dots={[
                { start: { lat: 28.6, lng: 77.2 }, end: { lat: 19.07, lng: 72.87 } },
                { start: { lat: 19.07, lng: 72.87 }, end: { lat: 12.97, lng: 77.59 } },
                { start: { lat: 12.97, lng: 77.59 }, end: { lat: 39.82, lng: -98.57 } },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ------------------ OFFICE TABS + GRID ------------------ */}
      <OfficeTabs></OfficeTabs>
    </>
  );
}
