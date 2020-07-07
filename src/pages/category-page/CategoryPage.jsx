import React from 'react';
import styled from 'styled-components';
import Card from '../../components/card/Card';

const CategoryPageWrapper = styled.div`
  h1 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 15px;
  }

  .cards {
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

const CategoryPage = props => {
  return (
    <CategoryPageWrapper>
      <h1>{props.match.params.categoryId}</h1>
      <div className="cards">
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          widthInPx={300}
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          category="Programacion"
          title="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          summary="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
      </div>
    </CategoryPageWrapper>
  );
};

export default CategoryPage;
