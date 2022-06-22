import React from "react";
import styled from "styled-components";
import {
  TarjetaBlanca,
  TituloGrande,
  TituloChico,
  TituloMedio,
  LetraGrande,
  Espacio,
  FotoLogo,
  ColorWhite,
  BordeCentro,
  ConexionWeb,
} from "../components/CardCodigo";
import { LetraAlmuerzo } from "../paginasInicio/Almuerzo";
import { CajaCumpleanos, DosColumnas } from "../paginasIglesia/Miembros";
import logoesabatica from "../img/logos/logoesabatica.png";
import deniaroche from "../img/familia/deniaroche.png";

const Sabatica = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Escuela Sabática</ColorWhite>
      </TituloMedio>
      <TituloChico>
        <ColorWhite>Liderazgo y Recursos</ColorWhite>
      </TituloChico>

      <Espacio />
      <FotoLogo>
        <img src={logoesabatica} className="App-logo" alt="logo E Sabatica" />
      </FotoLogo>

      <TarjetaBlanca>
        <Espacio />
        <LetraGrande>
          Libro de Texo: LA BIBLIA <br />
          Guía de estudio: LA LECCION <br />
          Muy necesarios: Maestros y Directores <br />
          Lo más Importante: NUESTROS ALUMNOS <br />
        </LetraGrande>
        <Espacio />
        <Espacio />
        <BordeCentro>
          <LetraGrande>
            <ConexionWeb href="https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/Gu%C3%ADa%20de%20inicio%20r%C3%A1pido%20para%20el%20Director%20de%20Escuela%20Sab%C3%A1tica.pdf">
              Director de Escuela Sabática
            </ConexionWeb>
            <Espacio />
            <ConexionWeb href="https://adventsourcecms.blob.core.windows.net/media/920266fb-716c-430d-826c-abae00fd5660/QuickStartGuide_SabbathSchoolSecretary.pdf?v=637239433880607237">
              Secretario de Escuela Sabática
            </ConexionWeb>
            <Espacio />
            <ConexionWeb href="https://www.sabbathschoolpersonalministries.org/manual-de-la-escuela-sab%C3%A1tica.pdf">
              Manual de la Escuela Sabática
            </ConexionWeb>
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Orden y Duración del Programa</TituloMedio>
        <LetraGrande>Sábado en la Mañana</LetraGrande>
        <Espacio />
        <LetraAlmuerzo>
          09:45 AM -- Servicio de Cantos (15 minutos) <br />
          10:00 AM -- Programa Introductorio (10 minutos) <br />
          10:10 AM -- Tiempo de la Lección (30 minutos) <br />
          10:40 AM --Termina la Lección
          <Espacio />
          10:40 - 10:45 -- (5 minutos) Ofrendas, Conclusión <br />
          <LetraGrande>TOTAL 1 HORA DE ESCUELA SABATICA</LetraGrande>
        </LetraAlmuerzo>
        <Espacio />
        <BordeCentro>
          <LetraGrande>
            El director de Escuela Sabática de ese día es responsable de
            monitorear el tiempo. <br />
            La Secretaria también puede ayudar. <br />
            Comenzar y terminar a tiempo. Gracias.
          </LetraGrande>
        </BordeCentro>
        <Espacio />
        <LetraGrande>Hacemos lo mejor para Dios y para la iglesia</LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Tiempo de Adoración</TituloMedio>
        <LetraGrande>Departamento de Música</LetraGrande>
        <Espacio />
        <BordeCentro>
          <LetraGrande>
            10:45 AM -- Alabanzas Culto Adoración <br />
            11:00 AM -- Entrada Comitiva Plataforma <br />
            Continúa el Culto de Adoración <br />
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Lección: Buenas Prácticas</TituloMedio>
        <LetraGrande>Maestros y Alumnos</LetraGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. El maestro debe recibir su espacio 10:10 am. <br />
          <small>"Puede ser antes, pero nunca debiera ser después".</small>{" "}
          <br />
          <small>"LA LECCION ES LO MAS IMPORTANTE DEL PROGRAMA"</small>
          <Espacio />
          2. El tiempo de la lección es limitado. <small>
            (30 minutos)
          </small>{" "}
          <br />
          El maestro administra su tiempo. <small>(30 minutos)</small>
          <Espacio />
          3. El maestro necesita desarrollar su lección. <br />
          <small>
            (Necesita el apoyo de sus alumnos en cuanto a respetar <br />
            el orden y las buenas prácticas en la participación).
          </small>
          <Espacio />
          4. El alumno no debe ocupar el lugar del maestro. <br />
          Ocupar el lugar significa: "Tomar la palabra y comenzar a enseñar la
          lección".{" "}
          <small>
            (Es el maestro quien tiene el privilegio de enseñar su clase. El
            tiene un plan.)
          </small>
          <Espacio />
          5. El alumno hace participaciones cortas y al punto. <br />
          "Cortas significa: Una ó dos frases, breves, claras, compactas. No
          toma más de 10 segundos del tiempo cada vez que pide la palabra. No
          hace una historia. El tiempo no alcanza. Recuerda: Otros también deben
          poder participar". <br />{" "}
          <small>
            (Si te gusta enseñar, maravilloso. Habla con el Pastor o la
            Directora General y te daremos oportunidad en algún momento para que
            enseñes también).
          </small>
          <Espacio />
          6. El maestro tiene un bosquejo a seguir. <small>(un orden).</small>
          El maestro guía, conduce la línea de pensamiento.
          <Espacio />
          7. El alumno se enfóca en el tópico que el maestro <br />
          está presentando en ese momento. No regresa al tópico anterior, ni
          avanza al siguente, porque rompe la progresión del tema, el hilo del
          pensamiento. Y se entra en un círculo vicioso que no deja avanzar.{" "}
          <small>
            Mantente atento, y si el tema cambia, ó no se está tocando todavía,
            mantente en el tema que el maestro está presentando.
          </small>
          <Espacio />
          8. Nunca es posible decirlo todo. Tampoco se pretende estudiar la
          lección punto por punto. Eso lo hace cada cual en su casa durante la
          semana. Aquí se tocan puntos sobresalientes solamente.
          <Espacio />
          9. Todos usamos la cortesía y amabilidad recíproca.{" "}
          <small>
            Significa que aun cuando se pudieran cometer algunos errores,
            todavía es importante mantener la compostura y los buenos modales
            cristianos, por amor a Cristo y a los demás.
          </small>
          <Espacio />
          10. La lección no es tiempo ni lugar para debatir o contradecir. Si
          necesita hacerlo, hágalo en otro lugar y en otro momento.
          Preferiblemente en privado.
          <Espacio />
          11. Todos aprendemos, y a la vez, mostramos la humildad y el respeto
          cristianos. Nadie tiene el monopolio del conocimiento.{" "}
          <small>
            También pensamos mucho en los nuevos hermanos y en los visitantes.
          </small>
          <Espacio />
          12. Tiempo de la lección termina a las 10:40 am.
          <Espacio />
          13. El maestro debe entregar el tiempo con puntualidad. No debe haber
          excusas.{" "}
          <small>
            Es preferible cortar donde estemos y no retrasar el Culto de
            Adoración.
          </small>
          <Espacio />
          14. La Escuela Sabática cierra entre 10:40 am y 10:45 am.{" "}
          <small>Tiene 5 minutos para: Las ofrendas, y la oración final.</small>
          <Espacio />
          15. A las 10:45, comienzan las alabanzas del culto de adoración.
          <Espacio />
        </LetraAlmuerzo>
        <LetraGrande>
          <small>
            Nota: Estamos todavía con el horario limitado por el covid. Aun así
            las buenas prácticas son aplicables en todo tiempo.{" "}
          </small>
          <Espacio />
          ES UN GRAN RETO PARA TODOS, PERO SI TODOS INTENTAMOS, LO LOGRAREMOS
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Maestros Disponibles</TituloMedio>
        <LetraGrande>Lista no excluyente</LetraGrande>
        <Espacio />
        <CajaCumpleanos>
          <DosColumnas>
            1. Alexander Beltré <br />
            2. Yaxel Martínez <br />
            3. Florencio Campos <br />
            4. Reyna Alvarez <br />
            5. Tomás García <br />
            6. Andrés Flores <br />
            7. Eduardo Castillo <br />
            8. Rolando Camacho <br />
            9. Iris Camacho <br />
            10. Pr. Mariano González <br />
            11. Manuela González <br />
            12. Carlos A Alejandro <br />
            13. Norma Manchón <br />
          </DosColumnas>
          <DosColumnas>
            14. Misael Ortega <br />
            15. Juan Carlos Martínez <br />
            16. Eduardo Saravia <br />
            17. Denia Roche <br />
            18. Fernando Cepero <br />
            19. Bertha Lastra <br />
            20. Carlos Suyí <br />
            21. Esteban Ramos <br />
            22. Milan Fong <br />
            23. Luís R Iglesias <br />
            24. Bárbara Pérez <br />
            25. Dorys Ojeda <br />
            26. Pr. Reynaldo Ojeda <br />
          </DosColumnas>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraGrande>
            Si alguien siente que debe estar en la lista de maestros, acérquese
            al Pastor ó a la Directora General: Denia Roche. Tenemos la mejor
            voluntad para añadirlo. Gracias.
          </LetraGrande>
        </BordeCentro>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloMedio>Calendario Escuela Sabática</TituloMedio>
        <TituloChico>
          Directora General: Denia Roche <br />
        </TituloChico>
        <Espacio />
        <Espacio />
        <SombraCalendario>
          Mes de Junio 2022
          <Espacio />
          Sábado 04 - Aidelyn Brage (Sábado Joven) <br />
          Sábado 11 - Milan Fong <br />
          Sábado 18 - Yaxel Martínez (Min. Caballeros) <br />
          Sábado 25 - Irma Velásquez (Ministerio Infantil) <br />
        </SombraCalendario>
        <Espacio />
        <Espacio />
        <SombraCalendario>
          Mes de Julio 2022
          <Espacio />
          Sábado 02 - Elsa Lastra <br />
          Sábado 09 - Irma Durán / Denia Roche <br />
          Sábado 16 - Iris Camacho <br />
          Sábado 23 - Reyna Alvarez <br />
          Sábado 30 - Milan Fong
          <br />
        </SombraCalendario>
        <Espacio />
        <Espacio />
        <SombraCalendario>
          Mes de Agosto 2022
          <Espacio />
          Sábado 06 - Marelis Díaz <br />
          Sábado 13 - Silvia Peláez / Denia Roche <br />
          Sábado 20 - Dpto. Salud / Denia Roche <br />
          Sábado 27 - Norma Manchón <br />
        </SombraCalendario>
        <Espacio />
        <Espacio />
        <SombraCalendario>
          Mes de Septiembre 2022
          <Espacio />
          Sábado 03 - Reyna Alvarez <br />
          Sábado 10 - Milan Fong <br />
          Sábado 17 - Elsa Lastra <br />
          Sábado 24 - Irma Velásquez (Ministerio Infantil) <br />
        </SombraCalendario>
        <Espacio />
        <Espacio />
        <FotoLogo>
          <img src={logoesabatica} className="App-logo" alt="logo E Sabatica" />
        </FotoLogo>
        <TituloMedio>Gracias Directores</TituloMedio>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Dios bendiga nuestra </TituloGrande>
        <TituloMedio>Escuela Sabática</TituloMedio>
        <Espacio />
        <FotoLogo>
          <img src={deniaroche} alt="denia roche" />
        </FotoLogo>
        <Espacio />
        <LetraGrande>
          Directora General
          <br />
          Denia Roche
        </LetraGrande>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export const SombraCalendario = styled.div`
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  text-align: left;
  color: darkblue;
  font-size: 18px;
  margin-top: 12px;
  margin: auto;
  padding: 15px;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 750px) {
    font-size: 26px;
    width: 60%;
  }
`;

export default Sabatica;
