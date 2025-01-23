// Generated with Ion on 1/23/2025, 4:29:10 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=30:14343
import clsx from 'clsx';
type PlaylistProps = {
	title?: string;
	art?: 'disk' | 'sun' | 'volume' | 'heat' | 'summer' | 'drive' | 'tape' | 'headphones';
	className?: string;
};

function Playlist({ title = 'Soundtracks', art = 'disk', className = '' }: PlaylistProps) {
	const artImages: Record<NonNullable<PlaylistProps['art']>, string> = {
		disk: 'public/images/music-demo/disk-image.png',
		heat: 'public/images/music-demo/sun-image.png',
		drive: 'public/images/music-demo/drive-image.png',
		headphones: 'public/images/music-demo/headphones-image.png',
		sun: 'public/images/music-demo/sun-image.png',
		volume: 'public/images/music-demo/volume-image.png',
		summer: 'public/images/music-demo/summer-image.png',
		tape: 'public/images/music-demo/tape-image.png',
	};

	return (
		<div
			className={clsx(
				'w-fit overflow-hidden flex flex-col gap-2 text-sm leading-4 font-semibold text-black',
				className
			)}
		>
			<img
				alt="image 2"
				src={artImages[art]}
				className="rounded-lg object-cover h-[150px] w-[150px]"
			/>
			<div>{title}</div>
		</div>
	);
}
export default Playlist;
