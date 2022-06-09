import React from "react";
import styled from "styled-components";
import {
  ColorWhite,
  TarjetaBlanca,
  TituloChico,
  TituloMedio,
  ImagenGrande,
  LetraGrande,
  LetraChica,
  Espacio,
  BordeCentro,
  CajaBotones,
  BlancoSombraCorto,
  ConexionWeb,
} from "../components/CardCodigo";
// import {BotonNuevo, ContenedorBotonCentrado, MensajeExito} from './../components/Formularios';
// import FormularioCampKulaqua from '../components/FormularioCampKulaqua';
// import FormularioAcceso from '../components/FormularioAcceso';
// import FormularioEntrada from '../components/FormularioEntrada';
import campLetrero from "../img/campKulaqua/campLetrero.png";
import campHotel from "../img/campKulaqua/campHotel.png";
import campHotelPortal from "../img/campKulaqua/campHotelPortal.png";
import campHabitacion from "../img/campKulaqua/campHabitacion.png";
import campRio1 from "../img/campKulaqua/campRio1.png";
import campRio2 from "../img/campKulaqua/campRio2.png";
import campParque1 from "../img/campKulaqua/campParque1.png";
import campParque2 from "../img/campKulaqua/campParque2.png";
import campParque3 from "../img/campKulaqua/campParque3.png";
// import Formularios from '../components/Formularios';

// let entrada = true;

