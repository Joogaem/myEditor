import {useEffect, useState} from "react";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const FFmpeg = createFFmpeg({ log:true });

function Trimmer()  {
    const [videoSrc, setVideoSrc] = useState('');
    const [audioSrc, setAudioSrc] = useState('');
    const [ready,setReady] = useState(false);
    const [video, setVideo] = useState('');
    const [watermarkImage, setWatermarkImage] = useState('');

    function setVideoFile(e) {
        const file = e.target.files[0];
        setVideo(file);
        //setVideoSrc(file);
    }
    function setWatermarkFile(e) {
        const file = e.target.files[0];
        setWatermarkImage(file);
    }

    const trimVideo = async () => {
        if(!FFmpeg.isLoaded()) {
            await FFmpeg.load();
        }
        FFmpeg.FS('writeFile', 'test_video.mp4', await fetchFile(video));
        await FFmpeg.run('-i','test_video.mp4','-ss','00:00:05','-t','00:00:15', '-c:v', 'copy', '-c:v', 'copy', 'cut.mp4');
        const data = FFmpeg.FS('readFile', 'cut.mp4');
        console.log(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})))
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})));
    }

    const cropVideo = async () => {
        if(!FFmpeg.isLoaded()) {
            await FFmpeg.load();
        }
        FFmpeg.FS('writeFile', 'test_video.mp4', await fetchFile(video));
        await FFmpeg.run('-i','test_video.mp4','-filter:v','crop=200:200:50:50','-c:a', 'copy', 'cut.mp4');
        const data = FFmpeg.FS('readFile', 'cut.mp4');
        console.log(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})))
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})));
    }

    const extractAudio = async () => {
        if(!FFmpeg.isLoaded()) {
            await FFmpeg.load();
        }
        
        await FFmpeg.run('-i','test_video.mp4','-vn', '-ab', '128', 'cut.mp3');
        const data = FFmpeg.FS('readFile', 'cut.mp3');
        setAudioSrc(URL.createObjectURL(new Blob([data.buffer],{type: 'audio/mp3'})));
    }

    const muteAudio = async () => {
        if(!FFmpeg.isLoaded()) {
            await FFmpeg.load();
        }
        FFmpeg.FS('writeFile', 'test_video.mp4', await fetchFile(video));
        await FFmpeg.run('-i','test_video.mp4','-an', '-preset', 'ultrafast', 'cut.mp4');
        const data = FFmpeg.FS('readFile', 'cut.mp4');
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})));
    }
    
    const watermarkingText = async () => {
        if(!FFmpeg.isLoaded()) {
            await FFmpeg.load();
        }
        FFmpeg.FS('writeFile', 'font.ttf', await fetchFile('OpenSans-Italic.ttf'));
        FFmpeg.FS('writeFile', 'test_video.mp4', await fetchFile(video));
        await FFmpeg.run('-i','test_video.mp4', '-vf','drawtext=fontfile=font.ttf:text=\'Artist\':fontcolor=white:fontsize=24:x=(w-text_w)/2:y=(h-text_h)/2', '-preset', 'ultrafast', '-c:a', 'copy', 'cut.mp4');
        const data = FFmpeg.FS('readFile', 'cut.mp4');
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})));
    }

    const watermarkingImage = async () => {
        if(!FFmpeg.isLoaded()) {
            await FFmpeg.load();
        }
        FFmpeg.FS('writeFile', 'logoImage.png', await fetchFile(watermarkImage));
        FFmpeg.FS('writeFile', 'test_video.mp4', await fetchFile(video));
        await FFmpeg.run('-i','test_video.mp4', '-i', 'logoImage.png', '-filter_complex', 'overlay=x=(main_w-overlay_w)/2:y=(main_h-overlay_h)/2', '-preset', 'ultrafast', '-c:a', 'copy', 'cut.mp4');
        const data = FFmpeg.FS('readFile', 'cut.mp4');
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer],{type: 'video/mp4'})));
    }

    return (
        <div className="Trimmer">
            <input type="file" id="video" onChange={setVideoFile} />
            <span>워터마크용</span>
            <input type="file" id="video" onChange={setWatermarkFile} />
            <div>
                <button onClick={trimVideo}>trim</button>
                <button onClick={cropVideo}>crop</button>
                <button onClick={extractAudio}>extract mp3</button>
                <button onClick={muteAudio}>Mute sound</button>
                <button onClick={cropVideo}>crop</button>
                <button onClick={watermarkingText}>text watermark</button>
                <button onClick={watermarkingImage}>Image watermark</button>
            </div>


            <video controls
                    src={videoSrc}>
            </video>
            <audio controls
                    src={audioSrc}>
            </audio>
            <div>trim은 00:05 ~ 00:15 까지 자름</div>
            <div>trim은 00:05 ~ 00:15 까지 자름</div>
        </div>
    )
}

export default Trimmer;
