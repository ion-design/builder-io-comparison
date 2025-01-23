import * as React from 'react';
import { SectionHeaderProps } from '../types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
	return (
		<div className="flex overflow-hidden flex-col py-5 w-full border-b border-zinc-200 max-md:max-w-full">
			<div className="text-2xl font-semibold text-black">{title}</div>
			{subtitle && <div className="mt-2 text-sm text-zinc-500">{subtitle}</div>}
		</div>
	);
};