const Registrate = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Registrate Ahora</ColorWhite>
      </TituloMedio>

      <TarjetaBlanca>
        <Direccion>
          <TituloMedio>Información Camp Kulaqua</TituloMedio>
          <Espacio />
          Dirección: 23400 NW 212th Ave, High Springs, FL 32643 <br />
          Distancia desde la Iglesia Emmanuel: 154.2 millas <br />
          Tiempo de viaje: 2 horas 34 min. (usando I-75)
        </Direccion>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Regístración Camp Kulaqua</TituloMedio>
        <LetraGrande>
          Se anunciará fecha <br />
        </LetraGrande>
        <BordeCentro>
          <LetraChica>
            Reservación de habitación <br />
            Registración de asistentes
          </LetraChica>
        </BordeCentro>

        {/* <Espacio />
            <ContenedorBotonCentrado>
            <BotonNuevo type="submit">Registrate</BotonNuevo>
                <Espacio />
                <BotonNuevo type="submit">Inicia Sesión</BotonNuevo>
            </ContenedorBotonCentrado>
            <Espacio /> */}

        {/* {entrada ? <Formularios /> : <FormularioEntrada />}  */}

        {/* <FormularioAcceso /> */}
        {/* <FormularioEntrada /> */}

        {/* <FormularioCampKulaqua /> */}
      </TarjetaBlanca>

      <TarjetaBlanca>
        <Espacio />
        <LetraGrande>
          Fecha límite para registro y pago: <br />
          Fecha 00/2022 <br />
          <Espacio />
          Costo Habitación Hotel <br />
          $ 000.00 (Incluye las 2 noches) <br />
          Sin importar la cantidad de ocupantes <br />
          <Espacio />
          Pago adicional por persona para <br />
          "Gastos extras del evento" <br />
          $ 15.00 - De 10 años hacia arriba <br />
          <Espacio />
          <BordeCentro>
            Nota: Ese dinero es para cubrir: Gastos de presentadores invitados:
            viaje, hospedaje, comida y honorario. <br />
            <Espacio />
            También será usado para comprar la merienda del sábado por la noche
            en el social, y otros recursos necesarios para la actividad. <br />
            <Espacio />
            La iglesia va a asumir el balance faltante. <br />
          </BordeCentro>
          <Espacio />
          Opciones de pago <br />
          Se recibe cash ó cheque <br />
          Entrégalo al tesorero ó a Dorys Ojeda <br />
          <Espacio />
          <BordeCentro>
            Puedes usar "AdventistGiving" pero imprime <br />
            recibo y envíanos copia para confirmación. <br />
            De otra forma no nos enteramos <br />
            <Espacio />
            <CajaBotones>
              <BlancoSombraCorto>
                <ConexionWeb href="https://adventistgiving.org/#/org/ANTTJB/envelope/start">
                  AdvtGiving
                </ConexionWeb>
              </BlancoSombraCorto>
            </CajaBotones>
            <Espacio />
            "Iglesia Local - Presupuesto de la Iglesia" <br />
          </BordeCentro>
          <Espacio />
          Responsable del Evento <br />
          Dorys Ojeda - Teléfono (407) 310-5261
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <Espacio />
        <TituloMedio>Información Adicional</TituloMedio>
        <ParrafoRegistro>
          1. Las edades son importantes para las actividades que vamos a estar
          organizando por grupos de edades. <br />
          <Espacio />
          2. Las habitaciones del hotel tienen: 2 camas queen, 2 literas
          personales, un sofá cama queen. (Capacidad total 8 personas), una mesa
          con 4 sillas. Y todo lo necesario como sábanas, toallas, refrigerador
          pequeño, microwave, closet y un baño amplio cómodo, funcional,
          dividido en tres partes separadas con privacidad: 1 Toilet, 1 ducha, y
          2 lavamanos. Puede haber 4 personas a la vez usando alguna parte del
          baño, sin afectar al resto. <br />
          <Espacio />
          3. Si añades 1 persona extra al grupo, debes llevar su colchoneta
          personal, sábana y toalla extra. <br />
          <Espacio />
          4. El pago total del costo de la habitación debes hacerlo antes de la
          fecha límite, de lo contrario podemos dar la habitación a otro grupo.{" "}
          <br />
          <Espacio />
          5. El pago total del grupo incluye: costo habitación, y además, parte
          del costo de la actividad en general. Invitados, recursos etc. Aun
          cuando la iglesia va a cubrir una parte. <br />
          <Espacio />
          6. Detalles como comida, lo más probable es que cada cual decida si va
          a pagar su comida en el comedor de CampKulaqua (pago separado) o si
          prefiere llevar su propia comida. Les mantendremos informados sobre
          las opciones disponibles. <br />
          <Espacio />
          7. Si te arrepientes después de la fecha límite, y has hecho el pago,
          es tu responsabilidad conseguir quien te sustituya y te pague tu
          importe de regreso. No podemos hacernos responsables del pago de una
          habitación a útima hora. Aunque tengamos la mejor voluntad. Siempre
          intentaremos buscar sustitutos, pero no depende de nosotros.
          <br />
          <Espacio />
          8. Dios permita que logremos hacer de esta actividad una bendicion
          para todas nuestras familias. Necesitamos de parte de todos, apoyo,
          brevedad en registración y pago. Comprensión y buena voluntad.
          Intentamos hacer lo mejor para ustedes y para Dios. <br />
          <Espacio />
        </ParrafoRegistro>
        <TituloChico>Gracias por participar</TituloChico>
        <Espacio />
      </TarjetaBlanca>

      <TituloMedio>
        <ColorWhite>Fotos Camp Kulaqua</ColorWhite>
      </TituloMedio>

      <TarjetaBlanca>
        <ImagenGrande>
          <img src={campLetrero} alt="camp Letrero" />
          <img src={campHotel} alt="camp Hotel" />
          <img src={campHotelPortal} alt="camp Hotel Portal" />
          <img src={campHabitacion} alt="camp Hotel Habitacion" />
          <img src={campRio1} alt="camp Rio1" />
          <img src={campRio2} alt="camp Rio2" />
          <img src={campParque3} alt="camp Parque 1" />
          <img src={campParque2} alt="camp Parque 2" />
          <img src={campParque1} alt="camp Parque 3" />
        </ImagenGrande>
      </TarjetaBlanca>
    </>
  );
};

export const ParrafoRegistro = styled.p`
  font-family: "Oswald";
  color: darkblue;
  font-size: 16px;
  text-align: justify;
  padding: 10px;

  @media screen and (min-width: 750px) {
    font-size: 22px;
  }
`;
export const Direccion = styled.p`
  font-family: "Oswald";
  color: darkblue;
  font-size: 15px;
  text-align: Center;
`;
export default Registrate;
