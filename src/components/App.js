import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { loadToken } from '../store/authentication';

import Login from './Login';
import JamsBrowser from './JamsBrowser';
import SignUp from './SignUp';
import Landing from './Landing';
import SigninSide from './SigninSide'
import NavBar from './NavBar'
import Dashboard from './Dashboard'




function App() {
  const token = useSelector(state => state.token);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const needLogin = !token;

  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
  }, []);

  if (!loaded) {
    return null
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/user/:id/dashboard' component={Dashboard} />
        <Route path='/signin' component={SigninSide} />
        <Route path='/login' component={Login} />
        <Route path='/jamsBrowser'component={JamsBrowser} />
        <Route path='/' component={Landing} />
      </Switch>
        {/* <Route path='/' component={NavBar} /> */}
    </BrowserRouter>
  );
}

export default App;
