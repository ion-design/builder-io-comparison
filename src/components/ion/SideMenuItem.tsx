// Generated with Ion on 1/23/2025, 9:21:09 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:243
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import SubMenuItem from "@/components/ion/SubMenuItem";

const sideMenuItemClassnames = cva(
  "flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-[#4B4B4B] hover:bg-[#CDC8CD] transition-colors",
  {
    variants: {
      open: {
        true: "",
        false: "",
      },
    },
  }
);

export interface SideMenuItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  open?: boolean;
  iconSrc?: string;
}

const SideMenuItem = React.forwardRef<HTMLDivElement, SideMenuItemProps>(
  ({ className, children, open = false, iconSrc, ...props }, ref) => (
    <div ref={ref} className={twMerge("flex flex-col", className)} {...props}>
      <div className={twMerge(sideMenuItemClassnames({ open }))}>
        {iconSrc && (
          <img
            alt="menu icon"
            src={iconSrc}
            className="object-cover h-3.5 w-3.5"
          />
        )}
        <span>{children}</span>
      </div>
      {open && (
        <div className="flex justify-center items-start pl-6">
          <div className="flex-1 flex flex-col border-l border-outline">
            <SubMenuItem>Active</SubMenuItem>
            <SubMenuItem>Active</SubMenuItem>
          </div>
        </div>
      )}
    </div>
  )
);

SideMenuItem.displayName = "SideMenuItem";

export default SideMenuItem;
