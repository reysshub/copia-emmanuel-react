import React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";

import {
  TarjetaBlanca,
  TituloMedio,
  TituloChico,
  Espacio,
  ColorWhite,
  ColorRed,
  FotoLogo,
  LetraGrande,
  BordeCentro,
  ConexionWeb,
  ImagenSombra,
  TituloLeft,
  MarginLeft,
  ColorRojo,
} from "../components/CardCodigo";
import { LetraBoletin, LetraTexto } from "../paginasInicio/Boletin";
import { SombraBlanca, LetraAlmuerzo } from "../paginasInicio/Almuerzo";
import pepito from "../img/familia/pepitocepero2.png";
import eduardito from "../img/familia/eduardito.png";
import teffy from "../img/familia/teffylider.png";
import aliah from "../img/familia/aliahbeltre.png";
import kelin from "../img/familia/kelinleyva.png";
import elsy from "../img/familia/elsyjorge.png";
import dionis from "../img/familia/dionisleyva.png";
import heiden from "../img/familia/heiden2.png";
import david from "../img/familia/david2.png";
import carlos from "../img/familia/carlosantonio1.png";
import silvia from "../img/familia/silviapelaez.png";
import jose from "../img/familia/josepelaez.png";
import aidelyn from "../img/familia/aidelyn.png";
import milan from "../img/familia/milanfong.png";
import dorys from "../img/familia/dorysojeda.png";
import dania from "../img/familia/DaniaLeyva.png";
import marelis from "../img/familia/marelisdiaz.png";
import zulema from "../img/familia/zulepaneque.png";
import logomjuvenil from "../img/logos/logomjuvenil.png";
import celebracionjuvenil from "../img/Eventos/celebracionjuvenil.webp";

