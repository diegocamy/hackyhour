import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../button/Button';
import InputField from '../input-field/InputField';

const StyledForm = styled.form`
  margin: auto;
  margin-top: 25px;
  width: fit-content;

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  input {
    border-bottom: 2px solid darkgray;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }

  @media only screen and (min-width: 375px) {
    width: 80%;

    button {
      width: 15%;
    }

    input {
      width: 85%;
    }
  }
`;

const SearchForm = ({ history, ...props }) => {
  const params = new URLSearchParams(props.location.search);
  const searchedTerm = params.get('term');
  const [searchTerm, setSearchTerm] = useState(
    (searchedTerm && searchedTerm.split('-').join(' ')) || ''
  );
  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
      }}>
      <InputField
        placeholder="Buscar..."
        fontSize={1.1}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Button
        fontSize={1.1}
        onClick={e => {
          e.preventDefault();
          history.push(`/search?term=${searchTerm.split(' ').join('-')}`);
        }}>
        <i className="fas fa-search"></i>
      </Button>
    </StyledForm>
  );
};

export default withRouter(SearchForm);
