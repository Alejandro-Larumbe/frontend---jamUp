import { baseUrl } from '../config';

const TOKEN_KEY = 'TOKEN_KEY';
const SET_TOKEN = 'SET_TOKEN';
const USER_ID_KEY = 'USER_ID_KEY';
const SET_USER_ID = 'SET_USER_ID'
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const CREATE_USER = 'CREATE_USER';


export const removeToken = token => ({ type: REMOVE_TOKEN });
export const setToken = token => ({ type: SET_TOKEN, token });
export const setUserId = id => ({ type: SET_USER_ID, id })

export const loadToken = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const login = (email, password) => async dispatch => {
  const response = await fetch(`${baseUrl}/users/token`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, id } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_ID_KEY, id);
    dispatch(setToken(token));
    dispatch(setUserId(id));
  }
};

export const signup = payload => async dispatch => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( payload ),
  })

  if (response.ok) {
    const { token, id } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_ID_KEY, id);
    dispatch(setToken(token));
    dispatch(setUserId(id));
  }
}



function authentication(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }

    case SET_USER_ID: {
      return {
        ...state,
        id: action.id
      };
    }

    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }

    default: return state;
  }
}

export default authentication;
