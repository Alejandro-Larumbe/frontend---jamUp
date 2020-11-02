import { AccessTimeOutlined } from '@material-ui/icons';
import { baseUrl } from '../config';


const LOAD = 'LOAD';
const LOAD_CURRENT_CITY_JAMS = 'LOAD_CURRENT_CITY_JAMS';
const LOAD_JAM = 'LOAD_JAM'
const LOAD_USER_JAMMER = "LOAD_USER_JAMMER"
const LOAD_USER_JAMS = "LOAD_USER_JAMS"
const LOAD_USER_JAM = "LOAD_USER_JAM"
const IS_ATTENDING = 'IS_ATTENDING'
const CLEAR_ATTENDING = 'CLEAR_ATTENDING'


export const clearAttending = () => ({ type: CLEAR_ATTENDING})
export const load = cities => ({ type: LOAD, cities });
export const loadCurrentCityJams = jams => ({ type: LOAD_CURRENT_CITY_JAMS, jams })
export const loadJam = jam => ({ type: LOAD_JAM, jam })
export const loadUserJammer = jammer => ({ type: LOAD_USER_JAMMER, jammer })
export const loadUserJams = jams => ({ type: LOAD_USER_JAMS, jams })
// export const getUserJam = jam => ({ type: LOAD_USER_JAMS, jams })
export const setUserJam = jam => ({ type: LOAD_USER_JAM, jam })
export const isAttending = jam => ({ type: IS_ATTENDING, jam })

// export const userGoesToJam = (id, jamId) => async (dispatch) => {
//   const response = await fetch(`${baseUrl}/users/${id}/jammer/${jamId}`, {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//   })
//   if (response.ok) console.log('user is attending new jam')
// }

export const createJam = payload => async dispatch => {
  console.log(payload)

  const response = await fetch(`${baseUrl}/jams`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) console.log('user is attending new jam')
}


export const editJam = ( jamId, payload ) => async dispatch => {
  console.log(payload)
  const { id } = jamId
  const response = await fetch(`${baseUrl}/jams/${jamId}`, {
    method: 'patch',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) console.log('jam updated')
}


export const getUserJammer = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/users/${id}/jammer`)
  if (response.ok) {
    // console.log('response')
    const jammer = await response.json()
    dispatch(loadUserJammer(jammer))
    // console.log('response', jams)
  }
}
export const getUserJams = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/users/${id}/jams`)
  if (response.ok) {
    const jams = await response.json()
    dispatch(loadUserJams(jams))
  }
}

export const getUserJam = (jamId) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/${jamId}`);
  if (response.ok) {
    const jam = await response.json();
    // console.log(jam)
    dispatch(setUserJam(jam))
  }
};

export const getCities = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/cities`)
  if (response.ok) {
    const cities = await response.json();
    dispatch(load(cities))
  }
}

export const going = (userId, jamId) => async dispatch => {
  if (!attending) {
    const response = await fetch(`${baseUrl}/users/${userId}/jammer/${jamId}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) console.log('user cancelled jam successfully')
}


export const setCurrentCity = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/cities/${id}`)
  if (response.ok) {
    const jams = await response.json();
    dispatch(loadCurrentCityJams(jams))
  }
}

export const setJam = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/${id}`)
  if (response.ok) {
    const jam = await response.json();
    dispatch(loadJam(jam))
  }
}
export const attending = (id, jamId) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/users/${id}/jammer/${jamId}`)
  if (response.ok) {
    const jam = await response.json();
    dispatch(isAttending(jam))
  }
}

export const notGoing = (userId, jamId) => async dispatch => {
  const response = await fetch(`${baseUrl}/users/${userId}/jammer/${jamId}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) console.log('user cancelled jam successfully')
}



export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        cities: action.cities,
      }
    }
    case LOAD_CURRENT_CITY_JAMS: {
      return {
        ...state,
        jams: action.jams
      }
    }
    case LOAD_JAM: {
      return {
        ...state,
        jam: action.jam
      }
    }
    case LOAD_USER_JAMMER: {
      return {
        ...state,
        userJammer: action.jammer
      }
    }
    case LOAD_USER_JAMS: {
      return {
        ...state,
        userJams: action.jams
      }
    }
    case LOAD_USER_JAM: {
      return {
        ...state,
        userJam: action.jam
      }
    }
    case IS_ATTENDING: {
      return {
        ...state,
        isAttending: action.jam
      }
    }
    case CLEAR_ATTENDING: {
      const newState = {...state}
      delete newState.isAttending
      return newState
    }
    default: return state;
  }
}
