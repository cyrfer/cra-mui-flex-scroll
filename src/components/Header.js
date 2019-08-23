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
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      color: 'white',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
}));


const Header = ({user}) => {
    const classes = useStyles();
  
    return (
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
              >
                Nested Flex box containers with overflow scroll in grow items.
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default Header;
