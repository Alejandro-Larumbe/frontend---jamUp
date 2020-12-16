import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { signup } from '../store/authentication'
import { imageUrl } from '../config'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const image = `url(${imageUrl}/signup.jpeg)`


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: image,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


// const token = useSelector(state => state.authentication.token);
// const [email, setEmail] = useState('larus@larus.com');
// const [password, setPassword] = useState('something');
// const dispatch = useDispatch();

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   dispatch(login(email, password));
// }

// const updateEmail = (e) => {
//   setEmail(e.target.value);
// }

// const updatePassword = (e) => {
//   setPassword(e.target.value);
// }

// if (token) {
//   return <Redirect to="/" />


function SignUp() {
  const classes = useStyles();

  const token = useSelector(state => state.authentication.token);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cityId, setCityId] = useState('');
  const [instrument, setInstrument] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      firstName,
      lastName,
      cityId,
      instrument,
      email,
      password,
      confirmPassword
    }
    dispatch(signup(payload));
    history.push(`/jamsBrowser/user/:id`);
  }

  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }

  if (token) {
    return <Redirect to='/' />
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={updateProperty(setUsername)}
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
              onChange={updateProperty(setFirstName)}
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
              onChange={updateProperty(setLastName)}
            />

            <InputLabel id="city">City</InputLabel>
            <Select
              labelId="city"
              value={cityId}
              fullWidth
              onChange={updateProperty(setCityId)}
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
              onChange={updateProperty(setInstrument)}
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
              onChange={updateProperty(setEmail)}
            />
            <TextField
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
              onChange={updateProperty(setPassword)}
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
              onChange={updateProperty(setConfirmPassword)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Let's Jam
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}



// const sign = props => {
//   const token = useSelector(state => state.authentication.token);
//   const [username, setUsername] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [cityId, setCityId] = useState('');
//   const [instrument, setInstrument] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       username,
//       firstName,
//       lastName,
//       cityId,
//       instrument,
//       email,
//       password,
//       confirmPassword
//     }
//     dispatch(signup(payload));
//   }

//   const updateProperty = (callback) => (e) => {
//     callback(e.target.value)
//   }

//   if (token) {
//     return <Redirect to='/' />
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type='text'
//         placeholder='username'
//         value={username}
//         onChange={updateProperty(setUsername)}
//       />
//       <input
//         type='text'
//         placeholder='first name'
//         value={firstName}
//         onChange={updateProperty(setFirstName)}
//       />
//       <input
//         type='text'
//         placeholder='last name'
//         value={lastName}
//         onChange={updateProperty(setLastName)}
//       />
//       <input
//         type='text'
//         placeholder='city'
//         value={cityId}
//         onChange={updateProperty(setCityId)}
//       />
//       <input
//         type='text'
//         placeholder='instrument'
//         value={instrument}
//         onChange={updateProperty(setInstrument)}
//       />
//       <input
//         type='email'
//         placeholder='email'
//         value={email}
//         onChange={updateProperty(setEmail)}
//       />
//       <input
//         type='text'
//         placeholder='password'
//         value={password}
//         onChange={updateProperty(setPassword)}
//       />
//       <input
//         type='text'
//         placeholder='confirm password'
//         value={confirmPassword}
//         onChange={updateProperty(setConfirmPassword)}
//       />
//       <button type='submit'>Let's Jam</button>
//     </form>
//   )
// }
export default SignUp;
