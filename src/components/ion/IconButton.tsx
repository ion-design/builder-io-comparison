// Generated with Ion on 1/23/2025, 9:20:57 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:351
import clsx from "clsx";
type IconButtonProps = {
  icon?: "settings" | "shield" | "star" | "share";
  className?: string;
};

function IconButton({ icon = "settings", className = "" }: IconButtonProps) {
  const iconImages: Record<NonNullable<IconButtonProps["icon"]>, string> = {
    settings:
      "https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemosettingsiconlg-1-png",
    shield:
      "https://ion-dot-design.s3.us-west-1.amazonaws.com/publicimagesproductivitydemosettingsiconlg-12-png",
    star: "https://ion-dot-design.s3.amazonaws.com/publicimagesproductivitydemosettingsiconlg-123-png",
    share:
      "https://ion-dot-design.s3.us-west-1.amazonaws.com/publicimagesproductivitydemosettingsiconlg-1234-png",
  };

  return (
    <div
      className={clsx(
        "h-[22px] w-[22px] flex flex-col justify-center items-center rounded border border-[#9fa7aa] hover:bg-[#cdc8cd]",
        className
      )}
    >
      <img
        alt="settings-icon-lg 1"
        src={iconImages[icon]}
        className={clsx({
          "object-cover w-3": true,
          "h-3": icon === "settings",
          "h-3.5": icon === "shield" || icon === "star" || icon === "share",
        })}
      />
    </div>
  );
}
export default IconButton;
