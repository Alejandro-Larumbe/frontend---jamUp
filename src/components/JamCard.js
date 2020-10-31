import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

import '../index.css'

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


export default function JamCard(props) {
  const classes = useStyles();
  const id = props.match.params.id
  const jams = useSelector( state => state.jams.jams)
  // const
  if (!id) return null

  // for (let i = 0; i < jams.length; )

  // console.log(id)
  // console.log(jams)


  // if (!jam) return null;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root, 'modal'}>
        <CardHeader classname={'card-header'}
          // avatar={
          //   <Avatar aria-label="recipe" src={jam.host.photoId} className={classes.avatar}>
          //     R
          // </Avatar>
          // }

          title={
            <>
              <Typography variant="h6" component="h4">
                {/* Jam with with {jam.host.firstName} */}
              </Typography>
              <Typography variant="h7" component="h4">
                {/* {jam.host.username} */}
              </Typography>
              <Typography variant="h7" component="h4">
                {/* {jam.host.instrument} */}
              </Typography>
            </>
          }
        // subheader={
        // <>
        //   <CancelIcon className='closeImg'/>
        // </>
        // }
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {'September 13 1999'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {'3:30pm'}
          </Typography>
          <div style={{ height: "30px" }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {'come jam with a bunch of cool cats. we will get tequila'}
          </Typography>
          <div style={{ height: "15px" }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {'address:'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {'2907 Roundtre blvd, apt E2, Ann Arbor, Mi, USA'}
          </Typography>
          <div style={{ height: "15px" }} />
          <Typography variant="body2" color="textSecondary" component="p">
            {'attending:'}
          </Typography>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </CardContent>
        <CardActions>
          <Button size="small">Attend</Button>
          <Button size="small">Close</Button>
        </CardActions>
      </Card>
    </>
  );
}
