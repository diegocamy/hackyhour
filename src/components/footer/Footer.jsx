import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  bottom: 0;
  margin-top: 25px;
  background-color: ${props => props.theme.black};
  color: white;
  padding: 15px 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Footer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore
        adipisci cupiditate debitis voluptate. Repellendus.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
