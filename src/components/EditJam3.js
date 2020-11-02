import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserJam } from '../store/jams'

const jamId = 16;

function EditJam(jam){

  // const hostId = useSelector(state => state.authentication.id) || window.localStorage.getItem('USER_ID_KEY');
  const jamInfo = useSelector(state => state.jams.userJam.jam) || undefined


  // const [cityId, setCityId] = useState(jamInfo.cityId)
  // const [address, setAddress] = useState(jamInfo.address)
  // const [description, setDescription] = useState(jamInfo.description)
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserJam(jamId))
  }, [])

  if (!jamInfo) return null
  console.log(jamInfo)

  return <p>jam will go here</p>



}

export default EditJam
