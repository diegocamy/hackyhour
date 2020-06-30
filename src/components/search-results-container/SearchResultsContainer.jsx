import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: auto;
  margin-top: 25px;
  height: 200px;

  @media only screen and (min-width: 375px) {
    width: 80%;
  }
`;

const SearchResultsContainer = props => {
  return <SearchContainer>{props.children}</SearchContainer>;
};

export default SearchResultsContainer;
