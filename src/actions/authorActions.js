import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi'
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        courseApi.getAllAuthors().then(courses => {
            dispatch(loadAuthorsSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}