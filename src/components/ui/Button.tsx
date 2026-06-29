"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Determine the component to render, wrapping Slot in motion if asChild is true
    const Comp = asChild ? (motion.create ? motion.create(Slot) : (motion as any)(Slot)) : motion.button;
    
    const variants = {
      default: "bg-theme-primary text-theme-base hover:opacity-90",
      outline: "border-[length:var(--theme-border-width)] border-theme-border text-theme-primary bg-transparent hover:bg-theme-primary hover:text-theme-base",
      secondary: "bg-theme-secondary text-theme-text hover:opacity-80",
      ghost: "hover:bg-theme-surface hover:text-theme-text",
      link: "text-theme-primary underline-offset-4 hover:underline",
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-theme-sm px-3",
      lg: "h-11 rounded-theme-sm px-8",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-theme-sm text-sm font-medium ring-offset-theme-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props as any}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }
