import React, { useEffect } from 'react';
import SearchForm from '../../components/search-form/SearchForm';

const Search = props => {
  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const searchTerm = params.get('term').split('-').join(' ');
    console.log(searchTerm);
  }, [props.location.search]);

  return (
    <div>
      <SearchForm />
    </div>
  );
};

export default Search;
