import React from 'react'
import styled from 'styled-components';
import logo from '../img/logos/logo.png';
import Navbar from './Navbar';
import { WhiteLimite } from '../App';

const Header = () => {
  return (
    <Encabezado>
        <Heading>
          <HeaderLogo>
            <img src={logo} alt="logo" />
          </HeaderLogo>
          <Nombre>
            <Titulo>Emmanuel Spanish SDA Church</Titulo>
            <Direccion>7611 Sheldon Rd Tampa Fl 33615</Direccion>
          </Nombre>
        </Heading>
        <WhiteLimite />
        <Navbar />
        <WhiteLimite />
    </Encabezado>
  )
}

export const Encabezado = styled.div`
    position:fixed;
    top: 0px;
    width:390px; 

    @media screen and (min-width: 750px){
        width:750px;
    }
`
export const Heading = styled.div`
     background-color: rgb(69, 11, 11);
     display:flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px;
     height: 70px;

     @media screen and (min-width: 750px){
        justify-content:space-around;
    }
` 
export const HeaderLogo = styled.div`
    display:flex;
    img{
        width:55px;
        border-radius:50%;
    }  
`
export const Nombre = styled.div`
    font-family:sans-serif;
    color:white;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Titulo = styled.h2`
    color:white;
    font-size: 18px;
    text-align: center;

    @media screen and (min-width: 750px){
        font-size:23px;
    }
`
export const Direccion = styled.h3`
    font-size: 13px;
     text-align: center;

     @media screen and (min-width: 750px){
        font-size:17px;
    }
`
export default Header
