import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import camacho from "../img/familia/nucleos/camacho/familiacamacho.png";

const FamiliaCamacho = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Camacho</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={camacho} alt="foto" />
            Rolando Camacho, Iris Miranda (Esposa) <br />
            Yelennis Camacho (Hija), Josué Camacho (Hijo) <br />
            Llegando a USA en 2002 <br />
            Gratos Recuerdos
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaCamacho;
