import * as React from 'react';
import { NavItemProps } from '../types';

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
	return (
		<div
			className={`flex overflow-hidden gap-2 items-center p-3 w-full whitespace-nowrap rounded-lg ${
				isActive ? 'bg-zinc-100' : 'bg-white'
			}`}
		>
			<img
				loading="lazy"
				src={icon}
				alt=""
				className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
			/>
			<div className="self-stretch my-auto">{label}</div>
		</div>
	);
};
