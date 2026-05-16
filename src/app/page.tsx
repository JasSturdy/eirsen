import Image from "next/image";
import HomePage from "./HomePage/page";

export default function LandingPage() {
  return (

    <div className="">
      <HomePage />
    </div>
    // <main className="relative min-h-screen overflow-hidden bg-black text-white">
    //   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,180,75,0.14),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.2),#000_85%)]" />

    //   <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-[radial-gradient(circle,rgba(58,255,120,0.8)_1px,transparent_2px)] bg-[length:18px_18px] opacity-35 [mask-image:linear-gradient(90deg,#000,transparent)]" />
    //   <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-[radial-gradient(circle,rgba(58,255,120,0.8)_1px,transparent_2px)] bg-[length:18px_18px] opacity-35 [mask-image:linear-gradient(270deg,#000,transparent)]" />

    //   <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-8vh] hidden h-[30vh] opacity-60 md:block">
    //     <div className="absolute inset-0 bg-[linear-gradient(rgba(47,214,93,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(47,214,93,0.22)_1px,transparent_1px)] bg-[length:42px_42px] [mask-image:linear-gradient(0deg,#000_0%,rgba(0,0,0,0.75)_52%,transparent_100%)] [transform:perspective(460px)_rotateX(62deg)_translateY(48%)]" />
    //     <div className="absolute inset-x-0 top-6 h-px bg-gradient-to-r from-transparent via-[#49f26e] to-transparent shadow-[0_0_28px_#49f26e]" />
    //   </div>

    //   <section className="relative z-10 mx-auto flex min-h-screen max-w-[1120px] flex-col items-center justify-center px-6 py-10 text-center sm:py-16">
    //     <Image
    //       src="/eirsen-progress-logo-transparent.png"
    //       alt="Eirsen"
    //       width={1536}
    //       height={864}
    //       priority
    //       className="h-auto w-[min(76vw,720px)] mix-blend-screen drop-shadow-[0_0_44px_rgba(73,242,110,0.28)] sm:w-[min(82vw,720px)]"
    //     />

    //     <div className="my-8 h-px w-full max-w-[360px] bg-gradient-to-r from-transparent via-[#73ff8e] to-transparent shadow-[0_0_18px_#49f26e] sm:my-10 sm:max-w-[560px] sm:shadow-[0_0_24px_#49f26e]" />

    //     <p className="text-xl font-medium uppercase tracking-[0.36em] text-white sm:text-4xl sm:tracking-[0.45em]">
    //       Website
    //     </p>
    //     <h1 className="mt-5 max-w-[9ch] bg-gradient-to-r from-[#34c761] via-[#cdeac5] to-white bg-clip-text text-5xl font-bold uppercase leading-[1.08] tracking-[0.04em] text-transparent sm:mt-6 sm:max-w-none sm:text-7xl sm:tracking-[0.08em] lg:text-8xl">
    //       In Progress
    //     </h1>

    //     <div className="my-10 h-px w-full max-w-[360px] bg-gradient-to-r from-transparent via-[#73ff8e] to-transparent shadow-[0_0_18px_#49f26e] sm:my-14 sm:max-w-[560px] sm:shadow-[0_0_24px_#49f26e]" />

    //     <p className="max-w-[24ch] text-sm font-semibold uppercase leading-7 tracking-[0.28em] text-[#58e96f] sm:max-w-none sm:text-xl sm:leading-normal sm:tracking-[0.32em]">
    //       For enquiries, contact us at
    //     </p>
    //     <a
    //       href="mailto:hello@eirsen.ie"
    //       className="mt-6 text-[2rem] font-light leading-tight tracking-[0.02em] text-white transition-colors hover:text-[#8CC43F] sm:text-5xl sm:tracking-[0.04em]"
    //     >
    //       hello@eirsen.ie
    //     </a>
    //   </section>
    // </main>
  );
}
