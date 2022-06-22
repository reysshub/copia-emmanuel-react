import styled from "styled-components";
import {
  TarjetaBlanca,
  TituloMedio,
  TituloChico,
  ColorWhite,
  LetraGrande,
  Espacio,
  Linea,
} from "../components/CardCodigo";
import { LetraAlmuerzo } from "../paginasInicio/Almuerzo";
import fotoPastor from "../img/familia/fotoPastor.png";
import alex from "../img/familia/alex2.png";
import elsy from "../img/familia/elsyjorge.png";
import randy from "../img/familia/randy1.png";
import esperanza from "../img/familia/esperanza.png";
import pepito from "../img/familia/pepitocepero2.png";
import denia from "../img/familia/deniaroche.png";
import veronica from "../img/familia/veronica.png";
import dorys from "../img/familia/dorysojeda.png";
import irmavelasquez from "../img/familia/irmavelasquez.png";
import olga from "../img/familia/olgalajara.png";
import aidelyn from "../img/familia/aidelyn.png";
import darinel from "../img/familia/danirelmorales.png";
import reyna from "../img/familia/reinalvarez.png";
import tomas from "../img/familia/tomasgarcia.png";
import david from "../img/familia/david2.png";
import orfa from "../img/familia/orfita1.png";
import heiden from "../img/familia/heiden2.png";
import yaxel from "../img/familia/yaxel1.png";
import florencio from "../img/familia/florencio.png";
import zulema from "../img/familia/zulepaneque.png";
import marelis from "../img/familia/marelisdiaz.png";
import aliah from "../img/familia/aliahbeltre.png";
import kelin from "../img/familia/kelinleyva.png";
import rosemorales from "../img/familia/rosemorales.png";
import andres from "../img/familia/andresflores.png";
import logoiglesia from "../img/logos/logo.png";

