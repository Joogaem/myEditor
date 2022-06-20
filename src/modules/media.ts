//import axios from 'axios';

//Actions
const SET_CURRENT_MEDIA_UUID = "media/SET_MEDIA_UUID";
const SET_CURRENT_MEDIA_FILENAME = "media/SET_CURRENT_MEDIA_FILENAME";
const SET_CURRENT_MEDIA_STREAMLIST = "media/SET_CURRENT_MEDIA_STREAMLIST";

const SET_CURRENT_MEDIA_SUBTITLELIST = "media/SET_CURRENT_MEDIA_SUBTITLELIST";
const SET_CURRENT_MEDIA_CHAPTERLIST = "media/SET_CURRENT_MEDIA_CHAPTERLIST";

const SET_PLAYINGTIME_TIMELINE_TO_MEDIAPLAYER = "media/SET_PLAYINGTIME_TIMELINE_TO_MEDIAPLAYER";
const SET_PLAYINGTIME_MEDIAPLAYER_TO_TIMELINE = "media/SET_PLAYINGTIME_MEDIAPLAYER_TO_TIMELINE";
// 액션 생성 함수
export const setCurrentMediaUUID = uuid => ({ type: SET_CURRENT_MEDIA_UUID, uuid });
export const setCurrentMediaFileName = fileName => ({ type: SET_CURRENT_MEDIA_FILENAME, fileName });
export const setCurrentMediaStreamList = streamList => ({ type: SET_CURRENT_MEDIA_STREAMLIST, streamList });

export const setCurrentMediaSubtitleList = subtitleList => ({ type: SET_CURRENT_MEDIA_SUBTITLELIST, subtitleList });
export const setCurrentMediaChapterList = chapterList => ({ type: SET_CURRENT_MEDIA_CHAPTERLIST, chapterList });

export const setPlayingTimeTimelineToMediaPlayer = TimelinePlayingTime => ({ type: SET_PLAYINGTIME_TIMELINE_TO_MEDIAPLAYER, TimelinePlayingTime });
export const setPlayingTimeMediaPlayerToTimeline = MediaPlayerPlayingTime => ({ type: SET_PLAYINGTIME_MEDIAPLAYER_TO_TIMELINE, MediaPlayerPlayingTime });


// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  fileName : null,
  uuid : null,
  streamList : [],
  subtitleList : [],
  chapterList : [],
  TimelinePlayingTime : [],
  MediaPlayerPlayingTime: 0
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MEDIA_UUID:
      return {
        ...state,
        uuid : action.uuid
      }
    case SET_CURRENT_MEDIA_FILENAME:
      return {
        ...state,
        fileName : action.fileName
      }     
    case SET_CURRENT_MEDIA_STREAMLIST:
      return {
        ...state,
        streamList : action.streamList
      }
    case SET_CURRENT_MEDIA_SUBTITLELIST:
      return {
        ...state,
        subtitleList : action.subtitleList
      }
    case SET_CURRENT_MEDIA_CHAPTERLIST:
      return {
        ...state,
        chapterList : action.chapterList
      }
    case SET_PLAYINGTIME_TIMELINE_TO_MEDIAPLAYER:
      return {
        ...state,
        TimelinePlayingTime : action.TimelinePlayingTime
      }         
    case SET_PLAYINGTIME_MEDIAPLAYER_TO_TIMELINE:
      return {
        ...state,
        MediaPlayerPlayingTime : action.MediaPlayerPlayingTime
      }                
    default:
        return state;
  }
} 