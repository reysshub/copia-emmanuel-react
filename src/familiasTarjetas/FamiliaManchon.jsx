import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import manchon1 from "../img/familia/nucleos/manchon/manchon4.png";
import manchon2 from "../img/familia/nucleos/manchon/manchon3.png";
import manchon3 from "../img/familia/nucleos/manchon/manchon1.png";
import manchon4 from "../img/familia/nucleos/manchon/manchon2.png";

const FamiliaManchon = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Manchón</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={manchon1} alt="foto" />
            Norma Manchón <br />
            Carlos Antonio Alejandro <br />
            Madre e hijo
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={manchon2} alt="foto" />
            Carlitos y su tía <br />
            María Luísa Manchón
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={manchon3} alt="foto" />
            Nos vamos de paseo con Gloria
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={manchon4} alt="foto" />
            Familia Manchón y Noelvis
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaManchon;
