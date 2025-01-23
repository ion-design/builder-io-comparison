import * as React from 'react';
import { IssueCard } from './IssueCard';
import { ColumnProps } from './types';

export const BoardColumn: React.FC<ColumnProps> = ({ title, issues }) => {
	return (
		<div className="flex overflow-hidden flex-col grow shrink w-64 min-w-[240px]">
			<div className="flex overflow-hidden gap-4 items-center self-start">
				<div className="flex flex-col justify-center items-center self-stretch my-auto rounded border border-solid border-zinc-400 min-h-[22px] w-[22px]">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/6fa8d1cbd256dca64d52bd1d38167862d8cbf302ffd8a7c1422bac99e2fd7483?apiKey=b7e177760ab842b7ad75974e2d41194e&"
						className="object-contain w-3 aspect-[0.86]"
						alt=""
					/>
				</div>
				<div className="self-stretch my-auto text-xs font-medium text-black">{title}</div>
			</div>
			<div className="flex overflow-hidden flex-col flex-1 mt-7 w-full max-w-xs">
				{issues.map((issue, index) => (
					<div key={issue.issueNumber} className={index > 0 ? 'mt-2' : ''}>
						<IssueCard {...issue} />
					</div>
				))}
			</div>
		</div>
	);
};
