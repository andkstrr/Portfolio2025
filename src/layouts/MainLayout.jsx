export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full text-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}
