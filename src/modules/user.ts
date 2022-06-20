//Actions
const SET_USER_DATA = "user/SET_USER_DATA";
const SET_USER_TOKEN = "user/SET_USER_TOKEN";
const SET_USER_PICTURE = "user/SET_USER_PICTURE";
const SET_USER_SOCKET = "user/SET_USER_SOCKET";
const SET_USER_TRY_PHOTO = "user/SET_USER_TRY_PHOTO";

// 액션 생성 함수
export const setUserData = userData => ({ type: SET_USER_DATA, userData });
export const setUserToken = userToken => ({ type: SET_USER_TOKEN, userToken });
export const setUserPicture = userPicture => ({ type: SET_USER_PICTURE, userPicture });
export const setUserSocket = userSocket => ({ type: SET_USER_SOCKET, userSocket });

export const setUserTryPhoto = tryPhoto => ({ type: SET_USER_TRY_PHOTO, tryPhoto });


const initialState = {
    userData : [],
    userToken : false,
    userPicture : false,
    userSocket: false,
    userDataConn: false,
    userDataChannel: false,
    tryPhoto : false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
          ...state,
          userData : action.userData
      };
    case SET_USER_TOKEN:
      return {
          ...state,
          userToken : action.userToken
      };
    case SET_USER_PICTURE:
      return {
          ...state,
          userPicture : action.userPicture
      };
    case SET_USER_SOCKET:
      return {
          ...state,
          userSocket : action.userSocket
      };
    case SET_USER_TRY_PHOTO:
      return {
          ...state,
          tryPhoto : action.tryPhoto
      };
    default:
      return state;
  }
}
