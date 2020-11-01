import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import USER_ID_KEY from '../store/authentication'

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


export default function CreateJam() {
  const classes = useStyles();
  const hostId = useSelector(state => state.authentication.id)
  const [time, setTime ] = useState('')
  const [ date, setDate ] = useState('')
  const [ cityId, setCityId ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ description, setDescription ] = useState('')
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      hostId,
      selectedDate,
      cityId,
      address,
      description
    }
    console.log(payload)
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
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        value={time}
          onChange={handleTimeChange}
      />
      <InputLabel id="city">City</InputLabel>
      <Select
        labelId="city"
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
      </Grid>
    </MuiPickersUtilsProvider>


      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Create Jam
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
