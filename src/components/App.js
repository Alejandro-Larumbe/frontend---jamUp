import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


import Login from './Login';
import JamsBrowser from './JamsBrowser';
import SignUp from './SignUp';
import { loadToken } from '../store/authentication';



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

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
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute
          path='/jamsBrowser'
          exact={true}
          needLogin={needLogin}
          component={JamsBrowser}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
