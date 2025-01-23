import * as React from 'react';
import { BoardColumn } from './BoardColumn';
import { SidebarSection } from './Sidebar';

const sidebarSections = [
	{
		items: [
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Inbox',
				hasSubItems: true,
				subItems: ['Active', 'Active'],
			},
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'My issues',
			},
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Roadmap',
			},
		],
	},
	{
		title: 'Your Team',
		items: [
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Issues',
				isActive: true,
				hasSubItems: true,
				subItems: ['Active', 'Active'],
			},
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Projects',
			},
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Views',
			},
		],
	},
	{
		title: 'Admin',
		items: [
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Invite teammates',
			},
			{
				icon: 'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/8ebf59e709d1d15d61e1dfd4cded07935a67b513f01434c7619c249650c76c51?apiKey=b7e177760ab842b7ad75974e2d41194e&',
				label: 'Import issues',
			},
		],
	},
];

const boardData = [
	{
		title: 'To Do',
		issues: [
			{
				issueNumber: 'ION-7',
				title: "Change things and use 'pull changes'",
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
			{
				issueNumber: 'ION-8',
				title: 'Modify library colors and see tailwind config',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
			{
				issueNumber: 'ION-9',
				title: 'Integrate with team components',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
		],
	},
	{
		title: 'In Progress',
		issues: [
			{
				issueNumber: 'ION-6',
				title: 'Try generating multifile components',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
			{
				issueNumber: 'ION-5',
				title: 'Review the generated code for cleanliness',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
		],
	},
	{
		title: 'Done',
		issues: [
			{
				issueNumber: 'ION-4',
				title: 'Generate using an existing component',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
			{
				issueNumber: 'ION-3',
				title: 'Generate your first design',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
			{
				issueNumber: 'ION-2',
				title: 'Connect Figma account and file',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
			{
				issueNumber: 'ION-1',
				title: 'Download VSCode Extension',
				assigneeImageUrl:
					'https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&',
			},
		],
	},
];

export function IssueBoardPage() {
	return (
		<div className="flex overflow-hidden flex-wrap">
			<div className="flex overflow-hidden flex-col justify-between self-start p-2 min-h-[786px] w-[212px]">
				<div className="flex overflow-hidden flex-col py-5 w-full">
					<div className="flex overflow-hidden flex-col w-full">
						<div className="flex gap-10 justify-between items-center px-4 w-full">
							<div className="flex gap-4 items-center self-stretch my-auto">
								<div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto bg-pink-500 rounded h-[22px] min-h-[22px] w-[22px]">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/30ea7effb617e33e9de767cba8072897c0039dc14ab6d23842d8acdc54b6a7cd?apiKey=b7e177760ab842b7ad75974e2d41194e&"
										className="object-contain w-2.5 aspect-[0.63]"
										alt=""
									/>
								</div>
								<div className="self-stretch my-auto text-xs font-medium text-neutral-600">ion</div>
							</div>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/87e4914784dec378cd43cad85cd223b266b31fc3d6360a762f7b9bcac0229064?apiKey=b7e177760ab842b7ad75974e2d41194e&"
								className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[99px] w-[18px]"
								alt="User avatar"
							/>
						</div>
						<div className="flex overflow-hidden gap-4 items-start px-5 py-2 mt-2 w-full text-xs font-medium rounded border border-solid bg-stone-300 border-black border-opacity-10 text-neutral-600">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/02db4042f008956a7ff21582e05119e47ec35e50dcee34a6d2e2b40e16bee120?apiKey=b7e177760ab842b7ad75974e2d41194e&"
								className="object-contain shrink-0 w-3.5 aspect-square"
								alt=""
							/>
							<div>New Issue</div>
						</div>
					</div>

					{sidebarSections.map((section, index) => (
						<SidebarSection key={index} {...section} />
					))}
				</div>

				<div className="flex overflow-hidden gap-2.5 items-center px-4 py-2 mt-32 w-full text-xs font-medium text-black rounded bg-white bg-opacity-50 max-md:mt-10">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/75045cd1535c6b2bb8e5169124773ae437266b20734f77d53e627777fde4e76d?apiKey=b7e177760ab842b7ad75974e2d41194e&"
						className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
						alt=""
					/>
					<div className="self-stretch my-auto">Built with ion</div>
				</div>
			</div>

			<div className="flex overflow-hidden flex-col flex-1 shrink bg-white basis-4 min-w-[240px] max-md:max-w-full">
				<div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-10 py-4 w-full bg-white max-md:px-5 max-md:max-w-full">
					<div className="flex overflow-hidden gap-5 justify-center items-center self-stretch my-auto">
						<div className="self-stretch my-auto text-base font-medium text-black">Issue board</div>
						<div className="flex flex-col justify-center items-center self-stretch my-auto rounded border border-solid border-zinc-400 min-h-[22px] w-[22px]">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/6fa8d1cbd256dca64d52bd1d38167862d8cbf302ffd8a7c1422bac99e2fd7483?apiKey=b7e177760ab842b7ad75974e2d41194e&"
								className="object-contain w-3 aspect-[0.86]"
								alt=""
							/>
						</div>
					</div>
					<div className="flex overflow-hidden gap-3 items-center self-stretch my-auto">
						<div className="flex flex-col justify-center items-center self-stretch my-auto rounded border border-solid border-zinc-400 min-h-[22px] w-[22px]">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/d939d7e21f2b363baf1f2cb909986f48db7bb74a97b5622b9a951c01593854a7?apiKey=b7e177760ab842b7ad75974e2d41194e&"
								className="object-contain w-3 aspect-square"
								alt=""
							/>
						</div>
						<div className="flex flex-col justify-center items-center self-stretch my-auto rounded border border-solid border-zinc-400 min-h-[22px] w-[22px]">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/57dcee00c769eadf6745dcf146589233b8e20f0f814881fc55aeae3444b37c9b?apiKey=b7e177760ab842b7ad75974e2d41194e&"
								className="object-contain w-3 aspect-[0.86]"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="flex overflow-hidden flex-wrap flex-1 gap-5 py-7 pr-5 pl-10 bg-gray-100 size-full max-md:pl-5 max-md:max-w-full">
					{boardData.map((column, index) => (
						<BoardColumn key={index} {...column} />
					))}
				</div>
			</div>
		</div>
	);
}
