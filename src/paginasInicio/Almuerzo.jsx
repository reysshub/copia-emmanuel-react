import React from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import { TarjetaBlanca, ImagenSombra, ImagenMedia, TituloGrande, TituloMedio, LetraGrande, Espacio, FotoLogo } from '../components/CardCodigo';
import almuerzos from '../img/almuerzos.png';
import almorzando from '../img/almorzandofelices.jpg';
import alimentosAmorAmistad from '../img/alimentosamoramistad.png';
import rosemorales from '../img/familia/rosemorales.png';

const Almuerzo = () => {
  return (
    <>
      <TarjetaBlanca>
        <ImagenMedia>
          <img src={almuerzos} alt="almuerzos" />
        </ImagenMedia>
        <ImagenSombra>
          <img src={almorzando} alt="almorzando" />
        </ImagenSombra>
        <Espacio />
        <ImagenMedia>
          <img src={alimentosAmorAmistad} alt="alimentos" />
        </ImagenMedia>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Calendario de Almuerzos</TituloGrande>
          <LetraGrande>
            Iglesia Emmanuel Tampa <br />
            Sujeto a Cambios
            <Espacio />
          </LetraGrande>
          <SombraBlanca>
            Mes de Mayo 2022
            <Espacio />
            Sábado 7 "Celebrando a las Madres" <br />
            Sábado 21 "Almuerzo regular"
          </SombraBlanca>
          <Espacio />
          <SombraBlanca>
            Mes de Junio 2022
            <Espacio />
            Sábado 4 "Celebración Juvenil" <br />
            Sábado 18 "Celebrando a los Padres"
          </SombraBlanca>
          <Espacio />
          <SombraBlanca>
            Mes de Julio 2022
            <Espacio />
            Sábado 9 "Almuerzo Regular" <br />
            Sábado 23 "Almuerzo regular"
          </SombraBlanca>
        
        <Espacio />
        <Espacio />
        <TituloMedio>Simpatía, Salud, Satisfacción </TituloMedio>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Guía de Propósitos</TituloGrande>
          <Espacio />
          <LetraAlmuerzo>
            1. Confraternidad, amistad, alegría, compañerismo. <br />
            2. Oportunidad de relación entre los hermanos. <br />
            3. Integración, todos aprendiendo a compartir. <br />
            4. Atención cariñosa a nuestros visitantes. <br />
            5. Todos intentando crear un ambiente de familia. <br />
            6. Que nadie se quede con hambre. <br />
            7. Ganando almas para el reino de Cristo. <br />
            8. Que el nombre de Dios sea glorificado en su Iglesia. <br />
          </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Cómo intentamos hacerlo</TituloGrande>
          <LetraAlmuerzo>
            1. La Junta de Iglesia hace el plan general. <br />
            2. Nuestra amada directora de cocina coordina. <br />
            3. Consulte con la directora antes de cocinar, para mejor balance de los alimentos. <br />
            4. Los hermanos proveen comida y recursos. <br />
            5. Hermanas con amor preparan los alimentos. <br />
            6. Aceptamos donación de: platos, vasos, cubiertos desechables, servilletas, etc. <br />
            7. Voluntarios ayudan en la entrega y el orden. <br />
            8. Voluntarios ayudan a recoger y limpiar. <br />
            9. Todos somos voluntarios sin excepción. <br />
            10. Animamos a la mayoría a participar. <br />
            11. Llevar la carga entre todos es mucho mejor. <br />
            12. Nuestra familia crece espiritualmente mientras compartimos. <br />
            13. Juntos hacemos una obra buena para Dios y la Iglesia. <br />
            <Espacio />
            GRACIAS AMADOS HERMANOS POR SU AYUDA
          </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Otras Orientaciones</TituloGrande>
          <LetraAlmuerzo>
            1. Recordemos que el sábado es el día del Señor. 
            <Espacio />
            2. Hagamos planes para hacer la preparación de los alimentos el viernes antes de la puesta del sol y no el sábado. Queremos adorar al Creador del sábado.
            <Espacio />
            3. Mantenga buena comunicación con la directora. No quisiéramos que la comida se desperdicie. Tampoco quisiéramos que alguien se quede sin comer o con hambre.
            <Espacio />
            4. Es preferible que usted traiga la comida en una bandeja desechable y lista para servir.
            <Espacio />
            Eso significa que la comida venga ya caliente (no fría del refrigerador).
            <Espacio />
            Si todos lo hacemos de esa manera, cooperamos para que el equipo de la cocina no se pierda el culto. 
            <Espacio />
            También ahorramos tiempo a la hora de servir.
            <Espacio />
            Si usted calienta la comida, la pone en la bandeja desechable, la envuelve en una tela aparente (toalla o algo parecido), y luego la mete dentro de una bolsa plástica y la cierra: la comida mentiene el calor hasta la hora de ser servida.
            <Espacio /> 
            5. No olviden que esto lo hacemos para Dios y para la humanidad, por eso hacemos lo mejor. 
            <Espacio />
            "Servid a Jehová con alegría, venid ante su presencia con regocijo". Salmo 100:2
          </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Todos pueden Cooperar</TituloGrande>
        <LetraGrande>Gracias anticipadas</LetraGrande>
        <Espacio />
        <FotoLogo>
          <img src={rosemorales} alt="foto rosemary" />
        </FotoLogo>
        <Espacio />
            <LetraGrande>
              Departamento de Cocina <br />
              Directora: Rosemary Morales
              </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

    </>
  )
}

export const SombraBlanca = styled.div`
  box-shadow: 0 10px 10px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius:10px;
  text-align:left;
  color:darkblue;
  font-size:18px;
  margin-top:12px;
  margin:auto;
  padding:15px;
  width:80%;
  gap:16px;

  @media screen and (min-width: 750px){
    font-size:26px;
    width:60%;
  }
`
export const LetraAlmuerzo = styled.p`
  font-family:'Oswald';
  color:darkblue;
  font-size: 18px;
  text-align:left;
  padding:10px;
  margin:auto;

  @media screen and (min-width: 750px){
    font-size:28px;
    }
`
export default Almuerzo