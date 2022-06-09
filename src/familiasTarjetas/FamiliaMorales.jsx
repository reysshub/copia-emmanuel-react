import {
  TarjetaFamilia,
  ContenedorFamilia,
  FotoGrande,
} from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import darinel from "../img/familia/nucleos/morales/darinel.png";
import aidelyn from "../img/familia/nucleos/morales/aidelyn.jpg";
import genesis from "../img/familia/nucleos/morales/genesis.png";
import jonathan from "../img/familia/nucleos/morales/jonathan.png";
import aidelyndarinel from "../img/familia/nucleos/morales/aidelyndarinel.png";
import familiabrage from "../img/familia/nucleos/morales/familiabrage.png";

const FamiliaMorales = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Morales</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={darinel} alt="darinel" />
            Darinel Morales
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={aidelyn} alt="aidelyn" />
            Aidelyn Brage
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={genesis} alt="genesis" />
            Génesis
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={jonathan} alt="jonathan" />
            Jonathan
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={aidelyndarinel} alt="aidelyn darinel" />
            Darinel Aidelyn
          </FotoGrande>
          <Espacio />
          <FotoGrande>
            <img src={familiabrage} alt="familia brage" />
            Familia Morales
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaMorales;
