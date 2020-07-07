import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.div`
  margin: auto 15px;

  a {
    text-decoration: none;
    color: black;
  }

  .top {
    visibility: ${props => (props.hiddenTop ? 'hidden' : 'visible')};
    text-align: right;
    font-size: 0.6rem;
    margin-bottom: -9px;
  }
  .bottom {
    visibility: ${props => (props.hiddenBottom ? 'hidden' : 'visible')};
    text-align: right;
    font-size: 0.6rem;
    margin-top: -9px;
  }

  .middle {
    font-weight: bold;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 865px) {
    width: 30%;

    .top {
      visibility: hidden;
    }

    .bottom {
      visibility: hidden;
    }

    .middle {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 50%;
    margin: auto;
  }

  @media only screen and (max-width: 1202px) {
    .middle {
      font-size: 1.3rem;
    }
  }
`;

const NavItem = ({
  topText,
  middleText,
  bottomText,
  hiddenTop,
  hiddenBottom,
  linkTo,
  ...props
}) => {
  return (
    <Item hiddenTop={hiddenTop} hiddenBottom={hiddenBottom}>
      <Link to={linkTo}>
        <p className="top">{topText}</p>
        <h4 className="middle">{middleText}</h4>
        <p className="bottom">{bottomText}</p>
      </Link>
    </Item>
  );
};

export default NavItem;
