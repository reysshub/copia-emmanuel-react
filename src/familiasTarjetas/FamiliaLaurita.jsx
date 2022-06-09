import { ContenedorFamilia, FotoGrande } from "../paginasContacto/Familias";
import { TarjetaBlanca, TituloGrande, Espacio } from "../components/CardCodigo";
import laurita from "../img/familia/nucleos/laurita/lauritafamilia.jpg";

const FamiliaLaurita = () => {
  return (
    <>
      <TarjetaBlanca>
        <TituloGrande>Familia Laurita</TituloGrande>
        <Espacio />
        <Espacio />
        <ContenedorFamilia>
          <FotoGrande>
            <img src={laurita} alt="foto" />
            Familia Laurita Pérez <br />
            Derecha Padres: Reynaldo Pérez y Mailyln Díaz <br />
            Izquierda Tíos: Yoleidy Pérez y Mariela Ramírez
          </FotoGrande>
        </ContenedorFamilia>
        <Espacio />
      </TarjetaBlanca>
    </>
  );
};

export default FamiliaLaurita;
