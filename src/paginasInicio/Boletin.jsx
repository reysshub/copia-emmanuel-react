import React from "react";
import "../index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  TituloGrande,
  TituloMedio,
  TituloChico,
  ColorWhite,
  TarjetaBlanca,
  ImagenSombra,
  ColorRed,
  BlancoSombraCorto,
  ConexionWeb,
  Espacio,
  LetraGrande,
  TituloLeft,
  BordeCentro,
  ImagenMedia,
} from "../components/CardCodigo";
import cruz from "../img/cruz.webp";
import { LogoRotando } from "../paginasContacto/Lideres";
import logoiglesia from "../img/logos/logo.png";
import pentagrama from "../img/logos/pentagramaNotas.webp";
import claveSol from "../img/logos/claveSol.png";

const Boletin = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Boletín de la Iglesia</ColorWhite>
      </TituloMedio>
      <TituloChico>
        <ColorWhite>Orden Plataforma</ColorWhite>
      </TituloChico>

      <Espacio />
      <LogoRotando>
        <img src={logoiglesia} className="App-logo" alt="logo iglesia" />
      </LogoRotando>

      <TarjetaBlanca>
        <TituloGrande>Culto de Adoración</TituloGrande>
        <TituloMedio>Ministerio de la Mujer</TituloMedio>
        <Espacio />
        <TituloChico>
          <ColorRed>Sábado 9 de Julio 2022</ColorRed>
        </TituloChico>
        <Espacio />
        <LetraTexto>
          "El que no ama, no conoce á Dios; porque Dios es amor". 1 Juan 4:8
        </LetraTexto>
        <Espacio />
        <ImagenSombra>
          <img src={cruz} alt="imagen cruz" />
        </ImagenSombra>
        <Espacio />
        <TituloLeft>Primer Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Preparándonos para adorar al Creador <br />
          --- Grupo de Alabanzas: (10:45 AM) <br />
          --- Entrada Plataforma: (11:00 AM) <br />
          --- Doxología: Congregación adora al Creador <br />
          1 - Invocación: Dorys Ojeda <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Segundo Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Adorando a través de la confraternidad <br />
          2 - Bienvenida: Aliah Beltré <br />
          --- Adorando a través de la alabanza <br />
          3 - Anuncia himno: Kelin Leyva <br />
          --- Himno: # 332 "Con sin igual amor" <br />
        </LetraBoletin>
        <Espacio />
        <BordeCentro>
          <ConexionWeb href="http://www.iglesiadeolivos.com.ar/-/doc/himnario/362.html">
            Letra -- Con sin igual amor! (362)
          </ConexionWeb>
        </BordeCentro>
        <Espacio />
        <LetraBoletin>
          --- Adorando a través de la Palabra <br />
          --- Texto bíblico: 1 Juan 4:8 <br />
          4 - Lectura bíblica: Rosy Alvarez <br />
          --- Postrados adoramos al Creador <br />
          5 - Conduce Adoración: Laurita Pérez <br />
          --- Respuesta: Congregación y piano <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Tercer Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Adorando a través de las Ofrendas <br />
          --- Reconocemos la soberanía de Dios <br />
          6 - Dirige ofrendas: Yelennis Martínez <br />
          --- Congregación canta alabanzas <br />
          --- Diaconado recibe las ofrendas <br />
          --- Bendición sobre diezmos y ofrendas <br />
          7 - Oración: Yelennis Martínez <br />
        </LetraBoletin>
        <Espacio />
        <BordeCentro>
          <Link to="/ofrendas">Explicación Ofrendas</Link>
        </BordeCentro>
        <Espacio />
        <LetraBoletin>
          8 - Aliah y Kelin comunican - anuncios <br />
          --- VIAJE A CAMP KULAQUA (Agosto 5 -- 7)
          <Espacio />
          <BordeCentro>
            <Link to="/anuncios">Ver Página Anuncios</Link>
          </BordeCentro>
        </LetraBoletin>
        <Espacio />
        {/* <TituloLeft>Segmento Iglesia</TituloLeft> */}
        {/* <Espacio /> */}
        <LetraBoletin>
          {/* --- Presentación de niños <br /> */}
          {/* --- Recibiendo nuevos miembros <br /> */}
          {/* --- Oración intercesora por enfermos <br /> */}
          {/* --- Anuncios extraordinarios <br /> */}
          {/* --- Presentación del predicador <br /> */}
          {/* Dos bajas por traslado (Secretaria y Anciano) */}
        </LetraBoletin>
        {/* <Espacio /> */}
        <TituloLeft>Cuarto Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Adoración a través de la Palabra <br />
          9 - Selección musical: Ministerio Músical <br />
          --- Título: Alabanza a Dios <br />
          10 - Sermón: Dorys Ojeda <br />
          --- Sermón Título: "Un pasado vergonzoso, pero un futuro glorioso"
          <br />
          --- Entregando nuestras vidas a Dios <br />
          11 - Himno: # 282 "Entra en este corazón" <br />
        </LetraBoletin>
        <Espacio />
        <BordeCentro>
          <ConexionWeb href="http://www.iglesiadeolivos.com.ar/-/doc/himnario/263.html">
            Letra -- Entra en este corazón (263)
          </ConexionWeb>
        </BordeCentro>
        <Espacio />
        <LetraBoletin>12 - Oración: Dorys Ojeda</LetraBoletin>
        <Espacio />
        <Espacio />
        <BordeCentro>
          <LetraGrande>Bendición de Dios para su Iglesia</LetraGrande>
          <LetraTexto>
            "Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro
            sobre ti, y tenga de ti misericordia; Jehová alce sobre ti su
            rostro, y ponga en ti paz". Números 6:24-26
            <Espacio />
            Amén, así sea
          </LetraTexto>
        </BordeCentro>
        <Espacio />
        <LetraBoletin>
          <Espacio>--- Salida organizada por el diaconado</Espacio>
          <LetraGrande>"Un feliz sábado para todos"</LetraGrande>
          <Espacio />
        </LetraBoletin>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloChico>
          <ColorRed>Himnario Disponible</ColorRed>
        </TituloChico>
        <Espacio />
        <Espacio />
        <BlancoSombraCorto>
          <ConexionWeb href="http://www.iglesiadeolivos.com.ar/himnario_adventista.html">
            Himnario Online
          </ConexionWeb>
        </BlancoSombraCorto>
        <Espacio />
        <Espacio />
        <Espacio />
        <div className="claveBox">
          <img
            src={claveSol}
            className="clave App-logo"
            alt="imagen clave de sol"
          />
          <img
            src={claveSol}
            className="clave App-logo"
            alt="imagen clave de sol"
          />
          <img
            src={claveSol}
            className="clave App-logo"
            alt="imagen clave de sol"
          />
        </div>
        <ImagenMedia>
          <img src={pentagrama} alt="imagen pentagrama" />
        </ImagenMedia>
      </TarjetaBlanca>

      {/* <TarjetaBlanca>
        <TituloMedio>Principios de Adoración</TituloMedio>
        <LetraAlmuerzo>
          I. ¿Qué es adorar?
          <Espacio />
          <Espacio />
          II. ¿Por qué adorar?
          <Espacio />
          <Espacio />
          II. ¿Cómo adorar?
          <Espacio />
        </LetraAlmuerzo>
      </TarjetaBlanca> */}
    </>
  );
};

export const LetraBoletin = styled.p`
  color: black;
  font-size: 19px;
  padding-left: 25px;

  @media screen and (min-width: 750px) {
    font-size: 25px;
    padding-left: 55px;
  }
`;
export const LetraTexto = styled.p`
  color: darkmagenta;
  border-radius: 10px;
  padding: 6px;
  font-size: 18px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial" sans-serif;

  @media screen and (min-width: 750px) {
    font-size: 25px;
  }
`;

export default Boletin;
