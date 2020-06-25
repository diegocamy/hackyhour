import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${({ theme }) =>
    theme.name === 'default' ? theme.primary : theme.backgroundDark};
  color: ${({ theme }) => (theme.name === 'default' ? 'white' : theme.primary)};
  margin-bottom: 10vw;

  .container {
    width: 95vw;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  .logo {
    font-size: 1.6rem;
  }

  .derecha {
    font-size: 1.5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 15%;

    .dropdown {
      display: flex;
      flex-direction: column;
    }
  }
`;

const DropDownMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => (theme.name === 'default' ? 'white' : 'black')};
  top: -15vh;
  left: 0;
  width: 100vw;
  transition: 300ms ease all;
  z-index: -2;

  &.active {
    top: 6vh;
  }
`;

const Navbar = ({ setIsDark, isDark }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Nav>
      <div className="container">
        <div className="logo">Hacky Hour!</div>
        <div className="derecha">
          <div className="dropdown">
            <i
              className={
                !showDropDown ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
              }
              onClick={() => setShowDropDown(!showDropDown)}></i>
            <DropDownMenu className={showDropDown ? 'active' : ''}>
              <p>asdasd</p>
              <p>asdsad</p>
              <p>dddddddd</p>
            </DropDownMenu>
          </div>
          <div className="theme" onClick={() => setIsDark(!isDark)}>
            <i className={isDark ? 'fas fa-lightbulb' : 'far fa-lightbulb'}></i>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
