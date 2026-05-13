import Image from "next/image";

export function BuiltByPractitioners() {
  return (
    <section className="group relative mx-auto mt-16 overflow-hidden text-center">
      <Image
        src="/bg-practitioners.png"
        alt=""
        fill
        className="object-cover object-center opacity-70 motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out group-hover:scale-[1.02]"
        priority
      />
      <div className="absolute inset-0 bg-[#04080B]/35" />

      <div className="relative mx-auto flex max-w-[1805px] flex-col items-center justify-center gap-8 px-6 py-20 lg:min-h-[260px] lg:gap-10">
        <h2 className="text-3xl font-light tracking-[-0.03em] text-green sm:text-4xl lg:text-[60px] lg:leading-[75px]">
          Built by Practitioners
        </h2>
        <p className="max-w-[1805px] text-base font-medium leading-[30px] tracking-[0.02em] text-[#EFEBEB] lg:text-2xl">
          We combine academic research and real-world experience in designing
          and operating systems in regulated and high-assurance environments.
        </p>
      </div>
    </section>
  );
}
