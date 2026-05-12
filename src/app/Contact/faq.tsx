"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/sectionLabel";
import { PlusCircle, MinusCircle } from "lucide-react";

const FAQS = [
  {
    question: "Where are you based?",
    answer: "We are based in Dublin, Ireland, operating as an independent Irish company aligned with European regulatory and assurance frameworks.",
  },
  {
    question: "What sectors do you support?",
    answer: "We support a range of regulated and mission-critical sectors including Defence, Health & Medical, Telecommunications, Aerospace, Transport, Energy, and Government.",
  },
  {
    question: "Do you support certification and compliance?",
    answer: "Yes. Our systems are designed to meet and support certification requirements across relevant European and international standards, including audit-readiness and traceability.",
  },
  {
    question: "Do you provide secure environments?",
    answer: "Yes. We design and operate systems built on a Zero Trust security model, ensuring controlled access, role-based permissions, and end-to-end operational assurance.",
  },
  {
    question: "What does the company do?",
    answer: "We design and operate secure, sovereign infrastructure for regulated and high-assurance environments — combining academic research with real-world operational experience.",
  },
] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

        {/* Left — title */}
        <div className="shrink-0 lg:w-[280px] xl:w-[320px]">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-3 w-full">
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-6 py-4 text-left"
                >
                  {isOpen
                    ? <MinusCircle size={20} strokeWidth={1.5} className="text-green shrink-0" />
                    : <PlusCircle size={20} strokeWidth={1.5} className="text-green shrink-0" />
                  }
                  <span className="text-sm sm:text-base text-white">{question}</span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-5 pl-14 text-sm text-zinc-300 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}