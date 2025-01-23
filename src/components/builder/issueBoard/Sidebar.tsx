import * as React from 'react';
import { SidebarSectionProps } from './types';

export const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
	return (
		<div className="flex overflow-hidden flex-col mt-7 w-full text-xs font-medium text-neutral-600">
			{title && (
				<div className="overflow-hidden px-3 py-1 w-full text-sm font-semibold">{title}</div>
			)}
			{items.map((item, index) => (
				<div
					key={index}
					className="flex overflow-hidden flex-col justify-center w-full whitespace-nowrap"
				>
					<div
						className={`flex overflow-hidden gap-4 items-center px-5 py-2 w-full rounded ${
							item.isActive ? 'bg-stone-300' : ''
						}`}
					>
						<img
							loading="lazy"
							src={item.icon}
							className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
							alt=""
						/>
						<div className="self-stretch my-auto">{item.label}</div>
					</div>
					{item.hasSubItems && item.subItems && (
						<div className="flex overflow-hidden justify-center items-start pl-6 w-full max-md:pl-5">
							<div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full border-l basis-0 border-neutral-300">
								{item.subItems.map((subItem, subIndex) => (
									<div
										key={subIndex}
										className="overflow-hidden self-stretch px-7 py-2 w-full rounded max-md:px-5"
									>
										{subItem}
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
