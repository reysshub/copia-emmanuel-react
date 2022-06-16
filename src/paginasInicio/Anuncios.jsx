import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  TarjetaBlanca,
  ImagenGrande,
  ImagenSombraDos,
  ImagenMedia,
  TituloGrande,
  TituloMedio,
  TituloChico,
  LetraGrande,
  Espacio,
  BordeCentro,
  ConexionWeb,
  BlancoSombraCorto,
  FotoLogo,
} from "../components/CardCodigo";
import anuncios from "../img/anuncios.png";
import profesionales from "../img/Eventos/profesionales3.webp";
import diadelpadre from "../img/Eventos/diadelpadre.webp";
import imagenAlmuerzo from "../img/Eventos/almuerzopadres.jpg";
import imagenDeportes from "../img/Eventos/imagenDeportes.jpg";
import eventoJuvenil from "../img/Eventos/celebracionjuvenil.webp";
import camporeeUnion from "../img/Eventos/camporeeUnion.png";
import aliahbeltre from "../img/familia/aliahbeltre.png";
import kelinleyva from "../img/familia/kelinleyva.png";
import logominfantil from "../img/logos/logominfantil.png";
import logoVBS from "../img/logos/logoVBS.png";
import graduada from "../img/Eventos/graduado.jpg";
import graduado from "../img/Eventos/graduada.jpg";

