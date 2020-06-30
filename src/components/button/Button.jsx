import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  font-size: ${props => props.fontSize}rem;
  background: ${props => props.theme.yellow};
  color: black;
  padding: 5px 15px;
  border-right: 2px solid #b59949;
  border-bottom: 2px solid #b59949;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ onClick, fontSize, ...props }) => {
  return (
    <StyledButton onClick={onClick} fontSize={fontSize}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
