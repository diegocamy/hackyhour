import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const BigCardContainer = styled.div`
  margin: auto;
  background: white;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 9px 7px 8px -4px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    width: 95%;
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 150px;
  background: url(${props => props.postImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
`;

const PostTitle = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    h2 {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1;
    }

    p {
      font-size: 0.7rem;
      line-height: 1;
    }
  }
  .likes {
    display: flex;
    align-items: center;
    justify-self: flex-end;
    color: red;

    i {
      margin: 0 10px;
    }
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .text {
    h4 {
      font-size: 0.7rem;
      line-height: 1;
    }
    p {
      line-height: 1;
      font-size: 0.7rem;
      color: darkgray;
    }
  }

  button {
    display: none;
  }

  @media only screen and (min-width: 500px) {
    .text {
      flex: 1;
    }

    img {
      width: 35px;
      height: 35px;
    }

    button {
      display: flex;
      justify-self: flex-end;
    }
  }
`;

const BigCard = ({ postImg, authorPhoto, authorName, postCategory }) => {
  return (
    <BigCardContainer>
      <PostTitle>
        <div className="text">
          <h2>Title of the post</h2>
          <p>Description of the post</p>
        </div>
        <div className="likes">
          <i className="fas fa-heart"></i>
          <p>35</p>
        </div>
      </PostTitle>
      <PostImage postImg={postImg} />
      <AuthorInfo>
        <img src={authorPhoto} alt="author-profile-pic" />
        <div className="text">
          <h4>
            {authorName} en {postCategory}
          </h4>
          <p>Hace 2 días</p>
        </div>
        <Button>Leer</Button>
      </AuthorInfo>
    </BigCardContainer>
  );
};

export default BigCard;
