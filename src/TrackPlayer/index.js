import React, {useState} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const TrackPlayer = () => {
	const trackIds = ["5fc4d698c891ef40a7a07580", "5fc4e79bb0b05e5bc165ef9e"];
	const [currentTrack, setCurrentTrack] = useState(0);

	const handleClickNext = () => {

		if(currentTrack < trackIds.length - 1){
			setCurrentTrack(currentTrack + 1);
		}

	}

	const handleClickPrev = () => {
		if(currentTrack > 0){
			setCurrentTrack(currentTrack - 1);
		}
	}

	return (
		<div className="player-wrapper">
			<AudioPlayer
				onClickNext={handleClickNext}
				onClickPrevious={handleClickPrev}
				showSkipControls={true}
				showJumpControls={false}
				src={`http://localhost:3001/track/${trackIds[currentTrack]}`}
			/>
		</div>
	)
}

export default TrackPlayer;
