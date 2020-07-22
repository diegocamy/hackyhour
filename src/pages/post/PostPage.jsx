import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import styled from 'styled-components';
import PostPreview from '../../components/post-preview/PostPreview';
import AuthorCard from '../../components/author-card/AuthorCard';
import BigCard from '../../components/big-card/BigCard';

const PostPageWrapper = styled.div`
  max-width: 700px;
  margin: 15px auto;

  h1 {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .like {
    font-size: 1.3rem;
    padding: 25px;
    background: white;
    margin-top: -6px;
    border-radius: 6px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    i {
      color: darkgray;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .relacionados {
    text-align: center;
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const PostPage = ({ history, match }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setError(null);
        const {
          data: { post, author },
        } = await axios.get(`/api/posts/${match.params.id}`);
        if (post && author) {
          setPost({ ...post, author });
        }
      } catch (error) {
        if (error.response.status === 404) {
          history.push('/404');
        }
      }
    };

    getPost();
  }, [match.params.id, history]);

  if (!post) return <h2>cargando...</h2>;

  if (!post && error) return <h2>{error}</h2>;

  if (post && !error)
    return (
      <PostPageWrapper>
        <h1>{post.title}</h1>
        <PostPreview post={post.post} />
        <div className="like">
          {post.likes}
          <i className="fas fa-heart"></i>
        </div>
        <AuthorCard
          authorAvatar={post.author.picture}
          name={post.author.name}
          bio={post.author.bio}
        />
        <h2 className="relacionados">Posts Relacionados</h2>
        <BigCard
          authorName="Diego Camy"
          postCategory="Programacion"
          authorPhoto="https://avatarfiles.alphacoders.com/118/thumb-118867.jpg"
          postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
        />
        <BigCard
          authorName="Diego Camy"
          postCategory="Programacion"
          authorPhoto="https://avatarfiles.alphacoders.com/118/thumb-118867.jpg"
          postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
        />
        <BigCard
          authorName="Diego Camy"
          postCategory="Programacion"
          authorPhoto="https://avatarfiles.alphacoders.com/118/thumb-118867.jpg"
          postImg="https://cdn-images-1.medium.com/fit/t/800/240/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
        />
      </PostPageWrapper>
    );
};

export default PostPage;
