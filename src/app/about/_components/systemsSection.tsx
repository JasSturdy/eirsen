import { SectionLabel } from "@/components/sectionLabel";
import { systems } from "../_lib/content";

export function SystemsSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1802px] text-center">
        <SectionLabel>What We Design</SectionLabel>
        <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
          Operational Infrastructure Systems
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {systems.map(({ icon: Icon, text }) => (
            <article
              key={text}
              className="flex items-center gap-6 rounded-[17px] border border-[#2b2b2b] bg-[#101316] bg-[radial-gradient(circle_at_center_top,rgba(140,196,63,0.16),rgba(16,19,22,0.35)_42%,#101316_85%)] p-6 text-left"
            >
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
                <Icon size={28} strokeWidth={1.6} />
              </span>
              <p className="text-base font-medium leading-7 text-zinc-100">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
