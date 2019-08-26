import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './flex.css';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Demo from './components/Demo';

let theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: blue,
  },
});
window.theme = theme;

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
