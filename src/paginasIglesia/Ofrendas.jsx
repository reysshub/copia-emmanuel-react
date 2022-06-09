import React from 'react'
import { TituloMedio, ImagenGrande, TituloGrande, ColorWhite, TarjetaBlanca, Espacio, BlancoSombraCorto, ConexionWeb, ColorRed, LetraGrande, FotoLogo } from '../components/CardCodigo';
import { LetraAlmuerzo } from '../paginasInicio/Almuerzo'
// import { LetraTexto } from '../paginasInicio/Boletin';
// import { CajaCumpleanos, DosColumnasLeft } from './Miembros';
import sobreOfrendas from '../img/SobreOfrendas.png';
import dinero from '../img/dinero.webp';

const Ofrendas = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Entendiendo el Sobre</ColorWhite>
      </TituloMedio>
      <TituloMedio>
        <ColorWhite>de las Ofrendas</ColorWhite>
      </TituloMedio>

      <TarjetaBlanca>
      <ImagenGrande>
          <img src={sobreOfrendas} alt="sobre ofrendas" />
        </ImagenGrande>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Lee bien los números</TituloGrande>
          <Espacio />
          <LetraAlmuerzo>
            Fecha ______________________________________ <br />
            Nombre____________________________________ <br />
            Celular # (________) _________-______________ 
            <Espacio />
            <b>OFRENDAS IGLESIA LOCAL 1 - 10</b> 
            <Espacio />
            1. Ofrendas Adoración <small>(Iglesia Local)</small> <br />
            6. Otras Ofrendas <small>(Inversión local)</small> 
            <Espacio />
            <b>Nota:</b> Estas dos ofrendas (1, 6) son usadas para la administración de la Iglesia Local. Mortgage, luz, agua, internet, limpieza, mantenimiento, seguros, licencias de la ciudad, reparaciones, compra de equipamiento, pago de deudas. etc. 
            <Espacio />
            5. Ofrendas Pro-Templo Local <br />
            10. Proyecto Especial <small>(Parking Iglesia)</small>
            <Espacio />
            <b>Nota:</b> Estas dos ofrendas (5, 10) son para proyectos locales de la Iglesia, relacionados con el edificio del templo y el parqueo. 
            <Espacio />
            2. Ofrendas E. Sabática y M. Personal <br />
            3. Ofrendas Ministerios Infantiles <br />
            4. Ofrendas Ministerios Juveniles <br /> 
            9. Ministerio Femenino Local 
            <Espacio />
            <b>Nota:</b> Estas ofrendas (2, 3, 4, 9) son para que estos cinco departamentos las administren en su planes de programación y en sus planes misioneros. Las ofrendas de E. Sabática se comparten a la mitad con el departamento de Ministerio Personal. 
            <Espacio />
            7. Club Conquistadores Local <br />
            8. Club Aventureros Local 
            <Espacio />
            <b>Nota:</b> Estas dos ofrendas (7, 8) son para aquellos que son miembros de estos dos clubes. Aquí en el sobre, pueden depositar sus aportes al club, sea por membresía o para eventos o gastos específicos del Club. Todo el que desee, también puede apoyar voluntariamente a los Clubes. 
            <Espacio />
            <b>LAS OFRENDAS SUELTAS DE LOS VIERNES EN LA SOCIEDAD DE JOVENES Y LOS SABADOS EN LA ESCUELA SABATICA, SON PARA EL USO DE ESOS DEPARTAMENTOS RESPECTIVAMENTE <small>(ESCUELA SABATICA Y MINISTERIO JUVENIL)</small> EN SUS PLANES LOCALES DE EMMANUEL TAMPA</b> 
            <Espacio />
            <b>Nota:</b> Una parte (%) de las <b>ofrendas sueltas</b> de la Escuela Sabática es enviada a las Misiones Mundiales cada mes. <small>(Las que se dan en cash suelto en el platillo, no en el sobre de ofrendas)</small> 
            <Espacio />
            <hr />
            <Espacio />
            <b>MISIONES MUNDIALES & IGLESIA MUNDIAL <small> <br />
              <p>(Fíjate bien de aquí hacia abajo)</p> </small></b><br />

            <b>Todas estas ofrendas son para la obra mundial. Ninguna se queda en la iglesia local.</b> 
            <Espacio />
            1. DIEZMOS 10% <small>(Ministerio Pastoral)</small> 
            <Espacio />
            <b>Nota:</b> El diezmo lo recibe la Conferencia en su totalidad y lo usa para sostener el ministerio pastoral en todo el mundo. <i><b>Del diezmo no se queda ni un centavo en la iglesia local.</b></i><i>Tenlo presente</i>.
            <Espacio />
            2. Fondo Inversión <small><b>(Misiones Mundiales)</b></small> <br />
            5. 13er Sábado <small>(Misiones Mundiales)</small> 
            <Espacio />
            <b>Nota:</b> Estas dos ofrendas (2, 5) son para sostener las Misiones que la Iglesia Adventista desarrolla en el mundo, llevando el Evangelio a países donde poco se conoce a Jesucristo y su Palabra, o donde no hay presencia Adventista, o muy poca. <Espacio />

            3. Calendario Mundial por mes 
            <Espacio />
            <b>Nota:</b> Esta ofrenda (3) es enviada cada mes a un Ministerio Mundial diferente: <Espacio />
            <b>Enero:</b> Libertad Religiosa. <br />
            <b>Febrero:</b> Televisión Adventista. <br />
            <b>Marzo:</b> Radio Mundial Adventista. <br />
            <b>Abril:</b> (CRS) Ministerio ayuda ciegos. <br />
            <b>Mayo:</b> Proyectos Alivio Desatres y Hambruna. <br />
            <b>Junio:</b> Ministerios Multilingues. <br />
            <b>Julio:</b> Apoyo Min. de la Mujer Mundial. <br />
            <b>Agosto:</b> Universidades Adventistas. <br />
            <b>Septiembre:</b> Misión de Otoño. <br />
            <b>Octubre:</b> Min. Voz de la Profecía. <br />
            <b>Noviembre:</b> Ofrenda Anual Misiones. <br />
            <b>Diciembre:</b> Evangelismo Grandes Ciudades. 
            <Espacio />
            4. Desarrollo Conferencia.
            <Espacio />
            <b>Nota:</b> Esta ofrenda (4) es usada para planes de desarrollo de nuestra Conferencia Local, así como el Campground donde se hacen las reuniones importantes de las iglesias. 
            <Espacio />
            6. Educación Adventista. 
            <Espacio />
            <b>Nota:</b> Esta ofrenda (6) Es usada para apoyar a las escuelas de nuestra Conferencia. En Tampa, Orlando, Miami, etc. La conferencia tiene escuelas Primarias, Secundarias y Hight School también. 
            <Espacio />
            7. Fondo Desastres Mundiales (ADRA). 
            <Espacio />
            <b>Nota:</b> Esta ofrenda (7) la usa la Iglesia Adventista mundial para ayudar en terremotos, huracanes, guerras, en desastres en cualquier lugar del mundo. 
            <Espacio />
            PARA SER SINCERO, NUESTROS MIEMBROS ADVENTISTAS EN ESTOS TIEMPOS ACTUALES, PRESTAN POCA ATENCION A LAS OFRENDAS. 
            <Espacio />
            SEAN OFRENDAS LOCALES U OFRENDAS MUNDIALES.
            <Espacio />
            POR ESA RAZON, TANTO LA IGLESIA LOCAL COMO LA IGLESIA MUNDIAL TIENE RECURSOS MUY LIMITADOS PARA CUMPLIR LA MISION.
            <Espacio />
            TAMBIEN PARA TENER EDIFICIOS COMO NUESTROS MIEMBROS JOVENES, NIÑOS Y ADULTOS MERECEN. 
            <Espacio />
            <b>Nota:</b> Si la mayoría de los miembros diera cada mes, solamente $1.00 dollar en cada una de las ofrendas para la obra mundial, eso haría una gran diferencia en el cumplimiento de la Misión. 
            <Espacio />
            PERO TENGAN EN CUENTA QUE LA MAYOR CANTIDAD DE OFRENDAS QUE USTED DE, DEBE SER PARA LA IGLESIA LOCAL, PORQUE NUESTRA PRIMERA RESPONSABILIDAD ES LOCAL Y SOMOS MENOS LOS QUE APOYAMOS LA IGLESIA LOCAL QUE LA IGLESIA MUNDIAL. 
            <Espacio />
            SEAMOS PRODIGOS EN APOYAR LA CAUSA DE NUESTRO DIOS. 
            <Espacio />
            GRACIAS. 
            <Espacio />
            "Dad a Jehová la Gloria debida a su nombre". <b>Salmo 92:2</b> 
            <Espacio />
            <b>Nota:</b> La Iglesia no obliga a ninguna persona, miembro o no, a ofrendar o diezmar. Aunque moral, ética y espiritualmente se supone que todos tenemos el deber de sostener el Evangelio; finalmente el compromiso de cada cual es con Dios. 
            <Espacio />
            Es a Dios a quien realmente un día tendremos que rendir cuentas, de forma personal, por la manera en que administramos los recursos; los cuales incluyen el uso del tiempo, los talentos, las finanzas, nuestro cuerpo, nuestra familia, nuestra iglesia. TODO LO QUE SOMOS Y TODO LO QUE TENEMOS. <br />
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande><ColorRed>AdventistGiving</ColorRed></TituloGrande>
        <TituloMedio><ColorRed>Es una Opción</ColorRed></TituloMedio>
        <Espacio />
        <BlancoSombraCorto>
          <ConexionWeb href="https://adventistgiving.org/#/org/ANTTJB/envelope/start">AdventistGiving</ConexionWeb>
        </BlancoSombraCorto>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
          <Espacio />
        <TituloMedio>Explicando AdventistGiving</TituloMedio>
          <Espacio />
          <LetraAlmuerzo>
            AdventistGiving es una aplicación de la Iglesia Adventista en Norte América. Fue hecha con el propósito de facilitar a los miembros de la iglesia, y también a no miembros, el envío de diezmos y ofrendas a la iglesia local, así como a la Conferencia.
            <Espacio />
            También ofrendas que tienen el propósito de apoyar específicamente planes mundiales como por ejemplo, ahora mismo: Ukrania y otros proyectos de ayuda.
            <Espacio />
            Usted se registra usando la opción <b>Login</b>, y luego puede enviar sus ofrendas con relativa facilidad, ahorrándose la necesidad de usar dinero cash o cheque. 
            <Espacio />
            Las ofrendas demoran unos días en llegar, pero finalmente van directo a la cuenta de la iglesia local, o a donde corresponda. 
            <Espacio />
            Es simplemente una opción para los que necesiten usarla. Porque no importa en qué parte del mundo usted se encuentre viajando, usted todavía puede enviar sus ofrendas a su iglesia local y sostener su iglesia sin interrupción. 
            <Espacio />
            Las opciones regulares se mantienen, nos referimos a la ofrenda en el culto de adoración con el sobre regular de la iglesia local. 
            <Espacio />
            <b>Gracias por sostener su iglesia local y la obra de predicar el evangelio en todo el mundo. </b>
            <Espacio />
            <b>Nota</b>: Si usted usa AventistGiving, cuando necesite un recibo de sus depósitos, lo puede imprimir en la misma aplicación de AdventistGiving. <b>No</b> a través de la iglesia local. Bendiciones.
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Adorad a Jehová</TituloGrande>
        <LetraGrande>
          "Entrad por sus puertas con acción de gracias". <br />
           Salmos 100:4
        </LetraGrande>
        <Espacio />
        <FotoLogo>
          <img src={dinero} alt="imagen dinero" />
        </FotoLogo>
            <LetraGrande>
              <b>Departamento Tesorería</b> <br />
              Tesorero: Yaxel Martínez <br />
              Vice-Tesorero: Florencio Campos
              </LetraGrande>
        <Espacio />
      </TarjetaBlanca>

    </>
  )
}

export default Ofrendas