// Generated with Ion on 1/23/2025, 9:21:32 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:281
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const sideMenuClassnames = cva(
  "h-screen overflow-hidden flex flex-col justify-between p-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[rgba(225,221,224,1)] to-[rgba(215,204,218,1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SideMenuProps extends React.ComponentPropsWithoutRef<"nav"> {
  variant?: "default";
}

const SideMenu = React.forwardRef<HTMLElement, SideMenuProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={twMerge(sideMenuClassnames({ variant }), className)}
        {...props}
      >
        <div className="flex flex-col gap-7 py-5">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center px-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#c15ca5] h-[22px] w-[22px] flex justify-center items-center rounded">
                  <img
                    src="/images/productivity-demo/prize-90287.svg"
                    alt="prize"
                    className="h-4 w-2.5"
                  />
                </div>
                <span className="text-xs leading-4 font-medium text-[#4b4b4b]">
                  ion
                </span>
              </div>
              <img
                className="rounded-full object-cover h-[18px] w-[18px]"
                alt="User avatar"
                src="https://ion-dot-design.s3.us-west-1.amazonaws.com/publicimagesproductivitydemosamraajillustration-1-png"
              />
            </div>
            <button className="flex items-center gap-4 px-5 py-2 rounded border border-black/12 text-xs font-medium leading-4 text-[#4b4b4b] bg-[#d2ccd2] hover:bg-[#c9c5c9] hover:border-black/16 transition-colors">
              <img
                src="/images/productivity-demo/createvector-i-9029090314.svg"
                alt="create"
                className="h-3.5 w-3.5"
              />
              New Issue
            </button>
          </div>

          <div className="flex flex-col">
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Inbox"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Inbox
            </a>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="My issues"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              My issues
            </a>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Roadmap"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Roadmap
            </a>
          </div>

          <div className="flex flex-col">
            <div className="px-3 py-1 text-sm leading-4 font-semibold text-[#4b4b4b]">
              Your Team
            </div>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Issues"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Issues
            </a>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Projects"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Projects
            </a>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Views"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Views
            </a>
          </div>

          <div className="flex flex-col">
            <div className="px-3 py-1 text-sm leading-4 font-semibold text-[#4b4b4b]">
              Admin
            </div>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Invite"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Invite teammates
            </a>
            <a
              href="#"
              className="flex items-center gap-4 px-5 py-2 rounded text-xs leading-4 font-medium text-secondary hover:bg-primary-accent transition-colors"
            >
              <img
                className="h-3.5 w-3.5"
                alt="Import"
                src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemolisticon-1-png"
              />
              Import issues
            </a>
          </div>
        </div>

        <div className="bg-white/50 flex items-center gap-2.5 px-4 py-2 rounded text-xs leading-4 font-medium text-black">
          <img
            className="h-3.5 w-3.5"
            alt="ion-logo"
            src="https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemoionlogopng"
          />
          Built with ion
        </div>
      </nav>
    );
  }
);

SideMenu.displayName = "SideMenu";

export default SideMenu;
