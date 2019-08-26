import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import LoremIpsum from './LoremIpsum';

const containerRow = {
    'min-height': 0,
}
  
const containerCol = {
    'min-width': 0,
}

const item = {
    'background-color': 'lightblue',
    'border': '1px dashed darkblue',
}

const overflow = {
    overflow: 'auto',
    'background-color': 'white',
}

const grow = {
    flex: 1,
    'background-color': 'green',
}

const demoStyles = {
    fullHeight: {
      height: '100%',
      'flex-wrap': 'nowrap',
      ...containerCol,
    },
    pageHeader: {
      'flex-basis': 100,
      'text-align': 'center',
      ...item,
    },
    middle: {
        ...grow,
        'flex-wrap': 'nowrap',
        ...containerRow,
    },
    right: {
        ...item,
        ...grow,
    },
    left: {
        'flex-wrap': 'nowrap',
        ...containerCol,
        ...grow,
    },
    leftTop: {
      'flex-basis': 100,
      ...item,
    },
    leftBottom: {
      'flex-wrap': 'nowrap',
      ...grow,
      ...overflow,
      ...containerCol,
    },
    nestedHeader: {
      padding: 8,
    },
    footer: {
      'flex-basis': 100,
      'background-color': 'grey',
    }
}
  
  const Demo = withStyles(demoStyles)(({classes}) => {
    return (
  <Grid container direction="column" className={classes.fullHeight}>
    <Grid item className={classes.pageHeader}> top - not covered by Header </Grid>
  
    <Grid container direction="row" className={classes.middle}>
      <Grid container direction="column" className={classes.left}>
          <Grid item className={classes.leftTop}> left-top </Grid>
          <Grid container direction="column" className={classes.leftBottom}>
            <div className={classes.nestedHeader}>test row</div>
            <LoremIpsum />
          </Grid>
      </Grid>
      <Grid item className={classes.right}> right </Grid>
    </Grid>
  
    <Grid item className={classes.footer}> footer </Grid>
  </Grid>
    )
  })
  
export default Demo;
