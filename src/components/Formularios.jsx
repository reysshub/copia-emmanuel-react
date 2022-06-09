// import React, {useState} from 'react';
// import styled, {css} from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
// import {TituloMedio, Espacio, ColorWhite, LetraChica} from './CardCodigo';
// import Input from './Input';

// export const colores = {
//   borde: "#0075FF",
//   error: "#bb2929",
//   exito: "#1ed12d",
//   blanco: "#fff"
// }

// const Formularios = () => {
//   const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
//   // const [nombre, cambiarNombre] = useState({campo: '', valido: null});
//   const [password, cambiarPassword] = useState({campo: '', valido: null});
//   const [password2, cambiarPassword2] = useState({campo: '', valido: null});
//   const [correo, cambiarCorreo] = useState({campo: '', valido: null});
//   // const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
//   // const [terminos, cambiarTerminos] = useState(false);
//   const [formularioValido, cambiarFormularioValido] = useState(null);

//   const expresiones = {
//     usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     password: /^.{4,12}$/, // 4 a 12 digitos.
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//   }

//   const validarPassword2 = () => {
//     if(password.campo.length > 0){
//       if(password.campo !== password2.campo){
//         cambiarPassword2((prevState) => {
//           return {...prevState, valido: 'false'}
//         })
//       }else{
//         cambiarPassword2((prevState) => {
//           return {...prevState, valido: 'true'}
//         })
        
//       }
//     }
//   }

//   // const onChangeTerminos = (e) => {
//   //   cambiarTerminos(e.target.checked);
//   // }

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if(
//        usuario.valido === 'true' &&
//        correo.valido === 'true' &&
//        password.valido === 'true' &&
//        password2.valido === 'true'
//       //  terminos
//       ){
//         cambiarFormularioValido(true);
//         cambiarUsuario({campo: '', valido: ''});
//         cambiarCorreo({campo: '', valido: null});
//         cambiarPassword({campo: '', valido: null});
//         cambiarPassword2({campo: '', valido: 'null'});

//         //... codigo para enviar a la base de datos.
//     } else {
//         cambiarFormularioValido(false); 
//     }
//   }

//   return (
//     <>  
//         <ContenedorForm action="" onSubmit={onSubmit}>
//           <TituloMedio><ColorWhite>Registro Usuario</ColorWhite></TituloMedio>
//           <LetraChica><ColorWhite>El usuario registra su grupo</ColorWhite></LetraChica>

//           <Espacio />

//           <Input 
//             estado={usuario}
//             cambiarEstado={cambiarUsuario}
//             tipo="text"
//             label="Usuario"
//             placeholder="Usuario"
//             name="usuario"
//             leyendaError="El usuario tiene que ser 4 a 16 dígitos y sólo puede contener numeros, letras y guión bajo."
//             expresionRegular={expresiones.usuario}
//           />

//           <Input 
//             estado={correo}
//             cambiarEstado={cambiarCorreo}
//             tipo="email"
//             label="Correo"
//             placeholder="correo@correo.com"
//             name="correo"
//             leyendaError="El correo debe debe ser un correo real."
//             expresionRegular={expresiones.correo}
//           />

//           <Input 
//             estado={password}
//             cambiarEstado={cambiarPassword}
//             tipo="password"
//             label="Contraseña"
//             placeholder="Contraseña"
//             name="password"
//             leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
//             expresionRegular={expresiones.password}
//           />

//           <Input 
//             estado={password2}
//             cambiarEstado={cambiarPassword2}
//             tipo="password"
//             label="Contraseña"
//             placeholder="Repite Contraseña"
//             name="password2"
//             leyendaError="Ambas contraseñas deben ser iguales."
//             funcion={validarPassword2}
//           />
          
//           {/* <ContenedorTerminos>
//             <Label>
//               <input 
//                 type="checkbox" 
//                 name="terminos" 
//                 id="terminos" 
//                 checked={terminos}
//                 onChange={onChangeTerminos} 
//               />
//               Acepto los Términos y Condiciones
//             </Label>
//           </ContenedorTerminos> */}

//           {!formularioValido === false && <MensajeError>
//             <p>
//               <FontAwesomeIcon icon={ faExclamationTriangle } />
//               <b>Error:</b> Por favor rellena bien el formulario.
//             </p>
//           </MensajeError>}

//           <Espacio />
//           <Espacio />

//           <ContenedorBotonCentrado>
//             <BotonNuevo type="submit">Enviar</BotonNuevo>
//             {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
//           </ContenedorBotonCentrado>

//           <Espacio />
//         </ContenedorForm>
//     </>
//   )
// }

// export const ContenedorForm = styled.form`
//   background: #d7dce2;
//   padding:10px;
//   border-radius:10px;
// `
// export const Label = styled.label`
//     display:block;
//     font-weight: 700;
//     padding: 10px;
//     min-height: 40px;
//     cursor:pointer;

//     ${props => props.valido === 'false' && css`
//       color: ${colores.error};
//     `}
// `
// export const GrupoInput = styled.div`
//   position:relative;
//   z-index:90;
// `
// export const InputNuevo =styled.input`
//   width: 100%;
//   background: #fff;
//   border-radius:5px;
//   height: 40px;
//   line-height:45px;
//   padding: 0 40px 0 10px;
//   transition: .3s ease all;
//   border:3px solid transparent;

//   &:focus {
//     border:3px solid ${colores.borde};
//     outline: none;
//     box-shadow:3px 0px 30px rgba(163, 163, 163, 0.4);
//   }

//   ${props => props.valido === 'true' && css`
//     border: 3px solid transparent;
//   `}
//   ${props => props.valido === 'false' && css`
//     border: 3px solid ${colores.error} !important;
//   `}
// `
// export const LeyendaError = styled.p`
//   padding-left: 10px;
//   font-size: 12px;
//   margin-bottom: 0;
//   color: ${colores.error};
//   display:none;

//   ${props => props.valido === 'true' && css`
//     display:none;
//   `}
//   ${props => props.valido === 'false' && css`
//     display:block;
//   `}
// `
// export const MensajeExito = styled.p`
//   font-size: 14px;
//   color: ${colores.exito};
//   /* display:none; */
// `
// export const MensajeError = styled.div`
//   height: 45px;
//   line-height:45px;
//   background: #F66060;
//   padding: 0px 15px;
//   border-radius: 5px;
//   /* grid-column: span 2; */
//   p{
//     margin: 0;
//   }
//   b{
//     margin-left: 10px;
//   }
// `
// export const IconoValidacion = styled(FontAwesomeIcon)`
//   position:absolute;
//   right:10px;
//   bottom:14px;
//   z-index:100;
//   font-size:16px;
//   opacity:0;

//   ${props => props.valido === 'false' && css`
//     opacity:1;
//     color: ${colores.error};
//   `}

//   ${props => props.valido === 'true' && css`
//     opacity:1;
//     color: ${colores.exito};
//   `}
// `

// // export const ContenedorTerminos = styled.div`
// //   /* grid-column:span 2; */

// //   input {
// //     margin-right:10px;

// //   }
// // `
// export const ContenedorBotonCentrado = styled.div`
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   /* grid-column:span 2; */
// `
// export const BotonNuevo = styled.button`
//   height: 45px;
//   line-height:45px;
//   width:30%;
//   background:#000;
//   color: #fff;
//   font-weight:bold;
//   border:none;
//   border-radius:5px;
//   cursor:pointer;
//   transition: .1s ease all;

//   &:hover{
//     box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
//   }
// `
// export default Formularios










