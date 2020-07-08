import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SVG } from '../../assets/not_found.svg';
import Button from '../../components/button/Button';

const PageWrapper = styled.div`
  max-width: 700px;
  margin: 20px auto;
  border-radius: 6px;
  background: white;
  text-align: center;

  svg {
    height: 100%;
    width: 80%;
    margin: 25px auto;
  }

  h2 {
    font-size: 1.3rem;
  }

  button {
    margin: 25px;
  }
`;

const NotFoundPage = ({ history, ...props }) => {
  return (
    <PageWrapper>
      <SVG />
      <h2>Página no Encontrada</h2>
      <Button onClick={() => history.push('/')}>Volver a Inicio</Button>
    </PageWrapper>
  );
};

export default NotFoundPage;
