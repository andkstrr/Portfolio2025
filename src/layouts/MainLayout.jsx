import FloatingButton from "@/components/FloatingButton";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full text-neutral-900 dark:text-neutral-100 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-10">{children}</div>
      <FloatingButton />
    </div>
  );
}
