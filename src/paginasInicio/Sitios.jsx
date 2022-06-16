import React from "react";
import {
  TarjetaBlanca,
  ImagenGrande,
  ImagenSombra,
  ImagenMedia,
  TituloGrande,
  TituloChico,
  LetraGrande,
  Espacio,
  ConexionWeb,
  CajaBotones,
  BlancoSombraCorto,
} from "../components/CardCodigo";
import bienvenidoSitios from "../img/bienvenidoSitios.jpg";
import sitiosWeb from "../img/sitiosWeb.png";
import faceemmanuel from "../img/faceemmanuel.png";
import jovenesfacebook from "../img/jovenesfacebook.png";
import emmanueltampaja from "../img/emmanueltampaja.png";
import logoradio from "../img/logoradio.png";
import ConferenciaWebSite from "../img/ConferenciaWebSite.png";
import clearwateryoutube from "../img/clearwateryoutube.png";
import clearwater1 from "../img/clearwater1.png";
import teesperamos1 from "../img/teesperamos1.png";

const Sitios = () => {
  return (
    <>
      <TarjetaBlanca>
        <ImagenSombra>
          <img src={bienvenidoSitios} alt="bienvenidoSitios" />
        </ImagenSombra>
        <Espacio />
        <ImagenMedia>
          <img src={sitiosWeb} alt="sitiosWeb" />
        </ImagenMedia>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Visítanos en facebook</TituloGrande>
        <LetraGrande>Emmanuel Tampa Clearwater</LetraGrande>
        <TituloChico>Página del Distrito</TituloChico>
        <Espacio />
        <ImagenGrande>
          <img src={faceemmanuel} alt="faceemmanuel" />
        </ImagenGrande>
        <Espacio />
        <LetraGrande>Escucha los Sermones</LetraGrande>
        <LetraGrande>Administra la Página: El Pastor</LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Página de los Jóvenes</TituloGrande>
        <LetraGrande>en facebook</LetraGrande>
        <Espacio />
        <ImagenGrande>
          <img src={jovenesfacebook} alt="jovenesfacebook" />
          <img src={emmanueltampaja} alt="emmanueltampaja" />
        </ImagenGrande>
        <Espacio />
        <LetraGrande>Administra la Página: Aidelyn Brage</LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Radio Emmanuel Tampa</TituloGrande>
        <LetraGrande>Acercándonos más a Jesús</LetraGrande>
        <Espacio />

        <CajaBotones>
          <BlancoSombraCorto>
            <ConexionWeb href="http://zeno.fm/radio/radio-emmanuel-tampa/">
              Acceso Radio
            </ConexionWeb>
          </BlancoSombraCorto>
        </CajaBotones>

        <Espacio />
        <ImagenGrande>
          <LetraGrande>Tambien en facebook</LetraGrande>
          <img src={logoradio} alt="logoradio" />
        </ImagenGrande>
        <Espacio />
        <LetraGrande>
          Director: Jaime Valdivia tel - (813) 882-9991 <br />
          "Varios años al aire" Gracias Jaime
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Emmanuel Clearwater YouTube</TituloGrande>
        <LetraGrande>Nuestro Distrito</LetraGrande>
        <ImagenGrande>
          <img src={clearwateryoutube} alt="clearwateryoutube" />
          <img src={clearwater1} alt="clearwater1" />
        </ImagenGrande>
        <Espacio />
        <BlancoSombraCorto>
          <ConexionWeb href="https://www.youtube.com/results?search_query=Emmanuel+Clearwater+SDA">
            Acceso Youtube
          </ConexionWeb>
        </BlancoSombraCorto>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Southeastern Conference Página Web</TituloGrande>
        <Espacio />
        <CajaBotones>
          <BlancoSombraCorto>
            <ConexionWeb href="http://secsda.org/">Conferencia</ConexionWeb>
          </BlancoSombraCorto>
        </CajaBotones>
        <Espacio />
        <ImagenGrande>
          <img src={ConferenciaWebSite} alt="Conferencia Web Site" />
        </ImagenGrande>
        <Espacio />
        <LetraGrande>Director: Pastor Arnaldo Cruz</LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ImagenGrande>
          <img src={teesperamos1} alt="teesperamos1" />
        </ImagenGrande>
      </TarjetaBlanca>
    </>
  );
};

export default Sitios;
