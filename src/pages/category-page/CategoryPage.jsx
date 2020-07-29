import React, { useState, useEffect } from 'react';
import axios from '../../axios/axios';
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

const CategoryPage = ({ match }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const { data: fetchedPosts } = await axios.get(
          `/api/posts/category/${match.params.categoryId}`
        );
        setPosts(fetchedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    loadPosts();
  }, [match]);

  if (!posts) return <h2>Loading!</h2>;

  if (posts.length === 0)
    return (
      <h2 style={{ textAlign: 'center', margin: '15px' }}>
        No posts for this category
      </h2>
    );

  return (
    <CategoryPageWrapper>
      <h1>{match.params.categoryId}</h1>
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
    </CategoryPageWrapper>
  );
};

export default CategoryPage;
