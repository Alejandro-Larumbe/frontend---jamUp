import { baseUrl } from '../config';

const LOAD = 'LOAD';
const SET_CURRENT_CITY = 'SET_CURRENT_CITY';

export const load = cities => ({ type: LOAD, cities });
export const setCurrentCity = id => ({ type: SET_CURRENT_CITY, id })

export const getCities = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/jams/cities`)
  if (response.ok) {
    const cities = await response.json();
    dispatch(load(cities))
  }

}
export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        cities: action.cities
      }
    }
    case SET_CURRENT_CITY: {
      return {
        ...state,
        currentCity: action.id
      }
    }
    default: return state;
  }
}
