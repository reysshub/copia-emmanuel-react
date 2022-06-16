import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import {
  TituloGrande,
  TituloMedio,
  TituloChico,
  ColorWhite,
  TarjetaBlanca,
  ImagenSombra,
  ColorRed,
  BlancoSombraCorto,
  ConexionWeb,
  ImagenGrande,
  Espacio,
  LetraGrande,
  TituloLeft,
} from "../components/CardCodigo";
import { LetraAlmuerzo } from "../paginasInicio/Almuerzo";
import cruz from "../img/cruz.webp";
import sigueme from "../img/sigueme.jpg";

const Boletin = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Boletín de la Iglesia</ColorWhite>
      </TituloMedio>
      <TituloChico>
        <ColorWhite>Orden Plataforma</ColorWhite>
      </TituloChico>

      <TarjetaBlanca>
        <Espacio />
        <TituloGrande>Culto de Adoración</TituloGrande>
        <Espacio />
        <TituloChico>
          <ColorRed>Sábado 18 de Junio 2022</ColorRed>
        </TituloChico>
        <Espacio />
        <LetraTexto>
          "SI Jehová no edificare la casa, En vano trabajan los que la edifican:
          Si Jehová no guardare la ciudad, En vano vela la guarda". Salmos 127:1{" "}
          <br />
          "Porque esperaba ciudad con fundamentos, el artífice y hacedor de la
          cual es Dios." Hebreos 11:10.
        </LetraTexto>
        <Espacio />
        <ImagenSombra>
          <img src={cruz} alt="imagen cruz" />
        </ImagenSombra>
        <Espacio />
        <TituloLeft>Primer Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Preparándonos para adorar al Creador <br />
          --- Grupo de Alabanzas: (10:45 AM) <br />
          {/* --- Entrada Plataforma: (11:00 AM) <br /> */}
          --- Doxología: Congregación adora al Creador <br />
          1 - Invocación: <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Segundo Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Adorando a través de la confraternidad <br />
          2 - Bienvenida: Norma Manchón <br />
          {/* --- Adorando a través de la alabanza <br /> */}
          {/* 3 - Anuncia himno: Iris Camacho */}
          <br />
          {/* --- Himno: # 385 "Los que aman al Señor" <br /> */}
        </LetraBoletin>
        {/* <Espacio />
        <BordeCentro>
          <ConexionWeb href="http://www.iglesiadeolivos.com.ar/-/doc/himnario/477.html">
            Los que aman al Señor! (477)
          </ConexionWeb>
        </BordeCentro> */}
        {/* <Espacio /> */}
        <LetraBoletin>
          --- Adorando a través de la Palabra <br />
          --- Texto bíblico: Salmos 127:1, Heb. 11:10 <br />
          4 - Lectura bíblica: Dionis Leyva <br />
          --- Postrados adoramos al Creador <br />
          5 - Conduce Adoración: Bárbara Pérez <br />
          --- Respuesta: Congregación y piano <br />
        </LetraBoletin>
        <Espacio />
        <TituloLeft>Tercer Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Adorando a través de las Ofrendas <br />
          --- Reconocemos la soberanía de Dios <br />
          6 - Dirige ofrendas: Eduardito Castillo <br />
          --- Congregación canta alabanzas <br />
          --- Diaconado recibe las ofrendas <br />
          --- Bendición sobre diezmos y ofrendas <br />
          7 - Oración: Eduardito Castillo <br />
        </LetraBoletin>
        {/* <Espacio />
        <BordeCentro>
          <Link to="/ofrendas">Explicación Ofrendas</Link>
        </BordeCentro>
        <Espacio /> */}
        <LetraBoletin>
          {/* 8 - Aliah y Kelin comunican - anuncios <br /> */}
        </LetraBoletin>
        {/* <Espacio />
        <TituloLeft>Segmento Pastoral</TituloLeft>
        <Espacio />
        <LetraBoletin>
          --- Presentación de niños <br />
          --- Recibiendo nuevos miembros <br />
          --- Oración intercesora por enfermos <br />
          --- Anuncios extraordinarios <br />
          --- Presentación del predicador <br />
        </LetraBoletin> */}
        <Espacio />
        <TituloLeft>Cuarto Segmento</TituloLeft>
        <Espacio />
        <LetraBoletin>
          {/* --- Adoración a través de la Palabra <br />
          9 - Selección musical: Florencio Campos <br />
          --- Título: Alabanza a Dios <br />
          10 - Sermón: Alexander Beltré <br />
          --- Sermón Título: "Regresamos a la Senda Antigua" <br />
          --- Entregando nuestras vidas a Dios <br />
          11 - Himno: # 173 "Vendrá el Señor" <br /> */}
        </LetraBoletin>
        <Espacio />
        {/* <BordeCentro>
          <ConexionWeb href="http://www.iglesiadeolivos.com.ar/-/doc/himnario/165.html">
            Vendrá el Señor (165)
          </ConexionWeb>
        </BordeCentro> */}
        <Espacio />
        <LetraBoletin>
          --- Dinámica: Aidelyn Brage <br />
          --- Programa Especial para los Padres <br />
          --- Título: Construyendo para la Eternidad <br />
          {/* 12 - Oración: Alexander Beltré <br /> <br /> */}
        </LetraBoletin>
        <Espacio />
        <LetraGrande>Bendición de Dios para su Iglesia</LetraGrande>
        <LetraTexto>
          "Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro
          sobre ti, y tenga de ti misericordia; Jehová alce sobre ti su rostro,
          y ponga en ti paz". Números 6:24-26
          <Espacio />
          Así sea
        </LetraTexto>
        <Espacio />
        <LetraBoletin>
          <Espacio>--- Salida Organizada Diaconado</Espacio>
          <LetraGrande>"Un sábado de gozo para todos".</LetraGrande>
          <Espacio />
        </LetraBoletin>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloChico>
          <ColorRed>Himnario Disponible</ColorRed>
        </TituloChico>
        <Espacio />
        <BlancoSombraCorto>
          <ConexionWeb href="http://www.iglesiadeolivos.com.ar/himnario_adventista.html">
            Himnario Online
          </ConexionWeb>
        </BlancoSombraCorto>

        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ImagenGrande>
          <img src={sigueme} alt="imagen sigueme" />
        </ImagenGrande>
      </TarjetaBlanca>

      {/* <TarjetaBlanca>
        <TituloMedio>Principios de Adoración</TituloMedio>
        <LetraAlmuerzo>
          I. ¿Qué es adorar?
          <Espacio />
          <Espacio />
          II. ¿Por qué adorar?
          <Espacio />
          <Espacio />
          II. ¿Cómo adorar?
          <Espacio />
        </LetraAlmuerzo>
      </TarjetaBlanca> */}

      <TarjetaBlanca>
        <TituloMedio>¿Qué es la Iglesia?</TituloMedio>
        <LetraGrande>
          Esa imagen de arriba representa lo que hacía Jesús, quien se reunía lo
          mismo al aire libre, llanura, ladera de una montaña, en la sinagoga,
          en los atrios del templo. En cualquier momento ó lugar donde él
          pudiera alcanzar a un ser humano, él estaba allí. Incluyendo fiestas,
          bodas, celebraciones nacionales y familiares. Comía con los pecadores.
          Les hablaba y bendecía donde quiera los encontraba, campo, ciudad,
          camino.
        </LetraGrande>
        <LetraAlmuerzo>
          La iglesia es más que un edificio, más que una denominación, y mucho
          más que una programación.
          <Espacio />
          De acuerdo a la Biblia, la iglesia es el cuerpo de Cristo. Todos los
          que han depositado su fe en el Señor Jesucristo, le aman, le sirven,
          le escuchan, le siguen, le aman.
          <Espacio />
          Eso incluye también a muchos que simplemente están intentando
          conocerle, y a otros que ni siguiera están interesados en el.
          <Espacio />
          La iglesia no está definida por una cultura, una época, una
          preferencia social, un gusto personal o apreciación individual.
          <Espacio />
          La iglesia no es un programa o un conjunto de reglas. No es una
          estructura o formato rígido, que se mantiene congelado a través del
          tiempo, cultura, lugar.
          <Espacio />
          La iglesia no es creada por la mente humana; por eso, no está limitada
          a ideas o conceptos de una persona, tampoco de un colectivo de
          personas.
          <Espacio />
          Dios conoce y ama a todos, e intenta alcanzarlos, sin depender de
          ninguna condición relacionada con formas, estilos, etc, etc. El puede
          recibir la adoración del más encumbrado de los mortales de la misma
          manera que del más pobre, ignorante miembro de la familia humana.
          <Espacio />
          El ha tenido paciencia y la sigue teniendo con todos y cada uno,
          porque más allá de las buenas intenciones, no hay un solo ser humano
          que haga las cosas bien. Todos dependemos de la paciencia,
          misericordia de Dios.
          <Espacio />
          Esa actitud de querer limitar la iglesia a conceptos humanos, ha hecho
          daño a las personas y ha provocado que muchos rechacen la iglesia, la
          desprecien y se alejen de ella.
          <Espacio />
          La iglesia es creada y edificada por Jesucristo mismo. Y es él quien
          la guía, sostiene, cuida y santifica. Es su tesoro más preciado en la
          tierra.
          <Espacio />
          La iglesia es suya, y porque es suya, EXISTE y PERMANECE. Si
          dependiera de la sabiduría humana, del cuidado cesolo de algunos seres
          humanos, sin duda, ya hubiera desaparecido la iglesia.
          <Espacio />
          La iglesia es el único objeto sobre el cual Dios deposita su suprema
          consideración. Aun cuando está llena de defectos y deficiencias, así
          como limitaciones.
          <Espacio />
          Jesucristo la ama, la cuida, la protege, la lleva en sus manos. CON
          SUS VIRTUDES Y DEFECTOS. En ninguna época la iglesia ha sido igual. En
          cada etapa de la historia, ha tenido diferencias consigo misma, pero
          siempre ha sido propiedad exclusiva de Jesucristo.
          <Espacio />
          Muchos seres humanos, grandes y pequeños, se han creído con la
          facultad o la capacidad de moldearla, edificarla, protegerla,
          dirigirla, manipularla, pero eso ha sido y seguirá siendo un error, y
          hasta podría llegar a ser considerado como un crimen.
          <Espacio />
          La iglesia no existe sin Jesucrito. La iglesia tampoco existe sin
          personas.
          <Espacio />
          Aunque las personas sirven a la iglesia, no son ellas las que la
          edifican. La iglesia fue creada para edificar a las personas. Es
          imperfecta porque las personas somos imperfectas, pero el modelo de la
          iglesia es Jesucristo el UNICO que es perfecto. Y es El quien la
          edifica, a través de su Espiritu Santo.
          <Espacio />
          La iglesia está creada para reunir a personas diferentes en un mismo
          propósito: Adorar, alabar, predicar, aprender, enseñar, edificar,
          amarse, respetarse, convivir, alegrarse, llorar y reir juntos. Hacer
          mejor la vida en esta tierra y prepararnos para la vida eterna.
          <Espacio />
          La iglesia, de Jesucristo, ES IGLESIA, aunque esté debajo de un árbol,
          aunque esté en el desierto, aunque esté en una cueva, o también en un
          palacio.
          <Espacio />
          La Iglesia es la iglesia de Jesucristo, tenga muchos o pocos recursos
          materiales o intelectuales. Tenga una programación larga o corta.
          Tenga un tipo de programación u otro, un tipo de música u otra, esté
          conformada por miembros pobres o ricos, tenga una programación alegre
          o aburrida, interesante o monótona, antigua o moderna, dinámica o
          estática, alejada de las necesidades reales y actuales de sus
          miembros, sus jóvenes y niños, o preocupada por estos, según las
          diferentes etiquetas.
          <Espacio />
          Lo que define a una iglesia verdadera no es que se ajuste a tus gustos
          o preferencias.
          <Espacio />
          La iglesia de Jesucristo puede estar compuesta por personas que se
          visten de etiqueta, o casual, inclusive en chancletas y shorts, y
          todavía ser la iglesia de Jesucristo, esa que él ama, aquella por la
          que entregó su vida. Puede estar en un calabozo o en un hospital y eso
          no cambia el hecho de que es la iglesia. La congregación o reunión de
          los que creen en Jesús, esperan en él, aprenden de él, le aman y le
          adoran.
          <Espacio />
          EL HECHO DE QUE TE GUSTE, NO LA HACE VERDADERA; EL HECHO DE QUE NO TE
          GUSTE, NO LA HACE FALSA Y NO TE DA EL DERECHO A CRITICARLA.
          <Espacio />
          Cuidado con sentirte el juez que determina cuando una iglesia hace las
          cosas bien o mal, simplemente porque no se ajusta a tus propias ideas
          de lo que es una iglesia, ni a ningún pre-concepto o prejuicio
          personal.
          <Espacio />
          El hecho de que tú hayas conocido una iglesia en un tiempo, lugar,
          cultura, liturgia, no significa que ese es el modelo ideal o perfecto.
          Si así fuera, entonces nunca en la historia de la humanidad ha
          existido ni existirá esa iglesia con la que tu sueñas. Solamente en tu
          mente. Todas han sido y seguirán siendo diferentes en su forma. LA
          IGUALDAD DEBE ENFOCARSE EN LOS PRINCIPIOS DIVINOS. No es el orden
          humano.
          <Espacio />
          Iglesia significa: Reunión, congregación. La iglesia es una familia,
          es la escuela, el hospital, es el lugar donde aprendemos de
          Jesucristo: el amor, el gozo, la tolerancia, el perdón, la paciencia,
          la aceptación, el respeto por las diferencias.
          <Espacio />
          Es el lugar donde nos enfocamos en las virtudes de cada uno y no en
          los defectos. Es el lugar donde, aun cuando nos equivocamos y
          cometemos errores, todavía recibimos amor y respeto de la otra parte
          del cuerpo de Cristo.
          <Espacio />
          Aprendemos de Jesús a amarnos unos a otros a pesar de nuestras faltas,
          a pesar de nuestras costumbres, ideas, conocimiento o falta de este; a
          alegrarnos cuando estamos juntos y extrañarnos cuando estamos lejos,
          gozarnos cuando estamos bien, a compartir tristeza y dolor cuando
          estamos mal. Somos una verdadera familia en Cristo. Más allá de la
          nacionalidad, la raza, el sexo, las edades, etc. etc.
          <Espacio />
          No andamos vigilándonos, juzgándonos, criticándonos, murmurando unos
          de otros. Todo lo contrario. Soportándonos con paciencia los unos a
          los otros en el amor de Dios. Enfatizando lo bueno e ignorando lo no
          tan bueno. Afirmando lo que nos une y dejando de lado lo que nos
          separa. Haciendo lo posible porque todos nos mantengamos en el camino,
          sin apurarnos unos a otros. Aprendiendo de Dios su paciencia, su
          tolerancia, su misericordia. Dios se toma tiempo para edificarte a ti.
          No quieras empujar a otros y sacarlos del ritmo. Dios respeta el
          tiempo de cada uno. Seguramente Dios ha tenido mucha paciencia contigo
          a través de toda tu vida. Tú te has tomado todo tu tiempo, y ahora
          cuando presumes haber reaccionado, haber aprendido algo, entonces
          quieres imponerselo a otros a la fuerza, sin la más mínima paciencia.
          <Espacio />
          Tu tarea es exigirte tú a tí mismo, no a los demás.
          <Espacio />
          Esa identidad de familia no tiene como base ninguna condición. No
          tiene como base ningún tipo de formato de horario, programa,
          estructura de servicio. No incluye una lista de requisitos humanos.
          <Espacio />
          Todas esas cosas son dependientes del tiempo, la época, el lugar, la
          cultura, las necesidades de cada generación. Ninguna es un modelo de
          perfección ni un patrón a seguir ininterrumpidamente. Todas las
          generaciones se han equivocado en muchos cosas. Todas han tenido sus
          virtudes y defectos. Ninguna merce ser el modelo a seguir.
          <Espacio />
          Es importante mencionar que el desafío de cada generación es
          completamente diferente al de la anterior y también de la que la
          sigue. Por eso las distintas generaciones no pueden hacer las cosas de
          la misma manera.
          <Espacio />
          La iglesia en su forma es como la ropa: distinta en cada tiempo y
          lugar, pero siempre cumpliendo el mismo propósito: CUBRIR LA
          VERGUENZA, DAR CALOR, PROTEGER LA SALUD, lA DIGNIDAD, LA PRIVACIDAD,
          EMBELLECER LA HUMANIDAD, HACER LA VIDA MEJOR.
          <Espacio />
          Los principios no cambian: El amor, el respeto, el perdón, la fe, la
          misericordia, la paciencia, la tolerancia. Las doctrinas bíblicas. Las
          promesas divinas. Todo eso es permanente.
          <Espacio />
          La manera en que cantamos, nos vestimos, hablamos, organizamos el
          culto, predicamos, nos comunicamos, siempre ha cambiado y seguirá
          cambiando.
          <Espacio />
          Si estudias la primera iglesia en la tierra: El Eden, y cada una de
          las iglesias de las diferentes etapas de la historia, verás que todas
          han sido diferentes en la forma, pero semejantes en los principios
          divinos.
          <Espacio />
          La iglesia va cambiando en cada generación de la misma forma que
          cambia la vida.
          <Espacio />
          Aun dentro de un mismo edificio, conviven varias generaciones con
          diferentes visiones de vida y también diferentes visiones en la
          práctica de la fe.
          <Espacio />
          Necesitamos ser capaces de pensar en todos y no solamente en nosotros
          mismos. Necesitamos tener en cuenta a los adultos, a los niños, a los
          que llevan décadas en la iglesia y a los que están comenzando.
          Necesitamos tener en cuenta a los que están dentro y a los que están
          fuera. Todos necesitan nuestra atención, comprensión, simpatía,
          empatía.
          <Espacio />
          Seamos cuidadosos en la manera de hablar, de juzgar, de señalar a los
          demás cuando hacen las cosas diferentes a lo que pensamos que debe ser
          hecho, no sea que al hacerlo, no estemos agradando a Dios y no estemos
          edificando la iglesia, y más bien estemos trabajando para el enemigo
          de la iglesia, para alejar a las personas.
          <Espacio />
          Si en algún asunto es necesario que todos o algunos nos pongamos de
          acuerdo en punto grande o pequeño, esto debe resolverse en privado, de
          forma personal, con quien corresponda; esto no debe provocar
          murmuraciones, quejas, chisme. En Mateo 18 Jesús nos dice cuál es el
          método aprobado por Dios y con garantías divinas.
          <Espacio />
          Así como el mundo es diverso, la iglesia también es diversa. Esta no
          se acomoda al gusto de persona o grupo. No se ajusta a una cultura
          específica. LA IGLESIA ES COMO SU CREADOR: Capáz de abrir sus brazos y
          recibirlos a todos.
          <Espacio />
          La iglesia recibe y acoge desde los más primitivos y alejados del
          mundo moderno, así como también a los más instruídos y civilizados. Y
          no es una programación ni una agenda humana la que hace la diferencia.
          Es el Espíritu de Dios, el amor de Dios, la paciencia de Dios la que
          edifica la vida, transforma el corazón, construye un carácter.
          <Espacio />
          Cuando Cristo venga a buscar su iglesia, no viene a buscar un
          edificio, ni una denominación, ni un tipo de servicio o programación.
          NO.
          <Espacio />
          El viene a buscar a aquellos que le aman, que le adoran de corazón, a
          aquellos que han aprendido a amar y respetar a sus semejantes. A
          aquellos que le sirven, le esperan. Y eso finalmente está fuera de la
          vista de cualquier ser humano. Sólo Dios conoce las motivaciones, las
          intenciones del corazón.
          <Espacio />
          Siempre ha existido el peligro de que algunos seres humanos quieran
          ocupar la posición de Dios y usurpar sus funciones. Ese fue el origen
          del pecado. Y sigue siendo pecado la actitud de asumir esa posición.
          <Espacio />
          Deja que sea Dios quien haga ese trabajo. El no se equivoca nunca.
          <Espacio />
          La programación de la iglesia ó la Escuela Sabática, ó el culto de
          Adoración ó el sermón, NO VA A HACER EN TU VIDA LO QUE TU MISMO TIENES
          QUE HACER POR TU PROPIA CUENTA Y CON TU PROPIO ESFUERZO, en tu
          familia, en tu privacidad, que es orar, leer, estudiar, adorar,
          servir, humillarte delante de Dios, cuidar tus palabras, tus
          pensamientos, tus evaluaciones o murmuraciones. Y entender que la
          iglesia es de Dios y el la cuida mejor que tú.
          <Espacio />
          Un principio básico de la adoración es que venimos a la iglesia a dar,
          NO A recibir. Decimos esto para aquellos que dicen: NO RECIBI NADA.
          NADA ESTUVO BUENO. NO SE PREDICO LA PALABRA. EL CULTO FUE UN SHOW.
          <Espacio />
          Todo lo bueno que hayamos recibido de Dios durante toda la semana,
          venimos a compartirlo con los demás para edificación de la iglesia, en
          un ambiente de alegría, de alabanza, de acción de gracias, de
          satisfacción evidente, de amor para otros, de humildad y respeto.
          <Espacio />
          La iglesia no es un show de la televisión, no es algo común, corriente
          y barato, pero es el SHOW que muestra al mundo y al universo lo que es
          capaz de hacer Dios en nuestras vidas. Es un espectáculo impresionante
          de la capacidad de Dios de unir a personas diferentes a través del
          evangelio. Es el resultado del milagro que sólo Dios puede hacer, y es
          transformar a los pecadores en HIJOS DE DIOS. Y esta realidad, debe
          estar rodeada de alegría sana y desbordante.
          <Espacio />
          No hay pecado en la alegría, en el gozo cristiano. La programación de
          la iglesia es un espectáculo para el Universo, es un testimonio del
          poder del evangelio. Es un anticipo del gozo de la eternidad. No es
          tristeza, aburrimiento, no es crítica. La crítica es la herramienta
          del enemigo para dividir, separar, entristecer, desanimar, destruir.
          <Espacio />
          Venimos a cantar, a orar, a ofrendar, a saludar, a sonreir, a amar, a
          hacer amistad, a tolerar, a perdonar, a comprender, a ver las cosas
          buenas de los demás. Y también a intentar hacer mejor la convivencia
          en la casa de Dios.
          <Espacio />
          Venimos a intentar suplir las necesidades de los otros, a agradecer
          porque otros han trabajado duro, han invertido tiempo y recursos
          propios para que haya una programación para ti, para tus hijos, para
          tus invitados.
          <Espacio />
          CUALQUIER PROGRAMACION, LLEVA TIEMPO DE TRABAJO, PREOCUPACION, ESTRES,
          SACRIFICIO. Así como cocinar y poner la mesa, la iglesia es el
          resultado del trabajo constante de muchos. No te apures en juzgar y
          señalar. Respeta el trabajo de otros. Hay muchas horas de desvelo, de
          esfuerzo, de entrega, sacrificio, oraciones y hasta llanto en aquellos
          que han trabajado para hacer algo para la iglesia, y luego llega
          alguien fresquecito a criticar. Y lo peor es que cree que lo hace en
          nombre de Dios, para defender a Dios, para edificar su iglesia. Y no,
          no es cierto.
          <Espacio />
          Cuando venimos a dar: ENTONCES RECIBIMOS.
          <Espacio />
          Cuando venimos vacíos, nos vamos tan vacíos como vinimos, o peor. Y
          generalmente nos vamos criticando, juzgando, señalando a los demás.
          <Espacio />
          NO CULPES A LA IGLESIA NI A OTROS, POR El PROPIO ABANDONO DE TU
          RESPONSABILIDAD PERSONAL. Tu vacío espiritual no lo puede llenar la
          programación de la iglesia, ni un sermón. Tu vacío solamente puede
          llenarlo Dios, a través de una relación personal y verdadera con él.
          <Espacio />
          La iglesia fue creada con el propósito de unirnos, animarnos,
          edificarnos, pero la iglesia no puede hacer por ti, lo que tu mismo
          tienes que hacer. Ni aun Dios puede hacer ni va a hacer por ti, eso
          que te toca a ti hacer.
          <Espacio />
          Nadie puede darte lo que sólo Dios te puede dar. Así como nadie puede
          recibir lo que no comprende, no conoce, no quiere.
          <Espacio />
          Conclusión: No esperes que la iglesia sea perfecta, porque no lo va a
          ser en esta tierra. No esperes que la iglesia supla en tu vida
          espiritual, en tu relación con Dios, lo que tú mismo necesitas suplir
          manteniendo una relacion estrecha, íntima con Dios.
          <Espacio />
          No exijas a la iglesia. Tú eres la iglesia. Tú eres parte de la
          iglesia. Sé un edificador de la iglesia, no un crítico.
          <Espacio />
          No intentes personalizar la iglesia a tu gusto, porque la iglesia no
          es para tí sólo. Es para todos. <Espacio />
          No olvides, la iglesia es de Dios, y por su gracia, poder,
          misericordia, sabiduría existe y sobrevive en este mundo malo.
          <Espacio />
          "Dos hombres subieron al templo á orar: el uno Fariseo, el otro
          publicano. El Fariseo, en pie, oraba consigo de esta manera: Dios, te
          doy gracias, que no soy como los otros hombres, ladrones, injustos,
          adúlteros, ni aun como este publicano; Ayuno dos veces á la semana,
          doy diezmos de todo lo que poseo. Mas el publicano estando lejos no
          quería ni aun alzar los ojos al cielo, sino que hería su pecho,
          diciendo: Dios, sé propició á mí pecador. Os digo que éste descendió á
          su casa justificado antes que el otro; porque cualquiera que se
          ensalza, será humillado; y el que se humilla, será ensalzado". Lucas
          18:10-14.
          <Espacio />
          "Enemistad pondré entre ti (la serpiente) y la mujer (la iglesia),
          entre tu simiente (la serpiente) y la simiente suya (la iglesia); esta
          te herirá en la cabeza (la iglesia a la serpiente); y tú le herirás en
          el calcañar (la serpiente a la iglesia)". Génesis 3:15-17.
        </LetraAlmuerzo>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export const LetraBoletin = styled.p`
  color: black;
  font-size: 19px;
  padding-left: 25px;

  @media screen and (min-width: 750px) {
    font-size: 25px;
    padding-left: 55px;
  }
`;
export const LetraTexto = styled.p`
  color: darkmagenta;
  border-radius: 10px;
  padding: 6px;
  font-size: 18px;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial" sans-serif;

  @media screen and (min-width: 750px) {
    font-size: 25px;
  }
`;
export default Boletin;
