import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navegacion>
      <Menu>
        <MenuLi>
          <MenuLink>Inicio</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/">Cultos</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/sitios">Sitios</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/boletin">Boletín</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/anuncios">Anuncios</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/almuerzo">Almuerzo</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>
        <MenuLi>
          <MenuLink>Iglesia</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/oracion">Oraciones</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/ofrendas">Ofrendas</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/miembros">Miembros</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/educate">Edúcate</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/sucedio">Sucedió</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>
        <MenuLi>
          <MenuLink>Misión</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/infantil">Infantil</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/jovenes">Jóvenes</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/sabatica">Sabática</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/preguntas">Preguntas</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>
        <MenuLi>
          <MenuLink>Varios</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/diaconos">Diáconos</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/citaserroneas">Citas Erroneas</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>
        <MenuLi>
          <MenuLink>Contacto</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/lideres">Líderes</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/familias">Familias</Link>
              </SubLink>
            </SubMenuLi>

            {/* <SubMenuLi>
              <SubLink>
                <Link to="/registrate">Registrate</Link>
              </SubLink>
            </SubMenuLi> */}

            <SubMenuLi>
              <SubLink>
                <Link to="/profesiones">Profesiones</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>
      </Menu>
    </Navegacion>
  );
};

export const Navegacion = styled.nav`
  background-color: rgb(104, 29, 29);
  width: 390px;
  margin: auto;

  ul:hover a {
    color: white;
  }

  @media screen and (min-width: 750px) {
    width: 750px;
  }
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;

  li:hover ul {
    border: 1px solid black;
    display: block;
    transition: all 0.3s ease;
  }

  li:hover a {
    text-decoration: none;
  }
`;
export const SubMenu = styled.ul`
  background-color: rgb(104, 29, 29);
  position: absolute;
  display: none;
  width: 100%;
  list-style: none;
  color: white;
`;
export const MenuLi = styled.li`
  display: inline-block;
  position: relative;
  text-align: left;
  width: 20%;

  a:hover {
    background-color: rgb(227, 202, 174);
    color: rgb(104, 29, 29);
    transition: all 0.3s ease;
  }

  ul:hover a {
    color: white;
  }
`;
export const SubMenuLi = styled.li`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-top: 0.1px solid rgb(227, 202, 174);

  a:hover a {
    color: black;
  }
`;
export const MenuLink = styled.a`
  text-align: left;
  text-decoration: none;
  display: block;
  font-size: 16px;
  padding: 7px;
  color: white;

  @media screen and (min-width: 750px) {
    text-align: center;
    font-size: 21px;
    padding: 8px;
    font-family: sans-serif;
  }
`;
export const SubLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 8px;

  @media screen and (min-width: 750px) {
    padding: 9px;
    font-size: 21px;
    text-align: center;
  }
`;

export default Navbar;
