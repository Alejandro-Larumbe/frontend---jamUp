import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import NavBar from './NavBar'

import { getUserJammer } from '../store/jams'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { yellow } from '@material-ui/core/colors';


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

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Button color="inherit">Quick Look</Button>
          <Button color="inherit">History</Button>
          <Button color="inherit">Account</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


const Dashboard = (props) => {

  const jams = useSelector((state) => state.jams.userJammer);
  const { token } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const id = parseInt(props.match.params.id)
  console.log(id)


  useEffect(() => {
    dispatch(getUserJammer(id))
  }, []);

  if (!jams) {
    return null;
  }
  // if (!token) {
  //   return <Redirect to="/login" />
  // }

  return (
    <>
      <NavBar></NavBar>
      <ButtonAppBar />
      <p>Coming soon</p>
    </>
  )
}

export default Dashboard;
