import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}
