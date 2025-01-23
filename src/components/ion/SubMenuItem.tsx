// Generated with Ion on 1/23/2025, 9:21:01 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:276
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const subMenuItemClassnames = cva(
  "flex items-center px-7 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors",
  {
    variants: {
      selected: {
        true: "bg-primary-container text-on-primary-container",
        false: "bg-background",
      },
    },
  }
);

export interface SubMenuItemProps extends React.ComponentPropsWithoutRef<"a"> {
  selected?: boolean;
}

const SubMenuItem = React.forwardRef<HTMLAnchorElement, SubMenuItemProps>(
  ({ className, children, selected = false, ...props }, ref) => (
    <a
      ref={ref}
      className={twMerge(subMenuItemClassnames({ selected }), className)}
      {...props}
    >
      {children}
    </a>
  )
);

SubMenuItem.displayName = "SubMenuItem";

export default SubMenuItem;
