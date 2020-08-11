import React, { useState, useEffect } from 'react';
import axios from '../../axios/axios';

import CategoryContainer from '../../components/category-container/CategoryContainer';
import SearchForm from '../../components/search-form/SearchForm';

//GET POSTS FUNCTIONS
const getPopularPosts = posts => {
  const arr = [...posts];
  return arr
    .sort(
      (curr, nextP) =>
        Object.keys(nextP.likes).length - Object.keys(curr.likes).length
    )
    .slice(0, 4);
};

const getRecentPosts = posts => posts.slice(0, 4);

const getProgrammingPosts = posts =>
  posts.filter(p => p.category === 'programacion').slice(0, 4);

const getNewsPosts = posts =>
  posts.filter(p => p.category === 'noticias').slice(0, 4);

const getCampusPosts = posts =>
  posts.filter(p => p.category === 'campus').slice(0, 4);

const getAnnouncementsPosts = posts =>
  posts.filter(p => p.category === 'anuncios').slice(0, 4);

const getHackyhourPosts = posts =>
  posts.filter(p => p.category === 'hackyhour').slice(0, 4);

/////////

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [popular, setPopular] = useState([]);
  const [recent, setRecent] = useState([]);
  const [programming, setProgramming] = useState([]);
  const [news, setNews] = useState([]);
  const [campus, setCampus] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [hackyhour, setHackyhour] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('/api/posts');
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  //SORT POSTS TO DISPLAY ON HOMEPAGE
  useEffect(() => {
    if (posts) {
      setPopular(getPopularPosts(posts));
      setRecent(getRecentPosts(posts));
      setNews(getNewsPosts(posts));
      setProgramming(getProgrammingPosts(posts));
      setAnnouncements(getAnnouncementsPosts(posts));
      setCampus(getCampusPosts(posts));
      setHackyhour(getHackyhourPosts(posts));
    }
  }, [posts]);

  if (!posts) {
    return <h2>Loading!</h2>;
  }

  return (
    <div className="container">
      <SearchForm />
      <CategoryContainer name="Populares" posts={popular} />
      <CategoryContainer name="Recientes" posts={recent} />
      <CategoryContainer name="Programacion" posts={programming} />
      <CategoryContainer name="Noticias" posts={news} />
      <CategoryContainer name="Hacky Hour" posts={hackyhour} />
      <CategoryContainer name="Anuncios" posts={announcements} />
      <CategoryContainer name="Campus" posts={campus} />
    </div>
  );
};

export default Home;
