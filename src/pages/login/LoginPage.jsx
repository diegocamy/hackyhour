import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background: white;
  max-width: 700px;
  border-radius: 6px;
  margin: 15px auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .google {
    background: #4285f4;
    border-bottom: 2px solid darkslateblue;
    border-right: 2px solid darkslateblue;
  }

  .github {
    background: #24292e;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
  }

  button {
    margin: 5px;
    border: none;
    padding: 10px 25px;
    transition: all 150ms ease-in-out;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 6px;

    i {
      margin-right: 10px;
      font-size: 1.4rem;
    }

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    &:active {
      transform: scale(1);
    }
  }

  hr {
    width: 200px;
    border: 0.2px solid lightgray;
    margin-bottom: 50px;
  }

  span {
    margin-bottom: 50px;
  }
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <h2>Iniciar Sesión</h2>
      <hr />
      <button className="google">
        <i className="fab fa-google"></i>Iniciar Sesión con Google
      </button>
      <button className="github">
        <i className="fab fa-github"></i>Iniciar Sesión con GitHub
      </button>
      <span></span>
    </LoginContainer>
  );
};

export default LoginPage;
