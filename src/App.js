import React, {Fragment} from 'react';
// import logo from './logo.svg';
// import './App.css';
import './flex.css';
import LoremIpsum from './components/LoremIpsum';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';

const bodyStyles = theme => ({
    root: {
        margin: '0',
        height: '100%',
    },
});


const BodyWrap = withStyles(bodyStyles)(({children, classes}) => {
  return (
<main className={classes.root}>
  {children}
</main>
  )
});

const Layout = ({children}) => {
  return (
<Fragment>
    <CssBaseline />
    <Header />
    <BodyWrap>
        {children}
    </BodyWrap>
</Fragment>
  )
}

let theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: blue,
  },
});
window.theme = theme;

const containerRow = {
  'min-height': 0,
}

const containerCol = {
  'min-width': 0,
}

const demoStyles = {
  fullHeight: {
    height: '100%',
    'flex-wrap': 'nowrap',
    ...containerCol,
  },
  middle: {
    flex: 1,
    'flex-wrap': 'nowrap',
    ...containerRow,
  },
  left: {
    flex: 1,
    ...containerCol,
  },
  leftBottom: {
    flex: 1,
    overflow: 'auto',
  },
  nestedHeader: {
    padding: 8,
  }
}

//<div class="container column full-height">
//<div class="grow container row" id="middle">
//<div class="grow container column" id="left">
//<div class="item grow overflow" id="left-bottom">
const Demo = withStyles(demoStyles)(({classes}) => {
  return (
<Grid container direction="column" className={classes.fullHeight}>
<div class="item" id="top">
    top - covered by Header
</div>

  <Grid container direction="row" className={classes.middle}>
    <Grid container direction="column" className={classes.left}>
        <div class="item" id="left-top">
            left-top
        </div>
        <Grid item className={classes.leftBottom}>
          <div className={classes.nestedHeader}>test row</div>
          <LoremIpsum />
        </Grid>
    </Grid>
    <div class="item grow" id="right">
        right
    </div>
  </Grid>

<div class="item" id="footer">
    footer
</div>
</Grid>
  )
})
//</div>
//</div>
//</div>
//</div>

function App() {
  return (
<ThemeProvider theme={theme}>
  <Router>
    <Layout>
      <Route exact path="/" component={Demo} />
    </Layout>
  </Router>
</ThemeProvider>
  );
}

export default App;
