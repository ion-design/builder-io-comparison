// Generated with Ion on 1/23/2025, 4:29:16 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:14195
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';

type SongProps = {
	title?: string;
	artist?: string;
	image?: 'pen' | 'dj' | 'sax' | 'guitar';
	className?: string;
};

const Song = React.forwardRef<HTMLDivElement, SongProps>(
	({ title = 'React Rendezvous', artist = 'Ethan Byte', image = 'pen', className }, ref) => {
		const imageImages: Record<NonNullable<SongProps['image']>, string> = {
			pen: 'public/images/song/pen-image.png',
			dj: 'public/images/song/dj-image.png',
			sax: 'public/images/song/sax-image.png',
			guitar: 'public/images/song/guitar-image.png',
		};

		return (
			<div ref={ref} className={twMerge(clsx('flex flex-col gap-2 text-sm leading-4', className))}>
				<img alt={title} src={imageImages[image]} className="h-60 w-60 rounded-lg object-cover" />
				<h3 className="font-semibold text-foreground">{title}</h3>
				<p className="text-subtle">{artist}</p>
			</div>
		);
	}
);

Song.displayName = 'Song';

export default Song;
