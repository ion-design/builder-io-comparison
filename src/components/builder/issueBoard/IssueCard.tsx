import * as React from 'react';
import { IssueCardProps } from './types';

export const IssueCard: React.FC<IssueCardProps> = ({ issueNumber, title, assigneeImageUrl }) => {
	return (
		<div className="flex overflow-hidden gap-7 justify-between items-start px-5 pt-5 pb-3 w-full bg-white rounded border border-solid border-black border-opacity-10 min-h-[131px]">
			<div className="flex overflow-hidden flex-col min-h-[100px] w-[234px]">
				<div className="text-xs font-semibold text-zinc-400">{issueNumber}</div>
				<div className="mt-2 text-base font-medium text-black">{title}</div>
				<div className="flex flex-col justify-center items-center mt-2 rounded border border-solid border-zinc-400 min-h-[22px] w-[22px]">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/57dcee00c769eadf6745dcf146589233b8e20f0f814881fc55aeae3444b37c9b?apiKey=b7e177760ab842b7ad75974e2d41194e&"
						className="object-contain w-full aspect-[0.86]"
						alt=""
					/>
				</div>
			</div>
			<img
				loading="lazy"
				src={assigneeImageUrl}
				className="object-contain shrink-0 aspect-square rounded-[99px] w-[18px]"
				alt={`Assignee for ${issueNumber}`}
			/>
		</div>
	);
};
