import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom';
import { USER_ID_KEY } from '../store/authentication'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { logout } from '../store/authentication'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { token, id } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  let history = useHistory();

  const logOutHandler = (e) => {
    history.push('/');
    dispatch(logout());
  }

  const jamsHandler = (e) => {
    console.log('id', id)
    if (!id) {
      history.push('/signin')
    } else {
      history.push(`/jamsBrowser/user/${id}`)
    }
  }

  const dashboardHandler = () => {
    if (!id) {
      history.push('/signin')
    } else {
      history.push(`/user/${id}/dashboard`)
    }
  }
  const jamUpHandler = () => {
    history.push('/')
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            {/* <Link to='/'>
              JamUp

            </Link> */}
            <Button color="inherit" onClick={jamUpHandler}>JamUp!</Button>
          </Typography>
          <Button color="inherit" onClick={jamsHandler}>Jams</Button>
          <Button color="inherit" onClick={dashboardHandler}>Dashboard</Button>
          {token ?
            <Button color="inherit" onClick={logOutHandler}>Logout</Button>
            : <Link to='/signin'><Button color="inherit">Login</Button></Link>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
