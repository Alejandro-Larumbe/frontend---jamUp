import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
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
import USER_ID_KEY from '../store/authentication'

import '../index.css'
import { going, notGoing } from '../store/jams'
// import reducer from '../store/jams';

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
}));


// function formatTime(date) {
//   let hours = date.slice(0, 2);
//   let minutes = date.slice(-5, -3);
//   let ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   // minutes = minutes < 10 ? '0'+minutes : minutes;
//   let strTime = hours + ':' + minutes + ' ' + ampm;
//   return strTime;
// }


export default function JamCard(props) {
  const classes = useStyles();
  const { id, cityId, jamId } = props.match.params
  const jams = useSelector(state => state.jams.jams)
  const userId = useSelector(state => state.authentication.id)
  const dispatch = useDispatch()
  const history = useHistory()

  console.log(jams)
  console.log('userId', userId)
  if (!jams) return null

  let jam = {}
  jams.forEach((cur) => {
    console.log(cur.id, jamId)
    console.log(cur.id === parseInt(jamId))
    if (cur.id === parseInt(jamId)) {
      jam = cur
    }
  })
  if (!jam) return null

  let someoneIsAttending = !!jam.attending.length
  let userIsAttending = false

  userIsAttending = jam.attending.forEach(cur => {
    if (cur.id === parseInt(userId)) return true
  })

  if (someoneIsAttending) {
    jam.attending.forEach(curr => {
      if (parseInt(curr.id) === parseInt(userId))
      userIsAttending = true
    })
  }

  console.log('someoneis', someoneIsAttending)
  console.log('userisatt', userIsAttending)

  // console.log(id)
  console.log('attending', jam.attending)

  let closeHandler = () => {
    console.log('hello')
    history.push(`/jamsBrowser/user/${userId}/city/${cityId}`)
  }
  let goingHandler = e => {
    dispatch(going(userId, jam.id))
  }

  let notGoingHandler = e => {
    dispatch(notGoing(userId, jam.id))

  }



  // if (!jam) return null;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root, 'modal'}>
        <CardHeader classname={'card-header'}
          avatar={
            <Avatar aria-label="recipe" src={jam.host.photoUrl} className={classes.avatar} />
          }
          title={
            <>
              <Typography variant="h6" component="h4">
                Jam with with {jam.host.firstName}
              </Typography>
              <Typography variant="h7" component="h4">
                {jam.host.username}
              </Typography>
              <Typography variant="h7" component="h4">
                {jam.host.instrument}
              </Typography>
            </>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {jam.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {formatTime(jam.time)}
          </Typography>
          <div style={{ height: "30px" }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {jam.description}
          </Typography>
          <div style={{ height: "15px" }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {'address:'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jam.address}
          </Typography>
          <div style={{ height: "15px" }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {'attending:'}
          </Typography>
          <List className={classes.root}>
            {!someoneIsAttending?
              <Typography h4>be the first one to attend!</Typography>
              : jam.attending.map(cur => {
                return (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={cur.photoUrl} />
                      </ListItemAvatar>
                      <ListItemText primary={`${cur.firstName} ${cur.lastName}`} secondary={cur.instrument} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                )
              })}
          </List>
        </CardContent>
        <CardActions>
          {userIsAttending?<Button onClick={notGoingHandler} size="small">Can't go anymore</Button>
          :<Button onClick={goingHandler} size="small">Im going!</Button>
        }
        <Button onClick={closeHandler} size="small">Close!</Button>
        </CardActions>
      </Card>
    </>
  );
}
