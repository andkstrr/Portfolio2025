import { Marquee } from "@/components/ui/marquee";
import SkillsList from "./SkillsList";

export default function SkillsMarquee() {
  return (
    <div className="relative space-y-2 overflow-hidden">
      {/* Fade left */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24
                   bg-linear-to-r from-background to-transparent"
      />

      {/* Fade right */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24
                   bg-linear-to-l from-background to-transparent"
      />

      {/* Normal direction */}
      <Marquee className="[--duration:25s]">
        <SkillsList />
      </Marquee>

      {/* Reverse direction */}
      <Marquee className="[--duration:25s]"reverse>
        <SkillsList />
      </Marquee>
    </div>
  );
}
