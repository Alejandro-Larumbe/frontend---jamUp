import React from 'react';
import { imageUrl } from '../config'
import Navbar from './NavBar'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../index.css'
// const styles = (theme) => ({
//   background: {
//     backgroundimage: `url(${backgroundImage})`,
//     backgroundColor: '#7fc7d9', // Average color of the background image.
//     backgroundPosition: 'center',
//   }
// })
// background size thing, fill

const Landing = () => {
  return (
    <>
      <Navbar></Navbar>
      <div id="landing-image" width='100%' style={{ backgroundImage: `url(${imageUrl}/home.jpeg`, height: '60vh' }} />
    </>
  )
}


export default Landing;
