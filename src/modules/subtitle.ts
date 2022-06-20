//import axios from 'axios';

//Actions
const SET_SUBTITLE_LIST = "subtitle/SET_SUBTITLE_LIST";
const SET_SUBTITLE_SELECTED = "subtitle/SET_SUBTITLE_SELECTED";
const ADD_TIMELINE_TO_SUBTITLE = "subtitle/ADD_TIMELINE_TO_SUBTITLE";
const CHANGE_SUBTITLE_LANG = "subtitle/CHANGE_SUBTITLE_LANG"
const REMOVE_TIMELINE_TO_SUBTITLE = "subtitle/REMOVE_TIMELINE_TO_SUBTITLE"
const UPDATE_SUBTITLE_TIMELINE = "subtitle/UPDATE_SUBTITLE_TIMELINE";
const EVENT_SUBTITLE_TIMELINE = "subtitle/EVENT_SUBTITLE_TIMELINE";
const CHANGE_SUBTITLE_TIME = "subtitle/CHANGE_SUBTITLE_TIME";
const CHANGE_TIMELINE_TIME = "subtitle/CHANGE_TIMELINE_TIME";

// 액션 생성 함수
export const setSubtitleList = subtitleList => ({ type: SET_SUBTITLE_LIST, subtitleList });
export const setSubtitleSelected = subtitleSelected => ({ type: SET_SUBTITLE_SELECTED, subtitleSelected });
export const addTimelineToSubtitle= addTimelineItem => ({ type: ADD_TIMELINE_TO_SUBTITLE, addTimelineItem });
export const removeTimelineToSubtitle= removeTimelineItem => ({ type: REMOVE_TIMELINE_TO_SUBTITLE, removeTimelineItem });
export const updateSubtitleTimeline = updateSubtitle => ({ type: UPDATE_SUBTITLE_TIMELINE, updateSubtitle });
export const changeSubtitleTime = subtitleTime => ({ type: CHANGE_SUBTITLE_TIME, subtitleTime });
export const changeTimelineTime = timelineTime => ({ type: CHANGE_TIMELINE_TIME, timelineTime });
export const EventSubtitleToTimeline = subtitleEvent => ({ type: EVENT_SUBTITLE_TIMELINE, subtitleEvent });

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  subtitleList : [],
  subtitleSelected : [],
  addTimelineItem : [],
  removeTimelineItem: [],
  updateSubtitle : [],
  subtitleTime : [],
  timelineTime : [],
  subtitleEvent : 0
};

export default function subtitle(state = initialState, action) {
  switch (action.type) {
    case SET_SUBTITLE_LIST:
      return {
        ...state,
        subtitleList : action.subtitleList
      }
    case SET_SUBTITLE_SELECTED:
      return {
        ...state,
        subtitleSelected : action.subtitleSelected
      }     
    case ADD_TIMELINE_TO_SUBTITLE:
      return {
        ...state,
        addTimelineItem : action.addTimelineItem
      }    
    case REMOVE_TIMELINE_TO_SUBTITLE:
    return {
      ...state,
      removeTimelineItem : action.removeTimelineItem
    }  
    case UPDATE_SUBTITLE_TIMELINE:
      return {
        ...state,
        updateSubtitle: action.updateSubtitle
      }        
    case CHANGE_SUBTITLE_TIME:
      return {
        ...state,
        subtitleTime: action.subtitleTime
      }     
    case CHANGE_TIMELINE_TIME:
      console.log(action.timelineTime)
      return {
        ...state,
        timelineTime: action.timelineTime
      }    
    case EVENT_SUBTITLE_TIMELINE:
      return {
        ...state,
        subtitleEvent: action.subtitleEvent
      }    
    default:
        return state;
  }
} 