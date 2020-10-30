import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function formatTime(date) {

  let hours = date.slice(0, 2);
  let minutes = date.slice(-5, -3);
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  // minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


export default function CityJamsCard(jam) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { firstName } = jam.host
  let { time, date, description } = jam
  time = formatTime(time)

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h3">
          Jam with {firstName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {date} {bull} {time}
        </Typography>
        <Typography variant="body2" component="p">
        {description}
          {/* <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
