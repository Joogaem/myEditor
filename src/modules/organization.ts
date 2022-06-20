//import axios from 'axios';

//Actions
const SET_ORGANIZATION_DATA = "organization/SET_ORGANIZATION_DATA";

// 액션 생성 함수
export const setOrganizationData = organizationData => ({ type: SET_ORGANIZATION_DATA, organizationData });

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  organizationData : {},
};

export default function organization(state = initialState, action) {
  switch (action.type) {
    case SET_ORGANIZATION_DATA:
      return {
        ...state,
        organizationData : action.organizationData
      }
    default:
        return state;
  }
} 