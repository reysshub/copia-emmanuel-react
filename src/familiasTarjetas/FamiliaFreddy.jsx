import {
  TarjetaFamilia,
  ContenedorFamilia,
  FotoGrande,
} from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import freddy1 from "../img/familia/nucleos/freddy/freddy2.jpg";
import freddy2 from "../img/familia/nucleos/freddy/freddy3.jpg";
import freddy3 from "../img/familia/nucleos/freddy/freddy4.jpg";
import freddy4 from "../img/familia/nucleos/freddy/freddyhijo.jpg";
import freddy5 from "../img/familia/nucleos/freddy/freddy5.jpg";
import freddy6 from "../img/familia/nucleos/freddy/freddy1.jpg";

const FamiliaFreddy = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Freddy</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={freddy1} alt="foto" />
            Freddy Durán
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={freddy2} alt="foto" />
            Freddy Durán
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={freddy3} alt="foto" />
            Freddy Durán
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={freddy4} alt="foto" />
            Hijo y nuera
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={freddy5} alt="foto" />
            Freddy y esposa
          </FotoGrande>
          <FotoGrande>
            <img src={freddy6} alt="foto" />
            Familia Freddy
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaFreddy;
