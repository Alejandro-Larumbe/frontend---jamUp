import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import City from './City';
import Jams from './Jams';
import CityJamsPreview from './CityJamsGrid';
import { setCurrentCity, getCities } from '../store/jams'
import CityJamsGrid from './CityJamsGrid'
import CitiesGrid from './CitiesGrid'
import { Route } from 'react-router-dom'

import 'fontsource-roboto';




const JamsBrowser = () => {
  const cities = useSelector((state) => state.jams.cities);
  const token = useSelector((state) => state.authentication.token);
  const current = useSelector((state) => state.jams.current)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [current]);

  if (!cities) {
    return null;
  }
  return (
    <>
      <CitiesGrid />
      <Route path={`/jamsBrowser/${current}`}>
      </Route>
        <CityJamsGrid />
    </>
  )
}

export default JamsBrowser
