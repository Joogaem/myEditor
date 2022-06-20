
//Actions
const SET_STATUS_APP_VERSION = "status/SET_STATUS_APP_VERSION";

const SET_STATUS_USERTIME = "status/SET_STATUS_USERTIME";
const SET_STATUS_CPU_USAGE = "status/SET_STATUS_CPU_USAGE";
const SET_STATUS_RAM_USAGE = "status/SET_STATUS_RAM_USAGE";
const SET_STATUS_NETWORK_PING = "status/SET_STATUS_NETWORK_PING";
const SET_STATUS_PROCESS = "status/SET_STATUS_PROCESS";
const SET_STATUS_MONITOR_COUNT = "status/SET_STATUS_MONITOR_COUNT";
const SET_STATUS_WINDOW_COUNT = "status/SET_STATUS_WINDOW_COUNT";

const SET_STATUS_CAMERA = "status/SET_STATUS_CAMERA";
const SET_STATUS_MICROPHONE = "status/SET_STATUS_MICROPHONE";

const SET_STATUS_USER_CAMERA = "status/SET_STATUS_USER_CAMERA";
const SET_STATUS_USER_MICROPHONE = "status/SET_STATUS_USER_MICROPHONE";

const SET_STATUS_FACE_RECOGNITION = "status/SET_STATUS_FACE_RECOGNITION";
const SET_STATUS_FACE_RECOGNITION_USERIMAGE = "status/SET_STATUS_FACE_RECOGNITION_USERIMAGE";
const SET_STATUS_FACE_RECOGNITION_MATCHER = "status/SET_STATUS_FACE_RECOGNITION_MATCHER";
const SET_STATUS_FACE_RECOGNITION_MATCHER_SCORE = "status/SET_STATUS_FACE_RECOGNITION_MATCHER_SCORE";

const SET_STATUS_OBJECT_RECOGNITION = "status/SET_STATUS_OBJECT_RECOGNITION";
const SET_STATUS_DECIBEL_METER = "status/SET_STATUS_DECIBEL_METER";
const SET_STATUS_INTIME_COLOR = "status/SET_STATUS_INTIME_COLOR";

const SET_STATUS_VIDEO_PLAYSTATE = "status/SET_STATUS_VIDEO_PLAYSTATE"

const SET_STATUS_MANAGE_MODE = "status/SET_STATUS_MANAGE_MODE";
const SET_STATUS_SUBTITLE_LIST = "status/SET_STATUS_SUBTITLE_LIST";
const SET_STATUS_SUBTITLE_LANG = "status/SET_STATUS_SUBTITLE_LANG";
const SET_CURRENT_LANG = "status/SET_CURRENT_LANG";

// 액션 생성 함수
export const setStatusAppVersion = appVersion => ({ type: SET_STATUS_APP_VERSION, appVersion });


export const setStatusCpu = cpuUsage => ({ type: SET_STATUS_CPU_USAGE, cpuUsage });
export const setStatusRam = ramUsage => ({ type: SET_STATUS_RAM_USAGE, ramUsage });
export const setStatusNetwork = networkPing => ({ type: SET_STATUS_NETWORK_PING, networkPing });
export const setStatusProcess = statusProcess => ({ type: SET_STATUS_PROCESS, statusProcess });
export const setStatusMonitorCount = monitorCount => ({ type: SET_STATUS_MONITOR_COUNT, monitorCount });
export const setStatusWindowCount = windowCount => ({ type: SET_STATUS_WINDOW_COUNT, windowCount });

export const setStatusCamera = camera => ({ type: SET_STATUS_CAMERA, camera });
export const setStatusMicrophone = microphone => ({ type: SET_STATUS_MICROPHONE, microphone });

export const setStatusUserCamera = userCamera => ({ type: SET_STATUS_USER_CAMERA, userCamera });
export const setStatusUserMicrophone = userMicrophone => ({ type: SET_STATUS_USER_MICROPHONE, userMicrophone });

//치팅 관련
export const setStatusFaceRecognition = faceRecognition => ({ type: SET_STATUS_FACE_RECOGNITION, faceRecognition });
export const setStatusFaceRecognitionUserImage = faceRecognitionUserImage => ({ type: SET_STATUS_FACE_RECOGNITION_USERIMAGE, faceRecognitionUserImage });
export const setStatusFaceRecognitionMatcher = faceRecognitionMatcher => ({ type: SET_STATUS_FACE_RECOGNITION_MATCHER, faceRecognitionMatcher });
export const setStatusFaceRecognitionMatcherScore = faceRecognitionMatcherScore => ({ type: SET_STATUS_FACE_RECOGNITION_MATCHER_SCORE, faceRecognitionMatcherScore });

//export const setStatusFaceMatcher = faceMatcherScore => ({ type: SET_STATUS_FACE_MACHER, faceMatcherScore });

export const setStatusObjectRecognition = objectRecognition => ({ type: SET_STATUS_OBJECT_RECOGNITION, objectRecognition });

export const setStatusDecibelMeter = decibelMeter => ({ type: SET_STATUS_DECIBEL_METER, decibelMeter });
export const setStatusIntimeColor = intimeColor => ({ type: SET_STATUS_INTIME_COLOR, intimeColor });

