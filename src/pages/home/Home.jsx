import React from 'react';
import CategoryContainer from '../../components/category-container/CategoryContainer';

const Home = () => {
  return (
    <div className="container">
      <CategoryContainer name="Populares" />
      <CategoryContainer name="Recientes" />
      <CategoryContainer name="Programacion" />
    </div>
  );
};

export default Home;
