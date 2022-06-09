import {
  TarjetaBlanca,
  TituloGrande,
  TituloMedio,
  TituloChico,
  ColorWhite,
  ColorRed,
  Espacio,
  ImagenSombra,
  BordeCentro,
  ImagenMedia,
} from "../components/CardCodigo";
import { LetraAlmuerzo } from "../paginasInicio/Almuerzo";
import { LetraTexto } from "../paginasInicio/Boletin";
import { CajaCumpleanos, DosColumnasLeft } from "./Miembros";
import jesusorando from "../img/jesuorando.jpg";
import manosorando from "../img/manosorando.webp";

const Oracion = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Página de la Oración</ColorWhite>
      </TituloMedio>
      <TituloChico>
        <ColorWhite>Lista de Necesidades</ColorWhite>
      </TituloChico>

      <TarjetaBlanca>
        <Espacio />
        <TituloGrande>Culto Miércoles</TituloGrande>
        <Espacio />
        <TituloChico>
          <ColorRed>"Orad sin cesar". 1 Tesalonicenses 5:17</ColorRed>
        </TituloChico>
        <Espacio />
        <LetraTexto>
          "Pedid, y se os dará, buscad, y hallaréis; llamad, y se os abrirá.
          Porque todo el que pide, recibe; y el que busca, halla; y al que
          llama, se le abrirá." Mateo 7:7,8
        </LetraTexto>
        <Espacio />
        <ImagenSombra>
          <img src={jesusorando} alt="imagen cruz" />
        </ImagenSombra>
        <Espacio />
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Oración por bautismo</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. Maida Sánchez (Amiga de Marelis y de todos) <br />
          2. Deli Díaz (Esposa de Dani Leyva) <br />
          3. Zurina Vázquez (Nieta de Irma Durán) <br />
          4. Meeyah Vázquez (Mía, Nieta de Irma Durán) <br />
          5. Gabriel Jiménez (Esposo de Irma Durán) <br />
          6. Gisela Portal (Amiga de Elsy) <br />
          7. Pedro Buenaño (Esposo de Ceferina) <br />
          8. Gilberto González (Nuevo Hermano) <br />
          9. Antonio Hidalgo (Joven que viene con Eduardito) <br />
          10. Meibys Margarita Santos (mamá chinitos) <br />
          11. Emerio Santos (Papá de Margarita) <br />
          12. Rosalía de la Caridad de la Rosa <br />
          13. Irene (Grupo de Moisés) <br />
          14. Valentina (Grupo de Moisés) <br />
          15. Ruth Elena Rodríguez <br />
          16. Juana Bautista <br />
          17. Loren Reyna (Pedido de Ramón Cruz) <br />
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            "Así que, las iglesias eran confirmadas en fe, y eran aumentadas en
            número cada día". Hechos 16:5
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Bautizados en 2022</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. Laurita Pérez - Abril 2/2022
          <br />
          2. Mizar Villegas - Abril 2/2022
          <br />
          3. Marco A. Castellanos - Abril 2/2022 <br />
          4. Magalie Luceus - Mayo 21/2022 <br />
          5. Yngrid López - Mayo 21/2022 <br />
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            "Así que, los que recibieron su palabra, fueron bautizados: y fueron
            añadidas á ellos aquel día como tres mil personas. Y perseveraban en
            la doctrina de los apóstoles, y en la comunión, y en el partimiento
            del pan, y en las oraciones". Hechos 2:41, 42.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Oración por salud</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnasLeft>
            1. Noemí Nesterdalis <br />
            2. Margarita Suárez <br />
            3. Irene Díaz <br />
            4. Margarita Cruz <br />
            5. Ada Sepúlveda <br />
            6. Aida Soto <br />
            7. Delia Ancheta <br />
            8. Noel West <br />
            9. Verónica Salinas <br />
            10. Betzaida Vegas <br />
            11. Feliz Miguel Cuello <br />
            12. Miguel Crespo <br />
            13. Merly Aguilera <br />
            14. Didiú Rubio <br />
            15. Marisol Peña <br />
            16. Mariana Irizarry <br />
            17. Milán Fong <br />
          </DosColumnasLeft>
          <DosColumnasLeft>
            18. Martha Blanco <br />
            19. Dorys Ojeda <br />
            20. Irma Ojeda <br />
            21. Jenny Geraldiño <br />
            22. Denia Roche <br />
            23. Aidelyn Brage <br />
            24. Mariano González <br />
            25. Caridad Marín <br />
            26. Vicente Hernández <br />
            27. Elio Peguero <br />
            28. Sivia Peláez <br />
            29. Norma Niño <br />
            30. Santa Valdés <br />
            31. Rolando Camacho <br />
            32. Victor Soñé Jr. <br />
            33. Martha Fuentes. <br />
            34. <br />
          </DosColumnasLeft>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraTexto>
            "Amado, yo deseo que tú seas prosperado en todas cosas, y que tengas
            salud, así como tu alma está en prosperidad". 3 Juan 1:2
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Pedidos Especiales</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. Familia en camino de travesía <br />
          2. Familia y hermanos recién llegados <br />
          3. Hermanos de Ukrania <br />
          4. Yajaira Cintrón (Pedido personal) <br />
          5. Roberto Real (Pedido personal) <br />
          6. Betsaida Vega (Pedido personal) <br />
          7. Cándida Martínez (Por sus hijos y nietos) <br />
          8. Jimmy González (sus camiones) <br />
          9. Yaxel Martínez (sus camiones) <br />
          10. Jorláin Sánchez (sus camiones) <br />
          11. Luís Carlos Corría (sus camiones) <br />
          12. Hijos de Ramón Cruz <br />
          13. Hijos y nietos de Teresa García <br />
          14. Hija de Irma Velásquez (proceso migración)
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            "Hasta los cabellos de vuestra cabeza están todos contados". Mateo
            10:30
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Cónyuge en otro país</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. Reinier Batista <br />
          2. Misael Ortega <br />
          3. Dora Díaz <br />
          4. Juan Carlos Martínez
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            "¿No se venden dos pajarillos por un cuarto? Con todo, ni uno de
            ellos cae a tierra sin vuestro Padre. Pues aun vuestros cabellos
            están todos contados. Así, no temáis. Más valéis vosotros que muchos
            pajarillos". Mateo 10:29-31.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Les estrañamos</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnasLeft>
            1. Josué Camacho <br />
            2. Jelenni Camacho <br />
            3. Rubén Cotito <br />
            4. Rose Mary Cotito <br />
            5. Angelo González <br />
            6. Yenia Díaz <br />
            7. María Laura Ferreira <br />
            8. Rigoberto Gallardo <br />
            9. Gloria Susan Báchez <br />
            10. Victor Manuel Báchez <br />
            11. Waleska Luna <br />
            12. Jairo Mastrapa <br />
            13. Kelian Parra <br />
            14. Elizabeth Fuentes <br />
            15. Roberto Real <br />
            16. Sheila Reyes <br />
            17. Yoleidi Reyes <br />
            18. Lázaro N. Román <br />
            19. Humberto Velásquez Jr. <br />
            20. Alexis Velásquez <br />
            21. Yerolín Villegas <br />
            22. Nathalie Ramos <br />
            23. Mariam Albuerne <br />
            24. Ramón Albuerne <br />
            25. Isael Borges <br />
            26. Rosario Cabrera <br />
            27. Daisy Carrasco <br />
            28. Ariel Casasayas <br />
            29. Eduardo Ceiro Sr. <br />
            30. Odalys Ceiro <br />
            31. Eduardo Ceiro Jr. <br />
            32. Octavio Córdova <br />
            33. Arletys Delgado <br />
            34. Leticia Delgado <br />
            35. Edgar Delgado <br />
            36. Roilan Delgado <br />
            37. Yaimara Durán <br />
            38. Nidia Gamarra <br />
            39. Carlos L Gómez <br />
            40. Sheila Gómez <br />
            41. Ana Sofía Gómez <br />
            42. Lillian Grullón <br />
          </DosColumnasLeft>
          <DosColumnasLeft>
            43. Mariana Irizarry <br />
            44. Bertha Lastra <br />
            45. Alexis Lastra <br />
            46. Luna Waleska <br />
            47. Fernanda Díaz <br />
            48. Nestor Patiño <br />
            49. Elmer Porras <br />
            50. Rodolfo Portillo <br />
            51. Angel A Ramírez <br />
            52. Ana María Rguez <br />
            53. Tatiana Romero <br />
            54. Julia Salas <br />
            55. Aida Soto <br />
            56. Annia Utra <br />
            57. Annerys Utra <br />
            58. Betzaida Vega <br />
            59. Gustavo A. Ferreiro <br />
            60. Victor A. Figueroa <br />
            61. Susanne Moral <br />
            62. Teresa Márquez <br />
            63. María I. Arenas <br />
            64. Elvia Castro <br />
            65. Miguel Castro <br />
            66. Miguel Crespo <br />
            67. Orestes Fleites <br />
            68. Jeniffer Fox <br />
            69. Norma Hernández <br />
            70. Luz Manosalvas <br />
            71. Orlando Manosalvas <br />
            72. Norma B. Niño <br />
            73. Ramon Nuñez <br />
            74. Marisol Peña <br />
            75. Luís Corría <br />
            76. Zeth Sepúlveda <br />
            77. Salomón Sepúlveda <br />
            78. Marcos Crespo <br />
            79. Lupita Sepúlveda <br />
            80. Lupe Crespo <br />
            81. Jessica Crespo <br />
            82. Amaury Viera <br />
            83. Marisol Pérez <br />
            84. Chantel Pérez <br />
          </DosColumnasLeft>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraTexto>
            "Mantengamos firme la profesión de nuestra fe sin fluctuar; que fiel
            es el que prometió. Y considerémonos los unos á los otros para
            provocarnos al amor y á las buenas obras; No dejando nuestra
            congregación, como algunos tienen por costumbre, mas exhortándonos;
            y tanto más, cuanto veis que aquel día se acerca". Hebreos 10:23-25.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Estadísticas Miembros</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          59 Matrimonios (Ambos Miembros: 118) <br />
          24 matrimonios (Conyuge no es miembro) <br />
          67 solteros (Algunos son menores todavía) <br />
          13 divorciados <br />
          25 viudos <br />
          29 miembros jubilados <br />
          12 desabilitados <br />
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            "Confortará mi alma; Guiárame por sendas de justicia por amor de su
            nombre". Salmo 23:3.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Jovencitos Iglesia</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnasLeft>
            1. Pedrito Orellana <br />
            2. Heiden Ojeda <br />
            3. Rosy Alvarez <br />
            4. Miguel Alvarez <br />
            5. Julio Alvarez <br />
            6. Steffany Ruíz <br />
            7. Génesis Morales <br />
            8. Jonathan Morales <br />
            9. Michel David Pérez <br />
            10. Kelin Leyva <br />
            11. Aliah Beltré <br />
            12. Victor A Castillo <br />
            13. Yarina González <br />
            14. Sheila Reyes <br />
          </DosColumnasLeft>
          <DosColumnasLeft>
            15. Joshua Cotito <br />
            16. Nathania Cotito <br />
            17. Shennen Cotito <br />
            18. José Sánchez <br />
            19. Moisés Sánchez <br />
            20. Jéssica Crespo <br />
            21. Roilán Delgado <br />
            22. Jeidy González <br />
            23. Jeilyn González <br />
            24. Jelenys Martínez <br />
            25. Zurina Vázquez <br />
            26. Meeyah Vázquez <br />
            27. Jayla Salas <br />
            28.
          </DosColumnasLeft>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraTexto>
            "Alégrate, mancebo, en tu mocedad, y tome placer tu corazón en los
            días de tu juventud; y anda en los caminos de tu corazón, y en la
            vista de tus ojos: mas sabe, que sobre todas estas cosas te traerá
            Dios á juicio". Eclesiastés 11:9.
            <Espacio />
            "Ninguno tenga en poco tu juventud; pero sé ejemplo de los fieles en
            palabra, en conversación, en caridad, en espíritu, en fe, en
            limpieza". 1 Timoteo 4:12
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Edad Avanzada</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnasLeft>
            1. Jenny Geraldino <br />
            2. Lina Herrera <br />
            3. Miguel Crespo <br />
            4. Miguel Castro <br />
            5. Elvia Castro <br />
            6. Flora Dignora <br />
            7. Mirian Andreade <br />
            8. Vicente Hernández <br />
            9. Eneida Peláez <br />
          </DosColumnasLeft>
          <DosColumnasLeft>
            10. Dalia Pupo <br />
            11. Caridad Marín <br />
            12. Cándida Martínez <br />
            13. Luisa Rodríguez <br />
            14. Martha Fuentes <br />
            15. Teresa García <br />
            16. Carmen Vázquez <br />
            17. Elio Pequero <br />
            18. Martha Fuentes <br />
          </DosColumnasLeft>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraTexto>
            "He peleado la buena batalla, he acabado la carrera, he guardado la
            fe. Por lo demás, me está guardada la corona de justicia, la cual me
            dará el Señor, juez justo, en aquel día; y no sólo á mí, sino
            también á todos los que aman su venida". 2 Timoteo 4:7, 8.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Bautizados 2018-2021</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. Gustavo Adolfo Ferreiro. Marzo 31/2018 <br />
          2. Yarina González. Octubre 20/2018 <br />
          3. Llilian Grullón. Febrero 24/2018 <br />
          4. Jelenys Martínez. Octubre 20/2018 <br />
          5. Norma Beatriz. Febrero 16/2018 <br />
          6. Pedro Ismael Orellana. Octubre 20/2018 <br />
          7. Sheila de Jesús Reyes. Octubre 20/2018 <br />
          8. Nidia Gamarra. Febrero 2/2019 <br />
          9. Elizabeth Fuentes. Abril 20/2019 <br />
          10. Fredesvinda García. Mayo 18/2019 <br />
          11. Vicente Hernández. Mayo 18/2019 <br />
          12. Yris Gómez. Abril 20/2019 <br />
          13. Jeidy González. Octubre 5/2019 <br />
          14. Isabel González. Octubre 5/2019 <br />
          15. Reyna Isabel Lazo. Abril 20/2019 <br />
          16. Carlos Oliedmi Montas. Mayo 18/2019 <br />
          17. Jonathan Morales. Octubre 5/2019 <br />
          18. Nestor Patiño. Diciembre 28/2019 <br />
          19. Noemí Pimentel. Diciembre 7/2019 <br />
          20. Didiú Rubio. Abril 20/2019 <br />
          21. Jeniffer Fox. Diciembre 19/2020 <br />
          22. José Peláez. Julio 31/2021 <br />
          23. Silvia Peláez. Julio 31/2021 <br />
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            "Y el Dios de paz os santifique en todo; para que vuestro espíritu y
            alma y cuerpo sea guardado entero sin reprensión para la venida de
            nuestro Señor Jesucristo". 1 Tesalonicenses 5:23.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Paradero Desconocido</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnasLeft>
            1. Gissel Bautista <br />
            2. Hector Castillo <br />
            3. Wilfrid Gedeón <br />
            4. Ana Henríquez <br />
            5. María Manrique <br />
            6. Nathali Morales <br />
            7. Victor Morales <br />
            8. Nelson F. Saavedra <br />
          </DosColumnasLeft>
          <DosColumnasLeft>
            9. Charlie Salazar <br />
            10. Geraldine Salazar <br />
            11. Juan Gabriel Silva <br />
            12. Rafael Pérez <br />
            13. Rafael Reyes <br />
            14. Virgen Pla <br />
            15. Yris M. Gómez <br />
          </DosColumnasLeft>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraTexto>
            "Aunque ande en valle de sombra de muerte, No temeré mal alguno;
            porque tú estarás conmigo: Tu vara y tu cayado me infundirán
            aliento". Salmo 23:4.
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Asuntos Generales</TituloGrande>
        <Espacio />
        <LetraAlmuerzo>
          1. Planes de la Iglesia <br />
          2. Planes Misioneros <br />
          3. Semanas de Evangelismo <br />
          4. Grupos Pequeños <br />
          5. Ministerio Infantil <br />
          6. Ministerio Juvenil <br />
          7. Nuestro liderazgo <br />
          8. Familias de la iglesia <br />
          9. Matrimonios de la iglesia <br />
          10. Crecimiento de la Iglesia <br />
          11. Derramamiento del Espíritu Santo <br />
          12. Que Cristo venga pronto <br />
        </LetraAlmuerzo>
        <BordeCentro>
          <LetraTexto>
            <p>"Orad sin cesar". 1 Tesalonicenses 5:17</p>
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <TituloGrande>Se fueron a otro lugar</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnasLeft>
            1. Octavio Córdova <br />
            2. Raydenys Fermín <br />
            3. Eric Mateo <br />
            4. Loida Mateo <br />
            5. Erymel Mateo <br />
            6. Angel Morales <br />
            7. Kelsy Sánchez <br />
            8. Ada Sepúlveda <br />
            9. Elizabeth Saravia <br />
          </DosColumnasLeft>
          <DosColumnasLeft>
            10. Jesús Sepúlveda <br />
            11. Amaury Viera <br />
            12. Misael Pérez <br />
            13. Jeniffer Fox <br />
            14. Rafael Pérez <br />
            15. Leonardo Rivas <br />
            16. Martha González <br />
            17. Ramón Cruz <br />
            18. Margarita Cruz <br />
          </DosColumnasLeft>
        </CajaCumpleanos>
        <Espacio />
        <BordeCentro>
          <LetraTexto>
            "Ciertamente el bien y la misericordia me seguirán todos los días de
            mi vida: Y en la casa de Jehová moraré por largos días". Salmo 23:6
          </LetraTexto>
        </BordeCentro>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ImagenMedia>
          <img src={manosorando} alt="manos orando" />
        </ImagenMedia>
      </TarjetaBlanca>
    </>
  );
};

export default Oracion;
