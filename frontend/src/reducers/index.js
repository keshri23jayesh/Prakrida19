import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import prakridaReducer from './prakridaReducer';
import collegeReducer from './collegeReducer';
import registerReducer from './registerReducer';
import gameReducer from './gameReducer';
import teamReducer from './teamReducer';
import sponsorReducer from './sponsorReducer';

export default combineReducers({
    form: formReducer,
    colleges: collegeReducer,
    register: registerReducer,
    coordinator: prakridaReducer,
    games: gameReducer,
    team: teamReducer,
    sponsor: sponsorReducer
});