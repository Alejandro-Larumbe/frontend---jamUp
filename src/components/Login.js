import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authentication';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const token = useSelector(state => state.authentication.token);
  const [email, setEmail] = useState('demo@userEvent.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hello')
    console.log(email, password)
    dispatch(login(email, password));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  if (token) {
    return <Redirect to="/" />
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>email address</label> */}
      <input
        type='text'
        placeholder='first name'
        value={email}
        onChange={updateEmail}
      />
      {/* <label>password</label> */}
      <input
        type='text'
        placeholder='email address'
        value={password}
        onChange={updatePassword}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
