import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import SearchPage from './pages/search/SearchPage';
import ProfilePage from './pages/profile/ProfilePage';
import CreatePostPage from './pages/create-post/CreatePostPage';
import PostPage from './pages/post/PostPage';
import CategoryPage from './pages/category-page/CategoryPage';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import { UserContext } from './context/userContext';
import axios from './axios/axios';
import DashboardPage from './pages/dashboard/DashboardPage';
import EditProfilePage from './pages/edit-profile/EditProfilePage';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import Footer from './components/footer/Footer';

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

  .container {
    max-width: 1300px;
    margin: 0 auto;
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await axios.get('/api/auth/islogged');
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:categoryId" component={CategoryPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/edit-profile" component={EditProfilePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/create" component={CreatePostPage} />
            <Route path="/profile/:id" component={ProfilePage} />
            <Route path="/post/:id" component={PostPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
