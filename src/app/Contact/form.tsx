"use client";

import { useState } from "react";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { Mail, MapPin, Clock, Lock } from "lucide-react";

export function ContactForm() {
  const [enquiryType, setEnquiryType] = useState("");

  return (
    <section className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

        {/* Left — Form */}
        <Card className="p-8 lg:p-10 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white">Send An Inquiry</h2>
            <p className="mt-4 text-sm text-zinc-300">Please complete the form below and our team will respond promptly</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-300">Full Name</label>
              <input
                type="text"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-green transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-300">Email</label>
              <input
                type="email"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-green transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300">Company</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-green transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300">Sector</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-green transition-colors"
                />
              </div>
            </div>

            {/* Enquiry Type — fixed */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-300">Select Enquiry Type</label>
              <select
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                className="w-full rounded-lg bg-[#0e1a20] border border-white/10 px-4 py-3 text-zinc-400 text-sm focus:outline-none focus:border-green transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>Select an option</option>
                <option value="general">General Enquiry</option>
                <option value="partnership">Partnership</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-300">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-green transition-colors resize-none"
              />
            </div>
          </div>

          <Button href="#" variant="solid" className="self-start">
            Submit Enquiry →
          </Button>
        </Card>

        {/* Right — Info cards */}
        <div className="flex flex-col gap-6">
          <Card className="p-8 flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl text-white font-medium leading-snug">
              Institutional and Operational Enquiries
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Mail size={30} strokeWidth={1} className="text-green shrink-0" />
                <p className="text-sm text-zinc-300">Jason@sturdy.ie</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={30} strokeWidth={1} className="text-green shrink-0" />
                <p className="text-sm text-zinc-300">Dublin, Ireland</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={30} strokeWidth={1} className="text-green shrink-0" />
                <p className="text-sm text-zinc-300">08.00 AM - 06.00 PM</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 flex flex-col gap-4">
            <Lock size={40} strokeWidth={1} className="text-green" />
            <h3 className="text-xl sm:text-2xl text-white">Security Notice</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Sensitive operational or confidential information should not be submitted through public forms.
            </p>
          </Card>
        </div>

      </div>
    </section>
  );
}