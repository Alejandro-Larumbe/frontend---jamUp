import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { removeToken } from '../store/authentication'

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
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(removeToken(token))
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            JamUp
          </Typography>
          <Link to='/JamsBrowser'>
          <Button color="inherit">Jams</Button>
          </Link>
          <Button color="inherit">Dashboard</Button>
          {token?
          <Button color="inherit" onClick={clickHandler}>Logout</Button>
          :<Link to='/login'><Button color="inherit">Login</Button></Link>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
