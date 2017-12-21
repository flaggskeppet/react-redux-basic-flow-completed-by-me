import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, //Really the same as {courses:courses}, ES6 'Shorthand property name'
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
