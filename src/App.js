import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'BioRhyme',serif;
  }

  body {
    background-color: ${props => props.theme.lightGray}
  }
  
`;

const theme = {
  yellow: '#fed766',
  lightGray: '#eff1f3',
  darkGray: '#696773',
  blue: '#009fb7',
  black: '#272727',
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
