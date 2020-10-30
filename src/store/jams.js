import { baseUrl } from '../config';


const LOAD = 'LOAD';
const LOAD_CURRENT_CITY_JAMS = 'LOAD_CURRENT_CITY_JAMS';

export const load = cities => ({ type: LOAD, cities });
export const loadCurrentCityJams = jams => ({ type: LOAD_CURRENT_CITY_JAMS, jams })

export const getCities = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/cities`)
  if (response.ok) {
    const cities = await response.json();
    dispatch(load(cities))
  }
}

export const setCurrentCity = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/cities/${id}`)
  if (response.ok) {
    const jams = await response.json();
    dispatch(loadCurrentCityJams(jams))
  }
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
    default: return state;
  }
}
