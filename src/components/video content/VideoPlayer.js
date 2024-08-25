import React from 'react';
import VideoJS from './Video';
import videojs from 'video.js';

const VideoPlayer = () => {
    const playerRef = React.useRef(null);
      
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        paused:false,
        responsive: true,
        fluid: true,
        poster: './assets/bg/thumbnail-3.jpg',
        sources: [
            {
                src: 'https://vjs.zencdn.net/v/oceans.mp4', // Example video URL
                type: 'video/mp4',
            },
        ],
    };


    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // Event listener for when the player is waiting
        player.on('waiting', () => {
            videojs.log('player is waiting');
            console.log('player is waiting');
        });

        // Event listener for when the player is disposed
        player.on('dispose', () => {
            videojs.log('player will dispose');
            console.log('player will dispose');
        });

        // Optional: Add more event listeners or player customizations here
    };


     

    return (
        <div className='video-playlist'>
           
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

           
        </div>
    );
}

export default VideoPlayer