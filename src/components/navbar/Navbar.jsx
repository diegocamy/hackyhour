import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import background from '../../assets/background.png';
import NavItem from '../nav-item/NavItem';
import { Link } from 'react-router-dom';

const HeaderBackground = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 210px;
  width: 100%;
`;

const HeaderLogo = styled.div`
  position: absolute;
  top: 20px;
  background: url(${logo});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 200px;
  width: 100%;
  z-index: 1;
`;

const NavbarMenu = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
  border-bottom: 5px solid ${({ theme }) => theme.yellow};
  text-align: center;

  -webkit-box-shadow: 0px -3px 6px 0px rgba(120, 120, 120, 1);
  -moz-box-shadow: 0px -3px 6px 0px rgba(120, 120, 120, 1);
  box-shadow: 0px -3px 6px 0px rgba(120, 120, 120, 1);

  .separador {
    visibility: hidden;
    color: ${props => props.theme.yellow};
  }

  @media only screen and (min-width: 865px) {
    .separador {
      visibility: visible;
    }
  }
`;

const Navbar = () => {
  return (
    <div style={{ position: 'relative' }}>
      <HeaderBackground />
      <Link to="/">
        <HeaderLogo />
      </Link>
      <NavbarMenu>
        <NavItem
          middleText="Noticias"
          topText="últimas"
          bottomText="x"
          hiddenBottom
        />
        <p className="separador">x</p>
        <NavItem middleText="Campus" topText="IFSUL" bottomText="UTEC" />
        <p className="separador">x</p>
        <NavItem
          topText="todo sobre"
          middleText="Programacion"
          bottomText="y más"
        />
        <p className="separador">x</p>
        <NavItem
          middleText="Anuncios"
          topText="HACKY HOUR"
          bottomText="x"
          hiddenBottom
        />
        <p className="separador">x</p>
        <NavItem
          topText="más sobre"
          middleText="Nosotros"
          bottomText="x"
          hiddenBottom
        />
        <p className="separador">x</p>
        <NavItem
          middleText="Ingresar"
          topText="participá"
          bottomText="x"
          hiddenBottom
        />
      </NavbarMenu>
    </div>
  );
};

export default Navbar;
