import React, { useEffect } from 'react';
// import './componentStyles.css'
import { useSelector, useDispatch } from "react-redux";
import CityJamsPreview from './CityJamsGrid';
import { setCurrentCity, getCities } from '../store/jams'
import CityJamsGrid from './CityJamsGrid'
import CitiesGrid from './CitiesGrid'
import { Route, useParams } from 'react-router-dom'
import Navbar from './NavBar'
import { imageUrl } from '../config'
import JamCard from './JamCard';

import 'fontsource-roboto';




const JamsBrowser = () => {
  const cities = useSelector((state) => state.jams.cities);
  const token = useSelector((state) => state.authentication.token);
  const current = useSelector((state) => state.jams.current)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  if (!cities) {
    return null;
  }
  return (
    <>
      <Navbar></Navbar>
      <div id="browser-image" width='50%' style={{ backgroundImage: `url(${imageUrl}/browser.jpeg`, height: '35vh' }} />
      <div style={{ height: "150px" }} />
      <CitiesGrid />
      <Route path={`/jamsBrowser/${current}`}>
      </Route>
      <div style={{ height: "100px" }} />
      <CityJamsGrid />
      <div style={{ height: "150px" }} />
      <Route path='/jamsBrowser/user/:id/city/:cityId/jamId/:jamId' component={JamCard}/>
      <div id="overlay"></div>
    </>
  )
}

export default JamsBrowser
