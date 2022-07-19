import styled from 'styled-components';
import {
	TarjetaBlanca,
	TituloMedio,
	TituloChico,
	ColorWhite,
	LetraGrande,
} from '../components/CardCodigo';
import FamiliaOjeda from '../familiasTarjetas/FamiliaOjeda';
import FamiliaBeltre from '../familiasTarjetas/FamiliaBeltre';
import FamiliaRamos from '../familiasTarjetas/FamiliaRamos';
import FamiliaMorales from '../familiasTarjetas/FamiliaMorales';
import FamiliaSotelo from '../familiasTarjetas/FamiliaSotelo';
import FamiliaMarelis from '../familiasTarjetas/FamiliaMarelis';
import FamiliaDora from '../familiasTarjetas/FamiliaDora';
import FamiliaPeguero from '../familiasTarjetas/FamiliaPeguero';
import FamiliaFreddy from '../familiasTarjetas/FamiliaFreddy';
import FamiliaLaurita from '../familiasTarjetas/FamiliaLaurita';
import FamiliaYaxel from '../familiasTarjetas/FamiliaYaxel';
import FamiliaFlorencio from '../familiasTarjetas/FamiliaFlorencio';
import FamiliaManchon from '../familiasTarjetas/FamiliaManchon';
import FamiliaCamacho from '../familiasTarjetas/FamiliaCamacho';
import FamiliaDaymi from '../familiasTarjetas/FamiliaDaymi';

const Familias = () => {
	return (
		<>
			<TituloMedio>
				<ColorWhite>Albun Familias Iglesia</ColorWhite>
			</TituloMedio>
			<TituloChico>
				<ColorWhite>Conociéndonos</ColorWhite>
			</TituloChico>

			<FamiliaOjeda />
			<FamiliaBeltre />
			<FamiliaRamos />
			<FamiliaMorales />
			<FamiliaSotelo />
			<FamiliaMarelis />
			<FamiliaDora />
			<FamiliaPeguero />
			<FamiliaFreddy />
			<FamiliaLaurita />
			<FamiliaYaxel />
			<FamiliaFlorencio />
			<FamiliaManchon />
			<FamiliaCamacho />
			<FamiliaDaymi />

			<TarjetaBlanca>
				<TituloMedio>Esperamos sus fotos familiares</TituloMedio>
				<LetraGrande>
					Quisieramos hacer un albun para cada familia de la iglesia. <br />
					La idea es hacer más fácil que los hermanos se conozcan, se acerquen,
					y cumplamos así el propósito de ser parte de una gran familia de fe,
					amor, amistad y cariño. <br />
					Puenden enviar las fotos al Pastor a: <br />
					email: dorysrey@live.com <br />
					texto: (407)310-0690 <br />
					Escojan fotos con suficiente iluminación y claridad. Gracias. <br />
					Los que tienen pocas fotos en el albun pueden enviar algunas más.{' '}
					<br />
					Su album aparecerá en el mismo orden que lleguen sus fotos. El Pastor
				</LetraGrande>
			</TarjetaBlanca>
		</>
	);
};

export const ContenedorFamilia = styled.div`
	/* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); */
	box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
	border: 1px solid lightblue;
	border-radius: 10px;
	padding: 8px;
	font-size: 13px;
	color: darkblue;
	gap: 10px;
	display: flex;

	@media screen and (min-width: 750px) {
		font-size: 18px;
	}
`;
export const TarjetaFamilia = styled.div`
	margin: auto;
	text-align: center;
	display: flex;
	flex-direction: column;

	img {
		border-radius: 10px;
		width: 75px;

		@media screen and (min-width: 750px) {
			width: 140px;
		}
	}
`;
export const FotoGrande = styled.div`
	padding: 10px;
	border-radius: 10px;
	text-align: center;
	margin: auto;
	display: flex;
	flex-direction: column;

	img {
		border-radius: 10px;
		width: 100%;
	}
`;

export default Familias;
