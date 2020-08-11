import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../axios/axios';

import SearchForm from '../../components/search-form/SearchForm';
import SearchResultsContainer from '../../components/search-results-container/SearchResultsContainer';
import BigCard from '../../components/big-card/BigCard';

const SearchContainer = styled.div`
  max-width: 900px;
  min-height: 500px;
  margin: auto;
  margin-bottom: 25px;
`;

const SearchPage = props => {
  const [foundPosts, setFoundPosts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const searchTerm = params.get('term');
    const findPosts = async term => {
      try {
        const { data: posts } = await axios.get(`/api/posts/search/${term}`);
        setFoundPosts(posts);
      } catch (error) {
        console.log('error todo later');
      }
    };
    if (searchTerm) {
      findPosts(searchTerm);
    } else {
      props.history.push('/');
    }
  }, [props.location.search, props.history]);

  return (
    <SearchContainer>
      <SearchForm />
      <SearchResultsContainer>
        {foundPosts.length === 0 ? (
          <h2>No se encontraron posts</h2>
        ) : (
          foundPosts.map(p => {
            return (
              <BigCard
                key={p._id}
                authorName={p.author_info[0].name}
                postCategory={p.category}
                authorPhoto={p.author_info[0].picture}
                postImg={p.featuredImage}
                title={p.title}
                description={p.description}
                likes={p.likes}
                updatedAt={p.updatedAt}
                authorId={p.author_info[0]._id}
                category={p.category}
                postSlug={p.slug}
              />
            );
          })
        )}
      </SearchResultsContainer>
    </SearchContainer>
  );
};

export default SearchPage;
