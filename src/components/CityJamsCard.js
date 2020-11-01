import React from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { setJam } from '../store/jams'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { formatTime } from './utils';



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


export default function CityJamsCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()
  // const location = userLocation();
  const userId = props.match.params.id


  const bull = <span className={classes.bullet}>•</span>;
  const { firstName, photoUrl } = props.jam.host
  let { time, date, description, id, cityId, attending } = props.jam
  time = formatTime(time)



  const clickHandler = (e) => {
    history.push(`/jamsBrowser/user/${userId}/city/${cityId}/jamId/${id}`)
    // dispatch(setJam(id))
  }

  return (
    <Card onClick={clickHandler} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={photoUrl} className={classes.avatar}>
            R
          </Avatar>
        }

        title={`Jam with ${firstName}`}
        subheader={`${date} | ${time}`}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
