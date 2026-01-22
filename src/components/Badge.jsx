const Badge = ({ children }) => {
  return (
    <span className="bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 dark:border-neutral-700">
      {children}
    </span>
  );
};

export default Badge;
