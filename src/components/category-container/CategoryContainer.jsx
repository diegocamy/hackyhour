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

  @media only screen and (min-width: 860px) and (max-width: 1260px) {
    .cards {
      width: 70%;
      margin: auto;
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

const CategoryContainer = ({ name, posts, ...props }) => {
  return (
    <Category>
      <CategoryTitle>
        <h2>{name}</h2>
        <div className="background-line" />
      </CategoryTitle>
      <div className="cards">
        {posts.map(p => {
          return (
            <Card
              widthInPx={300}
              key={p._id.toString()}
              image={p.featuredImage}
              category={p.category}
              title={p.title}
              summary={p.description}
              postSlug={p.slug}
              likes={p.likes}
              authorId={p.author_info[0]._id.toString()}
              authorName={p.author_info[0].name}
              authorAvatar={p.author_info[0].picture}
            />
          );
        })}
      </div>
    </Category>
  );
};

export default CategoryContainer;
