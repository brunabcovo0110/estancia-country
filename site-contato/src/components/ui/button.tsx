import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans text-[0.7rem] font-medium uppercase tracking-[0.25em] transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-earth text-cream hover:bg-earth-dark",
        accent: "bg-caramel text-cream hover:bg-earth",
        outline: "border border-earth/40 bg-transparent text-earth hover:border-earth hover:bg-earth hover:text-cream",
        light: "border border-cream/60 bg-transparent text-cream hover:bg-cream hover:text-earth",
        ghost: "text-earth hover:text-caramel",
        link: "px-0 text-earth underline-offset-8 hover:text-caramel hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-5",
        lg: "h-14 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
