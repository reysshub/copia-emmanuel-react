import styled from 'styled-components';
import {
	TarjetaBlanca,
	TituloGrande,
	TituloMedio,
	TituloChico,
	TituloLeft,
	ColorWhite,
	LetraGrande,
	ImagenGrande,
	BordeCentro,
	Espacio,
} from '../components/CardCodigo';
import { LetraAlmuerzo } from '../paginasInicio/Almuerzo';
import { CajaCumpleanos, DosColumnasLeft } from '../paginasIglesia/Miembros';
import heidycard from '../img/profesionales/HeidyCard.png';
import pepito from '../img/familia/pepitocepero2.png';
import barberia from '../img/profesionales/logoBarberia.png';
import rosemary from '../img/familia/rosemorales.png';
import uber from '../img/profesionales/uberLogo.png';
import aidelyn from '../img/familia/aidelyn.png';
import alex from '../img/familia/alex2.png';
import ac from '../img/profesionales/AC.png';
import hierbas from '../img/profesionales/hierbascorte.png';
import maceda from '../img/profesionales/joseMaceda.png';
import pintando from '../img/profesionales/pintando.jpg';
import darinel from '../img/familia/danirelmorales.png';
import trabajando from '../img/profesionales/trabajando.webp';
import samuel from '../img/profesionales/samuelito.png';
import bismar from '../img/profesionales/bismar.png';

