import { SectionLabel } from "@/components/sectionLabel";
import { Button } from "@/components/button";
import Link from "next/link";

export function AccessPortal() {
  return (
    <section className="mx-auto text-center flex flex-col items-center gap-6">
      <SectionLabel>Access Portal</SectionLabel>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
        For Authorised Partners, Collaborators, and Approved Guests
      </h2>

      <Button href="/portal" variant="solid">
        Access Portal →
      </Button>

      <p className="text-sm text-white">
        Need access?{" "}
        <Link href="/contact" className="text-white underline underline-offset-4 hover:text-green transition-colors">
          Contact
        </Link>{" "}
        our team to request authorisation.
      </p>
    </section>
  );
}