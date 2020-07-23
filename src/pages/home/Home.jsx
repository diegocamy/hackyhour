import React, { useState, useEffect } from 'react';
import axios from '../../axios/axios';

import CategoryContainer from '../../components/category-container/CategoryContainer';
import SearchForm from '../../components/search-form/SearchForm';

const getPopularPosts = posts => {
  return posts.sort((curr, nextP) => nextP.likes - curr.likes).slice(0, 4);
};

const getRecentPosts = posts => posts.slice(0, 4);

const getProgrammingPosts = posts =>
  posts.filter(p => p.category === 'programacion').slice(0, 4);

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [popular, setPopular] = useState([]);
  const [recent, setRecent] = useState([]);
  const [programming, setProgramming] = useState([]);

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
      setProgramming(getProgrammingPosts(posts));
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
    </div>
  );
};

export default Home;
