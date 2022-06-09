import React, { useState } from 'react';
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { InputLargo, Boton } from './FormularioCampKulaqua';
import { Espacio, TituloChico, ColorWhite } from './CardCodigo';
import {ContenedorForm} from './Formularios';

const FormularioEntrada = () => {
    const [email, cambiarEmail] = useState('');
    const [password, cambiarPassword] = useState('');
    

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await addDoc(collection(db, 'usuarios'), {
                email: email,
                password: password,
            });

            } catch(error){
                console.log('Hubo un error al intentar guardar el documento');
                console.log(error);
            }

            email('');
            password('');
        }

  return (
    <>  

        <ContenedorForm action="" onSubmit={onSubmit}>
            <TituloChico>
                <ColorWhite>
                    <h2>Acceso</h2>
                </ColorWhite>
            </TituloChico>
            <Espacio />
            <label>  
                <InputLargo 
                    type="email" 
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

            <Espacio />
            <label>  
                <Boton type="submit" value="Enviar" />
            </label> 
            <Espacio />
        </ContenedorForm>
    </>
  )
}

export default FormularioEntrada