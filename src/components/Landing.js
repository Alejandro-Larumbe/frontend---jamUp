import React from 'react';
 import { imageUrl } from '../config'
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
    // <div style = {{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/home.jpeg'})`,
    <div style = {{ backgroundImage: `url(${imageUrl}/home.jpeg`,

    }

    }>Landing
    </div>
  )
}


export default Landing;