const Profesiones = () => {
	return (
		<>
			<TituloMedio>
				<ColorWhite>Profesionales y Servicios</ColorWhite>
			</TituloMedio>
			<TituloChico>
				<ColorWhite>Adventistas del Séptimo Día</ColorWhite>
			</TituloChico>

			<TarjetaBlanca>
				<LetraAlmuerzo>
					<Espacio />
					<TituloMedio>Conectando a Nuestra Familia de Fe</TituloMedio>
					<Espacio />
					<TituloLeft>Dejamos claro lo siguiente:</TituloLeft>
					<Espacio />
					1. La iglesia anuncia estos servicios, como un acto de cortesía para
					ambas partes: El que ofrece el servicio y el que lo recibe.
					<Espacio />
					2. Esta es una idea propuesta por Uds, nuestros hermanos de iglesia,
					para Uds y los miembros de la comunidad que lo puedan necesitar.
					<Espacio />
					3. La iglesia no obtiene ganancias por este anuncio.
					<Espacio />
					4. Todo trabajo/servicio tiene un precio de mercado. La iglesia NO
					PROMETE UN PRECIO DIFERENTE.
					<Espacio />
					5. El que solicite un servicio debe ser consciente que debe pagar el
					servicio solicitado, de lo contrario no lo solicite.
					<Espacio />
					6. La Biblia dice que: "El obrero es digno de su salario". Toda
					profesión conlleva inversión de tiempo, dinero, sacrificio. Eso tiene
					un precio. Y el que trabaja también necesita comer y pagar otros
					servicios. NO SE SUPONE QUE TRABAJE DE GRATIS.
					<Espacio />
					7. Es tarea de cada cual buscar estimados y comparar los precios.
					También pedir referencias de trabajos realizados anteriormente por esa
					persona ó entidad. Luego tome su decisión consciente y
					responsablemente.
					<Espacio />
					8. Sugerimos que hablen del precio antes de dar el primer paso y dejen
					claros todos los detalles, sea en forma verbal o escrita.
					<Espacio />
					9. La iglesia no se hace responsable por la calidad del trabajo o por
					el pago del mismo.
					<Espacio />
					10. La iglesia NO se hace responsable del contrato entre el que ofrece
					el servicio y quien lo recibe, sea escrito o verbal.
					<Espacio />
					11. La iglesia no será intermediaria en ningún tipo de reclamo.
					<Espacio />
					12. Deseamos que esta iniciativa sea para bendición de todos y NUNCA
					traiga malas interpretaciones, quejas, pleitos, problemas de ninguna
					de las dos partes.
					<Espacio />
					13. Sabemos que bien usada, esta iniciativa puede resultar en
					bendicion para muchos y mal usada todo lo contrario.
					<Espacio />
					14. Esto es una prueba. Esperamos que funcione bien, de otra manera,
					cancelaremos los anuncios ó el anuncio que corresponda
					específicamente.
					<Espacio />
					15. Eso es lo único que podemos prometer.
					<Espacio />
					Gracias.
					<Espacio />
				</LetraAlmuerzo>
			</TarjetaBlanca>

			<TarjetaColor>
				<TituloBlanco>Servicios de Salud en General</TituloBlanco>
			</TarjetaColor>

			<TarjetaBlanca>
				<TituloGrande>Salud Mental y Familia</TituloGrande>
				<LetraGrande>
					Consejera de Salud Mental <br />
					Menores, Adultos <br />
					Terapia para Matrimonios y Familias <br />
					<TituloMedio>Heidy Castañeda</TituloMedio>
				</LetraGrande>
				<ImagenGrande>
					<img src={heidycard} alt='tarjeta Heidy' />
				</ImagenGrande>
				<LetraGrande>
					Consultas Presenciales ó a Distancia <br />
					Español & Inglés <br />
				</LetraGrande>
			</TarjetaBlanca>

			<TarjetaColor>
				<TituloBlanco>Servicios de Cuidados Personales</TituloBlanco>
			</TarjetaColor>

			<TarjetaBlanca>
				<TituloGrande>Corte del Cabello</TituloGrande>
				<LetraGrande>
					Elite Barber Shop <br />
					4707 W Gandy BLVD # 2 <br />
					Tampa, FL 33611 <br />
				</LetraGrande>
				<DosFotos>
					<ImagenSmall>
						<img src={barberia} alt='logo barberia' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={pepito} alt='foto pepito' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Fernando Cepero</TituloMedio>
					(813) 805-6663 <br />
					elitebarbershoptampa.com
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Horario</TituloMedio>
					<LetraGrande>
						Lunes - Jueves: 9:00 am - 6:00 pm <br />
						Viernes: 9:00 am - 7:00 pm <br />
						Cerrado: Sábados y Domingos
					</LetraGrande>
				</BordeCentro>
			</TarjetaBlanca>

			<TarjetaColor>
				<TituloBlanco>Servicios de Transportación</TituloBlanco>
			</TarjetaColor>

			<TarjetaBlanca>
				<TituloGrande>Servicio Uber</TituloGrande>
				<LetraGrande>Transportación Personalizada</LetraGrande>
				<DosFotos>
					<ImagenSmall>
						<img src={uber} alt='logo uber' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={rosemary} alt='foto rose' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Rosemary Morales</TituloMedio>
					(843) 693-7383 <br />
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Horario</TituloMedio>
					<LetraGrande>
						De lunes a viernes: 5:00 pm a 9:00 pm <br />
						(Mientras no esté comprometida con otro viaje)
					</LetraGrande>
				</BordeCentro>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Driver for Non Emergency</TituloGrande>
				<TituloMedio>Domingos a Viernes</TituloMedio>
				<Espacio />
				<DosFotos>
					<ImagenSmall>
						<img src={uber} alt='logo uber' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={aidelyn} alt='foto aidelyn' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Aidelyn Brage</TituloMedio>
					(602) 435-5476 <br />
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Servicios</TituloMedio>
					<LetraGrande>
						Con citas por anticipado <br />
						Transporte a citas médicas <br />
						Transporte a salón de belleza <br />
						Transporte a hacer compras <br />
						Recoger medicamentos a la farmacia
					</LetraGrande>
				</BordeCentro>
			</TarjetaBlanca>

			<TarjetaColor>
				<TituloBlanco>Reparación del Automovil</TituloBlanco>
			</TarjetaColor>

			<TarjetaColor>
				<TituloBlanco>Mantenimiento y Reparación de la Casa</TituloBlanco>
			</TarjetaColor>

			<TarjetaBlanca>
				<TituloGrande>Aire Acondicionado</TituloGrande>
				<Espacio />
				<DosFotos>
					<ImagenSmall>
						<img src={ac} alt='logo ac' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={alex} alt='foto alex' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Alex Beltré</TituloMedio>
					(347) 968-6658 <br />
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Alexander A/C & Multi Service LLC</TituloMedio>
					<TituloMedio>Servicios</TituloMedio>
					<LetraGrande>
						Instalación de Nuevo AC System <br />
						Reparación de todo tipo de AC <br />
						Venta de AC de todas las marcas <br />y capacidades, a través de
						otra compañía
					</LetraGrande>
				</BordeCentro>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Aire Acondicionado</TituloGrande>
				<Espacio />
				<DosFotos>
					<ImagenSmall>
						<img src={ac} alt='logo ac' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={bismar} alt='foto bismar' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Bismar Sánchez</TituloMedio>
					(813) 408-0519 <br />
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Servicios</TituloMedio>
					<LetraGrande>
						Instalación de Nuevo AC System <br />
						Reparación de todo tipo de AC <br />
					</LetraGrande>
				</BordeCentro>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Varios Servicios</TituloGrande>
				<Espacio />
				<DosFotos>
					<ImagenSmall>
						<img src={hierbas} alt='logo' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={maceda} alt='foto maceda' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>José Maceda</TituloMedio>
					(305) 898-6166 <br />
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Servicios</TituloMedio>
					<LetraGrande>
						Presure Washer - Lavado a Presión <br />
						Tree Trimming - Poda de Arboles <br />
						Roof Blowing - Lavado de Techos <br />
						Grass Cutting - Cortado de hierbas patio
						<TituloMedio>Trabajo Serio y Garantizado</TituloMedio>
						Licencia: ODC-4651819CGL-20
					</LetraGrande>
				</BordeCentro>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Varios Servicios</TituloGrande>
				<Espacio />
				<DosFotos>
					<ImagenSmall>
						<img src={pintando} alt='logo pintando' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={darinel} alt='foto darinel' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Darinel Morales</TituloMedio>
					(813) 313-0947 <br />
				</LetraGrande>
				<BordeCentro>
					<TituloMedio>Servicios</TituloMedio>
					<LetraGrande>
						Pintura Interior de Casas <br />
						Trabajos de Remodelación <br />
						Textura, Drywall, Finish <br />
						Electricidad
					</LetraGrande>
				</BordeCentro>
				<Espacio />
				<TituloMedio>"Por amor a Jesús, siempre haré lo mejor"</TituloMedio>
				<Espacio />
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Varios Servicios</TituloGrande>
				<TituloMedio>Carpintería</TituloMedio>
				<Espacio />
				<DosFotos>
					<ImagenSmall>
						<img src={trabajando} alt='logo trabajando' />
					</ImagenSmall>
					<ImagenProfesiones>
						<img src={samuel} alt='foto samuel' />
					</ImagenProfesiones>
				</DosFotos>
				<LetraGrande>
					<TituloMedio>Samuel Castañeda</TituloMedio>
					(407) 800-7205 <br />
				</LetraGrande>
				<TituloMedio>AI & Sam's Carpentry LLC</TituloMedio>
				<Espacio />
				<TituloMedio>Servicios</TituloMedio>
				<Espacio />
				<CajaCumpleanos>
					<DosColumnasLeft>
						Trim de Interiores <br />
						Interior doors <br />
						Exterior doors <br />
						Window sills <br />
						Cased openings <br />
						Tongue and Groove <br />
						Locks and door knobs <br />
						Baseboard <br />
					</DosColumnasLeft>
					<DosColumnasLeft>
						Shoe molding <br />
						Crown molding <br />
						Wall details <br />
						Ceiling beams <br />
						Stairs <br />
						Paneling <br />
						Arched opening with paneling <br />
						Custom work y más jajaja
					</DosColumnasLeft>
				</CajaCumpleanos>
				<Espacio />
			</TarjetaBlanca>

			<TarjetaColor>
				<TituloBlanco>Servicios de Bienes Raíces</TituloBlanco>
			</TarjetaColor>
		</>
	);
};

export const TarjetaColor = styled.div`
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	background-color: #7a3e3e;
	border: 2px solid white;
	color: white;
	border-radius: 10px;
	margin: auto;
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 10px;
	width: 95%;
	height: auto;

	@media screen and (min-width: 750px) {
		width: 97%;
	}
`;
export const TituloBlanco = styled.h2`
	font-family: 'Oswald';
	font-weight: 400;
	text-align: center;
	font-size: 20px;
	color: white;

	@media screen and (min-width: 750px) {
		font-size: 33px;
	}
`;

export const ImagenSmall = styled.div`
	img {
		/* border: 1px solid black; */
		width: 80px;
		border-radius: 20px;
	}
`;
export const DosFotos = styled.div`
	padding-left: 25px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const ImagenProfesiones = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	img {
		border-radius: 10px;
		/* width: 70%; */
		width: 80px;
	}
`;

export default Profesiones;
