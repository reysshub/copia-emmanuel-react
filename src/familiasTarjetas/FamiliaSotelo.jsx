import {
  TarjetaFamilia,
  ContenedorFamilia,
  FotoGrande,
} from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import edil from "../img/familia/nucleos/sotelo/edil.png";
import merly from "../img/familia/nucleos/sotelo/merly.jpg";
import edilmerly from "../img/familia/nucleos/sotelo/edilmerly.png";
import merlynietos from "../img/familia/nucleos/sotelo/merlynietos.jpg";
import familiamerly from "../img/familia/nucleos/sotelo/familiamerly.jpg";

const FamiliaSotelo = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Sotelo</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={edil} alt="foto" />
            Edil Sotelo
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={merly} alt="foto" />
            Merly Aguilera
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={edilmerly} alt="foto" />
            Esposos Sotelo
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={merlynietos} alt="foto" />
            Mis nietos
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={merlynietos} alt="foto" />
            Merly nietos
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={familiamerly} alt="foto" />
            Familia Merly
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaSotelo;
