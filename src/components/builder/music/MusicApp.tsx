import * as React from 'react';
import { NavItem } from './components/NavItem';
import { PlaylistCard } from './components/PlaylistCard';
import { SectionHeader } from './components/SectionHeader';
import { discoverItems, libraryItems, playlistItems } from './data/navigationItems';
import { featuredPlaylists, userPlaylists } from './data/musicContent';

export const MusicApp: React.FC = () => {
	return (
		<div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-solid border-zinc-200">
			<div className="flex overflow-hidden flex-wrap gap-6 items-center px-5 py-2 w-full text-xs text-black whitespace-nowrap bg-white max-md:max-w-full">
				<div className="self-stretch my-auto font-semibold">Music</div>
				<div className="self-stretch my-auto">File</div>
				<div className="self-stretch my-auto">Edit</div>
				<div className="self-stretch my-auto">View</div>
				<div className="self-stretch my-auto">Account</div>
			</div>
			<div className="flex overflow-hidden flex-wrap w-full border-t border-zinc-200 max-md:max-w-full">
				<div className="flex overflow-hidden flex-col p-2 text-xs font-semibold text-black bg-white border-r border-zinc-200 min-w-[240px] w-[260px]">
					<div className="overflow-hidden self-start px-3 pt-6 pb-3 text-xl whitespace-nowrap">
						Discover
					</div>
					{discoverItems.map((item, index) => (
						<NavItem key={index} {...item} />
					))}

					<div className="overflow-hidden self-start px-3 pt-6 pb-3 text-xl whitespace-nowrap">
						Library
					</div>
					{libraryItems.map((item, index) => (
						<NavItem key={index} {...item} />
					))}

					<div className="overflow-hidden self-start px-3 pt-6 pb-3 text-xl whitespace-nowrap">
						Playlists
					</div>
					{playlistItems.map((item, index) => (
						<NavItem key={index} {...item} />
					))}

					<button className="overflow-hidden self-stretch px-4 py-2 w-full text-xs font-medium whitespace-nowrap rounded-lg border border-solid border-zinc-200 text-zinc-500">
						Contact
					</button>
				</div>

				<div className="flex overflow-hidden flex-col flex-1 shrink p-8 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
					<div className="flex overflow-hidden flex-wrap gap-10 justify-between items-start w-full text-xs max-md:max-w-full">
						<div className="flex overflow-hidden gap-1 items-start p-1 font-semibold whitespace-nowrap rounded-lg bg-zinc-100">
							<div className="overflow-hidden gap-2.5 self-stretch px-3 py-1 text-black bg-white rounded-lg">
								Music
							</div>
							<div className="overflow-hidden gap-2.5 self-stretch px-3 py-1 rounded-lg text-zinc-500">
								Podcasts
							</div>
							<div className="overflow-hidden gap-2.5 self-stretch px-3 py-1 rounded-lg text-zinc-400">
								Live
							</div>
						</div>
						<button className="flex overflow-hidden gap-2 justify-center items-center px-4 py-2 font-bold text-white rounded-lg bg-zinc-900">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/b7e177760ab842b7ad75974e2d41194e/e2c3362722e072349e9bc2768cd3fabdb09da74e2ba6bff9976a2f68784da0c5?apiKey=b7e177760ab842b7ad75974e2d41194e&"
								alt=""
								className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
							/>
							<div className="self-stretch my-auto">Add music</div>
						</button>
					</div>

					<SectionHeader title="Listen Now" subtitle="Top picks for you. Updated Daily." />

					<div className="flex overflow-hidden flex-wrap gap-5 items-start py-4 w-full text-sm max-md:max-w-full">
						{featuredPlaylists.map((playlist, index) => (
							<PlaylistCard key={index} {...playlist} />
						))}
					</div>

					<div className="overflow-hidden py-4 w-full text-2xl font-semibold text-black border-b border-zinc-200 max-md:max-w-full">
						Your Playlists
					</div>

					<div className="flex overflow-hidden flex-wrap gap-5 items-start py-4 w-full text-sm font-semibold text-black max-md:max-w-full">
						{userPlaylists.map((playlist, index) => (
							<div key={index} className="flex overflow-hidden flex-col w-[150px]">
								<img
									loading="lazy"
									src={playlist.image}
									alt={playlist.title}
									className="object-contain max-w-full rounded-lg aspect-square w-[150px]"
								/>
								<div className="mt-2">{playlist.title}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
