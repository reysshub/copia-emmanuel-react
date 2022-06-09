import {
  TarjetaFamilia,
  ContenedorFamilia,
  FotoGrande,
} from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import alex from "../img/familia/nucleos/beltre/beltresolo.png";
import elsy from "../img/familia/nucleos/beltre/elsysola.png";
import aliah from "../img/familia/nucleos/beltre/aliadiaconisa.jpg";
import alexjunior from "../img/familia/nucleos/beltre/alexjunior.jpg";
import beltrealiah from "../img/familia/nucleos/beltre/beltrealiah.png";
import alexalex from "../img/familia/nucleos/beltre/beltrealex.png";
import beltreelsy from "../img/familia/nucleos/beltre/elsybeltre.jpg";
import beltre3 from "../img/familia/nucleos/beltre/beltre3.png";
import familiabeltre from "../img/familia/nucleos/beltre/familiabeltre.jpg";

const FamiliaBeltre = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Beltré</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={alex} alt="alex beltre" />
            Alex Beltré
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={elsy} alt="elsy jorge" />
            Elsy Jorge
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={aliah} alt="aliah beltre" />
            Aliah Beltré
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={alexjunior} alt="alex junios" />
            Alex Junior
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={beltrealiah} alt="beltre aliah" />
            Aliah y Alex
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={alexalex} alt="alex alex" />
            Alex Alex
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={beltreelsy} alt="elsy beltre" />
            Beltré Elsy
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={beltre3} alt="familia elegante" />
            Familia elegante
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={familiabeltre} alt="familia elegante" />
            Familia elegante y bella
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaBeltre;
