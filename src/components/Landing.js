import React from 'react';
 import { imageUrl } from '../config'
 import Navbar from './NavBar'
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
    <div style = {{ backgroundImage: `url(${imageUrl}/home.jpeg`}}>
    </div>
    </>
  )
}


export default Landing;
