import { cn } from "@/lib/utils";

interface TechBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  variant?: "default" | "outline";
}

export function TechBadge({ name, variant = "default", className, ...props }: TechBadgeProps) {
  const variants = {
    default: "bg-theme-secondary/80 text-theme-text border-[length:var(--theme-border-width)] border-theme-border rounded-theme-sm",
    outline: "bg-transparent text-theme-muted border-[length:var(--theme-border-width)] border-theme-border rounded-theme-sm"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {name}
    </div>
  );
}
