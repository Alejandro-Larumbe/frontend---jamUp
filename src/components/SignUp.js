import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authentication';
import { Redirect } from 'react-router-dom';

const SignUp = props => {
  // const [ username, setUsername ] = useState('');
  // const [ firstName, setFirstName  ] = useState('');
  // const [ lastName, setLastName ] = useState('');
  // const [ cityId, setCityId ] = useState('');
  // const [ instrument, setInstrument ] = useState('');
  // const [ email, setEmail ] = useState('');
  // const [ password, setPassword ] = useState('');
  // const dispatch = useDispatch();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  // }

  // const updateProperty = (callback) = (e) => {
  //   callback(e.target.value)
  // }

  // return (
  //   <form>
  //     <input
  //       type='text'
  //       placeholder='first name'
  //       value={email}
  //       onChange={updateProperty(email)}
  //     />
  //     <input
  //       type='text'
  //       placeholder='last name'
  //       value={password}
  //       onChange={updateProperty(password)}
  //     />
  //     <input
  //       type='text'
  //       placeholder='username'
  //       value={username}
  //       onChange={updateProperty(username)}
  //     />
  //     <input
  //       type='text'
  //       placeholder='instrument'
  //       value={instrument}
  //       onChange={updateProperty(instrument)}
  //     />
  //     <input
  //       type='text'
  //       placeholder='city'
  //       value={cityId}
  //       onChange={updateProperty(cityId)}
  //     />
  //     <input
  //       type='text'
  //       placeholder='password'
  //       value={password}
  //       onChange={updateProperty(password)}
  //     />
  //     {/* <input
  //       type='text'
  //       placeholder='confirm password'
  //       value={}
  //       onChange={}
  //     /> */}
  //     <button type='submit'>Let's Jam</button>
  //   </form>
  // )
}
export default SignUp;
