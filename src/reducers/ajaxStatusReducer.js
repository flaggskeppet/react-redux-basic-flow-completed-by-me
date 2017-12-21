import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if(action.type == types.BEGIN_AJAX_CALL){
        debugger
        return state + 1;
    } else if(state > 0 && actionTypeEndsInSuccess(action.type)){
        return state -1 ;
    }
    return state;
}