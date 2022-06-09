import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import olga from "../img/familia/nucleos/peguero/olga.png";
import elio from "../img/familia/nucleos/peguero/elio.png";
import carlos from "../img/familia/nucleos/peguero/carlos.png";

const FamiliaPeguero = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Peguero</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={olga} alt="foto" />
            Olga Lajara
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={elio} alt="foto" />
            Elio Peguero
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={carlos} alt="foto" />
            Carlos O Montas
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaPeguero;
