import React from 'react';
import styled from 'styled-components';

const AuthorCardWrapper = styled.div`
  margin: 15px auto;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  word-break: break-all;
  box-shadow: 9px 7px 8px -4px rgba(0, 0, 0, 0.13);

  p {
    text-align: center;
    max-width: 550px;
  }

  @media only screen and (max-width: 900px) {
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

const AuthorCard = ({ authorAvatar, name, bio }) => {
  return (
    <AuthorCardWrapper>
      <AuthorAvatar src={authorAvatar} alt="Author-avatar" />
      <h3>{name}</h3>
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

export default AuthorCard;
