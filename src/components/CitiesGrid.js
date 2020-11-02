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
import { imageUrl } from '../config'

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
    width: 1000,
    height: '100%',
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
export default function CitiesGrid(props) {
  const classes = useStyles();
  const id = useSelector(state => state.authentication.id)
  // const cities = useSelector((state) => state.jams.cities);
  const cities = useSelector((state) => state.jams.cities);
  const dispatch = useDispatch();

  // const id = props.match.params.id

  if (!cities) return null;

  const handleClick = e => {
    console.log(e.target.id)
    dispatch(setCurrentCity(e.target.id))

  }

  return (
    <div className={classes.root}>
      <GridList cols={3} cellHeight={180} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Cities</ListSubheader>
        </GridListTile> */}
        {cities.map((city, i) => (
          <GridListTile imgFullHeight key={city.id}>
            <NavLink key={city.id} to={`/jamsBrowser/user/${id}/city/${city.id}`}>
              <img width="100%" src={`${imageUrl}/${i}.jpeg`} alt={city.name} id={city.id} onClick={handleClick} />
              <GridListTileBar
                title={city.name}
              />
            </NavLink>
          </GridListTile>
        ))}
      </GridList>
    </div>

  );
}
