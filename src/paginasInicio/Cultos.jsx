import React from "react";
import { Link } from "react-router-dom";
import {
  TarjetaBlanca,
  ImagenGrande,
  ImagenSombra,
  ImagenMedia,
  ImagenLogo,
  ImagenLogo2,
  TituloGrande,
  LetraGrande,
  LetraChica,
  BlancoSombraCorto,
  Espacio,
  BlancoSombra,
  TituloMedio,
  TituloChico,
  BordeCentro,
  CajaBotones,
  ConexionWeb,
} from "../components/CardCodigo";
import bienvenido from "../img/bienvenido.jpg";
import semanales from "../img/semanales.png";
import minjuvenil from "../img/minjuvenil.png";
import celebrandoenla60 from "../img/celebrandoenla60.png";
import leccionactual from "../img/leccionactual.jpg";
import faceaidelyn from "../img/faceaidelyn.png";
import imagenzoom from "../img/imagenzoom.jpg";
import barcode from "../img/barcode.gif";
import teesperamos from "../img/teesperamos.png";
import zoomlogo from "../img/logos/zoomlogo.jpg";
import logofacebook from "../img/logos/logofacebook.png";
import logoApia from "../img/logos/logoApia.png";
import logoesabatica from "../img/logos/logoesabatica.png";
import logomjuvenil from "../img/logos/logomjuvenil.png";
import logominfantil from "../img/logos/logominfantil.png";

const Cultos = () => {
  return (
    <>
      <TarjetaBlanca>
        <ImagenSombra>
          <img src={bienvenido} alt="bienvenido" />
        </ImagenSombra>
        <Espacio />
        <ImagenMedia>
          <img src={semanales} alt="semanales" />
        </ImagenMedia>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande> Ministerio Juvenil</TituloGrande>
        <LetraGrande>Viernes 8:30 pm - 9:30 pm</LetraGrande>
        <TituloChico>Asiste y Participa</TituloChico>
        <Espacio />
        <ImagenGrande>
          <img src={minjuvenil} alt="juvenil" />
          <img src={celebrandoenla60} alt="juvenil" />
        </ImagenGrande>
        <Espacio />
        <BordeCentro>
          Ir a la página Ministerio Juvenil <br />
          <Link to="/jovenes">Página Ministerio Juvenil</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Iglesia en Estudio</TituloGrande>
        <LetraGrande>Sábados 9:45 am - 10:45 am</LetraGrande>
        <TituloChico>Aprende de la Biblia</TituloChico>
        <Espacio />
        <ImagenSombra>
          <img src={leccionactual} alt="leccionactual" />
        </ImagenSombra>
        <Espacio />
        <CajaBotones>
          <BlancoSombraCorto>
            <ConexionWeb href="https://adventistassantaclara.info/devocion/escuela-sabatica">
              Lección Digital
            </ConexionWeb>
          </BlancoSombraCorto>
          <BlancoSombraCorto>
            <ConexionWeb href="https://iadpa.org">Ordena Folleto</ConexionWeb>
          </BlancoSombraCorto>
        </CajaBotones>
        <Espacio />
        <BlancoSombra>
          <ImagenLogo>
            <img src={logoApia} className="App-logo" alt="logoApia" />
          </ImagenLogo>
          <LetraChica>
            Ordena por teléfono: APIA Español <br />
            Dahiana Costa (305) 599-1152 <br />
            costad@iadpa.org
          </LetraChica>
        </BlancoSombra>

        <Espacio />
        <TituloMedio>Nuestras Clases</TituloMedio>
        <BlancoSombra>
          <ImagenLogo>
            <img
              src={logoesabatica}
              className="App-logo"
              alt="logo E Sabatica"
            />
          </ImagenLogo>
          <LetraChica>
            Clase general para adultos <br />
            En el salón principal <br />
            Lección: 10:10 am - 10:40 am
          </LetraChica>
        </BlancoSombra>

        <BlancoSombra>
          <ImagenLogo>
            <img src={logomjuvenil} className="App-logo" alt="logo M Juvenil" />
          </ImagenLogo>
          <LetraChica>
            Clase especial para jóvenes <br />
            En el salón de jóvenes <br />
            10:00 am - 10:45 am <br />
            Maestro: Fernando Cepero
          </LetraChica>
        </BlancoSombra>

        <BlancoSombra>
          <ImagenLogo>
            <img
              src={logominfantil}
              className="App-logo"
              alt="logo M Infantil"
            />
          </ImagenLogo>
          <LetraChica>
            Clases especiales para Menores <br />
            3 Salones Ministerio Infantil <br />
            10:00 am - 10:45 am <br />
            Directora: Irma Velásquez
          </LetraChica>
        </BlancoSombra>

        <Espacio />
        <Espacio />
        <BordeCentro>
          Ir a la página Ministerio Infantil <br />
          <Link to="/infantil">Página Ministerio Infantil</Link>
        </BordeCentro>
        <Espacio />
        <BordeCentro>
          Ir a la página Escuela Sabática <br />
          <Link to="/sabatica">Página Escuela Sabática</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Iglesia en Adoración</TituloGrande>
        <LetraGrande>Sábados 10:50 am - 12:30 pm</LetraGrande>
        <TituloChico>Adorando al Creador</TituloChico>
        <ImagenGrande>
          <img src={faceaidelyn} alt="faceaidelyn" />
        </ImagenGrande>
        <BlancoSombra>
          <ImagenLogo>
            <img src={logofacebook} alt="logofacebook" />
          </ImagenLogo>
          <LetraChica>
            Trasmisión en vivo: Aidelyn Brage <br />
            Trasmisión en vivo: Irma Durán <br />
            Gracias a ambas
          </LetraChica>
        </BlancoSombra>
        <Espacio />
        <Espacio />
        <BordeCentro>
          Ir a la página Boletín <br />
          <Link to="/boletin">Orden del programa de Adoración</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Iglesia en Oración</TituloGrande>
        <LetraGrande>Miércoles 8:00 pm - 9:30 pm</LetraGrande>
        <TituloChico>Oramos por tus necesidades</TituloChico>
        <Espacio />
        <ImagenSombra>
          <img src={imagenzoom} alt="imagenzoom" />
        </ImagenSombra>
        <Espacio />
        <BlancoSombra>
          <ImagenLogo2>
            <img src={zoomlogo} alt="zoomlogo" />
          </ImagenLogo2>
          <LetraChica>
            Entra a Zoom: únete / join <br />
            Código: 278-213-7957 <br />
          </LetraChica>
        </BlancoSombra>
        <Espacio />
        <Espacio />
        <BordeCentro>
          Ir a las listas de oración <br />
          <Link to="/oracion">Listas de Oración - Miércoles</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Comparte con otros</TituloGrande>
        <LetraGrande>Boletín Digital Emmanuel</LetraGrande>
        <Espacio />
        <ImagenMedia>
          <img src={barcode} alt="barcode" />
        </ImagenMedia>
        <Espacio />
        <LetraGrande>emmanuelspanishsite.com</LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ImagenGrande>
          <img src={teesperamos} alt="teesperamos" />
        </ImagenGrande>
      </TarjetaBlanca>
    </>
  );
};

export default Cultos;
