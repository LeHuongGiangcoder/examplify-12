import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showValue?: boolean;
  variant?: "default" | "gradient" | "success";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, showValue = false, variant = "default", ...props }, ref) => {
  const indicatorClass = variant === "gradient" 
    ? "h-full w-full flex-1 bg-gradient-primary transition-all"
    : variant === "success"
    ? "h-full w-full flex-1 bg-success transition-all"
    : "h-full w-full flex-1 bg-primary transition-all";

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn("relative h-3 w-full overflow-hidden rounded-full bg-muted", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={indicatorClass}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <span className="absolute right-0 top-0 -translate-y-full text-xs font-medium text-muted-foreground pb-1">
          {value}%
        </span>
      )}
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
