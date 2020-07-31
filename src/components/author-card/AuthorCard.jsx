import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import Button from '../button/Button';

const AuthorCardWrapper = styled.div`
  position: relative;
  margin: 15px auto;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  word-break: break-all;
  box-shadow: ${props =>
    props.shadow ? '9px 7px 8px -4px rgba(0, 0, 0, 0.13)' : '0 0 0 0'};

  p {
    text-align: center;
    max-width: 550px;
  }

  button {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  @media only screen and (max-width: 700px) {
    margin: 15px 10px;
  }
`;

const AuthorAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const AuthorSocialMedia = styled.div`
  display: flex;
  justify-content: center;

  i {
    font-size: 3rem;
    margin: 5px;
    color: darkgray;

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.yellow};
    }
  }
`;

const AuthorCard = ({
  authorAvatar,
  name,
  bio,
  shadow,
  editable,
  history,
  authorId,
}) => {
  return (
    <AuthorCardWrapper shadow={shadow}>
      {editable && (
        <Button
          className="edit-button"
          onClick={() => history.push('/edit-profile')}>
          <i className="fas fa-edit"></i>
        </Button>
      )}
      <Link to={`/profile/${authorId}`}>
        <AuthorAvatar src={authorAvatar} alt="Author-avatar" />
        <h3>{name}</h3>
      </Link>
      <p>{bio}</p>
      <AuthorSocialMedia>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-github-square"></i>
        <i className="fab fa-linkedin"></i>
      </AuthorSocialMedia>
    </AuthorCardWrapper>
  );
};

export default withRouter(AuthorCard);
