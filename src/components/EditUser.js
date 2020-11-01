import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { USER_ID_KEY, getUser, updateUserInfo } from '../store/authentication'

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
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));



export default function EditUser(user) {

  const classes = useStyles();
  const userFields = user.user.user
  const {
    username:previousUsername,
    firstName:previousFirstName,
    lastName:previousLastName,
    cityId:previousCityId,
    instrument:previousInstrument,
    email:previousEmail,
  } = userFields
  console.log('userFields', userFields)
  const id = useSelector(state => state.authentication.id)
  const [username, updateUsername] = useState(previousUsername);
  const [firstName, updateFirstName] = useState(previousFirstName);
  const [lastName, updateLastName] = useState(previousLastName);
  const [cityId, updateCityId] = useState(previousCityId);
  const [instrument, updateInstrument] = useState(previousInstrument);
  const [email, updateEmail] = useState(previousEmail);
  // const [updatePassword, setUpdatePassword] = useState('');
  // const [updateConfirmPassword, setUpdateConfirmPassword] = useState('');
  const dispatch = useDispatch();




  // console.log('username', username)
  // console.log('user', user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      firstName,
      lastName,
      cityId,
      instrument,
      email,
    }
    console.log(payload)
    dispatch(updateUserInfo(payload, parseInt(id)))
  }

  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }


  return (
    <>
      <p>Edit USer</p>
      <Card className={classes.root, 'modal'}>
        <CardHeader classname={'card-header'} />

        <form className={classes.form} noValidate
          onSubmit={handleSubmit}
        >
          <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="username"
              label="username"
              name="username"
              // autoComplete={username}
              autoFocus
              // defaultValue={username}
              value={username}
              onChange={updateProperty(updateUsername)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first"
              label="First Name"
              name="firstName"
              autoComplete="first name"
              autoFocus
              value={firstName}
              onChange={updateProperty(updateFirstName)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              value={lastName}
              onChange={updateProperty(updateLastName)}
            />
            <InputLabel id="city">City</InputLabel>
            <Select
              labelId="city"
              fullWidth
              value={cityId}
              onChange={updateProperty(updateCityId)}
            >
              <MenuItem value={1}>Mexico City</MenuItem>
              <MenuItem value={2}>Auckland</MenuItem>
              <MenuItem value={3}>Kyoto</MenuItem>
              <MenuItem value={4}>Miami</MenuItem>
              <MenuItem value={5}>New Orleans</MenuItem>
              <MenuItem value={6}>Siena</MenuItem>
            </Select>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="instrument"
              label="instrument"
              name="instrument"
              autoComplete="instrument"
              autoFocus
              value={instrument}
              onChange={updateProperty(updateInstrument)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={updateProperty(updateEmail)}
            />
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={updateProperty(setUpdatePassword)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="ocnfirmPassword"
              label="confirmPassword"
              type="password"
              id="confirmPassword"
              autoComplete="current-confirmPassword"
              value={confirmPassword}
              onChange={updateProperty(setUpdateConfirmPassword)}
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update Information
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
    </>
  )
}