export const setStatusVideoPlayState = videoPlayState => ({ type: SET_STATUS_VIDEO_PLAYSTATE, videoPlayState });

export const setStatusManageMode = manageMode => ({ type: SET_STATUS_MANAGE_MODE, manageMode })
export const setStatusSubtitleList = subtitleList => ({ type: SET_STATUS_SUBTITLE_LIST, subtitleList});
export const setStatusSubtitleLang = subtitleLang => ({ type: SET_STATUS_SUBTITLE_LANG, subtitleLang });
export const setCurrentLang = currentLang => ({ type: SET_CURRENT_LANG, currentLang });


const initialState = {
    appVersion: 0,
    cpuUsage : 0,
    ramUsage : 0,
    networkPing : 0,
    statusProcess : [],
    monitorCount : false,
    windowCount : false,
    camera : {
      access : false,
      exists : false
    },
    microphone : {
      access : false,
      exists : false
    },
    userCamera : false,
    userMicrophone : false,
    faceRecognition : false,
    faceRecognitionUserImage : null,
    faceRecognitionMatcher : null,
    faceRecognitionMatcherScore : null,
    objectRecognition : {
      peopleDetection : null,
      unknownDetection : null
    },
    decibelMeter : 0,
    intimeColor : {
      detected : null
    },
    videoPlayState: false,
    manageMode: 0,
    subtitleList: [],
    subtitleLang: {},
    currentLang: '',

};


/*
  const SET_STATUS_APP_VERSION = "status/SET_STATUS_APP_VERSION";

  const SET_STATUS_CPU_USAGE = "status/SET_STATUS_CPU_USAGE";
  const SET_STATUS_RAM_USAGE = "status/SET_STATUS_RAM_USAGE";
  const SET_STATUS_NETWORK_PING = "status/SET_STATUS_NETWORK_PING";
  const SET_STATUS_PROCESS = "status/SET_STATUS_PROCESS";
  const SET_STATUS_MONITOR_COUNT = "status/SET_STATUS_MONITOR_COUNT";
  const SET_STATUS_WINDOW_COUNT = "status/SET_STATUS_WINDOW_COUNT";

  const SET_STATUS_CAMERA = "status/SET_STATUS_CAMERA";
  const SET_STATUS_MICROPHONE = "status/SET_STATUS_MICROPHONE";

  const SET_STATUS_FACIAL_RECOGNITION = "status/SET_STATUS_FACIAL_RECOGNITION";
  const SET_STATUS_OBJECT_RECOGNITION = "status/SET_STATUS_OBJECT_RECOGNITION";
  const SET_STATUS_DECIBEL_METER = "status/SET_STATUS_DECIBEL_METER";
  const SET_STATUS_INTIME_COLOR = "status/SET_STATUS_INTIME_COLOR";
*/

export default function status(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS_APP_VERSION:
      return {
          ...state,
          appVersion : action.appVersion
      };
    case SET_STATUS_CPU_USAGE:
      return {
          ...state,
          cpuUsage : action.cpuUsage
    };
    case SET_STATUS_RAM_USAGE:
      return {
          ...state,
          ramUsage : action.ramUsage
    };
    case SET_STATUS_NETWORK_PING:
      return {
          ...state,
          networkPing : action.networkPing
    };
    case SET_STATUS_PROCESS:
      return {
          ...state,
          statusProcess : action.statusProcess
    };
    case SET_STATUS_MONITOR_COUNT:
      return {
          ...state,
          monitorCount : action.monitorCount
    };
    case SET_STATUS_WINDOW_COUNT:
      return {
          ...state,
          windowCount : action.windowCount
    };
    case SET_STATUS_CAMERA:
      return {
          ...state,
          camera : action.camera
    };
    case SET_STATUS_MICROPHONE:
      return {
          ...state,
          microphone : action.microphone
    };
    case SET_STATUS_USER_CAMERA:
      return {
          ...state,
          userCamera : action.userCamera
    };
    case SET_STATUS_USER_MICROPHONE:
      return {
          ...state,
          userMicrophone : action.userMicrophone
    };
    case SET_STATUS_FACE_RECOGNITION:
      return {
          ...state,
          faceRecognition : action.faceRecognition
    };
    case SET_STATUS_FACE_RECOGNITION_USERIMAGE:
      return {
        ...state,
        faceRecognitionUserImage : action.faceRecognitionUserImage
    };
    case SET_STATUS_FACE_RECOGNITION_MATCHER:
      return {
        ...state,
        faceRecognitionMatcher : action.faceRecognitionMatcher
    };
    case SET_STATUS_FACE_RECOGNITION_MATCHER_SCORE:
      return {
        ...state,
        faceRecognitionMatcherScore : action.faceRecognitionMatcherScore
    };
    case SET_STATUS_OBJECT_RECOGNITION:
      return {
          ...state,
          objectRecognition : action.objectRecognition
    };
    case SET_STATUS_DECIBEL_METER:
      return {
          ...state,
          decibelMeter : action.decibelMeter
    };
    case SET_STATUS_INTIME_COLOR:
      return {
          ...state,
          intimeColor : action.intimeColor
    };    
    case SET_STATUS_VIDEO_PLAYSTATE:
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
