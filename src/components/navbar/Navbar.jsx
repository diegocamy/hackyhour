import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding: 10px;
  width: 100vw;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.name === 'default' ? theme.primary : theme.backgroundDark};
  color: ${({ theme }) => (theme.name === 'default' ? 'white' : theme.primary)};

  .container {
    margin: 0 auto;
    width: 95vw;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.9;

    .logo {
      font-size: 1.3rem;
    }

    .derecha {
      font-size: 1.5rem;
      display: flex;
      flex-direction: row-reverse;

      .navLinks {
        display: none;

        a {
          text-decoration: none;
          font-size: 1 rem;
          color: ${({ theme }) =>
            theme.name === 'default' ? 'white' : theme.primary};
          margin: 0 5px;

          &:hover {
            color: ${({ theme }) => theme.secondary};
          }
        }
      }

      i {
        margin: 0 10px;

        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.secondary};
        }
      }
    }
  }

  .links {
    position: relative;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 35vh;

    a {
      text-decoration: none;
      font-size: 1 rem;
      color: ${({ theme }) =>
        theme.name === 'default' ? 'white' : theme.primary};
      margin: 0 5px;
      font-size: 1.3rem;

      &:hover {
        color: ${({ theme }) => theme.secondary};
      }
    }

    &.active {
      display: flex;
    }
  }

  @media only screen and (min-width: 769px) {
    .container {
      .logo {
        font-size: 1.6rem;
      }

      .derecha {
        .navLinks {
          display: block;
        }
      }
    }

    .dropdown {
      display: none;
    }

    .links {
      display: none;

      &.active {
        display: none;
      }
    }
  }
`;

const Navbar = ({ setIsDark, isDark }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Nav>
      <div className="container">
        <div className="logo">Hacky Hour!</div>
        <div className="derecha">
          <div className="navLinks">
            <a href="#">Categorias</a>
            <a href="#">Acerca De</a>
            <a href="#">Login</a>
          </div>
          <div className="dropdown">
            <i
              className={
                !showDropDown ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
              }
              onClick={() => setShowDropDown(!showDropDown)}></i>
          </div>
          <div className="theme" onClick={() => setIsDark(!isDark)}>
            <i className={isDark ? 'fas fa-lightbulb' : 'far fa-lightbulb'}></i>
          </div>
        </div>
      </div>
      <div
        className={`links ${showDropDown && 'active'}`}
        onClick={() => setShowDropDown(!showDropDown)}>
        <a href="#">Categorias</a>
        <a href="#">Acerca de</a>
        <a href="#">Login</a>
      </div>
    </Nav>
  );
};

export default Navbar;
