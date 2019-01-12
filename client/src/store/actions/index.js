import axios from 'axios';

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const FETCH_ONEPROJECT_START = 'FETCH_ONEPROJECT_START';
export const FETCH_ONEPROJECT_SUCCESS = 'FETCH_ONEPROJECT_SUCCESS';
export const FETCH_ONEPROJECT_FAILURE = 'FETCH_ONEPROJECT_FAILURE';

export const UPDATE_PROJECT_START = 'UPDATE_PROJECT_START';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

export const REMOVE_PROJECT_START = 'REMOVE_PROJECT_START';
export const REMOVE_PROJECT_SUCCESS = 'REMOVE_PROJECT_SUCCESS';
export const REMOVE_PROJECT_FAILURE = 'REMOVE_PROJECT_FAILURE';

const baseURL = 'http://localhost:5000';

export const fetchProjects = () => dispatch => {
    dispatch({ type: FETCH_PROJECTS_START });
    axios({
        method: 'get',
        url: `${baseURL}/projects`,
    })
    .then(result => {
        // console.log(result.data.projects);
        dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: result.data.projects });
    })
    .catch(err => {
        dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
    })
};

export const fetchOneProject = (id) => dispatch => {
    dispatch({ type: FETCH_ONEPROJECT_START });
    axios({
        method: 'get',
        url: `${baseURL}/projects/${id}`,
    })
    .then(result => {
        // console.log(result.data.projects);
        dispatch({ type: FETCH_ONEPROJECT_SUCCESS, payload: result.data.projects });
    })
    .catch(err => {
        dispatch({ type: FETCH_ONEPROJECT_FAILURE, payload: err });
    })
};

export const updateProject = (id, body) => dispatch => {
    dispatch({ type: UPDATE_PROJECT_START });
    axios({
        method: 'put',
        url: `${baseURL}/projects/${id}`,
        data: {
            name: body.name,
            description: body.description,
            completed: body.completed
        }
    })
    .then(result => {
        // console.log(result.data.projects);
        dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: result.data.projects });
    })
    .catch(err => {
        dispatch({ type: UPDATE_PROJECT_FAILURE, payload: err });
    })
};

export const removeProject = (id) => dispatch => {
    dispatch({ type: REMOVE_PROJECT_START });
    axios({
        method: 'delete',
        url: `${baseURL}/projects/${id}`,
    })
    .then(result => {
        // console.log(result.data.projects);
        dispatch({ type: REMOVE_PROJECT_SUCCESS, payload: result.data.projects });
    })
    .catch(err => {
        dispatch({ type: REMOVE_PROJECT_FAILURE, payload: err });
    })
};