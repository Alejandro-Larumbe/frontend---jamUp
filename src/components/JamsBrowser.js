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
  console.log(cities)
  const token = useSelector((state) => state.authentication.token);
  const current = useSelector((state) => state.jams.current)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [current]);


  // const handleClick = e => {
  //   console.log(e.target.id)
  //   dispatch(setCurrentCity(e.target.id))
  // }

  if (!cities) {
    return null;
  }
  return (
    <>
      <CitiesGrid />
      {/* <CityJamsGrid  /> */}
      <Route
        path={`/jamsBrowser/${current}`}
        render={(props) => <CityJamsGrid {...props} token={token} />}
      />
    </>
  )
}

export default JamsBrowser
