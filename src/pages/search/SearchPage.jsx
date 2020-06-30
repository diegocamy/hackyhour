import React, { useEffect } from 'react';
import styled from 'styled-components';

import SearchForm from '../../components/search-form/SearchForm';
import SearchResultsContainer from '../../components/search-results-container/SearchResultsContainer';
import BigCard from '../../components/big-card/BigCard';

const SearchContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;

const SearchPage = props => {
  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const searchTerm = params.get('term').split('-').join(' ');
    console.log(searchTerm);
  }, [props.location.search]);

  return (
    <SearchContainer>
      <SearchForm />
      <SearchResultsContainer>
        <BigCard
          authorName="Diego Camy"
          postCategory="Programacion"
          authorPhoto="https://avatarfiles.alphacoders.com/118/thumb-118867.jpg"
          postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
        />
        <BigCard
          authorName="Diego Camy"
          postCategory="Programacion"
          authorPhoto="https://avatarfiles.alphacoders.com/118/thumb-118867.jpg"
          postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
        />
      </SearchResultsContainer>
    </SearchContainer>
  );
};

export default SearchPage;
