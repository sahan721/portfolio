import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-blue-600 hover:bg-blue-700 text-white",

        variant === "outline" &&
          "border border-slate-600 hover:border-blue-500 text-slate-100",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}