import React from 'react';
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
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const fullPost = JSON.parse(localStorage.getItem('blogpost'));

const post = fullPost && fullPost.content;

const PostPage = () => {
  return (
    <PostPageWrapper>
      <h1>{fullPost && fullPost.title}</h1>
      <PostPreview post={post} />
      <div className="like">
        23
        <i className="fas fa-heart"></i>
      </div>
      <AuthorCard
        authorAvatar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Autor ReLoco"
        bio="Me gusta el pan el queso la mermeladamermeladamermeladamermeladamermeladamermeladamermeladamermeladamermeladamermelada y la coca-cola"
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
