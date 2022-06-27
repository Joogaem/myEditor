import { useState,  MutableRefObject, useRef, useEffect, createRef, useCallback, useMemo, memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "../Slider";
import "./VideoCard.scss";
import {
    CameraIcon,
    // VolumeUp,
    VolumeDown,
    ExpandIcon,
    SkipFD,
    SkipBD,
    StopIcon,
    PauseIcon,
    PlayIcon1,
} from "../Assets/SVGs";
// import Dropdown from "../../Dropdown";
// import { secondsToTime } from "../../../../helpers/functions";
import { 
    setStatusVideoPlayState
  } from '../../modules/status';


function VideoCard()  {
    const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
    const [currentVideo, setCurrentVideo] = useState('');
    const [paused, setPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const dispatch = useDispatch();


    useEffect(() => {
        //console.log(currentTime);
    },[currentTime]);

    useEffect(() => {
        //console.log(duration);
    },[duration]);

    return (
        <div className="VideoCard">
            <div className="VideoCard__placeholder">
                <video
                    src={"/test_video.mp4"}
                    // controls
                    ref={videoRef}
                    id="my-video"
                    onPause={() => {
                        setPaused(true);
                        dispatch(setStatusVideoPlayState(false));
                    }}
                    onPlay={() => {
                        setPaused(false);
                        dispatch(setStatusVideoPlayState(true));
                    }}
                    onLoadedMetadata={() => {
                        setDuration(videoRef.current.duration);
                    }}
                    onCanPlayThrough={() => {
                        try {
                            const videoInterval = setInterval(() => {
                                setCurrentTime(videoRef.current.currentTime);
                                console.log("interval");
                            }, 50);
                            if (false) clearInterval(videoInterval);
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                ></video>
            </div>
            <div className="VideoCard__controls">
                <div>
                    <Slider
                        posn={(currentTime / duration) * 100}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        duration={duration}
                        vidElement={videoRef.current}
                    />
                    {/* <p>{secondsToTime(duration)}</p> */}
                </div>
                <div>
                    <div className="VideoCard__controls__actions">
                        <div>
                            <span
                                onClick={() => {
                                    paused
                                        ? videoRef.current.play()
                                        : videoRef.current.pause();
                                    setPaused(!paused);
                                    console.log(videoRef.current);
                                }}
                            >
                                {paused ? <PlayIcon1 /> : <PauseIcon />}
                            </span>
                            <span
                                onClick={() => {
                                    videoRef.current.currentTime = 0;
                                    videoRef.current.pause();
                                    console.log(videoRef.current.paused);
                                }}
                            >
                                <StopIcon />
                            </span>
                            <span
                                onClick={() => {
                                    videoRef.current.currentTime -= 5;
                                }}
                            >
                                <SkipBD />
                            </span>
                            <span
                                onClick={() => {
                                    videoRef.current.currentTime += 5;
                                }}
                            >
                                <SkipFD />
                            </span>
                        </div>
                        <div>
                            {/* <Dropdown list={["1/2", "1/4", "1.8"]} up={true} />*/}
                        </div> 
                    </div>
                    <div className="VideoCard__controls__other">
                        <CameraIcon size={18} />
                        {/* <span
                            onClick={() => {
                                if (videoRef.current.requestFullscreen) {
                                    videoRef.current.requestFullscreen();
                                } else if (
                                    videoRef.current.mozRequestFullScreen
                                ) {
                                    videoRef.current.mozRequestFullScreen();
                                } else if (
                                    videoRef.current.webkitRequestFullscreen
                                ) {
                                    videoRef.current.webkitRequestFullscreen();
                                } else if (
                                    videoRef.current.msRequestFullscreen
                                ) {
                                    videoRef.current.msRequestFullscreen();
                                }
                            }}
                        >
                            <ExpandIcon size={18} />
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
