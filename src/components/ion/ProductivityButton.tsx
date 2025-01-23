// Generated with Ion on 1/23/2025, 9:21:02 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:309
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type ProductivityButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  iconLeading?: React.ReactNode;
};

const buttonVariants = cva([
  "flex",
  "items-center",
  "gap-4",
  "px-5",
  "py-2",
  "rounded",
  "border",
  "border-black/12",
  "text-xs",
  "font-medium",
  "leading-4",
  "text-[#4b4b4b]",
  "bg-[#d2ccd2]",
  "hover:bg-[#c9c5c9]",
  "hover:border-black/16",
  "transition-colors",
]);

const ProductivityButton = React.forwardRef<
  HTMLButtonElement,
  ProductivityButtonProps
>(({ className, children, iconLeading, ...props }, ref) => {
  return (
    <button
      className={twMerge(clsx(buttonVariants(), className))}
      ref={ref}
      {...props}
    >
      {iconLeading && (
        <Slot className="h-3.5 w-3.5 shrink-0">{iconLeading}</Slot>
      )}
      {children}
    </button>
  );
});

ProductivityButton.displayName = "ProductivityButton";

export default ProductivityButton;
