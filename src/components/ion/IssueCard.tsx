// Generated with Ion on 1/23/2025, 9:21:08 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:383
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import IconButton from "@/components/ion/IconButton";

interface IssueCardProps extends React.HTMLAttributes<HTMLDivElement> {
  issueId?: string;
  title?: string;
}

const IssueCard = React.forwardRef<HTMLDivElement, IssueCardProps>(
  ({ issueId = "ION-1", title = "Welcome", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(
            "flex items-start justify-between rounded border border-black/12 bg-white p-5",
            className
          )
        )}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold leading-4 text-[#adadad]">
            {issueId}
          </span>
          <h3 className="text-base font-medium leading-5 text-black">
            {title}
          </h3>
          <IconButton icon="share" />
        </div>
        <img
          className="h-[18px] w-[18px] rounded-full object-cover"
          alt="User avatar"
          src="https://ion-dot-design.s3.us-west-1.amazonaws.com/publicimagesproductivitydemosamraajillustration-1-png"
        />
      </div>
    );
  }
);

IssueCard.displayName = "IssueCard";

export default IssueCard;