const Anuncios = () => {
  return (
    <>
      <TarjetaBlanca>
        <ImagenSombraDos>
          <ImagenMedia>
            <img src={anuncios} alt="bienvenido" />
          </ImagenMedia>
        </ImagenSombraDos>
        <ImagenMedia>
          <LetraGrande>Infórmate y Participa</LetraGrande>
        </ImagenMedia>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Fin de Curso Escolar</TituloGrande>
        <LetraGrande>Celebrándolo en grande</LetraGrande>
        <TituloMedio>Felicidades a todos</TituloMedio>
        <Espacio />
        <FotoDoble>
          <img src={graduado} alt="graduado" />
          <img src={graduada} alt="graduada" />
        </FotoDoble>
        <LetraGrande>
          Nos gozamos con nuestros estudiantes por un final de curso exitoso.
          Que disfruten de unas felices vacaciones y nunca dejen de aprender.
          Les amamos. El Pastor
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Página - Profesionales</TituloGrande>
        <LetraGrande>Conectándonos</LetraGrande>
        <Espacio />
        <ImagenMedia>
          <img src={profesionales} alt="imagen profesionales" />
        </ImagenMedia>
        <Espacio />
        <TituloMedio>Propósito</TituloMedio>
        <LetraGrande>
          Conectar a nuestros profesionales con otros miembros. Profesional de
          Emmanuel, envíame tu información, si así lo deseas. Lee bien las
          instrucciones. El Pastor.
          <br />
        </LetraGrande>
        <Espacio />
        <TituloMedio>Visita el tab - Contacto / Profesiones</TituloMedio>
        <Espacio />
        <BordeCentro>
          Ir a la página Profesiones <br />
          <Link to="/profesiones">Página Profesiones</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Mes de los Padres</TituloGrande>
        <LetraGrande>Todo el mes de Junio</LetraGrande>
        <LetraGrande>Celebrándolo en grande</LetraGrande>
        <ImagenGrande>
          <img src={diadelpadre} alt="imagen padre" />
        </ImagenGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Almuerzo dedicado a los Padres</TituloGrande>
        <LetraGrande>Auspiciado por la Escuela Sabática</LetraGrande>
        <LetraGrande>Sábado 18 de Junio</LetraGrande>
        <ImagenGrande>
          <img src={imagenAlmuerzo} alt="imagen comida" />
        </ImagenGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Seminario Min. Infantil</TituloGrande>
        <LetraGrande>
          Sábado 25 de Junio /2022 <br />
          Hora: 4:00 pm a 7:00pm <br />
        </LetraGrande>
        <TituloMedio>Lugar</TituloMedio>
        <TituloChico>
          Iglesia de Sheeler Oaks en Apopka <br />
          Dirección: 1822 Sheeler AVe, Apopka, FL 32703 <br />
          Ministerios Hispanos rentarán un VAN para ir y regresar desde la
          iglesia Emmanuel Tampa
        </TituloChico>
        <LetraGrande>
          Auspiciado por los Ministerios Hispanos <br />
          <Espacio />
          Invitados directores, maestros, aspirantes. <br />
          Necesitamos capacitar a la mayor cantidad de personas para trabajar en
          favor de nuestros niños.
          <Espacio />
        </LetraGrande>
        <FotoLogo>
          <img src={logominfantil} alt="logo min infantil" />
        </FotoLogo>
        <LetraGrande>
          Por favor, déjale saber a Dorys si vas a asistir. <br />
          Gracias. Dorys Ojeda: (407) 310-5261
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Ministerios Hispanos</TituloGrande>
        <LetraGrande>Julio 4 / 2022</LetraGrande>
        <TituloMedio>Evento de Jóvenes</TituloMedio>
        <LetraGrande>Espiritual-social-deportivo</LetraGrande>
        <ImagenGrande>
          <img src={imagenDeportes} alt="imagen deportes" />
        </ImagenGrande>
        <BordeCentro>
          <TituloMedio>Coordinador Hispano</TituloMedio>
          <LetraGrande>
            Pastor: Hector García <br />
            Cell (321) 202-6907
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Vacation Bible School</TituloGrande>
        <TituloMedio>VBS Rocky Railway</TituloMedio>
        <LetraGrande>
          Julio 17 - 21 / 2022 <br />
          Hora: 5:30 pm - 8:30 pm <br />
          Edades: 4 - 12 años <br />
        </LetraGrande>
        <TituloMedio>Dirige: Aidelyn Brage</TituloMedio>
        <LetraGrande>
          Tel - (602) 435-5476 <br />
          Regístrate ya
        </LetraGrande>

        <ImagenGrande>
          <img src={logoVBS} alt="logo VBS" />
        </ImagenGrande>
        <LetraGrande>
          Será una semana Especial <br />
          Trae a tus niños para que a través de cantos, manualidades, juegos y
          otras experiencias aprendan sobre el amor de Dios. <br />
          Si te registras pronto, vas a estar cooperando con la preparación.
          Registrarse a última hora no facilita las gestiones de los recursos.
          Gracias.
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Evangelismo Juvenil</TituloGrande>
        <LetraGrande>Agosto 13 - 20 / 2022</LetraGrande>
        <TituloMedio>Emmanuel Tampa</TituloMedio>
        <LetraGrande>
          Será una semana Especial de jóvenes <br />
          Reuniones noches y madrugadas también <br />
          Predicador Invitado: Carlos Antonio Alejandro
        </LetraGrande>
        <ImagenGrande>
          <img src={eventoJuvenil} alt="evento juvenil" />
        </ImagenGrande>
        <Espacio />
        <BordeCentro>
          Ir a la página Jóvenes <br />
          <Link to="/jovenes">Página Jóvenes</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Camporee Conquistadores</TituloGrande>
        <LetraGrande>
          Southern Union Camporee! <br />
          Regístrate Ya
        </LetraGrande>
        <ImagenGrande>
          <img src={camporeeUnion} alt="camporee union" />
        </ImagenGrande>

        <BlancoSombraCorto>
          <ConexionWeb href="https://www.adventsource.org/events/southern-union-pathfinder-camporee-2022-631">
            Registro Botón
          </ConexionWeb>
        </BlancoSombraCorto>
        <Espacio />
        <Espacio />
        <BordeCentro>
          Ir a la página Conquistador <br />
          <Link to="/conquistador">Página Conquistador</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Mantente Informado</TituloGrande>
        <LetraGrande>
          Departamento Comunicaciones <br />
          Involúcrate en Todo
        </LetraGrande>
        <Espacio />
        <DosLogos>
          <img src={aliahbeltre} alt="aliah logo" />
          <img src={kelinleyva} alt="kelin logo" />
        </DosLogos>
        <LetraGrande>
          Directoras: Aliah Beltré <br />& Kelin Leyva
        </LetraGrande>
      </TarjetaBlanca>
    </>
  );
};

export const DosLogos = styled.div`
  /* border:1px dashed blue; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 100px;
    border-radius: 50%;
  }

  @media screen and (min-width: 750px) {
    img {
      width: 200px;
    }
  }
`;

export const FotoDoble = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 100px;
  }

  @media screen and (min-width: 750px) {
    img {
      width: 200px;
    }
  }
`;

export default Anuncios;
