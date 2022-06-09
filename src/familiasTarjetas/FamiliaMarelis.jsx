import {
  TarjetaFamilia,
  ContenedorFamilia,
  FotoGrande,
} from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import marelis from "../img/familia/nucleos/marelis/marelispasaporte.png";
import dania from "../img/familia/nucleos/marelis/dania.png";
import marelis1 from "../img/familia/nucleos/marelis/cake.png";
import marelis2 from "../img/familia/nucleos/marelis/lostres.png";
import marelis3 from "../img/familia/nucleos/marelis/marelisfamilia3.png";
import marelis4 from "../img/familia/nucleos/marelis/conzulema.png";
import marelis5 from "../img/familia/nucleos/marelis/grupoiglesia.JPEG";
import marelis6 from "../img/familia/nucleos/marelis/marelistodos.png";
import marelisx from "../img/familia/nucleos/marelis/mareliscuatro.png";

const FamiliaMarelis = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Marelis</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={marelis} alt="foto" />
            Marelis Díaz
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={dania} alt="foto" />
            Dania Leyva
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={marelis1} alt="foto" />
            Fiesta
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={marelis2} alt="foto" />
            Hermanitos
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={marelis3} alt="foto" />
            Los cuatro
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={marelisx} alt="foto" />
            La vida es bella
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={marelis4} alt="foto" />
            Elegancia
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={marelis5} alt="foto" />
            Familia distinguida
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={marelis6} alt="foto" />
            Familia feliz
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaMarelis;
