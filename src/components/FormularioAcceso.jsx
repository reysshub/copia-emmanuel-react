import React, { useState } from 'react';
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { InputLargo, Boton } from './FormularioCampKulaqua';
import { Espacio, TituloChico, ColorWhite } from './CardCodigo';
import {ContenedorForm} from './Formularios';

const FormularioAcceso = () => {
    const [nombreRegistro, cambiarNombreRegistro] = useState('');
    const [email, cambiarEmail] = useState('');
    const [password, cambiarPassword] = useState('');
    const [password2, cambiarPassword2] = useState('');
    

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await addDoc(collection(db, 'usuarios'), {
                nombreRegistro: nombreRegistro,
                email: email,
                password: password,
                password2: password2
            });

            } catch(error){
                console.log('Hubo un error al intentar guardar el documento');
                console.log(error);
            }

            nombreRegistro('');
            email('');
            password('');
            password2('');
        }

  return (
    <>  
        <ContenedorForm action="" onSubmit={onSubmit}>
            <Espacio />
            <TituloChico>
                <ColorWhite>
                    <h2>Registrate</h2>
                </ColorWhite>
            </TituloChico>
            <Espacio />
            <Espacio />

            <label>  
                <InputLargo 
                    type="text" 
                    name="NombreRegistro" 
                    value={nombreRegistro}
                    onChange={(e) => cambiarNombreRegistro(e.target.value)}
                    placeholder='Nombre y apellido' 
                />
            </label>
            
            <label>  
                <InputLargo 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={(e) => cambiarEmail(e.target.value)}
                    placeholder='email'
                />
            </label>
            
            <label>  
                <InputLargo
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={(e) => cambiarPassword(e.target.value)}
                    placeholder='password' 
                    />
            </label>

            <label>  
                <InputLargo
                    type="password" 
                    name="password2"
                    value={password2} 
                    onChange={(e) => cambiarPassword2(e.target.value)}
                    placeholder='Confirma password' 
                    />
            </label>
            <Espacio />
            <label>  
                <Boton type="submit" value="Regístrate" />
            </label> 
            <Espacio />
        </ContenedorForm>
    </>
  )
}

export default FormularioAcceso