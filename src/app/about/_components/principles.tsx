import { SectionLabel } from "@/components/sectionLabel";
import { principles } from "../_lib/content";

export function PrinciplesSection() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1802px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionLabel>Operational Principles</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
            Principles Behind Every Operational System
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-b border-white/20 pb-6">
              <div className="mb-4 flex items-center gap-3">
                <Icon size={24} className="text-[#8cc43f]" strokeWidth={1.6} />
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>
              <p className="text-lg font-medium leading-8 text-zinc-200">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
