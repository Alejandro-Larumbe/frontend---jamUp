import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import City from './City';
import Jams from './Jams';
import JamPreview from './JamPreview';
import { setCurrentCity , getCities} from '../store/jams'


const JamsBrowser = () => {
  const cities = useSelector((state) => state.jams.cities);
  console.log(cities)
  const token = useSelector((state) => state.authentication.token);
  const current = useSelector((state) => state.jams.current)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  },[current]);


  const handleClick = e => {
    console.log(e.target.id)
    dispatch(setCurrentCity(e.target.id))
  }

  if (!cities) {
    return null;
  }
  return (
    <>
    {cities.map(city => {
      console.log(city.name)
      return  (
        <button id={city.id} key={city.name} onClick={handleClick} backgroundimage={city.photuUrl}>
          <City name={city.name}></City >
        </button>
      )
    })}
    {/* {cities["id"][current].map(jam => {
      return <JamPreview time={jam.time} date={jam.date} address={jam.address}/>
    })} */}
    </>
  )
}

export default JamsBrowser
