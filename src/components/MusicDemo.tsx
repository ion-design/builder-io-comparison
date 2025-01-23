// Generated with Ion on 1/23/2025, 4:29:39 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:13254
import MusicButton from '@/components/ion/MusicButton';
import MusicHeader from '@/components/ion/MusicHeader';
import MusicSideBar from '@/components/ion/MusicSideBar';
import Playlist from '@/components/ion/Playlist';
import Song from '@/components/ion/Song';
import { Tab, Tabs, TabsList } from '@/components/ion/TabItem';

function MusicDemo() {
	return (
		<div className="bg-white h-[775px] w-[1350px] overflow-hidden flex flex-col rounded-lg border-2 border-zinc-200">
			<MusicHeader signedin className="w-full" />
			<div className="w-full flex border-t border-zinc-200">
				<MusicSideBar hover={false} className="h-full" />
				<div className="flex-1 h-full w-full overflow-hidden flex flex-col p-8">
					<div className="w-full overflow-hidden flex justify-between items-start">
						<Tabs
							className="bg-zinc-100 w-fit overflow-hidden flex items-start gap-1 p-1 rounded-lg"
							defaultValue="Music"
						>
							<TabsList>
								<Tab value="Music">Music</Tab>
								<Tab value="Podcasts">Podcasts</Tab>
								<Tab value="Live">Live</Tab>
							</TabsList>
						</Tabs>
						<MusicButton
							color="primary"
							iconLeading={
								<img src="/images/music-demo/plus.svg" alt="Vector" className="h-3 w-3" />
							}
						>
							Add music
						</MusicButton>
					</div>
					<div className="w-full overflow-hidden flex flex-col gap-2 py-5 border-b border-zinc-200">
						<div className="text-2xl leading-7 font-semibold text-black">Listen Now</div>
						<div className="text-sm leading-4 text-[#86868d]">
							Top picks for you. Updated Daily.
						</div>
					</div>
					<div className="w-full overflow-hidden flex items-start gap-5 py-4">
						{[
							{
								artist: 'Ethan Byte',
								image: 'pen' as const,
								title: 'React Rendezvous',
							},
							{
								artist: 'Nina Netcode',
								image: 'dj' as const,
								title: 'Async Awakenings',
							},
							{
								artist: 'Lena Logic',
								image: 'sax' as const,
								title: 'Stateful Symphony',
							},
							{
								artist: 'Beth Binary',
								image: 'guitar' as const,
								title: 'Stateful Symphony',
							},
						].map(({ artist, image, title }, index) => (
							<Song artist={artist} image={image} title={title} key={index} />
						))}
					</div>
					<div className="w-full overflow-hidden flex flex-col gap-2 py-4 border-b border-zinc-200 text-2xl leading-7 font-semibold text-black">
						Your Playlists
					</div>
					<div className="w-full overflow-hidden flex items-start gap-5 py-4">
						{[
							{
								art: 'disk' as const,
								title: 'Back to the 70s',
							},
							{
								art: 'sun' as const,
								title: 'Spring 2021',
							},
							{
								art: 'volume' as const,
								title: 'RnB Bangers',
							},
							{
								art: 'summer' as const,
								title: 'Summer 2021',
							},
							{
								art: 'drive' as const,
								title: 'Chill Drive',
							},
							{
								art: 'headphones' as const,
								title: 'LoFi Flow',
							},
						].map(({ art, title }, index) => (
							<Playlist art={art} title={title} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
export default MusicDemo;
