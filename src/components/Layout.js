import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';

// const isNotMediaQuery = name => !name.startsWith('@media');
// const isMediaQuery = name => name.startsWith('@media');

const layoutStyles = theme => {
    // const mobileFirst = Object.keys(theme.mixins.toolbar).filter(isNotMediaQuery);
    // const media = Object.keys(theme.mixins.toolbar).filter(isNotMediaQuery);
    return {
        // covered by header
        top: {
            height: 64,//mobileFirst.minHeight,
            width: '100%',
            // ...(media.reduce((accum, key) => {
            //     accum[key] = {
            //         height: theme.mixins.toolbar[key].minHeight
            //     }
            //     return accum;
            // }, {})),
        },
        root: {
            margin: '0',
            height: `calc(100% - ${64/*mobileFirst.minHeight*/}px)`,
            // ...(media.reduce((accum, key) => {
            //     accum[key] = {
            //         height: `calc(100% - ${theme.mixins.toolbar[key].minHeight}px)`,
            //     }
            //     return accum;
            // }, {})),
        },
        container: {
            height: '100%',
            'background-color': 'red',
        }
    };
};

const Layout = withStyles(layoutStyles)(({classes, children}) => {
  return (
<Fragment>
    <CssBaseline />
    <Header />
    <div className={classes.container}>
        <div className={classes.top} >top - covered by header </div>
        <main className={classes.root}>
            {children}
        </main>
    </div>
</Fragment>
  )
})

export default Layout;
