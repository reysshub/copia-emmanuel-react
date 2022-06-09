import React from "react";
import { Route, Routes } from "react-router-dom";

// Inicio
import Cultos from "../paginasInicio/Cultos";
import Sitios from "../paginasInicio/Sitios";
import Boletin from "../paginasInicio/Boletin";
import Anuncios from "../paginasInicio/Anuncios";
import Almuerzo from "../paginasInicio/Almuerzo";
// Iglesia
import Oracion from "../paginasIglesia/Oracion";
import Ofrendas from "../paginasIglesia/Ofrendas";
import Miembros from "../paginasIglesia/Miembros";
import Educate from "../paginasIglesia/Educate";
import Sucedio from "../paginasIglesia/Sucedio";
// Mision
import Infantil from "../paginasMision/Infantil";
import Jovenes from "../paginasMision/Jovenes";
import Sabatica from "../paginasMision/Sabatica";
import Preguntas from "../paginasMision/Preguntas";
// Varios
import Diaconos from "../paginasVarios/Diaconos";
import CitasErroneas from "../paginasVarios/CitasErroneas";
// Contacto
import Lideres from "../paginasContacto/Lideres";
import Familias from "../paginasContacto/Familias";
import Registrate from "../paginasContacto/Registrate";
import Profesiones from "../paginasContacto/Profesiones";
const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cultos />} />
        <Route path="/sitios" element={<Sitios />} />
        <Route path="/boletin" element={<Boletin />} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/almuerzo" element={<Almuerzo />} />

        <Route path="/oracion" element={<Oracion />} />
        <Route path="/ofrendas" element={<Ofrendas />} />
        <Route path="/miembros" element={<Miembros />} />
        <Route path="/educate" element={<Educate />} />
        <Route path="/sucedio" element={<Sucedio />} />

        <Route path="/infantil" element={<Infantil />} />
        <Route path="/jovenes" element={<Jovenes />} />
        <Route path="/sabatica" element={<Sabatica />} />
        <Route path="/preguntas" element={<Preguntas />} />

        <Route path="/diaconos" element={<Diaconos />} />
        <Route path="/citaserroneas" element={<CitasErroneas />} />

        <Route path="/lideres" element={<Lideres />} />
        <Route path="/familias" element={<Familias />} />
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/profesiones" element={<Profesiones />} />

        <Route path="*" element={<Cultos />} />
      </Routes>
    </>
  );
};

export default Rutas;
