import {
    FETCH_PROJECTS_START,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    FETCH_ONEPROJECT_START,
    FETCH_ONEPROJECT_SUCCESS,
    FETCH_ONEPROJECT_FAILURE,
    UPDATE_PROJECT_START,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILURE,
    REMOVE_PROJECT_START,
    REMOVE_PROJECT_SUCCESS,
    REMOVE_PROJECT_FAILURE,
} from '../actions';

const initialState = {
    projects: [],
    fetchingProjects: false,
    oneProject: [],
    fetchingOneProject: false,
    updatingProject: false,
    removingProject: false,
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        // all projects
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

        // one project
        case FETCH_ONEPROJECT_START:
            return {
                ...state,
                fetchingOneProject: true,
            };
        case FETCH_ONEPROJECT_SUCCESS:
            return {
                ...state,
                fetchingOneProject: false,
                error: null,
                oneProject: action.payload,
            };
        case FETCH_ONEPROJECT_FAILURE:
            return {
                ...state,
                fetchingOneProject: false,
                error: action.payload,
            };

        // update project
        case UPDATE_PROJECT_START:
            return {
                ...state,
                updatingProject: true,
            };
        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                updatingProject: false,
                error: null,
            };
        case UPDATE_PROJECT_FAILURE:
            return {
                ...state,
                updatingProject: false,
                error: action.payload,
            };

        // remove project
        case REMOVE_PROJECT_START:
            return {
                ...state,
                removingProject: true,
            };
        case REMOVE_PROJECT_SUCCESS:
            return {
                ...state,
                removingProject: false,
                error: null,
            };
        case REMOVE_PROJECT_FAILURE:
            return {
                ...state,
                removingProject: false,
                error: action.payload,
            };
        default:
            return state;
    }
}