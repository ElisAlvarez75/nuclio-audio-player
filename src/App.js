import React from 'react';
import './App.css';
import UploadTrack from "./uploadTrack";
import TrackPlayer from "./TrackPlayer";


function App() {
	return (
      <div className="App">
				<UploadTrack/>
				<TrackPlayer />
			</div>
  );
}

export default App;
