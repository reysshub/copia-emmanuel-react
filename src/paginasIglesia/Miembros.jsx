import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
	TarjetaBlanca,
	ImagenMedia,
	TituloGrande,
	TituloMedio,
	LetraGrande,
	Espacio,
	BordeCentro,
	FotoLogo,
	Linea,
	LetraChica,
} from '../components/CardCodigo';
import felizcumple from '../img/felizcumple.jpg';
import felicidades from '../img/felicidades.png';
import iglesia1 from '../img/iglesias/iglesia9.jpg';
import iglesia2 from '../img/iglesias/iglesia12.jpg';
import elsyjorge from '../img/familia/elsyjorge.png';
import { LogoRotando } from '../paginasContacto/Lideres';
import logoiglesia from '../img/logos/logo.png';

const Miembros = () => {
	return (
		<>
			<TarjetaBlanca>
				<ImagenMedia>
					<img src={iglesia1} alt='imagen templo' />
				</ImagenMedia>
				<LetraGrande>Información Miembros</LetraGrande>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Cómo hacerte Miembro</TituloGrande>
				<LetraGrande>Bautizo, Profesión de Fe, Traslado</LetraGrande>
				<ImagenChica>
					<img src={iglesia2} alt='imagen iglesia' />
				</ImagenChica>

				<Espacio />
				<BordeCentro>
					<LetraGrande>
						Acércate a:
						<Espacio />
						Secretaria de Iglesia: Elsy Jorge <br />
						Pastor: Reynaldo Ojeda Jr. <br />
						Infórmate - Tab: Contacto / Líderes <br />
					</LetraGrande>
					<Espacio />
					<Link to='/lideres'>Página Líderes</Link>
					<Espacio />
				</BordeCentro>
				<Espacio />
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Membresía Proceso</TituloGrande>
				{/* <ImagenChica>
          <img src={iglesia3} alt="imagen iglesia" />
        </ImagenChica> */}
				<Espacio />
				<LogoRotando>
					<img src={logoiglesia} className='App-logo' alt='logo iglesia' />
				</LogoRotando>
				<Espacio />
				<TituloMedio>Altas por Traslado</TituloMedio>
				<LetraGrande>
					Esperando respuesta de las iglesias <br />
					Para recibirlos por traslado
				</LetraGrande>
				<CajaCumpleanos>
					<DosColumnas>
						1. José Daniel Valdivia <br />
						2. Manuel García <br />
						{/* 3. Alberto Contreras <br />
            4. Cesarina Contreras <br /> */}
					</DosColumnas>
					<DosColumnas>
						3. Dania Sepúlveda <br />
						4.
						{/* 6. Marlene Silvente <br />
            7. Domingo Silvente <br /> */}
					</DosColumnas>
				</CajaCumpleanos>
				<LetraChica>
					Nota: Es importante respetar los procedimientos de traslado para
					evitar que los nombres estén duplicados en el sistema.
				</LetraChica>
				<Espacio />
				<Linea />
				<Espacio />
				<TituloMedio>Altas por Profesión de Fe</TituloMedio>
				{/* <LetraGrande>Sábado 25 de Junio / 2022</LetraGrande> */}
				<CajaCumpleanos>
					<DosColumnas>
						{/* 1. Fernando Avila <br /> */}
						{/* 2. <br /> */}
					</DosColumnas>
					<DosColumnas>
						{/* 5. Dania Sepúlveda <br />
            6. Marlene Silvente <br />
            7. Domingo Silvente <br />
            8. */}
					</DosColumnas>
				</CajaCumpleanos>
				<LetraChica>
					Nota: Son recibidos en base a un bautismo anterior en otro lugar, pero
					por alguna razón no se puede conseguir el traslado. Ejemplo: 1) Vienen
					de otro país, y el sistema de Norte América no está conectado. 2) Han
					perdido información de su registro de miembro en su iglesia anterior,
					pero se han mantenido fieles a su profesión de fe en Cristo Jesús.
				</LetraChica>
				<Espacio />
				<Linea />
				<Espacio />
				<TituloMedio>Bajas por Traslado</TituloMedio>
				<LetraGrande>Sábado 25 de Junio / 2022</LetraGrande>
				<DosColumnas>
					<LetraGrande>
						1. Noemí Nestherdali <br />
						(Desde Tampa para Clearwater) <br />
						2. Nidia Gamarra <br />
						(Desde Emmanuel para Tampa Spanish)
					</LetraGrande>
				</DosColumnas>
				<Espacio />
			</TarjetaBlanca>

			<TarjetaBlanca>
				{/* <TituloGrande>Lista cumpleaños Junio</TituloGrande>
        <Espacio />
        <Espacio />
        <CajaCumpleanos>
          <DosColumnas>
            1. Mainelis Heredia - Junio 1 <br />
            2. Eneida Peláez - Junio 1 <br />
            3. Martha C Lewis - Junio 4 <br />
            4. Marcelo Silva - Junio 4 <br />
            5. Norma Manchón - Junio 6 <br />
            6. Margarita Suárez - Junio 10 <br />
            7. Marco Castellano - Junio 12 <br />
            8. José A Moreno - Junio 13 <br />
            9. Bismar Sánchez - Junio 15 <br />
            10. Carlos L Gómez - Junio 16 <br />
          </DosColumnas>
          <DosColumnas>
            11. Anyelo González - Junio 21 <br />
            12. Luís R Iglesias - Junio 21 <br />
            13. Olga Lajara - Junio 22 <br />
            14. Ediltrudis Sotelo -Junio 23 <br />
            15. Maikel Ramírez - Junio 23 <br />
            16. Reynaldo Ojeda - Junio 27 <br />
            17. Jimmy González - Junio 28 <br />
            18. Rafael Reyes - Junio 28 <br />
            19. Martha Fuentes - Junio 30 <br />
            20. Irma Velásquez - Junio 30 <br />
          </DosColumnas>
        </CajaCumpleanos>
        <Espacio /> */}

				<TituloGrande>Lista cumpleaños Julio</TituloGrande>
				<Espacio />
				<Espacio />
				<CajaCumpleanos>
					<DosColumnas>
						1. Ada Sepúlveda - Julio 2 <br />
						2. Yasiel Aguila - Julio 6 <br />
						3. Rigoberto Gallardo - Julio 12 <br />
						4. Yngrid López - Julio 13 <br />
						5. Carlos A Alejandro - Julio 14 <br />
						6. Mirta Linton - Julio 14 <br />
						7. Bertha Lastra - Julio 15 <br />
					</DosColumnas>
					<DosColumnas>
						8. Yajaira Cintrón - Julio 18 <br />
						9. Vicente Hernández - Julio 19 <br />
						10. Yoleidi Reyes - Julio 19 <br />
						11. Elizabeth Fuentes - Julio 20 <br />
						12. Darío A Lozada - Julio 21 <br />
						13. Carlos Suyi Gómez - Julio 23 <br />
						14. <br />
					</DosColumnas>
				</CajaCumpleanos>
				<Espacio />

				<TituloGrande>Lista cumpleaños Agosto</TituloGrande>
				<Espacio />
				<Espacio />
				<CajaCumpleanos>
					<DosColumnas>
						1. Marino Severino - Agosto 3 <br />
						2. María Arévalo - Agosto 6 <br />
						3. Alina Echarte - Agosto 8 <br />
						4. Yaxel Martínez - Agosto 9 <br />
						5. Annia Utra - Agosto 13 <br />
						6. Alexis Velásquez - Agosto 13 <br />
						7. Rubén M Cotito - Agosto 14 <br />
					</DosColumnas>
					<DosColumnas>
						8. Aliah Beltré - Agosto 18 <br />
						9. Mariano González - Agosto 18 <br />
						10. Orlando Manosalvas - Agosto 18 <br />
						11. Ana M Rodríguez - Agosto 19 <br />
						12. Lillian Grullón - Agosto 22 <br />
						13. Kelin Leyva - Agosto 26 <br />
						14. Alberto González - Agosto 28 <br />
					</DosColumnas>
				</CajaCumpleanos>
				<Espacio />

				<ImagenMedia>
					<img src={felizcumple} alt='feliz cumple' />
				</ImagenMedia>
				<ImagenMedia>
					<img src={felicidades} alt='felicidades' />
				</ImagenMedia>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloGrande>Registros Actualizados</TituloGrande>
				<LetraGrande>Información valiosa</LetraGrande>
				<Espacio />
				<FotoLogo>
					<img src={elsyjorge} alt='foto elsy' />
				</FotoLogo>
				<Espacio />
				<LetraGrande>
					Departamento Secretariado Iglesia <br />
					Secretaria: Elsy Jorge
				</LetraGrande>
				<Espacio />
			</TarjetaBlanca>
		</>
	);
};

export const CajaCumpleanos = styled.div`
	gap: 8px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: darkblue;

	@media screen and (min-width: 750px) {
		justify-content: space-around;
		font-size: 25px;
	}
`;
export const DosColumnas = styled.div`
	/* border:1px dashed blue; */
	text-align-last: jutify;
	font-size: 14px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (min-width: 750px) {
		font-size: 25px;
	}
`;
export const DosColumnasLeft = styled.div`
	/* border:1px dashed blue; */
	text-align-last: left;
	font-size: 16px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (min-width: 750px) {
		font-size: 28px;
	}
`;
export const ImagenChica = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	img {
		width: 35%;
	}

	@media screen and (min-width: 750px) {
		img {
			width: 170px;
		}
	}
`;

export default Miembros;
