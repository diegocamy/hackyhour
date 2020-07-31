import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/es';
import { Link, withRouter } from 'react-router-dom';
import Button from '../button/Button';

const BigCardContainer = styled.div`
  margin: auto;
  background: white;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 9px 7px 8px -4px rgba(0, 0, 0, 0.13);

  a {
    text-decoration: none;
    color: inherit;
  }

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
  justify-content: space-between;

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
    span {
      color: darkgray;
      font-weight: normal;
      margin: auto 5px;
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

const BigCard = ({
  postImg,
  postSlug,
  authorPhoto,
  authorName,
  postCategory,
  authorId,
  category,
  history,
  updatedAt,
  title,
  description,
  likes,
  ...props
}) => {
  return (
    <BigCardContainer>
      <PostTitle>
        <Link to={`/post/${postSlug}`}>
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
        <div className="likes">
          <i className="fas fa-heart"></i>
          <p>{(likes && Object.keys(likes).length) || '0'}</p>
        </div>
      </PostTitle>
      <Link to={`/post/${postSlug}`}>
        <PostImage postImg={postImg} />
      </Link>
      <AuthorInfo>
        <Link to={`/profile/${authorId}`}>
          <img src={authorPhoto} alt="author-profile-pic" />
        </Link>
        <div className="text">
          <h4>
            <Link to={`/profile/${authorId}`}>{authorName}</Link>{' '}
            <span>en</span>{' '}
            <Link to={`/category/${category}`}>{postCategory}</Link>
          </h4>
          <p>{moment(updatedAt).startOf('minute').fromNow()}</p>
        </div>
        <Button onClick={() => history.push(`/post/${postSlug}`)}>Leer</Button>
      </AuthorInfo>
    </BigCardContainer>
  );
};

export default withRouter(BigCard);
