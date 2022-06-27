import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import "@babel/polyfill";
import {
  Container,
  Table,
} from 'react-bootstrap';

import Point from './components/Waveform/Point';
import Segment from './components/Waveform/Segment';
import WaveformView from './components/Waveform/WaveformView';
import Player from './components/Player/Player.js';
import VideoCard from './components/Player/VideoCard';
import Trimmer from './components/Trimmer/Trimmer'
import './App.css';


const urls = {
  1: {
    audioUrl: '07030039.mp3',
    audioContentType: 'audio/mpeg',
    waveformDataUrl: '07030039.dat'
  },

  2: {
    audioUrl: '07023003.mp3',
    audioContentType: 'audio/mpeg',
    waveformDataUrl: '07023003-2channel.dat'
  },
  3: {
    audioUrl: 'test_video.mp4',
    audioContentType: 'video/mp4'
  }
};

interface BodySection1Props {
  currentVideo: string;
  setCurrentVideo: Dispatch<SetStateAction<string>>;
  currentTime: number;
  setCurrentTime: Dispatch<SetStateAction<number>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

function App() {
  const [url,setUrl] = useState(urls[3]);//노래나 비디오 넣기
  const [segments, setSegments] = useState('');
  const [points, setPoints] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,setDuration] = useState(0);

  const audioContext = new AudioContext();

    return (
        <Container>
          {/* <VideoCard  
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
          /> */}
          <Trimmer />
          <VideoCard />
          <WaveformView
            audioUrl={url.audioUrl}
            audioContentType={url.audioContentType}
            audioContext={audioContext}
            setSegments={setSegments}
            setPoints={setPoints}
          />

          {renderSegments()}
          {renderPoints()}

        </Container>
    );
  

  //오디오 비디오 바꾸는거
  // function handleSelectedAudioChange(e) {
  //     setAudioUrl(audioUrl);
  //     setAudioContentType(urls[e].audioContentType);
  //     setWaveformDataUrl(urls[e].waveformDataUrl);
  // };


  function renderSegments() {

    if (!segments) {
      return null;
    }

    if (segments.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        <h2>Segments</h2>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Label text</th>
            </tr>
          </thead>
          <tbody>
            {renderSegmentRows(segments)}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }

  function renderSegmentRows(segments) {
    return segments.map((segment) =>
      <Segment
        id={segment.id}
        key={segment.id}
        startTime={segment.startTime}
        endTime={segment.endTime}
        labelText={segment.labelText}
      />
    );
  }

  function renderPoints() {

    if (!points) {
      return null;
    }

    if (points.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        <h2>Points</h2>,
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>Label text</th>
            </tr>
          </thead>
          <tbody>
            {renderPointRows(points)}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }

  function renderPointRows(points) {
    return points.map((point) =>
      <Point
        id={point.id}
        key={point.id}
        time={point.time}
        labelText={point.labelText}
      />
    );
  }
}
export default App;
