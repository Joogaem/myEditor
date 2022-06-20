import { combineReducers } from 'redux';
import media from './media';
import user from './user';
import organization from './organization';
import status from './status';
import subtitle from './subtitle';

const rootReducer = combineReducers({ organization, user, media, status, subtitle });

export default rootReducer;
