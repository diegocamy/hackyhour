import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../card/Card';
import Button from '../button/Button';

const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .cards {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .read-more {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
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

const CategoryContainer = ({ name, posts, history, ...props }) => {
  return (
    <Category>
      <CategoryTitle>
        <Link to={`/category/${name.toLowerCase()}`}>
          <h2>{name}</h2>
        </Link>
        <div className='background-line' />
      </CategoryTitle>
      <div className='cards'>
        {posts.map((p) => {
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
              updatedAt={p.updatedAt}
            />
          );
        })}
      </div>
      <div className='read-more'>
        <Button
          onClick={() => {
            history.push(`/category/${name.toLowerCase()}`);
          }}
        >{`Ver más >`}</Button>
      </div>
    </Category>
  );
};

export default withRouter(CategoryContainer);
