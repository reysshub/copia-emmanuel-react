import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  TarjetaBlanca,
  ImagenMedia,
  TituloGrande,
  TituloMedio,
  LetraGrande,
  Espacio,
  BordeCentro,
  FotoLogo,
} from "../components/CardCodigo";
import felizcumple from "../img/felizcumple.jpg";
import felicidades from "../img/felicidades.png";
import iglesia1 from "../img/iglesias/iglesia9.jpg";
import iglesia2 from "../img/iglesias/iglesia12.jpg";
import iglesia3 from "../img/iglesias/iglesia4.jpg";
import elsyjorge from "../img/familia/elsyjorge.png";

const Miembros = () => {
  return (
    <>
      <TarjetaBlanca>
        <ImagenMedia>
          <img src={iglesia1} alt="imagen templo" />
        </ImagenMedia>
        <LetraGrande>Información Miembros</LetraGrande>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Cómo hacerte Miembro</TituloGrande>
        <LetraGrande>Bautizo, Profesión de Fe, Traslado</LetraGrande>
        <ImagenChica>
          <img src={iglesia2} alt="imagen iglesia" />
        </ImagenChica>
        <Espacio />
        <BordeCentro>
          <LetraGrande>
            Acércate a:
            <Espacio />
            Secretaria de Iglesia: Elsy Jorge <br />
            Pastor: Reynaldo Ojeda Jr. <br />
            Infórmate - Tab: Contacto / Líderes <br />
          </LetraGrande>
          <Espacio />
          <Link to="/lideres">Página Líderes</Link>
          <Espacio />
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Proceso de Traslado</TituloGrande>
        <ImagenChica>
          <img src={iglesia3} alt="imagen iglesia" />
        </ImagenChica>
        <Espacio />
        <TituloMedio>Nuestros Hermanos</TituloMedio>
        <LetraGrande>
          Esperando Respuesta de las Iglesias <br />
          Para traslado
        </LetraGrande>
        <Espacio />
        <CajaCumpleanos>
          <DosColumnas>
            1. José Daniel Valdivia <br />
            2. Manuel García <br />
            3. Alberto Contreras <br />
            4. Cesarina Contreras <br />
          </DosColumnas>
          <DosColumnas>
            5. Dania Sepúlveda <br />
            6. Marlene Silvente <br />
            7. Domingo Silvente <br />
            8. Esther Blanco
          </DosColumnas>
        </CajaCumpleanos>
        <Espacio />
        <TituloMedio>Recibiendo Nuevos Hermanos</TituloMedio>
        <LetraGrande>
          Profesión de fe <br />
          Sábado 25 de Junio / 2022
        </LetraGrande>
        <CajaCumpleanos>
          <DosColumnas>
            1. Fernando Avila <br />
            2. <br />
          </DosColumnas>
          <DosColumnas>
            {/* 5. Dania Sepúlveda <br />
            6. Marlene Silvente <br />
            7. Domingo Silvente <br />
            8. */}
          </DosColumnas>
        </CajaCumpleanos>
        <Espacio />
        <TituloMedio>Traslados para otra Iglesia</TituloMedio>
        <LetraGrande>Sábado 11 de Junio / 2022</LetraGrande>
        <DosColumnas>
          <LetraGrande>
            1. Noemí Nestherdali <br />
            (Desde Tampa para Clearwater) <br />
          </LetraGrande>
        </DosColumnas>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Lista cumpleaños Junio</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnas>
            1. Mainelis Heredia - Junio 1 <br />
            2. Eneida Peláez - Junio 1 <br />
            3. Martha C Lewis - Junio 4 <br />
            4. Marcelo Silva - Junio 4 <br />
            5. Norma Manchón - Junio 6 <br />
            6. Margarita Suárez - Junio 10 <br />
            7. Marco Castellano - Junio 12 <br />
            8. José A Moreno - Junio 13 <br />
            9. Bismar Sánchez - Junio 15 <br />
            10. Carlos L Gómez - Junio 16 <br />
          </DosColumnas>
          <DosColumnas>
            11. Anyelo González - Junio 21 <br />
            12. Luís R Iglesias - Junio 21 <br />
            13. Olga Lajara - Junio 22 <br />
            14. Ediltrudis Sotelo -Junio 23 <br />
            15. Amaury Viera - Junio 26 <br />
            16. Reynaldo Ojeda - Junio 27 <br />
            17. Jimmy González - Junio 28 <br />
            18. Rafael Reyes - Junio 28 <br />
            19. Martha Fuentes - Junio 30 <br />
            20. Irma Velásquez - Junio 30 <br />
          </DosColumnas>
        </CajaCumpleanos>
        <Espacio />

        <TituloGrande>Lista cumpleaños Julio</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnas>
            1. Ada Sepúlveda - Julio 2 <br />
            2. Yasiel Aguila - Julio 6 <br />
            3. Rigoberto Gallardo - Julio 12 <br />
            4. Yngrid López - Julio 13 <br />
            5. Carlos A Alejandro - Julio 14 <br />
            6. Mirta Linton - Julio 14 <br />
            7. Bertha Lastra - Julio 15 <br />
          </DosColumnas>
          <DosColumnas>
            8. Yajaira Cintrón - Julio 18 <br />
            9. Vicente Hernández - Julio 19 <br />
            10. Yoleidi Reyes - Julio 19 <br />
            11. Elizabeth Fuentes - Julio 20 <br />
            12. Darío A Lozada - Julio 21 <br />
            13. Carlos Suyi Gómez - Julio 23 <br />
            14. <br />
          </DosColumnas>
        </CajaCumpleanos>
        <Espacio />

        <ImagenMedia>
          <img src={felizcumple} alt="feliz cumple" />
        </ImagenMedia>
        <ImagenMedia>
          <img src={felicidades} alt="felicidades" />
        </ImagenMedia>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Registros Actualizados</TituloGrande>
        <LetraGrande>Información valiosa</LetraGrande>
        <Espacio />
        <FotoLogo>
          <img src={elsyjorge} alt="foto elsy" />
        </FotoLogo>
        <Espacio />
        <LetraGrande>
          Departamento Secretariado Iglesia <br />
          Secretaria: Elsy Jorge
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export const CajaCumpleanos = styled.div`
  gap: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: darkblue;

  @media screen and (min-width: 750px) {
    justify-content: space-around;
    font-size: 25px;
  }
`;
export const DosColumnas = styled.div`
  /* border:1px dashed blue; */
  text-align-last: jutify;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 750px) {
    font-size: 25px;
  }
`;
export const DosColumnasLeft = styled.div`
  /* border:1px dashed blue; */
  text-align-last: left;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 750px) {
    font-size: 28px;
  }
`;
export const ImagenChica = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  img {
    width: 35%;
  }

  @media screen and (min-width: 750px) {
    img {
      width: 170px;
    }
  }
`;

export default Miembros;
