import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  height: 375px;
  width: ${props => props.widthInPx}px;
  background: white;
  margin-bottom: 15px;

  box-shadow: 9px 7px 8px -4px rgba(0, 0, 0, 0.13);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CardTop = styled.div`
  position: relative;
  overflow: hidden;
  height: 175px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  .background-image {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: all 1000ms linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CardBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;

  .badge {
    margin-bottom: 10px;
    background: ${props => props.theme.blue};
    color: white;
    padding: 0 6px;
    border-radius: 15px;
    width: fit-content;
    font-size: 0.65rem;
    text-transform: uppercase;
  }

  .content {
    h4 {
      line-height: 1;
      margin-bottom: 5px;
    }

    p {
      line-height: 1;
    }

    .separador {
      border: 2px solid ${({ theme }) => theme.yellow};
      width: 50%;
      margin: 15px auto;
    }
  }

  .author-info {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      border-radius: 50%;
      margin-right: 15px;
    }

    .details {
      p {
        margin-top: -5px;
        font-size: 0.7rem;
        color: darkgray;
      }
    }

    .likes {
      display: flex;
      align-items: center;
      margin-left: 20px;
      color: red;

      p {
        margin: 5px;
      }
    }
  }
`;

const Card = ({
  image,
  title,
  summary,
  category,
  widthInPx,
  postSlug,
  authorId,
  ...props
}) => {
  return (
    <CardContainer widthInPx={widthInPx}>
      <Link to={`/post/${postSlug}`}>
        <CardTop image={image}>
          <div className="background-image" />
        </CardTop>
      </Link>
      <CardBody>
        <Link to={`/category/${category}`}>
          <p className="badge">{category}</p>
        </Link>
        <div className="content">
          <Link to={`/post/${postSlug}`}>
            <h4>{title.slice(0, 52)}</h4>
            <p>{summary.slice(0, 47) + '...'}</p>
            <hr className="separador" />
          </Link>
        </div>
        <div className="author-info">
          <Link to={`/profile/${authorId}`}>
            <img
              src="https://avatarfiles.alphacoders.com/118/thumb-118867.jpg"
              alt="avatar-author"
            />
          </Link>
          <div className="details">
            <Link to={`/profile/${authorId}`}>
              <h5>Denis Mischantruk</h5>
            </Link>
            <p>Yesterday</p>
          </div>
          <div className="likes">
            <i className="fas fa-heart"></i>
            <p>35</p>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
