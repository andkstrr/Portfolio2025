import { experiences } from "../data/experiences";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  return (
    <div className="space-y-2">
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} data={exp} />
      ))}
    </div>
  );
}
