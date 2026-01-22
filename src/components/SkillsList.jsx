import { skills } from "../data/skills";

export default function SkillsList() {
  return (
    <>
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.id}
            className="flex items-center gap-2 mx-3 text-sm font-medium
                       text-gray-700 dark:text-neutral-300 whitespace-nowrap"
          >
            <Icon className="text-xl" style={{ color: skill.color }} />
            <span>{skill.name}</span>
          </div>
        );
      })}
    </>
  );
}
