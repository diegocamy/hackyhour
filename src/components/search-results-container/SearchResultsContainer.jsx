import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 25px auto;
  height: fit-content;

  @media only screen and (min-width: 375px) {
    width: 80%;
  }
`;

const SearchResultsContainer = props => {
  return <SearchContainer>{props.children}</SearchContainer>;
};

export default SearchResultsContainer;
