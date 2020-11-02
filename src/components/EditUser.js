import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { imageUrl } from '../config'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import EditUser2 from './EditUser2'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DashBoardJamCard from './DashBoardJamCard'

import NavBar from './NavBar'
import EditUser2 from './EditUser2'

import { getUserJammer, getUserJams } from '../store/jams'
import { getUser } from '../store/authentication'
import { USER_ID_KEY } from '../store/authentication'
import ButtonAppBar from './ButtonAppBar'
import AppBar from '@material-ui/core/AppBar';


import CreateJam from './CreateJam';
import { EditAttributesRounded } from '@material-ui/icons';

import { getUserJam } from '../store/jams'

import EditJam from './EditJam'
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 2000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */






const EditUser = (props) => {

  const userJams = useSelector((state) => state.jams.userJams);
  const userJammer = useSelector((state) => state.jams.userJammer);
  const { token } = useSelector((state) => state.authentication);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const id = window.localStorage.getItem(USER_ID_KEY)
  // const jamId = 16
  // const history = useHistory()
  const classes = useStyles();


  useEffect(() => {
    console.log("id from dispatch", id)
    dispatch(getUserJammer(id))
    dispatch(getUserJams(id))
    dispatch(getUser(parseInt(id)));

  }, []);

  if (!user) {
    return null;
  }

  let display = 'jams'

  // const editJamSelector = async(e) => {
  //   e.preventDefault(e);
  //   dispatch(getUserJam(jamId))
  //   history.push(`dashboard/editJam`)

  // }

  // if (!token) {
  //   return <Redirect to="/login" />
  // }

  return (
    <>
      <NavBar></NavBar>
      <div id="browser-banner" width='50%'  style={{ backgroundImage: `url(${imageUrl}/browser.jpeg`, height: '18vh' }}>
        <h1 className="browser-banner-h1">Edit User</h1>
      </div>
      {/* <EditUser user={user}></EditUser> */}
      {/* <CreateJam></CreateJam> */}
      <EditUser2 user={user}></EditUser2>


    </>
  )
}


export default EditUser
