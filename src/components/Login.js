import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authentication';
import { Redirect, useHistory } from 'react-router-dom';
import { USER_ID_KEY } from '../store/authentication'


const Login = props => {
  const { token } = useSelector(state => state.authentication);
  const [email, setEmail] = useState('Demond.Auer@hotmail.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    // setTimeout(() => console.log('waited'), 1000 )
    // const id = window.localStorage.getItem(USER_ID_KEY)

    // console.log('id', id)
    // console.log(id)
    history.push(`/jamsBrowser/user/:id`);
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
