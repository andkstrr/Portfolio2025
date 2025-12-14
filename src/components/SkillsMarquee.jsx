import { skills } from "../data/skills";

export default function SkillsMarquee() {
  return (
    <div className="relative overflow-hidden py-6">
      {/* FADE LEFT */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

      {/* FADE RIGHT */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

      {/* TRACK */}
      <div className="flex w-[200%] animate-marquee">
        {/* FIRST */}
        <div className="flex w-1/2 justify-around whitespace-nowrap">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <Icon className="text-xl" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* DUPLICATE */}
        <div className="flex w-1/2 justify-around whitespace-nowrap">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <Icon className="text-xl" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
