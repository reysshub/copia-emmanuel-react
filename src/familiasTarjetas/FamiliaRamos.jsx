import {
  TarjetaFamilia,
  ContenedorFamilia,
  FotoGrande,
} from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import esteban from "../img/familia/nucleos/ramos/esteban.jpeg";
import katherine from "../img/familia/nucleos/ramos/katherine.jpg";
import emma from "../img/familia/nucleos/ramos/emma.png";
import brielle from "../img/familia/nucleos/ramos/brielle.png";
import karisbeth from "../img/familia/nucleos/ramos/karisbeth.png";
import esposos from "../img/familia/nucleos/ramos/esposos.png";
import familia from "../img/familia/nucleos/ramos/familia.png";
import family from "../img/familia/nucleos/ramos/family.png";
import katyesteban from "../img/familia/nucleos/ramos/katyesteban.png";

const FamiliaRamos = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Ramos</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={esteban} alt="esteban" />
            Esteban Ramos
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={katherine} alt="katherine" />
            Katherine Gratereaux
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={emma} alt="emma" />
            Emma Ramos
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={brielle} alt="brielle" />
            Brielle Ramos
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />

        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={karisbeth} alt="karisbeth" />
            Karisbeth Ramos
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={family} alt="familia ramos" />
            Familia Ramos
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={katyesteban} alt="kathy esteban" />
            Kathy Esteban
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={esposos} alt="esposos ramos" />
            Esposos Ramos
          </TarjetaFamilia>
        </ContenedorFamilia>

        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={familia} alt="familia ramos" />
            Familia bella y numerosa
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaRamos;
