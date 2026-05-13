import Image from "next/image";

export function BuiltByPractitioners() {
  return (
    <section className="group relative overflow-hidden mx-auto text-center">
      {/* Background Image */}
      <Image
        src="/bg-practitioners.png"
        alt=""
        fill
        className="object-cover object-center motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out group-hover:scale-[1.02]"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative px-6 py-16 lg:py-24">
        <h2 className="mb-8 text-3xl sm:text-4xl lg:text-5xl text-green">
          Built by Practitioners
        </h2>
        <p className="text-lg leading-relaxed text-zinc-300">
          We combine academic research and real-world experience in designing
          and operating systems in regulated and high-assurance environments.
        </p>
      </div>
    </section>
  );
}
