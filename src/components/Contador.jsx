import React from 'react'
import styled from 'styled-components';
import { ConexionWeb, Espacio } from '../components/CardCodigo';

const Contador = () => {
  return (
    <MiContador>
        <div id="sfctj741r1eztr6tz48qdgjsalucjzgjrsm"></div>

        <ConexionWeb href="https://www.contadorvisitasgratis.com" title="contador de visitas gratis">
          <img src="https://counter9.stat.ovh/private/contadorvisitasgratis.php?c=tj741r1eztr6tz48qdgjsalucjzgjrsm" border="0" title="contador de visitas gratis" alt="contador de visitas gratis"/>
        </ConexionWeb>

        <Espacio />

        <ConexionWeb href="https://www.contadorvisitasgratis.com">Contador de visitas por dispositivo</ConexionWeb>

    </MiContador>
  )
}

export const MiContador = styled.div`
     background-color: rgb(104, 29, 29);
     padding: 12px;
     text-align: center;
     font-family: sans-serif;
     font-size: 14px;

     a{
         color:white;
         text-decoration:none;
     }
`
export default Contador