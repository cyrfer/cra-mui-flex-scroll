import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: 80
    },
    // menuButton: {
    //   // marginRight: theme.spacing(1)
    // },
    title: {
      flexGrow: 1,
      color: 'white',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    titleSM: {
      color: 'white',
      minWidth: 55,
      display: 'inline',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
}));


const Header = ({user}) => {
    // const dispatch = useDispatch();
    // const useForceUpdate = () => {
    //   const update = () => {
    //     dispatch(searchRequest(''));
    //   };
    //   return update;
    // };
  
    // const resetSearchField = useForceUpdate();
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <Button
                to="/"
                variant="text"
                className={classes.title}
                component={RouterLink}
                // onClick={resetSearchField}
              >
                Crowdsource
              </Button>
            </Typography>
  
            <Button
              to="/"
              variant="text"
              className={classes.titleSM}
              component={RouterLink}
            //   onClick={resetSearchField}
            >
              CS
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header;
