import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import florencio from "../img/familia/nucleos/florencio/familiaflorencio.png";

const FamiliaFlorencio = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Florencio</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={florencio} alt="foto" />
            Florencio Campos <br />
            su esposa Carmen e hijos
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaFlorencio;
