import axios from 'axios';

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

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