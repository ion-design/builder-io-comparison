// Generated with Ion on 12/12/2023, 9:12:14 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:476
import MusicSideBarItem from '@/components/ion/MusicSideBarItem';
import ContactButton from '@/components/ion/ContactButton';
import clsx from 'clsx';
type MusicSideBarProps = {
	className?: string;
};

function MusicSideBar({ className = '' }: MusicSideBarProps) {
	return (
		<div
			className={clsx(
				'h-full w-[260px] flex-col flex items-start p-2 border-r border-zinc-200',
				className
			)}
		>
			<div className="flex-col flex items-start gap-2.5 px-3 pt-6 pb-3 text-xl leading-6 font-semibold text-black font-Inter">
				Discover
			</div>
			<MusicSideBarItem className="w-full" icon="play">
				Listen Now
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="browse">
				Browse
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="radio">
				Radio
			</MusicSideBarItem>
			<div className="flex-col flex items-start gap-2.5 px-3 pt-6 pb-3 text-xl leading-6 font-semibold text-black font-Inter">
				Library
			</div>
			<MusicSideBarItem className="w-full" icon="playlist">
				Playlists
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="song">
				Songs
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="smile">
				Made for You
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="mic">
				Artists
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="music">
				Albums
			</MusicSideBarItem>
			<div className="flex-col flex items-start gap-2.5 px-3 pt-6 pb-3 text-xl leading-6 font-semibold text-black font-Inter">
				Playlists
			</div>
			<MusicSideBarItem className="w-full" icon="playlist">
				Recently Added
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="playlist">
				Recently Played
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="playlist">
				Top Songs
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="playlist">
				Top Albums
			</MusicSideBarItem>
			<MusicSideBarItem className="w-full" icon="playlist">
				Top Artists
			</MusicSideBarItem>
			<ContactButton className="w-full" />
		</div>
	);
}
export default MusicSideBar;
