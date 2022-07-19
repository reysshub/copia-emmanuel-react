import { ContenedorFamilia, FotoGrande } from '../paginasContacto/Familias';
import { TarjetaBlanca, TituloGrande, Espacio } from '../components/CardCodigo';
import daymi1 from '../img/familia/nucleos/daymi/daymi1.png';
import daymi2 from '../img/familia/nucleos/daymi/daymi2.png';
import daymi3 from '../img/familia/nucleos/daymi/daymi3.png';
import daymi4 from '../img/familia/nucleos/daymi/daymi4.png';

const FamiliaDaymi = () => {
	return (
		<>
			<TarjetaBlanca>
				<TituloGrande>Familia Ramírez Mojena</TituloGrande>
				<Espacio />
				<Espacio />
				<ContenedorFamilia>
					<FotoGrande>
						<img src={daymi1} alt='foto' />
						Nuestra Boda <br />
						Daymí Mojena <br />
						Maikel Ramírez
					</FotoGrande>
					<Espacio />
					<FotoGrande>
						<img src={daymi2} alt='foto' />
						Pareja Elegante <br />
						Estamos de Gala
					</FotoGrande>
				</ContenedorFamilia>
				<Espacio />
				<ContenedorFamilia>
					<FotoGrande>
						<img src={daymi3} alt='foto' />
						Estamos en acción <br />
						Estilo Deportivo
					</FotoGrande>
					<Espacio />
					<FotoGrande>
						<img src={daymi4} alt='foto' />
						Tampa es bella <br />
						Pero nosotros mucho más
					</FotoGrande>
				</ContenedorFamilia>
				<Espacio />
			</TarjetaBlanca>
		</>
	);
};

export default FamiliaDaymi;
