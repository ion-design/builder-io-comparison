// Generated with Ion on 1/23/2025, 9:21:52 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=90:322
import IconButton from "@/components/ion/IconButton";
import IssueCard from "@/components/ion/IssueCard";
import ProductivityHeader from "@/components/ion/ProductivityHeader";
import SideMenu from "@/components/ion/SideMenu";

function ProductivityDemo() {
  return (
    <div className="w-[1271px] overflow-hidden flex">
      <SideMenu />
      <div className="bg-white flex-1 h-full w-full overflow-hidden flex flex-col">
        <ProductivityHeader type="board" className="w-full">
          <div className="w-fit overflow-hidden flex justify-center items-center gap-5">
            <div className="text-base leading-5 font-medium text-black">
              Issue board
            </div>
            <IconButton icon="star" hover={false} />
          </div>
          <div className="w-fit overflow-hidden flex items-center gap-3">
            <IconButton icon="settings" hover={false} />
            <IconButton icon="share" hover={false} />
          </div>
        </ProductivityHeader>
        <div className="bg-[#f4f5f8] flex-1 h-full w-full overflow-hidden flex gap-5 px-10 py-7">
          <div className="h-full w-fit overflow-hidden flex flex-col gap-7">
            <div className="w-fit overflow-hidden flex items-center gap-4">
              <IconButton icon="star" hover={false} />
              <div className="text-xs leading-4 font-medium text-black">
                To Do
              </div>
            </div>
            <div className="flex-1 h-full w-fit overflow-hidden flex flex-col gap-2">
              <IssueCard
                issueId="ION-7"
                title="Change things and use 'pull changes'"
              />
              <IssueCard
                issueId="ION-8"
                title="Modify library colors and see tailwind config"
              />
              <IssueCard
                issueId="ION-9"
                title="Integrate with team components"
              />
            </div>
          </div>
          <div className="h-full w-fit overflow-hidden flex flex-col gap-7">
            <div className="w-fit overflow-hidden flex items-center gap-4">
              <IconButton icon="star" hover={false} />
              <div className="text-xs leading-4 font-medium text-black">
                In Progress
              </div>
            </div>
            <div className="flex-1 h-full w-fit overflow-hidden flex flex-col gap-2">
              <IssueCard
                issueId="ION-6"
                title="Try generating multifile components"
              />
              <IssueCard
                issueId="ION-5"
                title="Review the generated code for cleanliness"
              />
            </div>
          </div>
          <div className="h-full w-fit overflow-hidden flex flex-col gap-7">
            <div className="w-fit overflow-hidden flex items-center gap-4">
              <IconButton icon="star" hover={false} />
              <div className="text-xs leading-4 font-medium text-black">
                Done
              </div>
            </div>
            <div className="flex-1 h-full w-fit overflow-hidden flex flex-col gap-2">
              {[
                {
                  issueId: "ION-4",
                  title: "Generate using an existing component",
                },
                {
                  issueId: "ION-3",
                  title: "Generate your first design",
                },
                {
                  issueId: "ION-2",
                  title: "Connect Figma account and file",
                },
                {
                  issueId: "ION-1",
                  title: "Download VSCode Extension",
                },
              ].map(({ issueId, title }, index) => (
                <IssueCard issueId={issueId} title={title} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductivityDemo;
