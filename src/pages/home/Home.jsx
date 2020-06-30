import React from 'react';

import CategoryContainer from '../../components/category-container/CategoryContainer';
import SearchForm from '../../components/search-form/SearchForm';

const Home = () => {
  return (
    <div className="container">
      <SearchForm />
      <CategoryContainer name="Populares" />
      <CategoryContainer name="Recientes" />
      <CategoryContainer name="Programacion" />
    </div>
  );
};

export default Home;
