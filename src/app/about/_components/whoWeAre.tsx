export function WhoWeAreSection() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1802px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-lg font-bold uppercase tracking-[0.02em] text-green lg:text-2xl">
            Who We Are
          </p>
          <h2 className="mt-5 max-w-[760px] text-4xl font-light leading-[1.18] tracking-[-0.02em] text-white sm:text-5xl lg:text-[60px]">
            We design infrastructure for environments where failure is not acceptable
          </h2>
        </div>
        <p className="max-w-[780px] text-lg font-semibold leading-8 tracking-wide text-zinc-200 sm:text-2xl lg:pt-11 lg:leading-10">
          Our work focuses on systems that must remain secure, auditable, and
          continuously operational across regulated environments. We design
          infrastructure that supports resilience, continuity, and long-term
          governance.
        </p>
      </div>
    </section>
  );
}