const Lideres = () => {
  return (
    <>
      <TituloMedio>
        <ColorWhite>Información Contactos</ColorWhite>
      </TituloMedio>
      <TituloChico>
        <ColorWhite>Comunícate con los líderes</ColorWhite>
      </TituloChico>

      <Espacio />
      <LogoRotando>
        <img src={logoiglesia} className="App-logo" alt="logo iglesia" />
      </LogoRotando>

      <TarjetaBlanca>
        <LetraAlmuerzo>
          <b>Nota</b>: El Pastor <b>no</b> tiene whatsapp ni messenger. Si el
          Pastor no te contesta, envíale un mensaje de texto, por favor.
          Gracias.
        </LetraAlmuerzo>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={fotoPastor} alt="foto pastor" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Pastor del Distrito Emmanuel <br />
              Reynaldo Ojeda Jr.
            </TituloMedio>
            <LetraGrande>
              dorysrey@live.com <br />
              Tel - (407) 310-0690
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={alex} alt="foto alex" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Primer Anciano de la Iglesia <br />
              Alexander Beltré
            </TituloMedio>
            <LetraGrande>
              alexander902@msn.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={elsy} alt="foto elsy" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Secretaria de la Iglesia <br />
              Elsy Jorge
            </TituloMedio>
            <LetraGrande>
              elsyjorge@icloud.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={randy} alt="foto randy" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Director de Diáconos <br />
              Randy Haesche
            </TituloMedio>
            <LetraGrande>
              randywhaesche@yahoo.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={esperanza} alt="foto esperanza" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Directora Diaconisas <br />
              Esperanza Taveras
            </TituloMedio>
            <LetraGrande>
              ezperanzataberas@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={pepito} alt="foto pepito" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Dirctor Ministerios Juveniles <br />
              Fernando Cepero
            </TituloMedio>
            <LetraGrande>
              pepizule@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={denia} alt="foto denia" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Directora Escuela Sabática <br />
              Denia Roche
            </TituloMedio>
            <LetraGrande>
              deniaroche@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={veronica} alt="foto veronica" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Secretaria Escuela Sabática <br />
              Verónica Salinas
            </TituloMedio>
            <LetraGrande>
              veronica.salinas308@icloud.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={dorys} alt="foto dorys" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Dir. Ministerios de la Mujer <br />
              Dorys Ojeda
            </TituloMedio>
            <LetraGrande>
              doraisy123@live.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={irmavelasquez} alt="foto irma" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Dir. Ministerios Infantiles <br />
              Irma Velásquez
            </TituloMedio>
            <LetraGrande>
              velasquezirma906@yahoo.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={olga} alt="foto olga" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Directora de Vida Familiar <br />
              Olga Lajara
            </TituloMedio>
            <LetraGrande>
              olgalajara9@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={aidelyn} alt="foto aidelyn" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Directora Club Aventureros <br />
              Aidelyn Brage
            </TituloMedio>
            <LetraGrande>
              alfonsobrage@hotmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={darinel} alt="foto darinel" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Anciano / Club Conquistadores <br />
              Darinel Morales
            </TituloMedio>
            <LetraGrande>
              moralesdarinel36@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={reyna} alt="foto reyna" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Anciana / Min. Personales <br />
              Reyna Alvarez
            </TituloMedio>
            <LetraGrande>
              reynaalvarez50@icloud.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={tomas} alt="foto tomas" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Anciano / Sec. Min. Personales <br />
              Tomás García
            </TituloMedio>
            <LetraGrande>
              reynaalvarez50@icloud.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={david} alt="foto david" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Director Departamento Audio <br />
              David Burton
            </TituloMedio>
            <LetraGrande>
              davidburtoncc@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={orfa} alt="foto orfa" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Directora Ministerio Dorcas <br />
              Orfa Pimentel
            </TituloMedio>
            <LetraGrande>
              mamiolfita@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={heiden} alt="foto heiden" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Director Educación y Lectura <br />
              Heiden Ojeda
            </TituloMedio>
            <LetraGrande>
              serheiden@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={yaxel} alt="foto yaxel" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Anciano / Ministerio Hombre <br />
              Yaxel Martínez
            </TituloMedio>
            <LetraGrande>
              yaxelmartinez@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={florencio} alt="foto florencio" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Anciano / Director de Cantos <br />
              Florencio Campos
            </TituloMedio>
            <LetraGrande>
              florencio.campos@yahoo.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={andres} alt="foto andres" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Anciano / Director de Salud <br />
              Andrés de Jesús Flores
            </TituloMedio>
            <LetraGrande>
              andresfloressoy@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLidex>
            <img src={zulema} alt="foto zulemar" />
            <img src={marelis} alt="foto marelis" />
          </FotoLidex>
          <DivLider>
            <TituloMedio>Directoras Ministerio Música</TituloMedio>
            <Espacio />
            <TituloMedio>Zulema Paneque</TituloMedio>
            <LetraGrande>
              pepizule@gmail.com <br />
            </LetraGrande>
            <Linea />
            <TituloMedio>Marelis Díaz</TituloMedio>
            <LetraGrande>
              estherdiaz0912@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLidex>
            <img src={aliah} alt="foto aliahr" />
            <img src={kelin} alt="foto kelin" />
          </FotoLidex>
          <DivLider>
            <TituloMedio>Directoras Comunicaciones</TituloMedio>
            <Espacio />
            <TituloMedio>Aliah Beltré</TituloMedio>
            <LetraGrande>
              aliahbeltre18@gmail.com <br />
            </LetraGrande>
            <Linea />
            <TituloMedio>Kelin Leyva</TituloMedio>
            <LetraGrande>
              kelinleyva2@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>

      <TarjetaBlanca>
        <ContenedorLider>
          <FotoLider>
            <img src={rosemorales} alt="foto rosemary" />
          </FotoLider>
          <DivLider>
            <TituloMedio>
              Departamento Cocina Iglesia <br />
              Rosemary Morales
            </TituloMedio>
            <LetraGrande>
              yiry123@gmail.com <br />
            </LetraGrande>
          </DivLider>
        </ContenedorLider>
      </TarjetaBlanca>
    </>
  );
};

export const ContenedorLider = styled.div`
  gap: 5px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 750px) {
    justify-content: space-around;
  }
`;
export const FotoLider = styled.div`
  img {
    width: 100px;
    border-radius: 50%;
    @media screen and (min-width: 750px) {
      width: 200px;
    }
  }
`;
export const FotoLidex = styled.div`
  width: 80px;
  margin-top: 25px;

  img {
    width: 80px;
    border-radius: 50%;
    @media screen and (min-width: 750px) {
      width: 200px;
    }
  }
`;
export const DivLider = styled.div`
  /* border:1px dashed blue; */
  padding-right: 8px;
  padding-left: 5px;
`;

export const LogoRotando = styled.div`
  text-align: center;
  img {
    border: 1px solid lightblue;
  }
`;

export default Lideres;
