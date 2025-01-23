// Generated with Ion on 1/23/2025, 4:29:18 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:13283
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const sidebarItemClassnames = cva(
	'flex w-full items-center gap-2 rounded-lg p-3 text-xs font-semibold leading-4 text-black hover:bg-zinc-100',
	{
		variants: {
			icon: {
				play: '',
				box: '',
				radio: '',
				list: '',
				smile: '',
				stack: '',
				mic: '',
				music: '',
			},
		},
	}
);

export interface MusicSideBarItemProps extends React.ComponentPropsWithoutRef<'a'> {
	icon?: 'play' | 'browse' | 'radio' | 'list' | 'smile' | 'stack' | 'mic' | 'music';
}

const MusicSideBarItem = React.forwardRef<HTMLAnchorElement, MusicSideBarItemProps>(
	({ className, children, icon = 'play', ...props }, ref) => (
		<a ref={ref} className={twMerge(clsx(sidebarItemClassnames({ icon })), className)} {...props}>
			<img
				src={`/images/music-demo/${icon}.svg`}
				alt={icon}
				className={clsx('w-3', {
					'h-3': ['play', 'box', 'smile', 'stack', 'music', 'mic'].includes(icon),
					'h-2': ['radio', 'list'].includes(icon),
				})}
			/>
			<span className="truncate">{children}</span>
		</a>
	)
);

MusicSideBarItem.displayName = 'MusicSideBarItem';

export default MusicSideBarItem;
