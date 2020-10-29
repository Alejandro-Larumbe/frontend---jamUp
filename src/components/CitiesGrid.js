import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { setCurrentCity } from '../store/jams'
import { NavLink } from 'react-router-dom'

import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 750,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function CitiesGrid() {
  const cities = useSelector((state) => state.jams.cities);
  const dispatch = useDispatch();


  const handleClick = e => {
    console.log(e.target.id)
    dispatch(setCurrentCity(e.target.id))
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Cities</ListSubheader>
        </GridListTile>
        {cities.map((city, i) => (
          <GridListTile key={city.id}>
            <NavLink key={city.id} to={`/jamsBrowser/${city.id}`}>
              <img src={city.photoUrl} alt={city.name} id={i} onClick={handleClick} />
              <GridListTileBar
                title={city.name}
              // subtitle={<span>by: {tile.author}</span>}
              // actionIcon={
              //   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
              //     <InfoIcon />
              //   </IconButton>
              // }
              />
            </NavLink>
          </GridListTile>
        ))}
      </GridList>
    </div>

  );
}
