const Badge = ({ children }) => {
  return (
    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200">
      {children}
    </span>
  );
};

export default Badge;
