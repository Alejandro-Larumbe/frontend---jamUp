import React, { useEffect } from 'react';
// import './componentStyles.css'
import { useSelector, useDispatch } from "react-redux";
import CityJamsPreview from './CityJamsGrid';
import { setCurrentCity, getCities } from '../store/jams'
import CityJamsGrid from './CityJamsGrid'
import CitiesGrid from './CitiesGrid'
import { Redirect, Route, useParams } from 'react-router-dom'
import Navbar from './NavBar'
import { imageUrl } from '../config'
import JamCard from './JamCard';

import 'fontsource-roboto';




const JamsBrowser = () => {
  const cities = useSelector((state) => state.jams.cities);
  const token =  window.localStorage.getItem('TOKEN_KEY');
  const current = useSelector((state) => state.jams.current)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  if (!cities) {
    return null;
  }
  if (!token) {
    <Redirect to='login'></Redirect>
  }



  return (
    <div>
      <Navbar></Navbar>
      <div id="browser-banner" width='50%' style={{ backgroundImage: `url(${imageUrl}/browser.jpeg`, height: '35vh' }}>
      <h1 className="browser-banner-h1">Jamming with strangers is weird...</h1>
      <h2 className="browser-banner-h2">(that's what boring people say)</h2>
      </div>
      <div className='choose-a-city-text' style={{ height: "30px" }}><p >choose a city (don't be shy!)</p></div>
      <Route path='/jamsBrowser/user/:id/city/:cityId/jamId/:jamId' component={JamCard}/>
      <Route path={`/jamsBrowser/user/:id`} component={CitiesGrid} />
      <div className='choose-a-city-text' style={{ height: "30px" }}><p >check out these jams:</p></div>
      <Route path='/jamsBrowser/user/:id/city/:cityId' component={CityJamsGrid} />
      {/* </Route> */}
      {/* <CityJamsGrid /> */}
      <div style={{ height: "150px" }} />
      <div id="overlay"></div>
    </div>
  )
}

export default JamsBrowser
