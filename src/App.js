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


const Demo = () => {
  return (
<div class="container column full-height">

<div class="item" id="top">
    top
</div>

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
</div>

<div class="item" id="footer">
    footer
</div>
</div>
  )
}

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
