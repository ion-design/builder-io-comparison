import { Paintbrush, RefreshCw, Ship } from 'lucide-react';
import React from 'react';
import MusicDemo from './components/MusicDemo';
import { MusicApp } from './components/builder/music/MusicApp';
import Input from './components/TextInput';

const WelcomePage = () => {
	return (
		<div className="p-12 grid grid-cols gap-4">
			<div>
				<h2 className="text-2xl font-bold">Builder IO</h2>
				<div className="bg-white p-4 rounded-xl mt-4">
					<h2 className="text-lg font-bold mb-4">Static</h2>
					<MusicApp />
				</div>
			</div>

			<div>
				<h2 className="text-2xl font-bold">Ion</h2>
				<div className="bg-white p-4 rounded-xl mt-4">
					<h2 className="text-lg font-bold mb-4">Hover state + functional components</h2>
					<MusicDemo />
				</div>
				<div className="bg-white p-4 rounded-xl mt-4">
					<h2 className="text-lg font-bold mb-4">Input Component Set (not supported by Builder)</h2>
					<Input className="max-w-96" />
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
