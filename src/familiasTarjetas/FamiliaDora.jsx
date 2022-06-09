import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import dora from "../img/familia/nucleos/dora/doradiaz.png";
import rigo from "../img/familia/nucleos/dora/rigobertogallardo.png";

const FamiliaDora = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Dora</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={dora} alt="foto" />
            Dora Díaz
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={rigo} alt="foto" />
            Rigo Gallardo
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaDora;
