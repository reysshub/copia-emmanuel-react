import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  TarjetaBlanca,
  ImagenGrande,
  ImagenSombraDos,
  ImagenMedia,
  TituloGrande,
  TituloMedio,
  LetraGrande,
  Espacio,
  BordeCentro,
  ConexionWeb,
  BlancoSombraCorto,
  FotoLogo,
} from "../components/CardCodigo";
import anuncios from "../img/anuncios.png";
import profesionales from "../img/Eventos/profesionales3.webp";
import eventoJuvenil from "../img/Eventos/celebracionjuvenil.webp";
import camporeeUnion from "../img/Eventos/camporeeUnion.png";
import aliahbeltre from "../img/familia/aliahbeltre.png";
import kelinleyva from "../img/familia/kelinleyva.png";
import cena from "../img/Eventos/cenaSenor.jpg";
import mujer from "../img/Eventos/ministerioMujer.jpg";
import logoVBS from "../img/logos/logoVBS.png";
import manosorando from "../img/manosorando.webp";
import campHotel from "../img/campKulaqua/campHotel.png";

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
        <TituloGrande>Viaje a Camp Kulaqua</TituloGrande>
        <LetraGrande>
          Mini Retiro Espiritual Emmanuel
          <br />
          Agosto 5 al 7 Viernes a Domingo
        </LetraGrande>
        <LetraGrande>Haz tu reservación urgente</LetraGrande>
        <ImagenMedia>
          <img src={campHotel} alt="imagen manos orando" />
        </ImagenMedia>
        <BordeCentro>
          <LetraGrande>
            Organizadora: Dorys Ojeda (407)310-5261 <br />
            El hotel tiene 20 habitaciones Si quieres más información dirígete a
            la página Reservación que está bajo el Tab: Contacto
            <Espacio />
            <BordeCentro>
              Ir a la página Contacto / Regístrate
              <br />
              <Link to="/registrate">Página Regístrate</Link>
            </BordeCentro>
            <Espacio />
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Reunión de Oración Sabática</TituloGrande>
        <LetraGrande>Comenzando 9 de Julio 2022</LetraGrande>
        <LetraGrande>Hora: 9:15 - 9:40 am</LetraGrande>
        <FotoLogo>
          <img src={manosorando} alt="imagen manos orando" />
        </FotoLogo>
        <BordeCentro>
          <LetraGrande>
            Dirigida por el Pastor Mariano González junto con nuestra hermana
            Irma Durán. <br />
            Media hora de reflexión y oraciones por las necesidades espirituales
            personales, por los hijos, jóvenes de la iglesia, nuestros niños y
            por todas las necesidades.
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Ministerio de la Mujer</TituloGrande>
        <LetraGrande>Sábado 9 de Julio 2022</LetraGrande>
        <LetraGrande>Culto de Adoración</LetraGrande>
        <FotoLogo>
          <img src={mujer} alt="imagen ministerio mujer" />
        </FotoLogo>
        <BordeCentro>
          <LetraGrande>
            Sábado 9 en la tarde, tendremos un "Te" en el comedor para todas las
            damas (mujeres y niñas). Invite a damas no adventistas porque tiene
            un propósito de edificar y ayudar en diferentes necesidades.
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>La Cena del Señor</TituloGrande>
        <LetraGrande>Sábado 16 de Julio 2022</LetraGrande>
        <LetraGrande>Todos Invitados</LetraGrande>
        <FotoLogo>
          <img src={cena} alt="imagen cena" />
        </FotoLogo>
        <BordeCentro>
          <LetraGrande>
            "Porque todas las veces que comiereis este pan, y bebiereis esta
            copa, la muerte del Señor anunciáis hasta que venga". 1 Corintios
            11:26
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Temas Actualidad Social</TituloGrande>
        <LetraGrande>
          Sección nueva en este boletín <br /> Promueve el estudio de temas de
          importancia actual <br />
          Temas que usted debería interesarse por entender
          <Espacio />
          Dedica un poco de tiempo a aprender
        </LetraGrande>
        <Espacio />
        <BordeCentro>
          Ir a la página Edúcate y bajar al final <br />
          <Link to="/educate">Página Edúcate</Link>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Página - Profesionales</TituloGrande>
        <LetraGrande>Conectándonos</LetraGrande>
        <Espacio />
        <FotoLogo>
          <img src={profesionales} alt="imagen profesionales" />
        </FotoLogo>
        <Espacio />
        <TituloMedio>Propósito</TituloMedio>
        <LetraGrande>
          Conectar a nuestros profesionales con otros miembros. Profesional de
          Emmanuel, envíame tu información, si así lo deseas. Lee bien las
          instrucciones. El Pastor.
          <br />
        </LetraGrande>
        <Espacio />
        <TituloMedio>Visita el Tab - Contacto / Profesiones</TituloMedio>
        <Espacio />
        <BordeCentro>
          Ir a la página Profesiones <br />
          <Link to="/profesiones">Página Profesiones</Link>
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

        <FotoLogo>
          <img src={logoVBS} alt="logo VBS" />
        </FotoLogo>
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
        <FotoLogo>
          <img src={camporeeUnion} alt="camporee union" />
        </FotoLogo>

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
