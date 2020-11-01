import { AccessTimeOutlined } from '@material-ui/icons';
import { baseUrl } from '../config';


const LOAD = 'LOAD';
const LOAD_CURRENT_CITY_JAMS = 'LOAD_CURRENT_CITY_JAMS';
const LOAD_JAM = 'LOAD_JAM'
const LOAD_USER_JAMMER = "LOAD_USER_JAMMER"

export const load = cities => ({ type: LOAD, cities });
export const loadCurrentCityJams = jams => ({ type: LOAD_CURRENT_CITY_JAMS, jams })
export const loadJam = jam => ({ type: LOAD_JAM, jam })
export const loadUserJammer = jams => ({ type: LOAD_USER_JAMMER, jams})

// export const userGoesToJam = (id, jamId) => async (dispatch) => {
//   const response = await fetch(`${baseUrl}/users/${id}/jammer/${jamId}`, {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//   })
//   if (response.ok) console.log('user is attending new jam')
// }

export const getUserJammer = (id) => async(dispatch) => {
  const response = await fetch(`${baseUrl}/users/${id}/jammer`)
  if (response.ok) {
    console.log('response')
    const jams = await response.json()
    dispatch(loadUserJammer(jams))
    // console.log('response', jams)
  }

}

export const getCities = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/cities`)
  if (response.ok) {
    const cities = await response.json();
    dispatch(load(cities))
  }
}

export const going = (userId, jamId) => async dispatch => {
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

export const setJam = (id) => async(dispatch) => {
  const response = await fetch(`${baseUrl}/jams/${id}`)
  if (response.ok) {
    const jam = await response.json();
    dispatch(loadJam(jam))
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
        userJammer: action.jams
      }
    }
    default: return state;
  }
}
