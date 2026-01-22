import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatedThemeToggler />
    </div>
  );
}