const Jovenes = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Ministerio Juvenil</ColorWhite>
      </TituloMedio>
      <TituloChico>
        <ColorWhite>Liderazgo y Recursos</ColorWhite>
      </TituloChico>

      <TarjetaBlanca>
        <TituloMedio>Nuestros Directores</TituloMedio>
        <Espacio />
        <ContenedorJovenes>
          <TarjetaJovenes>
            <img src={pepito} alt="pepito cepero" />
            Fernando Cepero
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={eduardito} alt="eduardito" />
            Eduardo Castillo
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={teffy} alt="teffy" />
            Tíffany Ruíz
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={aliah} alt="aliah" />
            Aliah Beltré
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={kelin} alt="kelin" />
            Kelin Leyva
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={elsy} alt="elsy" />
            Elsy Jorge
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={dionis} alt="dionis" />
            Dionis Leyva
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={heiden} alt="heiden" />
            Heiden Ojeda
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={david} alt="david" />
            David Burton
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={carlos} alt="carlos" />
            Carlos A Alejandro
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={silvia} alt="silvia" />
            Silvia Peláez
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={jose} alt="jose" />
            José Peláez
          </TarjetaJovenes>
        </ContenedorJovenes>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Colaboradoras Directas</TituloMedio>
        <Espacio />
        <ContenedorJovenes>
          <TarjetaJovenes>
            <img src={aidelyn} alt="aidelyn" />
            Aidelyn Brage <br />
            Dinámicas
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={milan} alt="milan" />
            Milán Fong <br />
            Matutina
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={dorys} alt="dorys" />
            Dorys Ojeda <br />
            Vestuario
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={dania} alt="dania" />
            Dania Leyva <br />
            Dinámicas
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={marelis} alt="marelis" />
            Marelis Díaz <br />
            Música
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={zulema} alt="zulema" />
            Zulema Paneque <br />
            Música
          </TarjetaJovenes>
          <Espacio />
        </ContenedorJovenes>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorJovenes>
          <FotoLogox>
            <img src={logomjuvenil} alt="logo ministerio juveniol" />
          </FotoLogox>
          <FotoLogox>
            <img src={logomjuvenil} alt="logo ministerio juveniol" />
          </FotoLogox>
          <FotoLogox>
            <img src={logomjuvenil} alt="logo ministerio juveniol" />
          </FotoLogox>
        </ContenedorJovenes>
        <Espacio />
        <BordeCentro>
          <ConexionWeb href="https://adventsourcecms.blob.core.windows.net/media/e11c30af-7d1a-4030-9e80-abaa010a88b6/QuickStartGuide_YouthMinistries.pdf?v=637236006878978085">
            Guía Ministerio Juvenil
          </ConexionWeb>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <Espacio />
        <TituloMedio>Orden Modelo Programa JA</TituloMedio>
        <LetraGrande>Sugerente</LetraGrande>
        <Espacio />
        <LetraTexto>
          El programa de jóvenes es también un culto de adoración. Con la
          diferencia de que es dirigido por los jóvenes, y tiene un formato
          juvenil, más dinámico, adaptado a las necesidades específicas de esa
          edad. Nunca debe perderse de vista que todas las actividades de la
          iglesia tienen como propósito principal honrar y adorar al creador.
        </LetraTexto>

        <Espacio />
        <ImagenSombra>
          <img src={celebracionjuvenil} alt="imagen celebracion juvenil" />
        </ImagenSombra>
        <Espacio />
        <Espacio />
        <TituloChico>
          <ColorRed>MUSICA DE MEDITACION</ColorRed>
        </TituloChico>
        <Espacio />

        <TituloLeft>Segmento Preliminar</TituloLeft>
        <Espacio />
        <LetraBoletin>
          1 -- Tiempo de alabanzas <br />
          2 -- Bienvenida entusiasta <br />
          3 -- Otra alabanza alegre <br />
          4 -- Lectura bíblica <br />
          5 -- Oración introductoria (adoración) <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Segmento Dinámico General</TituloLeft>
        <Espacio />
        <LetraBoletin>
          6 -- Anuncio de Actividades <br />
          7 -- Sección Sorpresa <br />
          8 -- Devoción Matutina <br />
          9 -- Alabanza dinámica <br />
          10 - Juego participativo <br />
          11 - Alabanza alegre <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Segmento Desarrollo del Tema</TituloLeft>
        <Espacio />
        <LetraBoletin>
          12 - Video introductorio del tema <br />
          13 - DESARROLLO DEL PROGRAMA O TEMA <br />
          14 - Conclusión, resumen, llamado <br />
          15 - Alabanza de conclusión <br />
          16 - Oración de conclusión <br />
          17 - Salida organizada <br />
        </LetraBoletin>
        <Espacio />
        <LetraTexto>
          Saludo y atención a las visitas <br />
          Saludo y atención a las visitas <br />
          Saludo y atención a las visitas <br />
        </LetraTexto>
        <Espacio />
        <BordeCentro>
          Resumen de Propósitos <br />
          <Espacio />
          <LetraAlmuerzo>
            * Adorar a Dios en un abiente juvenil, alegre, feliz. <br />
            * Enseñar a los jóvenes y menores el gozo de la participación en la
            iglesia. <br />
            * Desarrollar talentos, habilidades, liderazgo en nuestros jóvenes y
            menores. <br />* Juntos aprender y descubrir nuevos caminos del
            saber espiritual, intelectual, historia, en fin, conocimientos
            generales de la vida. <br />
            * Crear lazos de amistad, cariño y respeto entre jóvenes y adultos
            en la iglesia. <br />
            * Traer nuevos jóvenes y ganarlos para Cristo. <br />
            * Juntos desarrollar una fe sólida en la Palabra de Dios, mientras
            la compartimos de diferentes maneras en la programación. <br />*
            Mantener un compañerismo recíproco con los adultos de la iglesia.{" "}
            <br />
            * Mantenernos unidos, activos, creciendo hasta la segunda venida de
            Cristo. <br />
            * Los ingredientes indispensables son: <br />
            <Espacio />
            <MarginLeft>
              <ColorRojo>
                1. Gran interés en hacer algo útil. <br />
                2. Mucha oración para recibir ayuda de lo alto. <br />
                3. Mucho acopio de material y trabajo para ordenarlo,
                simplificarlo, hacerlo compacto, comprensible, significativo.{" "}
                <br />
                4. Todo lo bien hecho cuesta dedicación y esfuerzo, lectura y
                meditación. <br />
                5. Una buena repartición del material a los participantes con
                tiempo suficiente. <br />
                6. Práctica y experiencia, la cual se adquiere después de muchas
                oportunidades, intentos, fracasos y éxitos combinados.
              </ColorRojo>
            </MarginLeft>
          </LetraAlmuerzo>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Nota</TituloMedio>
          <Espacio />
          El programa toma mucho más enfoque, relevancia, eficiencia, cuando
          todas las partes tratan sobre el tema general de la noche, por
          ejemplo: La música, coritos, juegos dinámicos, todo sobre el mismo
          tema del programa.
          <Espacio />
          El orden de arriba es sugerente. Es una guía útil para cuando no se
          tiene una idea clara. Pero . . . sugerimos que la miren, estudien y
          tomen en cuenta. Está diseñada por personas que tienen años de
          experiencia en el Ministerio Juvenil y en programaciones en general.
          <Espacio />
          El orden se puede variar en su forma, su tema, su presentación, pero,
          sólo si tenemos claros los propósitos, podremos dar en el blanco. La
          meta es mucho más que llenar tiempo, espacio, o entrener a los
          asistentes. <br />
          <Espacio />
          Con este orden modelo nos proponemos: ofrecer opciones, dar ideas,
          motivar la creatividad de nuestros directores.
          <Espacio />
          <LetraTexto>Dios bendiga a nuestros amados jóvenes</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Preguntas Importantes</TituloMedio>
          <LetraGrande>Todo programa debiera contestar</LetraGrande>
          <Espacio />
          1. ¿Qué significa este asunto? <br />
          2. ¿Cuál es su origen ó historia? <br />
          3. ¿Por qué es importante para mí (nosotros)? <br />
          4. Opiniones de distintas fuentes <br />
          5. ¿Cómo ha afectado la vida de otras personas? <br />
          6. ¿En qué podría afectarme este asunto? <br />
          7. ¿Puede hacer mi vida mejor? <br />
          8. ¿Afecta mi relación con Dios? <br />
          9. ¿Qué posición debo tomar al respecto?
          <Espacio />
          <LetraTexto>Sólo algunas ideas</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Temas Sugerentes</TituloMedio>
          <LetraGrande>Para crear tus propios programas</LetraGrande>
          <Espacio />
          1. Qué haré en mi vida <br />
          2. Nuestro Origen y Destino <br />
          3. La Biblia y los jóvenes <br />
          4. El potencial de un joven <br />
          5. Las malas elecciones <br />
          6. Cuidado con tus amigos <br />
          7. La administración del día a día <br />
          8. Cómo aprovechar el tiempo <br />
          9. ¿Es útil leer libros? <br />
          10. Viajando el Mundo <br />
          11. Lugares peligrosos <br />
          12. Deportes Extremos <br />
          13. Alcanzando metas elevadas <br />
          14. El joven y la oración <br />
          15. ¿Cuáles son nuestros límites? <br />
          16. La elección más importante <br />
          17. Me equivoqué: ¿Qué hago ahora? <br />
          18. No tengo tiempo <br />
          19. Historia de jóvenes de la Biblia <br />
          20. Historia de jóvenes famosos <br />
          21. Aprendamos a comunicarnos <br />
          22. ¿Cómo será el cielo? <br />
          23. Saber decir NO. <br />
          24. Una mente positiva <br />
          25. ¿Cuánto vale tu salud? <br />
          26. Salud física vs salud mental <br />
          27. Niños prodigios <br />
          28. Niños predicadores <br />
          29. Ancianos estraordinarios <br />
          30. Honrando a mis Padres <br />
          31. ¿Para qué la iglesia? <br />
          32. Aprendiendo a pedir perdón <br />
          33. La tecnología y sus ventajas <br />
          34. La tecnología y sus peligros <br />
          35. La Agenda 20 - 30 ¿Qué es eso? <br />
          36. ¿Qué es el Feminismo? <br />
          37. Ideología de Género <br />
          38. ¿Cómo era el mundo sin luz eléctrica? <br />
          39. ¿Cómo era el mundo hace 100 años? <br />
          40. ¿Cambia la iglesia con el tiempo? <br />
          41. Conociendo alguna doctrina bíblica <br />
          42. Hablemos de la muerte <br />
          43. Hablemos de la resurrección <br />
          44. ¿Qué sabemos de los ángeles? <br />
          45. ¿Cómo será el futuro? <br />
          46. ¿Por qué soy quien soy? <br />
          47. ¿Puedo ser diferente? <br />
          48. Ganando un alma para Cristo <br />
          49. ¿Se perderán mis amigos? <br />
          50. ¿Cómo sería este mundo sin pecado? <br />
          51. ¿Cuánto dura la vida? <br />
          52. Las ventajas del ahorro <br />
          53. ¿Hay que ser rico para ahorrar? <br />
          54. ¿Qué significa ser rico? <br />
          55. ¿Puede un rico ser pobre? <br />
          56. Pobres que se sentían ricos <br />
          57. Teoría de la auto percepción <br />
          58. ¿Qué es desechable y qué no? <br />
          59. Modificación de mi cuerpo <br />
          60. El problema con los géneros <br />
          61. ¿Cuántos géneros existen? <br />
          62. ¿Es importante estudiar? <br />
          63. ¿Puedo ser autodidacta? <br />
          64. El poder de la mente <br />
          65. Hablemos de la guerra <br />
          66. Una mirada a los vicios <br />
          67. ¿Hay algún vicio bueno? <br />
          68. ¿Por qué lo malo es malo? <br />
          69. El cuidado personal <br />
          70. El dinero: ¿bueno o malo? <br />
          72. ¿Es malo algún instrumento? <br />
          73. El poder de la música <br />
          74. ¿Es importante dormir? <br />
          75. ¿Es malo dormir demasiado? <br />
          76. El estrés en esta generación <br />
          77. ¿Es malo ir a un psicólogo? <br />
          78. Derechos humanos <br />
          79. Libertad Religiosa <br />
          80. Persecuciónes en la historia <br />
          81. Democracia versus dictaduras <br />
          82. Capitalismo versus socialismo <br />
          83. Familia actual versus antes <br />
          84. Un mundo sin familias <br />
          85. La segunda venida de Cristo
          <Espacio />
          <LetraTexto>Si necesitas, llama la Pastor</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Calendario Ministerio Juvenil</TituloMedio>
        <TituloChico>
          Director General: Fernando Cepero <br />
        </TituloChico>
        <Espacio />
        <Espacio />
        <SombraBlanca>
          Mes de Mayo 2022
          <Espacio />
          viernes 6 -- José y Silvia <br />
          viernes 13 - Dania Leyva (Madres) <br />
          viernes 20 - Heiden y David <br />
          viernes 27 - Carlos Antonio Alejandro <br />
        </SombraBlanca>
        <Espacio />
        <SombraBlanca>
          Mes de Junio 2022
          <Espacio />
          viernes 3 -- Eduardito Castillo <br />
          viernes 10 - Tíffany Ruíz <br />
          viernes 17 - Elsy Jorge (Padres) <br />
          viernes 24 - Aliah y Kelin <br />
        </SombraBlanca>
        <Espacio />
        <Espacio />
        <Espacio />
        <TituloMedio>Gracias Jóvenes</TituloMedio>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Principios de Orden</TituloMedio>
          <LetraGrande>El Concilio del Ministerio Juvenil</LetraGrande>
          <Espacio />
          1. Debiera reunirse sistemáticamente. <br />
          2. Una vez al mes ó al trimestre. <br />
          3. Mantiene todo en orden y a todos informados. <br />
          4. Administra el presupuesto (fondos) y los promueve. <br />
          5. Hay asuntos que deben ser presentados a la Junta de la Iglesia, una
          vez hayan sido aprobamos por el concilio de jóvenes (Ejemplo). <br />
          <Espacio />
          <MarginLeft>
            <ColorRojo>
              a. Gastos que superan 100 dollares dentro del mes. <br />
              b. Planes que van más allá de lo cotidiano. <br />
              c. Ejemplo: Un viaje, lejos ó cerca de la iglesia. <br />
              d. Mover personas fuera de la iglesia, para lo que sea, aun para
              planes misioneros. <br />
              e. Eventos especiales que ocupan tiempo, espacio, lugar, recursos
              extras. <br />
              f. Eventos que podrían chocar con el programa regular de la
              iglesia o con otros programas de otros departamentos. No debiera
              haber sorpresas. <br />
              g. Consultar siempre antes de invitar personas a presentar
              seminarios, sermones, programas. <br />
              h. Hoy en día es de sabios consultar antes de invitar personas.
              Podemos cometer errores, y es mejor prevenir y evitarlos a tiempo.{" "}
              <br />
            </ColorRojo>
          </MarginLeft>
          <Espacio />
          6. Es necesario que antes de presentar un proyecto frente a un
          concilio o frente a la Junta de Iglesia, se haga un estudio completo
          de los costos, recursos, etc. De manera que se pueda tener a mano
          suficientes elementos de jucio y basado en eso, tomar decisiones
          serias e inteligentes. No es sabio tomar decisiones basadas en la
          imaginación o la emoción.
          <Espacio />
          7. Todos estos planes deben ser registrados en el acta de acuerdos de
          la Junta de la Iglesia en su reunión regular mensual. Puede haber
          momentos donde se pueda hacer una excepción, pero mejor evitarlo. ¿Por
          qué? porque cuando se rompe el orden, es muy difícil recuperarlo y
          terminamos pagando un precio alto. La obligaciones, deberes y
          privilegios deben ser para todos por igual. <br />
          <Espacio />
          8. En resumen, esto se trata de evitar cargar el peso total de la
          responsabilidad sobre una decisión ó un suceso en las espaldas de una
          sola persona. Es mucho mejor que todos seamos igualmente responsables
          de lo bueno o lo no tan bueno que pudiera suceder. Así que por favor,
          líder, cuídate y cuidemonos unos a otros.
          <Espacio />
          <Espacio />
          <BordeCentro>
            Nota
            <Espacio />
            No olvidemos que somos un cuerpo más grande y así como una
            maquinaria de un reloj mecánico, nuevo y bien ajustado, necesitamos
            estar sincronizados.
            <Espacio />
            Es la Junta de Iglesia la que coordina que todo funcione en orden,
            armonía y con seguridad.
            <Espacio />
            Es la misma regla para todos los departamentos y todos los líderes,
            incluyendo al Pastor.
            <Espacio />
            Todos dependemos unos de otros y juntos compartimos la
            responsabilidad por las cosas que puedan suceder.
            <Espacio />
            También necesitamos estar en orden para poder acceder al seguro en
            caso de necesidad.
          </BordeCentro>
          <Espacio />
          <LetraTexto>Muchas gracias por comprenderlo</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Dios les Bendiga Jóvenes</TituloMedio>
        <LetraGrande>Juventud Divino Tesoro</LetraGrande>
        <Espacio />
        <FotoLogo>
          <img src={pepito} alt="pepito" />
        </FotoLogo>
        <Espacio />
        <LetraGrande>
          Departamento Ministerio Juvenil
          <br />
          Director: Fernando Cepero
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export const ContenedorJovenes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;
export const TarjetaJovenes = styled.div`
  text-align: center;
  color: darkblue;
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
    height: 108px;
    border-radius: 20px;
  }
`;
export const FotoLogox = styled.div`
  display: flex;
  justify-content: space-around;
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

export default Jovenes;
