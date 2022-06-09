// import React, {useState} from 'react';
// import db from '../firebase/firebaseConfig';
// import { ContenedorContactos, Boton, Input } from './ListaCampKulaqua';
// import {doc, deleteDoc, updateDoc} from 'firebase/firestore';

// const Contacto = ({id, nombre, edad}) => {
//     const [editandoTarea, cambiarEditandoTarea] = useState(false);
//     const [nuevoNombre, cambiarNuevoNombre] = useState(nombre);
//     const [nuevoEdad, cambiarNuevoEdad] = useState(edad);

//     const actualizarContacto = async (e) => {
//       e.preventDefault();

//       try {
//           await updateDoc(doc(db, 'usuarios', id), {
//             nombre:nuevoNombre,
//             edad:nuevoEdad
//           });
//       } catch(error) {
//           console.log('Hubo un error al intentar actualizar el usuario');
//           console.log(error);
//       }
//       cambiarEditandoTarea(false);
//     }

//     const eliminarContacto = async (id) => {
//       try {
//           await deleteDoc(doc(db, 'usuarios', id)); 
//       } catch(error) {
//           console.log('Hubo un error al intentar eliminar el usuario');
//           console.log(error);
//       }
//       cambiarEditandoTarea(false);
//     }

//   return (
//     <ContenedorContactos>
//       {editandoTarea ?
//         <form action="" onSubmit={actualizarContacto}>
//           <Input 
//             type="text"
//             name="nombre"
//             value={nuevoNombre}
//             onChange={(e) => cambiarNuevoNombre(e.target.value)}
//             placeholder="Nombre"
//           />
//           <Input 
//             type="text"
//             name="edad"
//             value={nuevoEdad}
//             onChange={(e) => cambiarNuevoEdad(e.target.value)} 
//             placeholder="Edad"
//           />

//           <Boton type="submit">Actualizar</Boton>

//         </form>   
//         : 
//         <>
//           <nuevoNombre>{nombre}</nuevoNombre>
//           <nuevoEdad>{edad}</nuevoEdad>
//           <Boton onClick={() => cambiarEditandoTarea(!editandoTarea)}>Editar</Boton>
//           <Boton onClick={() => eliminarContacto(id)}>Borrar</Boton>
//         </>
//     }
//       </ContenedorContactos>
//   );
// }

// export default Contacto