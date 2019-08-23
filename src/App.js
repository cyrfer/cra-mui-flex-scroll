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

const demoStyles = {
  fullHeight: {
    height: '100%',
    // 'flex-wrap': 'nowrap',
  },
  row: {
    'min-height': 0,
  }
}

//<div class="container column full-height">
const Demo = withStyles(demoStyles)(({classes}) => {
  return (
<Grid container direction="column" className={classes.fullHeight}>
<div class="item" id="top">
    top - covered by Header
</div>

  {/* <Grid container direction="row" className={classes.row}> */}
  <div class="grow container row" id="middle">
    <div class="grow container column" id="left">
        <div class="item" id="left-top">
            left-top
        </div>
        <div class="item grow overflow" id="left-bottom">
          <LoremIpsum />
          {/* <span>test</span> */}
        </div>
    </div>
    <div class="item grow" id="right">
        right
    </div>
  {/* </Grid> */}</div>

<div class="item" id="footer">
    footer
</div>
</Grid>
  )
})
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
