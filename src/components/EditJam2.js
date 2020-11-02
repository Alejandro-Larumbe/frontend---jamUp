import React, { useState, useEffect, useSelector} from 'react';
import {  useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import USER_ID_KEY from '../store/authentication'
import { createJam } from '../store/jams'
import { getUserJam, editJam } from '../store/jams'


import { timeParser, dateParser } from './utils'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CancelIcon from '@material-ui/icons/Cancel';
import { formatTime } from './utils'


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));


export default function EditJam() {

  const classes = useStyles();
  const hostId = useSelector(state => state.authentication.id) ||
  window.localStorage.getItem('USER_ID_KEY')
  // console.log('jaminfo', jamInfo)
  const jamId = 16

  const jamInfo = useSelector(state => state.jams.userJam.jam)
  const [cityId, setCityId] = useState(jamInfo.cityId)
  const [address, setAddress] = useState(jamInfo.address)
  const [description, setDescription] = useState(jamInfo.description)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserJam(jamId))
  }, [])

  if (!jamInfo) return null;

  // console.log('jaminfo', jamInfo)


  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      selectedDate,
      hostId,
      cityId,
      address,
      description
    }
    dispatch(editJam(jamId, payload))
  }



  return (

    <Card className={classes.root, 'modal'}>
      {/* <CardHeader classname={'card-header'} /> */}

      <form className={classes.form} noValidate
        onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="address"
          autoComplete="address"
          autoFocus
          value={address}
          onChange={updateProperty(setAddress)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
          autoFocusdescription
          value={description}
          onChange={updateProperty(setDescription)}
        />
        <InputLabel id="city">City</InputLabel>
        <Select
          labelId="city"
          fullWidth
          value={cityId}
          onChange={updateProperty(setCityId)}
        >
          <MenuItem value={1}>Mexico City</MenuItem>
          <MenuItem value={2}>Auckland</MenuItem>
          <MenuItem value={3}>Kyoto</MenuItem>
          <MenuItem value={4}>Miami</MenuItem>
          <MenuItem value={5}>New Orleans</MenuItem>
          <MenuItem value={6}>Siena</MenuItem>
        </Select>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              margin="normal"
              id="date-picker"
              label="Date picker"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time Picker"
              // type="time"
              // defaultValue="07:30"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              // inputProps={{
              //   step: 300, // 5 min
              // }}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Edit Jam
            </Button>
        <Grid container>
          {/* <Grid item>
          <Link href="/signin" variant="body2">
            {"Already have an account? Log In"}
          </Link>
        </Grid> */}
        </Grid>
      </form>
    </Card>
  )
}
