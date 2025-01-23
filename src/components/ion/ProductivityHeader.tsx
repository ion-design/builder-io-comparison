// Generated with Ion on 1/23/2025, 9:21:03 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:368
import clsx from "clsx";

import IconButton from "@/components/ion/IconButton";
type ProductivityHeaderProps = {
  type?: "board" | "active";
  className?: string;
};

function ProductivityHeader({
  type = "board",
  className = "",
}: ProductivityHeaderProps) {
  const typeTexts: Record<
    NonNullable<ProductivityHeaderProps["type"]>,
    string
  > = {
    board: "Issue board",
    active: "Active Issues",
  };

  return (
    <div
      className={clsx(
        "bg-white w-full overflow-hidden flex justify-between items-center px-10 py-4",
        className
      )}
    >
      <div className="w-fit overflow-hidden flex justify-center items-center gap-5">
        <div className="text-base leading-5 font-medium text-black">
          {typeTexts[type]}
        </div>
        <IconButton icon="star" hover={false} />
      </div>
      <div className="w-fit overflow-hidden flex items-center gap-3">
        <IconButton icon="settings" hover={false} />
        <IconButton icon="share" hover={false} />
      </div>
    </div>
  );
}
export default ProductivityHeader;
