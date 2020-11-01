import { ContactSupportOutlined } from '@material-ui/icons';
import { baseUrl } from '../config';

const TOKEN_KEY = 'TOKEN_KEY';
const SET_TOKEN = 'SET_TOKEN';
export const USER_ID_KEY = 'USER_ID_KEY';
const SET_USER = 'SET_USER'
const SET_USER_ID = 'SET_USER_ID'
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const REMOVE_ID = 'REMOVE_ID';
const REMOVE_CREDENTIALS = 'REMOVE_CREDENTIALS';
const CREATE_USER = 'CREATE_USER';


// export const removeToken = token => ({ type: REMOVE_TOKEN, token });
// export const removeId = id => ({ type: REMOVE_ID, id });
export const removeCredentials = () => ({ type: REMOVE_CREDENTIALS });
export const setToken = token => ({ type: SET_TOKEN, token });
export const setUserId = id => ({ type: SET_USER_ID, id })
export const setUser = user => ({type: SET_USER, user})

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

export const logout = () => async (dispatch, getState) => {
  const { authentication: { token, id } } = getState();
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_ID_KEY);
  dispatch(removeCredentials());
  // dispatch(removeId());

}

export const getUser = (id) => async(dispatch) => {
  const response = await fetch(`${baseUrl}/users/${id}`)
  if (response.ok) {
    const user = await response.json()
    dispatch(setUser(user));
  }
}

export const updateUserInfo = (payload, id) => async dispatch => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
  // const response = await fetch(`https://cors-anywhere.herokuapp.com/${baseUrl}/users/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    // mode: 'no-cors',
    body: JSON.stringify(payload),
  })
    if (response.ok) {
      console.log('user updated')

    }
}

export const signup = payload => async dispatch => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (response.ok) {
    const { token, id } = await response.json();
    console.log('signup', 'token', token, 'id', id)
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

    // case REMOVE_TOKEN: {
    //   const newState = { ...state };
    //   delete newState.token;
    //   return newState;
    // }
    case SET_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case REMOVE_CREDENTIALS: {
      const newState = { ...state };
      delete newState.id;
      delete newState.token;
      return newState;
    }

    default: return state;
  }
}

export default authentication;
