import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import NavBar from './NavBar'
import EditUser from './EditUser'

import { getUserJammer, getUserJams } from '../store/jams'
import { getUser } from '../store/authentication'
import { USER_ID_KEY } from '../store/authentication'
import ButtonAppBar from './ButtonAppBar'
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



const Dashboard = (props) => {

  const userJams = useSelector((state) => state.jams.userJams);
  const userJammer = useSelector((state) => state.jams.userJammer);
  const { token } = useSelector((state) => state.authentication);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const id = window.localStorage.getItem(USER_ID_KEY)
  const jamId = 16
  const history = useHistory()

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
      <ButtonAppBar />
      <div className='dashboard-container'>
        <div className='left-container'>
          <div className='left-div-container'>
            <div className='user-name-div'>
              <h1>Welcome</h1>
              <h1>{user.user.firstName}</h1>
            </div>
            <div className='profile-pic-div'>
            <img className='profile-pic' src={user.user.photoUrl}></img>
            </div>
          </div>
        </div>
        <div className='right-div-container'>


        </div>
      </div>

    </>



    //         {/* <p>Welcome</p>
    //       </>
    //       <>
    //         <p>{user.user.firstName}</p>
    //       </>
    //     </div>
    //     {/* <div className='profile-pic-container'> */}
    //     <div className='profile-pic' backgroundimage={user.user.photoUrl} >
    //       {/* <img className='profile-pic' src={user.user.photoUrl}></img> */}
    //     </div>
    //   </div>
    //   {/* </div> */}
    //   <div className='jams-container'></div>
    // </div> */}

    // {/* <p>Coming soon</p> */}
    // {/* <CreateJam /> */}
    // {/* <EditJam /> */}
    // {/* <EditUser user={user} /> */}
  )
}

export default Dashboard;
