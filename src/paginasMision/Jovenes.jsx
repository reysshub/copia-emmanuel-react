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

      <Espacio />
      <Espacio />
      <FotoLogox>
        <img
          src={logomjuvenil}
          className="App-logo"
          alt="logo ministerio juveniol"
        />
      </FotoLogox>
      <Espacio />

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
            T??ffany Ru??z
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={aliah} alt="aliah" />
            Aliah Beltr??
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
            Silvia Pel??ez
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={jose} alt="jose" />
            Jos?? Pel??ez
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
            Din??micas
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={milan} alt="milan" />
            Mil??n Fong <br />
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
            Din??micas
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={marelis} alt="marelis" />
            Marelis D??az <br />
            M??sica
          </TarjetaJovenes>
          <TarjetaJovenes>
            <img src={zulema} alt="zulema" />
            Zulema Paneque <br />
            M??sica
          </TarjetaJovenes>
          <Espacio />
        </ContenedorJovenes>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <Espacio />
        <ContenedorJovenes>
          <FotoLogox>
            <img src={logomjuvenil} alt="logo ministerio juveniol" />
          </FotoLogox>
          <FotoLogox>
            <img
              src={logomjuvenil}
              className="App-logo"
              alt="logo ministerio juveniol"
            />
          </FotoLogox>
          <FotoLogox>
            <img src={logomjuvenil} alt="logo ministerio juveniol" />
          </FotoLogox>
        </ContenedorJovenes>
        <Espacio />
        <Espacio />
        <BordeCentro>
          <ConexionWeb href="https://adventsourcecms.blob.core.windows.net/media/e11c30af-7d1a-4030-9e80-abaa010a88b6/QuickStartGuide_YouthMinistries.pdf?v=637236006878978085">
            Gu??a Ministerio Juvenil
          </ConexionWeb>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <Espacio />
        <TituloMedio>Orden Modelo Programa JA</TituloMedio>
        <LetraGrande>Sugerente</LetraGrande>
        <Espacio />
        <LetraTexto>
          El programa de j??venes es tambi??n un culto de adoraci??n. Con la
          diferencia de que es dirigido por los j??venes, y tiene un formato
          juvenil, m??s din??mico, adaptado a las necesidades espec??ficas de esa
          edad. Nunca debe perderse de vista que todas las actividades de la
          iglesia tienen como prop??sito principal honrar y adorar al creador.
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
          4 -- Lectura b??blica <br />
          5 -- Oraci??n introductoria (adoraci??n) <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Segmento Din??mico General</TituloLeft>
        <Espacio />
        <LetraBoletin>
          6 -- Anuncio de Actividades <br />
          7 -- Secci??n Sorpresa <br />
          8 -- Devoci??n Matutina <br />
          9 -- Alabanza din??mica <br />
          10 - Juego participativo <br />
          11 - Alabanza alegre <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Segmento Desarrollo del Tema</TituloLeft>
        <Espacio />
        <LetraBoletin>
          12 - Video introductorio del tema <br />
          13 - DESARROLLO DEL PROGRAMA O TEMA <br />
          14 - Conclusi??n, resumen, llamado <br />
          15 - Alabanza de conclusi??n <br />
          16 - Oraci??n de conclusi??n <br />
          17 - Salida organizada <br />
        </LetraBoletin>
        <Espacio />
        <LetraTexto>
          Saludo y atenci??n a las visitas <br />
          Saludo y atenci??n a las visitas <br />
          Saludo y atenci??n a las visitas <br />
        </LetraTexto>
        <Espacio />
        <BordeCentro>
          Resumen de Prop??sitos <br />
          <Espacio />
          <LetraAlmuerzo>
            * Adorar a Dios en un abiente juvenil, alegre, feliz. <br />
            * Ense??ar a los j??venes y menores el gozo de la participaci??n en la
            iglesia. <br />
            * Desarrollar talentos, habilidades, liderazgo en nuestros j??venes y
            menores. <br />* Juntos aprender y descubrir nuevos caminos del
            saber espiritual, intelectual, historia, en fin, conocimientos
            generales de la vida. <br />
            * Crear lazos de amistad, cari??o y respeto entre j??venes y adultos
            en la iglesia. <br />
            * Traer nuevos j??venes y ganarlos para Cristo. <br />
            * Juntos desarrollar una fe s??lida en la Palabra de Dios, mientras
            la compartimos de diferentes maneras en la programaci??n. <br />*
            Mantener un compa??erismo rec??proco con los adultos de la iglesia.{" "}
            <br />
            * Mantenernos unidos, activos, creciendo hasta la segunda venida de
            Cristo. <br />
            * Los ingredientes indispensables son: <br />
            <Espacio />
            <MarginLeft>
              <ColorRojo>
                1. Gran inter??s en hacer algo ??til. <br />
                2. Mucha oraci??n para recibir ayuda de lo alto. <br />
                3. Mucho acopio de material y trabajo para ordenarlo,
                simplificarlo, hacerlo compacto, comprensible, significativo.{" "}
                <br />
                4. Todo lo bien hecho cuesta dedicaci??n y esfuerzo, lectura y
                meditaci??n. <br />
                5. Una buena repartici??n del material a los participantes con
                tiempo suficiente. <br />
                6. Pr??ctica y experiencia, la cual se adquiere despu??s de muchas
                oportunidades, intentos, fracasos y ??xitos combinados.
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
          El programa toma mucho m??s enfoque, relevancia, eficiencia, cuando
          todas las partes tratan sobre el tema general de la noche, por
          ejemplo: La m??sica, coritos, juegos din??micos, todo sobre el mismo
          tema del programa.
          <Espacio />
          El orden de arriba es sugerente. Es una gu??a ??til para cuando no se
          tiene una idea clara. Pero . . . sugerimos que la miren, estudien y
          tomen en cuenta. Est?? dise??ada por personas que tienen a??os de
          experiencia en el Ministerio Juvenil y en programaciones en general.
          <Espacio />
          El orden se puede variar en su forma, su tema, su presentaci??n, pero,
          s??lo si tenemos claros los prop??sitos, podremos dar en el blanco. La
          meta es mucho m??s que llenar tiempo, espacio, o entrener a los
          asistentes. <br />
          <Espacio />
          Con este orden modelo nos proponemos: ofrecer opciones, dar ideas,
          motivar la creatividad de nuestros directores.
          <Espacio />
          <LetraTexto>Dios bendiga a nuestros amados j??venes</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Preguntas Importantes</TituloMedio>
          <LetraGrande>Todo programa debiera contestar</LetraGrande>
          <Espacio />
          1. ??Qu?? significa este asunto? <br />
          2. ??Cu??l es su origen ?? historia? <br />
          3. ??Por qu?? es importante para m?? (nosotros)? <br />
          4. Opiniones de distintas fuentes <br />
          5. ??C??mo ha afectado la vida de otras personas? <br />
          6. ??En qu?? podr??a afectarme este asunto? <br />
          7. ??Puede hacer mi vida mejor? <br />
          8. ??Afecta mi relaci??n con Dios? <br />
          9. ??Qu?? posici??n debo tomar al respecto?
          <Espacio />
          <LetraTexto>S??lo algunas ideas</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Temas Sugerentes</TituloMedio>
          <LetraGrande>Para crear tus propios programas</LetraGrande>
          <Espacio />
          1. Qu?? har?? en mi vida <br />
          2. Nuestro Origen y Destino <br />
          3. La Biblia y los j??venes <br />
          4. El potencial de un joven <br />
          5. Las malas elecciones <br />
          6. Cuidado con tus amigos <br />
          7. La administraci??n del d??a a d??a <br />
          8. C??mo aprovechar el tiempo <br />
          9. ??Es ??til leer libros? <br />
          10. Viajando el Mundo <br />
          11. Lugares peligrosos <br />
          12. Deportes Extremos <br />
          13. Alcanzando metas elevadas <br />
          14. El joven y la oraci??n <br />
          15. ??Cu??les son nuestros l??mites? <br />
          16. La elecci??n m??s importante <br />
          17. Me equivoqu??: ??Qu?? hago ahora? <br />
          18. No tengo tiempo <br />
          19. Historia de j??venes de la Biblia <br />
          20. Historia de j??venes famosos <br />
          21. Aprendamos a comunicarnos <br />
          22. ??C??mo ser?? el cielo? <br />
          23. Saber decir NO. <br />
          24. Una mente positiva <br />
          25. ??Cu??nto vale tu salud? <br />
          26. Salud f??sica vs salud mental <br />
          27. Ni??os prodigios <br />
          28. Ni??os predicadores <br />
          29. Ancianos estraordinarios <br />
          30. Honrando a mis Padres <br />
          31. ??Para qu?? la iglesia? <br />
          32. Aprendiendo a pedir perd??n <br />
          33. La tecnolog??a y sus ventajas <br />
          34. La tecnolog??a y sus peligros <br />
          35. La Agenda 20 - 30 ??Qu?? es eso? <br />
          36. ??Qu?? es el Feminismo? <br />
          37. Ideolog??a de G??nero <br />
          38. ??C??mo era el mundo sin luz el??ctrica? <br />
          39. ??C??mo era el mundo hace 100 a??os? <br />
          40. ??Cambia la iglesia con el tiempo? <br />
          41. Conociendo alguna doctrina b??blica <br />
          42. Hablemos de la muerte <br />
          43. Hablemos de la resurrecci??n <br />
          44. ??Qu?? sabemos de los ??ngeles? <br />
          45. ??C??mo ser?? el futuro? <br />
          46. ??Por qu?? soy quien soy? <br />
          47. ??Puedo ser diferente? <br />
          48. Ganando un alma para Cristo <br />
          49. ??Se perder??n mis amigos? <br />
          50. ??C??mo ser??a este mundo sin pecado? <br />
          51. ??Cu??nto dura la vida? <br />
          52. Las ventajas del ahorro <br />
          53. ??Hay que ser rico para ahorrar? <br />
          54. ??Qu?? significa ser rico? <br />
          55. ??Puede un rico ser pobre? <br />
          56. Pobres que se sent??an ricos <br />
          57. Teor??a de la auto percepci??n <br />
          58. ??Qu?? es desechable y qu?? no? <br />
          59. Modificaci??n de mi cuerpo <br />
          60. El problema con los g??neros <br />
          61. ??Cu??ntos g??neros existen? <br />
          62. ??Es importante estudiar? <br />
          63. ??Puedo ser autodidacta? <br />
          64. El poder de la mente <br />
          65. Hablemos de la guerra <br />
          66. Una mirada a los vicios <br />
          67. ??Hay alg??n vicio bueno? <br />
          68. ??Por qu?? lo malo es malo? <br />
          69. El cuidado personal <br />
          70. El dinero: ??bueno o malo? <br />
          72. ??Es malo alg??n instrumento? <br />
          73. El poder de la m??sica <br />
          74. ??Es importante dormir? <br />
          75. ??Es malo dormir demasiado? <br />
          76. El estr??s en esta generaci??n <br />
          77. ??Es malo ir a un psic??logo? <br />
          78. Derechos humanos <br />
          79. Libertad Religiosa <br />
          80. Persecuci??nes en la historia <br />
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
          viernes 6 -- Jos?? y Silvia <br />
          viernes 13 - Dania Leyva (Madres) <br />
          viernes 20 - Heiden y David <br />
          viernes 27 - Carlos Antonio Alejandro <br />
        </SombraBlanca>
        <Espacio />
        <SombraBlanca>
          Mes de Junio 2022
          <Espacio />
          viernes 3 -- Eduardito Castillo <br />
          viernes 10 - T??ffany Ru??z <br />
          viernes 17 - Elsy Jorge (Padres) <br />
          viernes 24 - Aliah y Kelin <br />
        </SombraBlanca>
        <Espacio />
        <Espacio />
        <Espacio />
        <TituloMedio>Gracias J??venes</TituloMedio>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <TituloMedio>Principios de Orden</TituloMedio>
          <LetraGrande>El Concilio del Ministerio Juvenil</LetraGrande>
          <Espacio />
          1. Debiera reunirse sistem??ticamente. <br />
          2. Una vez al mes ?? al trimestre. <br />
          3. Mantiene todo en orden y a todos informados. <br />
          4. Administra el presupuesto (fondos) y los promueve. <br />
          5. Hay asuntos que deben ser presentados a la Junta de la Iglesia, una
          vez hayan sido aprobamos por el concilio de j??venes (Ejemplo). <br />
          <Espacio />
          <MarginLeft>
            <ColorRojo>
              a. Gastos que superan 100 dollares dentro del mes. <br />
              b. Planes que van m??s all?? de lo cotidiano. <br />
              c. Ejemplo: Un viaje, lejos ?? cerca de la iglesia. <br />
              d. Mover personas fuera de la iglesia, para lo que sea, aun para
              planes misioneros. <br />
              e. Eventos especiales que ocupan tiempo, espacio, lugar, recursos
              extras. <br />
              f. Eventos que podr??an chocar con el programa regular de la
              iglesia o con otros programas de otros departamentos. No debiera
              haber sorpresas. <br />
              g. Consultar siempre antes de invitar personas a presentar
              seminarios, sermones, programas. <br />
              h. Hoy en d??a es de sabios consultar antes de invitar personas.
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
          imaginaci??n o la emoci??n.
          <Espacio />
          7. Todos estos planes deben ser registrados en el acta de acuerdos de
          la Junta de la Iglesia en su reuni??n regular mensual. Puede haber
          momentos donde se pueda hacer una excepci??n, pero mejor evitarlo. ??Por
          qu??? porque cuando se rompe el orden, es muy dif??cil recuperarlo y
          terminamos pagando un precio alto. La obligaciones, deberes y
          privilegios deben ser para todos por igual. <br />
          <Espacio />
          8. En resumen, esto se trata de evitar cargar el peso total de la
          responsabilidad sobre una decisi??n ?? un suceso en las espaldas de una
          sola persona. Es mucho mejor que todos seamos igualmente responsables
          de lo bueno o lo no tan bueno que pudiera suceder. As?? que por favor,
          l??der, cu??date y cuidemonos unos a otros.
          <Espacio />
          <Espacio />
          <BordeCentro>
            Nota
            <Espacio />
            No olvidemos que somos un cuerpo m??s grande y as?? como una
            maquinaria de un reloj mec??nico, nuevo y bien ajustado, necesitamos
            estar sincronizados.
            <Espacio />
            Es la Junta de Iglesia la que coordina que todo funcione en orden,
            armon??a y con seguridad.
            <Espacio />
            Es la misma regla para todos los departamentos y todos los l??deres,
            incluyendo al Pastor.
            <Espacio />
            Todos dependemos unos de otros y juntos compartimos la
            responsabilidad por las cosas que puedan suceder.
            <Espacio />
            Tambi??n necesitamos estar en orden para poder acceder al seguro en
            caso de necesidad.
          </BordeCentro>
          <Espacio />
          <LetraTexto>Muchas gracias por comprenderlo</LetraTexto>
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Dios les Bendiga J??venes</TituloMedio>
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
