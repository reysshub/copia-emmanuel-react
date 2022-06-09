import { TarjetaFamilia, ContenedorFamilia } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import reyojeda from "../img/familia/nucleos/ojeda/reyojeda.jpg";
import dorysflor from "../img/familia/nucleos/ojeda/dorita1.jpg";
import heidy from "../img/familia/nucleos/ojeda/heidy.jpg";
import heiden from "../img/familia/nucleos/ojeda/heiden.jpg";
import heidysamuelito from "../img/familia/nucleos/ojeda/heidysamuelito.jpg";
import dorysrey from "../img/familia/nucleos/ojeda/dorysrey.jpg";
import familiaojeda from "../img/familia/nucleos/ojeda/familiaojeda.jpg";
import papiheiden from "../img/familia/nucleos/ojeda/papiheiden.png";
import dorita from "../img/familia/nucleos/ojeda/dorita.png";
import heiden2 from "../img/familia/nucleos/ojeda/heiden2.png";
import dorysyo from "../img/familia/nucleos/ojeda/dorys-yo.png";
import dorita2 from "../img/familia/nucleos/ojeda/dorita2.png";

const FamiliaOjeda = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Ojeda</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={reyojeda} alt="rey ojeda" />
            Reynaldo Ojeda
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={dorysflor} alt="dorys flor" />
            Dorys Ojeda
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={heidy} alt="heidy sola" />
            Heidy Ojeda
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={heiden} alt="heiden solo" />
            Heiden Ojeda
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={dorita} alt="dorita 2" />
            Doraisy Marrero
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={dorita2} alt="dorita 2" />
            Todas flores
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={dorysyo} alt="dorys yo" />
            Felicidad
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={heiden2} alt="heiden 2" />
            Heiden feliz
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
        <ContenedorFamilia>
          <TarjetaFamilia>
            <img src={heidysamuelito} alt="heidy samuelito" />
            Heidy Samuelito <br />
            Castañeda
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={dorysrey} alt="dorys rey" />
            Dorys Rey
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={familiaojeda} alt="familia ojeda" />
            Así llegamos <br />
            12 años atrás
          </TarjetaFamilia>
          <TarjetaFamilia>
            <img src={papiheiden} alt="papi heiden" />
            Heiden Rey
          </TarjetaFamilia>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaOjeda;
