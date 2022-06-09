import React from 'react'
import styled from 'styled-components';
import logo from '../img/logos/logo.png';

const Footer = () => {
  return (
        <FooterContainer>
                <FooterText>
                    <Iglesia>Nuestra meta</Iglesia>
                    <Parrafo>Conocer a Jesús y compartirlo</Parrafo>
                    <Parrafo>Aprender de él e imitarlo</Parrafo>
                    <Parrafo>Hasta que él venga</Parrafo>
                </FooterText>
                <FooterLogo>
                    <img src={logo} alt="logo" />
                </FooterLogo>
                <FooterText>
                    <Iglesia>Nuestra otra Iglesia</Iglesia>
                    <Parrafo><b>Emmanuel Clearwater Spanish</b></Parrafo>
                    <Parrafo>2855 Haines Bayshore Rd</Parrafo>
                    <Parrafo>Clearwater FL 33760</Parrafo>
                </FooterText>
        </FooterContainer>
  )
}

export const FooterContainer = styled.div`
    background-color: rgb(69, 11, 11);
    color:white;
    width:390px;
    height:80px;
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media screen and (min-width: 750px){
        width:750px;
        height:90px;
        justify-content:space-evenly;
    }
`
export const FooterLogo = styled.div`
    display:flex;
    img{
        border-radius:50%;
        width: 55px;

        @media screen and (min-width: 750px){
         width:72px;
        }
    }
`
export const FooterText = styled.div`
    text-align:center;
    width:auto;
    height:auto;
`
const Iglesia = styled.h3`
    font-size:12px;
    font-family:sans-serif;

    @media screen and (min-width: 750px){
         font-size: 16px;
    }
`
const Parrafo = styled.p`
    font-size:9px;
    font-family:sans-serif;

    @media screen and (min-width: 750px){
         font-size: 12px;
    }
`
export default Footer