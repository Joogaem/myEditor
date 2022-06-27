const SET_STATUS_VIDEO_PLAYSTATE = "status/SET_STATUS_VIDEO_PLAYSTATE"

const SET_STATUS_MANAGE_MODE = "status/SET_STATUS_MANAGE_MODE";
const SET_STATUS_SUBTITLE_LIST = "status/SET_STATUS_SUBTITLE_LIST";
const SET_STATUS_SUBTITLE_LANG = "status/SET_STATUS_SUBTITLE_LANG";
const SET_CURRENT_LANG = "status/SET_CURRENT_LANG";

export const setStatusVideoPlayState = videoPlayState => ({ type: SET_STATUS_VIDEO_PLAYSTATE, videoPlayState });

export const setStatusManageMode = manageMode => ({ type: SET_STATUS_MANAGE_MODE, manageMode })
export const setStatusSubtitleList = subtitleList => ({ type: SET_STATUS_SUBTITLE_LIST, subtitleList});
export const setStatusSubtitleLang = subtitleLang => ({ type: SET_STATUS_SUBTITLE_LANG, subtitleLang });
export const setCurrentLang = currentLang => ({ type: SET_CURRENT_LANG, currentLang });


const initialState = {
    videoPlayState: false,
    manageMode: 0,
    subtitleList: [],
    subtitleLang: {},
    currentLang: '',

};


export default function status(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS_VIDEO_PLAYSTATE:
      console.log(action.videoPlayState)
      return {
          ...state,
          videoPlayState : action.videoPlayState
    };
    case SET_STATUS_MANAGE_MODE:
      return {
        ...state,
        manageMode : action.manageMode
    };
    case SET_STATUS_SUBTITLE_LIST:
      return {
          ...state,
          subtitleList: action.subtitleList
    };
    case SET_STATUS_SUBTITLE_LANG:
      return {
          ...state,
          subtitleLang: action.subtitleLang
    };
    case SET_CURRENT_LANG:
      return {
          ...state,
          currentLang: action.currentLang
    };
    default:
      return state;
  }
}
