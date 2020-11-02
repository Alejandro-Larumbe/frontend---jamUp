import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import EditJam from './EditJam'

import NavBar from './NavBar'
import EditUser from './EditUser'

import { getUserJammer, getUserJams } from '../store/jams'
import {  getUser } from '../store/authentication'
import { USER_ID_KEY } from '../store/authentication'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { yellow } from '@material-ui/core/colors';

import CreateJam from './CreateJam';
import { EditAttributesRounded } from '@material-ui/icons';

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

  const userJams = useSelector((state) => state.jams.userJams);
  const userJammer = useSelector((state) => state.jams.userJammer);
  const { token } = useSelector((state) => state.authentication);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const id = parseInt(props.match.params.id) || window.localStorage.getItem(USER_ID_KEY)


  useEffect(() => {
    console.log("id from dispatch", id)
    dispatch(getUserJammer(id))
    dispatch(getUserJams(id))
    dispatch(getUser(parseInt(id)));

  }, []);

  if (!user) {
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
      {/* <CreateJam /> */}
      {/* <EditJam /> */}
      <EditUser user={user} />
    </>
  )
}

export default Dashboard;
