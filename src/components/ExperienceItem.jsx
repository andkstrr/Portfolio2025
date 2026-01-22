import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ExperienceItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 dark:border-neutral-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 group hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors px-2 rounded-lg"
      >
        <div className="flex items-start gap-4 text-left">
          <img src={data.logo} alt={data.company} className="w-10 h-auto" />
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">{data.role}</h3>
            <p className="font-normal text-sm text-slate-700 dark:text-neutral-400">{data.company}</p>
            <p className="font-normal text-sm text-gray-400 dark:text-neutral-600">{data.period}</p>
          </div>
        </div>
        <div className="text-slate-400 dark:text-neutral-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Description*/}
      {isOpen && (
        <div className="pb-6 pl-18 pr-4 text-slate-600 dark:text-neutral-400 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
          {data.description}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
