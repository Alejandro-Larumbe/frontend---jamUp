import React from 'react';

const JamPreview = (props) => {
  const { time, date, address } = props.Jam
  return (
    <ul>
      <li>{time}</li>
      <li>{date}</li>
      <li>{address}</li>
    </ul>
  )
}

export default JamPreview;
