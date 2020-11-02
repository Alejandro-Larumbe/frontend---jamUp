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
import CreateJam from './CreateJam'
import EditUser from './EditUser'




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
        <Route exact path='/user/editUser' component={EditUser} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/signin' component={SigninSide} />
        <Route path='/login' component={Login} />
        <Route path='/jamsBrowser'component={JamsBrowser} />
        <Route exact path='/createJam' component={CreateJam} />
        <Route exact path='/' component={Landing} />
      </Switch>
        {/* <Route path='/' component={NavBar} /> */}
    </BrowserRouter>
  );
}

export default App;
