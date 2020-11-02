import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

import NavBar from './NavBar'
import EditUser from './EditUser2'

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

import { getUserJam } from '../store/jams'

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

export default ButtonAppBar
