import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla',sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => (theme.name === 'default' ? 'black' : 'white')};
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Rubik', sans-serif;
  }

  .mainDiv {
    margin-top: 55px;
  }

  
`;

const theme = {
  default: {
    name: 'default',
    background: '#DEE5E5',
    backgroundDark: '#9DC5BB',
    primary: '#17B890',
    secondary: '#5E807F',
    dark: '#082D0F',
  },
  dark: {
    name: 'dark',
    background: '#1C2541',
    backgroundDark: '#0B132B',
    primary: '#6FFFE9',
    secondary: '#5BC0BE',
    dark: '#0E141B',
  },
};

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={isDark ? theme.dark : theme.default}>
        <GlobalStyle />
        <Navbar setIsDark={setIsDark} isDark={isDark} />
        <div className="mainDiv">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <>
                  <h1>Hello World</h1>
                  <p>
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremloremlore
                    mloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>

                  <h2>Mas texto!</h2>
                  <p>
                    loremloremloremloremloreml
                    oremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlo
                    remloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>
                  <h2>Mas texto!</h2>
                  <p>
                    loremloremloremloremloreml
                    oremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlo
                    remloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>
                  <h2>Mas texto!</h2>
                  <p>
                    loremloremloremloremloreml
                    oremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlo
                    remloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>
                  <h2>Mas texto!</h2>
                  <p>
                    loremloremloremloremloreml
                    oremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlo
                    remloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>
                  <h2>Mas texto!</h2>
                  <p>
                    loremloremloremloremloreml
                    oremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlo
                    remloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>
                  <h2>Mas texto!</h2>
                  <p>
                    loremloremloremloremloreml
                    oremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlor
                    emloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremlo
                    remloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremlorem
                  </p>
                </>
              )}
            />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
