// Generated with Ion on 1/23/2025, 4:29:15 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:13262
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const musicHeaderClassnames = cva(
	'flex w-full items-center gap-6 bg-white px-5 py-2 text-xs leading-4 text-black',
	{
		variants: {
			signedin: {
				true: '',
				false: '',
			},
		},
	}
);

export interface MusicHeaderProps extends React.ComponentPropsWithoutRef<'nav'> {
	signedin?: boolean;
}

const MusicHeader = React.forwardRef<HTMLElement, MusicHeaderProps>(
	({ className, signedin = true, ...props }, ref) => (
		<nav ref={ref} className={twMerge(musicHeaderClassnames({ signedin }), className)} {...props}>
			<span className="font-semibold">Music</span>
			<span>File</span>
			<span>Edit</span>
			<span>View</span>
			{signedin && <span>Account</span>}
		</nav>
	)
);

MusicHeader.displayName = 'MusicHeader';

export default MusicHeader;
