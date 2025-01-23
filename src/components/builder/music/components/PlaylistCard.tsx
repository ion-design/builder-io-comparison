import * as React from 'react';
import { PlaylistCardProps } from '../types';

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ image, title, artist }) => {
	return (
		<div className="flex overflow-hidden flex-col grow shrink w-48">
			<img
				loading="lazy"
				src={image}
				alt={title}
				className="object-contain w-60 max-w-full rounded-lg aspect-square"
			/>
			<div className="mt-2 font-semibold text-black">{title}</div>
			{artist && <div className="mt-2 text-zinc-500">{artist}</div>}
		</div>
	);
};
