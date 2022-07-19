import '../index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	TituloGrande,
	TituloMedio,
	TituloChico,
	ColorWhite,
	TarjetaBlanca,
	ImagenSombra,
	ColorRed,
	BlancoSombraCorto,
	ConexionWeb,
	Espacio,
	LetraGrande,
	TituloLeft,
	BordeCentro,
	ImagenMedia,
} from '../components/CardCodigo';
import cruz from '../img/cruz.webp';
import { LogoRotando } from '../paginasContacto/Lideres';
import logoiglesia from '../img/logos/logo.png';
import pentagrama from '../img/logos/pentagramaNotas.webp';
import claveSol from '../img/logos/claveSol.png';

const Boletin = () => {
	return (
		<>
			<TituloMedio>
				<ColorWhite>Boletín de la Iglesia</ColorWhite>
			</TituloMedio>
			<TituloChico>
				<ColorWhite>Orden Plataforma</ColorWhite>
			</TituloChico>

			<Espacio />
			<LogoRotando>
				<img src={logoiglesia} className='App-logo' alt='logo iglesia' />
			</LogoRotando>

			<TarjetaBlanca>
				<TituloGrande>Culto de Adoración</TituloGrande>
				<Espacio />
				<TituloChico>
					<ColorRed>Sábado 23 de Julio 2022</ColorRed>
				</TituloChico>
				<Espacio />
				<LetraTexto>
					"El siguiente día ve Juan á Jesús que venía á él, y dice: He aquí el
					Cordero de Dios, que quita el pecado del mundo". Juan 1:29
				</LetraTexto>
				<Espacio />
				<ImagenSombra>
					<img src={cruz} alt='imagen cruz' />
				</ImagenSombra>
				<Espacio />
				<TituloLeft>Primer Segmento</TituloLeft>
				<Espacio />
				<LetraBoletin>
					--- Preparándonos para adorar al Creador <br />
					--- Grupo de Alabanzas: (10:45 AM) <br />
					--- Entrada Plataforma: (11:00 AM) <br />
					--- Doxología: Congregación adora al Creador <br />
					1 - Invocación: Pr. Reynaldo Ojeda Jr. <br />
				</LetraBoletin>
				<Espacio />
				<TituloLeft>Segundo Segmento</TituloLeft>
				<Espacio />
				<LetraBoletin>
					--- Adorando a través de la confraternidad <br />
					2 - Bienvenida: Reyna Alvarez <br />
					--- Adorando a través de la alabanza <br />
					3 - Anuncia himno: Darinel Morales <br />
					--- Dirige los himnos: Florencio Campos <br />
					--- Himno: # 17 "A Cristo coronad" <br />
				</LetraBoletin>
				<Espacio />
				<BordeCentro>
					<ConexionWeb href='http://www.iglesiadeolivos.com.ar/-/doc/himnario/156.html'>
						Letra himno -- A Cristo coronad! (156)
					</ConexionWeb>
				</BordeCentro>
				<Espacio />
				<LetraBoletin>
					--- Adorando a través de la Palabra <br />
					--- Texto bíblico: Juan 1:29 <br />
					4 - Lectura bíblica: Andrés Flores <br />
					--- Postrados adoramos al Creador <br />
					5 - Conduce Adoración: Alexander Beltré <br />
					--- Respuesta: Congregación y piano <br />
				</LetraBoletin>
				<Espacio />
				<TituloLeft>Tercer Segmento</TituloLeft>
				<Espacio />
				<LetraBoletin>
					--- Adorando a través de las Ofrendas <br />
					--- Reconocemos la soberanía de Dios <br />
					6 - Dirige ofrendas: Yaxel Martínez <br />
					--- Congregación canta alabanzas <br />
					--- Diaconado recibe las ofrendas <br />
					--- Bendición sobre diezmos y ofrendas <br />
					7 - Oración: Yaxel Martínez <br />
				</LetraBoletin>
				<Espacio />
				<BordeCentro>
					<Link to='/ofrendas'>Explicación Ofrendas</Link>
				</BordeCentro>
				<Espacio />
				<LetraBoletin>
					8 - Aliah y Kelin comunican - anuncios <br />
					--- VIAJE A CAMP KULAQUA (Agosto 5 -- 7)
					<Espacio />
					<BordeCentro>
						<Link to='/anuncios'>Ver Página Anuncios</Link>
					</BordeCentro>
				</LetraBoletin>
				{/* <Espacio />
				<TituloLeft>Segmento Pastoral</TituloLeft>
				<Espacio /> */}
				<LetraBoletin>
					{/* --- Presentación de niños <br /> */}
					{/* --- Recibiendo nuevos miembros <br /> */}
					{/* --- Oración intercesora por enfermos <br /> */}
					{/* --- Anuncios extraordinarios <br /> */}
					{/* --- Presentación del predicador <br /> */}
					{/* Dos bajas por traslado (Secretaria y Anciano) */}
				</LetraBoletin>
				<Espacio />
				<TituloLeft>Cuarto Segmento</TituloLeft>
				<Espacio />
				<LetraBoletin>
					--- Adoración a través de la Palabra <br />
					9 - Selección musical: Ministerio Músical <br />
					--- Título: Alabanza a Dios <br />
					10 - Sermón: Pr. Reynaldo Ojeda <br />
					--- Sermón Título: "El Cordero de Dios" <br />
					--- Entregando nuestras vidas a Dios <br />
					<Espacio />
					11 - Himno: # 285 "Perdido fui a mi Jesús" <br />
				</LetraBoletin>
				<Espacio />
				<BordeCentro>
					<ConexionWeb href='http://www.iglesiadeolivos.com.ar/-/doc/himnario/291.html'>
						Letra himno -- Perdido fui a mi Jesús (291)
					</ConexionWeb>
				</BordeCentro>
				<Espacio />
				<LetraBoletin>
					12 - Oración: Pr. Reynaldo Ojeda Jr. <br />
					<Espacio />
				</LetraBoletin>
				<Espacio />
				<BordeCentro>
					<LetraGrande>Bendición de Dios para su Iglesia</LetraGrande>
					<LetraTexto>
						"Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro
						sobre ti, y tenga de ti misericordia; Jehová alce sobre ti su
						rostro, y ponga en ti paz". Números 6:24-26
						<Espacio />
						Amén, así sea
					</LetraTexto>
				</BordeCentro>
				<Espacio />
				<LetraBoletin>
					<Espacio>--- Salida organizada por el diaconado</Espacio>
					<LetraGrande>"Un feliz sábado para todos"</LetraGrande>
					<Espacio />
				</LetraBoletin>
			</TarjetaBlanca>

			<TarjetaBlanca>
				<TituloChico>
					<ColorRed>Himnario Disponible</ColorRed>
				</TituloChico>
				<Espacio />
				<Espacio />
				<BlancoSombraCorto>
					<ConexionWeb href='http://www.iglesiadeolivos.com.ar/himnario_adventista.html'>
						Himnario Online
					</ConexionWeb>
				</BlancoSombraCorto>
				<Espacio />
				<Espacio />
				<Espacio />
				<div className='claveBox'>
					<img
						src={claveSol}
						className='clave App-logo'
						alt='imagen clave de sol'
					/>
					<img
						src={claveSol}
						className='clave App-logo'
						alt='imagen clave de sol'
					/>
					<img
						src={claveSol}
						className='clave App-logo'
						alt='imagen clave de sol'
					/>
				</div>
				<ImagenMedia>
					<img src={pentagrama} alt='imagen pentagrama' />
				</ImagenMedia>
			</TarjetaBlanca>

			{/* --- INICIA LA CENA DEL SEÑOR --- <br />
					--- DIACONISAS DESCUBREN LA MESA --- <br />
					<Espacio />
					--- Darinel Morales: Lee 1 Cor. 11:23, 24 <br />
					--- Tomás García: Ora por el pan <br />
					--- DIACONADO ENTREGA EL PAN --- <br />
					--- Pastor: Ordena comer el pan <br />
					<Espacio />
					--- Florencio Campos: Lee 1 Cor. 11:25, 26 <br />
					--- Reyna Alvarez: Ora por el vino <br />
					--- DIACONADO ENTREGA EL VINO --- <br />
					--- Pastor: Ordena tomar el vino <br />
					<Espacio />
					--- Alex Beltré: Palabras de clausura <br />
					--- Yaxel Martínez: Anuncia himno final <br />
					--- HIMNO: 36 "Dios os guarde" <br />
					--- Florencio Campos dirige el himno <br />
					--- DIACONISAS CUBREN LA MESA --- <br />
					--- Alex Beltré: Oración final <br />
					--- SALIDA ORGANIZADA <br /> */}

			{/* <TarjetaBlanca>
        <TituloMedio>Principios de Adoración</TituloMedio>
        <LetraAlmuerzo>
          I. ¿Qué es adorar?
          <Espacio />
          <Espacio />
          II. ¿Por qué adorar?
          <Espacio />
          <Espacio />
          II. ¿Cómo adorar?
          <Espacio />
        </LetraAlmuerzo>
      </TarjetaBlanca> */}
		</>
	);
};

export const LetraBoletin = styled.p`
	color: black;
	font-size: 19px;
	padding-left: 25px;

	@media screen and (min-width: 750px) {
		font-size: 25px;
		padding-left: 55px;
	}
`;
export const LetraTexto = styled.p`
	color: darkmagenta;
	border-radius: 10px;
	padding: 6px;
	font-size: 18px;
	text-align: center;
	font-family: Impact, Haettenschweiler, 'Arial' sans-serif;

	@media screen and (min-width: 750px) {
		font-size: 25px;
	}
`;

export default Boletin;
