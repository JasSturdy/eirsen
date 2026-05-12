import { Card } from "@/components/card";
import { SectionLabel } from "@/components/sectionLabel";
import Image from "next/image";
import { GraduationCap, UsersRound, Landmark, UserRoundSearch } from "lucide-react";

const WHO_FOR = [
  { icon: <UsersRound size={40} strokeWidth={0.5} className="sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]" />, label: "Approved Partners" },
  { icon: <GraduationCap size={40} strokeWidth={0.5} className="sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]" />, label: "Research Collaborators" },
  { icon: <Landmark size={40} strokeWidth={0.5} className="sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]" />, label: "Institutional Stakeholders" },
  { icon: (
    <Image
      src="/icons/teams.png"
      className="pointer-events-none w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[65px] lg:h-[65px]"
      alt="Operational Teams"
      width={65}
      height={65}
    />
  ), label: "Operational Teams" },
  { icon: <UserRoundSearch size={40} strokeWidth={0.5} className="sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]" />, label: "Advisors and Authorised Guests" },
] as const;

export function WhoFor() {
  return (
    <section className="mx-auto">
      <Card className="p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-8">

          {/* Left — title */}
          <div className="shrink-0 xl:min-w-[280px] xl:border-r xl:border-white/10 xl:pr-10 flex flex-col justify-center border-b border-white/10 pb-8 xl:border-b-0 xl:pb-0">
            <SectionLabel>Who It&apos;s For</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
              Authorised
              <br />
              Access Only
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col w-full gap-8">
            {/* Icons row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-y-8">
              {WHO_FOR.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 text-center xl:border-r xl:border-white/10 xl:last:border-0 xl:px-5">
                  <span className="text-green">{icon}</span>
                  <p className="text-sm sm:text-base lg:text-lg text-white">{label}</p>
                </div>
              ))}
            </div>

            {/* Bottom description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 border-t border-white/10 pt-6">
              The portal is designed for approved organisations and collaborators working with us in regulated and high-assurance environments.
            </p>
          </div>

        </div>
      </Card>
    </section>
  );
}