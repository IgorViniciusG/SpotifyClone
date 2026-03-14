import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../database/songs.js';
import { useRef, useState, useEffect } from 'react';

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`
}

const timeInSeconds = (timeString) =>{
  const splitArray = timeString.split(":");
  const minutos = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutos * 60;
}

const Player = ({ duration, audio }) => {
  const { id } = useParams(); 
  const currentIndex = songsArray.findIndex(song => song._id === id); 

  const minIndex = 0;
  const maxIndex = songsArray.length - 1;

  const canGoBack = currentIndex > minIndex;
  const canGoForward = currentIndex < maxIndex;

  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying)
    setCurrentTime(formatTime(audioPlayer.current.currentTime))
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime))
      progressBar.current.style.setProperty("--_progress", (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%")
    }, 1000);
    return () => { clearInterval(intervalId) };
  }, [isPlaying])


  return (
    <div className="player">
      <div className="player_controllers">
        {canGoBack ? (
          <Link to={`/song/${songsArray[currentIndex - 1]._id}`}>
            <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
          </Link>
        ) : (
          <FontAwesomeIcon
            className="player__icon player__icon--disabled"
            icon={faBackwardStep}
            style={{ pointerEvents: 'none' }}
          />
        )}

        <FontAwesomeIcon className="player__icon player__icon--play" onClick={() => playPause()} icon={isPlaying ? faCirclePause : faCirclePlay} />

        {canGoForward ? (
          <Link to={`/song/${songsArray[currentIndex + 1]._id}`}>
            <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
          </Link>
        ) : (
          <FontAwesomeIcon
            className="player__icon player__icon--disabled"
            icon={faForwardStep}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </div>

      <audio ref={audioPlayer} src={audio}></audio>

      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div className="player__bar-progress" ref={progressBar}></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
