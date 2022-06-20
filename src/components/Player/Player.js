import React, { useState, useEffect, createRef, useCallback, useMemo, memo } from 'react';
import { isPlaying } from '../../utils';

const PlayerWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    padding: '20% 10%'
}


const PlayerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
    position: 'relative'
}

const videoStyle = {
    position: 'relative',
    zIndex: 10,
    outline: 'none',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: '0px 5px 25px 5px rgb(0 0 0 / 80%)',
    backgroundColor: '#000',
    cursor: 'pointer'
}

const subtitleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 20,
    left: 0,
    right: 0,
    bottom: '5%',
    width: '100%',
    padding: '0 20px',
    userSelect: 'none',
    pointerEvents: 'none'
}

const operateStyle = {
    padding: '5px 15px',
    color: '#fff',
    fontSize: '13px',
    borderRadius: '3px',
    marginBottom: '5px',
    backgroundColor: 'rgb(0 0 0 / 75%)',
    border: '1px solid rgb(255 255 255 / 20%)',
    cursor: 'pointer',
    pointerEvents: 'all'
}

const VideoWrap = memo(
    ({ setPlayer, setCurrentTime, setPlaying }) => {
        const $video = createRef();

        useEffect(() => {
            setPlayer($video.current);
            (function loop() {
                window.requestAnimationFrame(() => {
                    if ($video.current) {
                        setPlaying(isPlaying($video.current));
                        setCurrentTime($video.current.currentTime || 0);
                    }
                    loop();
                });
            })();
        }, [setPlayer, setCurrentTime, setPlaying, $video]);

        const onClick = useCallback(() => {
            if ($video.current) {
                if (isPlaying($video.current)) {
                    $video.current.pause();
                } else {
                    $video.current.play();
                }
            }
        }, [$video]);

        return <video onClick={onClick} src="/test_video.mp4?" ref={$video} />;
    },
    () => true,
);

export default function Player(props) {
    const [currentSub, setCurrentSub] = useState(null);
    const [focusing, setFocusing] = useState(false);
    const [inputItemCursor, setInputItemCursor] = useState(0);
    const $player = createRef();

    // useMemo(() => {
    //     setCurrentSub(props.subtitle[props.currentIndex]);
    // }, [props.subtitle, props.currentIndex]);

    const onChange = useCallback(
        (event) => {
            props.player.pause();
            props.updateSub(currentSub, { text: event.target.value });
            if (event.target.selectionStart) {
                setInputItemCursor(event.target.selectionStart);
            }
        },
        [props, currentSub],
    );

    const onClick = useCallback(
        (event) => {
            props.player.pause();
            if (event.target.selectionStart) {
                setInputItemCursor(event.target.selectionStart);
            }
        },
        [props],
    );

    const onFocus = useCallback((event) => {
        setFocusing(true);
        if (event.target.selectionStart) {
            setInputItemCursor(event.target.selectionStart);
        }
    }, []);

    const onBlur = useCallback(() => {
        setTimeout(() => setFocusing(false), 500);
    }, []);

    const onSplit = useCallback(() => {
        props.splitSub(currentSub, inputItemCursor);
    }, [props, currentSub, inputItemCursor]);

    return (
        <div className="player" style={PlayerWrapperStyle}>
            <div className="video" ref={$player}>
                {/* <VideoWrap /> */}

                <video onClick={onClick} src="/test_video.mp4?" ref={$video} />
    
                {props.player && currentSub ? (
                    <div className="subtitle">
                        {focusing ? (
                            <div className="operate" onClick={onSplit}>
                                d
                            </div>
                        ) : null}

                    </div>
                ) : null}
            </div>
        </div>
    );
}
