import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../store/authentication'

const SignUp = props => {
  const token = useSelector(state => state.authentication.token);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cityId, setCityId] = useState('');
  const [instrument, setInstrument] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      firstName,
      lastName,
      cityId,
      instrument,
      email,
      password,
      confirmPassword
    }
    console.log(payload)
    dispatch(signup(payload));
  }

  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }

  if (token) {
    return <Redirect to='/' />
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={updateProperty(setUsername)}
      />
      <input
        type='text'
        placeholder='first name'
        value={firstName}
        onChange={updateProperty(setFirstName)}
      />
      <input
        type='text'
        placeholder='last name'
        value={lastName}
        onChange={updateProperty(setLastName)}
      />
      <input
        type='text'
        placeholder='city'
        value={cityId}
        onChange={updateProperty(setCityId)}
      />
      <input
        type='text'
        placeholder='instrument'
        value={instrument}
        onChange={updateProperty(setInstrument)}
      />
      <input
        type='email'
        placeholder='email'
        value={email}
        onChange={updateProperty(setEmail)}
      />
      <input
        type='text'
        placeholder='password'
        value={password}
        onChange={updateProperty(setPassword)}
      />
      <input
        type='text'
        placeholder='confirm password'
        value={confirmPassword}
        onChange={updateProperty(setConfirmPassword)}
      />
      <button type='submit'>Let's Jam</button>
    </form>
  )
}
export default SignUp;
