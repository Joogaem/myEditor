import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Peaks from 'peaks.js';

import { createPointMarker, createSegmentMarker } from './MarkerFactories';
import { createSegmentLabel } from './SegmentLabelFactory';

import './WaveformView.css';

function WaveformView (props) {
  const zoomviewWaveformRef = useRef();
  const overviewWaveformRef = useRef();
  const audioRef = useRef();
  const [peaks,setPeaks] = useState('');

  const videoPlayState = useSelector(state => state.status.videoPlayState);

  var prevProps = {
    audioUrl: ''
  };

  useEffect(() =>{ 
    if(videoPlayState) {
      if (peaks) {
        audioRef.current.play();
      }
    } else {
      if (peaks) {
        audioRef.current.pause();
      }
    }
  },[videoPlayState])


  useEffect(() => {
    initPeaks();
  },[]); //첫 렌더링이 완료될 때 실행, componentDidMount
  
  useEffect(() => {
    console.log('props', props.audioUrl);
    if (props.audioUrl === prevProps.audioUrl) {
      return;
    }

    console.log('props', props);
    console.log('prevProps', prevProps);
    prevProps.audioUrl = props.audioUrl;

    initPeaks();
  },[props]); // []안의 내용이 업데이트 될 때만 실행, componentDidUpdate

  return (
      <div>
        <div className="zoomview-container" ref={zoomviewWaveformRef}></div>
        <div className="overview-container" ref={overviewWaveformRef}></div>

        <audio ref={audioRef} controls="controls">
          <source src={props.audioUrl} type={props.audioContentType}/>
          Your browser does not support the audio element.
        </audio>

        <ButtonToolbar>
          <Button onClick={zoomIn}>Zoom in</Button>&nbsp;
          <Button onClick={zoomOut}>Zoom out</Button>&nbsp;
          <Button onClick={addSegment}>Add Segment</Button>&nbsp;
          <Button onClick={addPoint}>Add Point</Button>&nbsp;
          <Button onClick={logMarkers}>Log segments/points</Button>
        </ButtonToolbar>

      </div>
    );

  function initPeaks() {
    const options = {
      containers: {
        overview: overviewWaveformRef.current,
        zoomview: zoomviewWaveformRef.current
      },
      mediaElement: audioRef.current,
      keyboard: true,
      logger: console.error.bind(console),
      createSegmentMarker: createSegmentMarker,
      createSegmentLabel: createSegmentLabel,
      createPointMarker: createPointMarker,
      zoomLevels: [256, 512, 1024, 2048, 4096],
    };

    if (props.waveformDataUrl) {
      options.dataUri = {
        arraybuffer: props.waveformDataUrl
      };
    }
    else if (props.audioContext) {
      options.webAudio = {
        audioContext: props.audioContext
      };
    }

    audioRef.current.src = props.audioUrl;

    if (peaks) {
      peaks.destroy();
      peaks = null;
    }

    Peaks.init(options, (err, peaks) => {
      setPeaks(peaks);
      onPeaksReady();
      const view = peaks.views.getView('zoomview')
      view.setWheelMode('scroll')
    });
  }

  function zoomIn() {
    if (peaks) {
      peaks.zoom.zoomIn();
    }
  };

  function zoomOut() {
    if (peaks) {
      peaks.zoom.zoomOut();
    }
  };
  function addSegment() {
    if (peaks) {
      const time = peaks.player.getCurrentTime();

      peaks.segments.add({
        startTime: time,
        endTime: time + 10,
        labelText: 'Test Segment',
        editable: true
      });
    }
  };

  function addPoint() {
    if (peaks) {
      const time = peaks.player.getCurrentTime();

      peaks.points.add({
        time: time,
        labelText: 'Test Point',
        editable: true
      });
    }
  };

  function logMarkers() {
    if (peaks) {
      props.setSegments(peaks.segments.getSegments());
      props.setPoints(peaks.points.getPoints());
    }
  }

  function onPeaksReady() {
    // Do something when the Peaks instance is ready for use
    console.log("Peaks.js is ready");
  }
}

// WaveformView.propTypes = {
//   audioUrl:         PropTypes.string,
//   audioContentType: PropTypes.string,
//   waveformDataUrl:  PropTypes.string,
//   audioContext:     PropTypes.object,
//   setSegments:      PropTypes.func,
//   setPoints:        PropTypes.func
// };

export default WaveformView;