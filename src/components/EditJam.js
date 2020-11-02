import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserJam } from '../store/jams'


function EditJam(){

  const hostId = useSelector(state => state.authentication.id) || window.localStorage.getItem('USER_ID_KEY');
  const jamId = 16;

  const jamInfo = (state => state.jams.userJam.jam)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserJam(jamId))
  })

  if (!jamInfo) return null

  return <p>jam will go here</p>



}

export default EditJam
