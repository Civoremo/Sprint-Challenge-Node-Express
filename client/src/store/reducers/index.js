import {
    FETCH_PROJECTS_START,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
} from '../actions';

const initialState = {
    projects: [],
    fetchingProjects: false,
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROJECTS_START:
            return {
                ...state,
                fetchingProjects: true,
            };
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                fetchingProjects: false,
                error: null,
                projects: action.payload,
            };
        case FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                fetchingProjects: false,
                error: action.payload
            };
        default:
            return state;
    }
}