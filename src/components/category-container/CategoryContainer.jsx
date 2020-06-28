import React from 'react';
import styled from 'styled-components';
import Card from '../card/Card';

const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .cards {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 670px) {
    .cards {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

const CategoryTitle = styled.div`
  position: relative;
  height: fit-content;
  padding: 0 10px;
  width: fit-content;
  margin-bottom: 10px;

  h2 {
    color: ${({ theme }) => theme.black};
    font-weight: bold;
    font-size: 2rem;
  }

  .background-line {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    z-index: -1;
    background: ${({ theme }) => theme.yellow};
  }
`;

const CategoryContainer = () => {
  return (
    <Category>
      <CategoryTitle>
        <h2>Populares:</h2>
        <div className="background-line" />
      </CategoryTitle>
      <div className="cards">
        <Card
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          titulo="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg"
          titulo="Tu Primer Hola Mundo En JAVA"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          titulo="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg"
          titulo="Tu Primer Hola Mundo En JAVA"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          titulo="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg"
          titulo="Tu Primer Hola Mundo En JAVA"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          titulo="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg"
          titulo="Tu Primer Hola Mundo En JAVA"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          titulo="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg"
          titulo="Tu Primer Hola Mundo En JAVA"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://pbs.twimg.com/media/ENIydNFXkAIYCVV.jpg"
          titulo="Tu Primer Hola Mundo En JAVA con Eclipse en Windowssasd"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
        <Card
          image="https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/9a128/sick-new-site.jpg"
          titulo="Tu Primer Hola Mundo En JAVA"
          resumen="lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum lreom ipsum "
        />
      </div>
    </Category>
  );
};

export default CategoryContainer;
