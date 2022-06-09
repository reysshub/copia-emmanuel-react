import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import yaxel from "../img/familia/nucleos/yaxel/yaxelfamilia.png";

const FamiliaYaxel = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Yaxel</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={yaxel} alt="foto" />
            Yaxel Martínez <br />
            Greysis Rodríguez (Esposa) <br />
            Yelennis Martínez (Hija) <br />
            Emmanuel Martínez (Hijo) <br />
            Reinita Lazo (Suegra) escondidita
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaYaxel;
