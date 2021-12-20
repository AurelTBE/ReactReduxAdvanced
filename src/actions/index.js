import {
    SET_AUTHENTIFICATION, INCREMENT_ACTIONS_COUNT, ADD_RESSOURCE, PARSE_MESSAGE, RESET_ERROR, PARSE_ERROR
} from './action-types';
import axios from 'axios';

const BASE_URL = "http://localhost:3090"

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}

export function incrementActionCount() {
    return {
        type: INCREMENT_ACTIONS_COUNT,
    };
}

export function addRessource() {

    return {
        type: ADD_RESSOURCE,
    };
}

export function signinUser({email, password}, history) {
    return function(dispatch) {
        axios.post(`${BASE_URL}/signin`, {
            email,
            password
        }).then((response) => {
            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            history.push("/ressources")
        })
        .catch(err => dispatch(parseError("Identifiants invalides")))
    }
}

export function signupUser({email, password}, history) {
    return function(dispatch) {
        axios.post(`${BASE_URL}/signup`, {
            email,
            password
        }).then((response) => {
            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            history.push("/ressources")
        })
        .catch(err => console.error(err))
    }
}

export function signoutUser() {
    return function(dispatch) {
        dispatch(setAuthentification(false))
        localStorage.removeItem("token")
    }
}

export function getSpecialRessource() {
    return function(dispatch) {
        axios.get(`${BASE_URL}/sec`, {
            headers: { authorization: localStorage.getItem("token") }
        })
        .then((response) => {
            dispatch({type: PARSE_MESSAGE, payload: response.data.result})
        })
        .catch(err => console.error(err))
    }
}

export function parseError(errorMessage) {
    return {
        type: PARSE_ERROR,
        payload: errorMessage
    }
}

export function resetError() {
    return {
        type: RESET_ERROR
    }
}