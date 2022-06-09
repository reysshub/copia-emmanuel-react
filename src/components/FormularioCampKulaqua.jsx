import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Espacio, TituloChico } from './CardCodigo';

const Formulario = () => {
    const [nombre1, cambiarNombre1] = useState('');
    const [edad1, cambiarEdad1] = useState('');
    // const [telefono, cambiarTelefono] = useState('');
    const [nombre2, cambiarNombre2] = useState('');
    const [edad2, cambiarEdad2] = useState('');
    const [nombre3, cambiarNombre3] = useState('');
    const [edad3, cambiarEdad3] = useState('');
    // const [nombre4, cambiarNombre4] = useState('');
    // const [edad4, cambiarEdad4] = useState('');
    // const [nombre5, cambiarNombre5] = useState('');
    // const [edad5, cambiarEdad5] = useState('');
    // const [nombre6, cambiarNombre6] = useState('');
    // const [edad6, cambiarEdad6] = useState('');
    // const [nombre7, cambiarNombre7] = useState('');
    // const [edad7, cambiarEdad7] = useState('');
    // const [nombre8, cambiarNombre8] = useState('');
    // const [edad8, cambiarEdad8] = useState('');
    // const [nombre9, cambiarNombre9] = useState('');
    // const [edad9, cambiarEdad9] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await addDoc(collection(db, 'usuarios'), {
                // asistente1: {
                    nombre1: nombre1,
                    edad1: edad1,
                    // telefono: telefono,
                // },
                // asistente2: {
                    nombre2: nombre2,
                    edad2: edad2,
                // },
                // asistente3: {
                    nombre3: nombre3,
                    edad3: edad3
                // }
                // asistente4: {
                //     nombre4: nombre4,
                //     edad4: edad4
                // },
                // asistente5: {
                //     nombre5: nombre5,
                //     edad5: edad5
                // },
                // asistente6: {
                //     nombre6: nombre6,
                //     edad6: edad6
                // },
                // asistente7: {
                //     nombre7: nombre7,
                //     edad7: edad7
                // },
                // asistente8: {
                //     nombre8: nombre8,
                //     edad8: edad8
                // },
                // asistente9: {
                //     nombre9: nombre9,
                //     edad9: edad9
                // }
            });
        } catch(error){
            console.log('Hubo un error al intentar guardar el documento');
            console.log(error);
            }

        cambiarNombre1('');
        cambiarEdad1('');
        // cambiarTelefono('');
        cambiarNombre2('');
        cambiarEdad2('');
        cambiarNombre3('');
        cambiarEdad3('');
        // cambiarNombre4('');
        // cambiarEdad4('');
        // cambiarNombre5('');
        // cambiarEdad5('');
        // cambiarNombre6('');
        // cambiarEdad6('');
        // cambiarNombre7('');
        // cambiarEdad7('');
        // cambiarNombre8('');
        // cambiarEdad8('');
        // cambiarNombre9('');
        // cambiarEdad9('');
    }

  return (
    <>
            <TituloChico>
                <h2>Registro Personas - Habitación</h2>
            </TituloChico>
            <Espacio />
        <form action="" onSubmit={onSubmit}>
            <label>  
                <Input 
                    type="text" 
                    name="Nombre1" 
                    value={nombre1}
                    onChange={(e) => cambiarNombre1(e.target.value)}
                    placeholder='1. Nombre del principal' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad1" 
                    value={edad1}
                    onChange={(e) => cambiarEdad1(e.target.value)}
                    placeholder='Edad'
                />
            </label>
            
            {/* <label>  
                <InputLargo
                    type="tel" 
                    name="Telefono"
                    value={telefono} 
                    onChange={(e) => cambiarTelefono(e.target.value)}
                    placeholder='Teléfono del principal' 
                    />
            </label> */}

            <label>  
                <Input 
                    type="text" 
                    name="Nombre2"
                    value={nombre2}
                    onChange={(e) => cambiarNombre2(e.target.value)} 
                    placeholder='2. Acompañante 1' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad2" 
                    value={edad2}
                    onChange={(e) => cambiarEdad2(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            <label>  
                <Input 
                    type="text" 
                    name="Nombre3"
                    value={nombre3}
                    onChange={(e) => cambiarNombre3(e.target.value)} 
                    placeholder='3. Acompañante 2' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad3" 
                    value={edad3}
                    onChange={(e) => cambiarEdad3(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            {/* <label>  
                <Input 
                    type="text" 
                    name="Nombre4"
                    value={nombre4}
                    onChange={(e) => cambiarNombre4(e.target.value)} 
                    placeholder='4. Acompañante 3' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad4" 
                    value={edad4}
                    onChange={(e) => cambiarEdad4(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            <label>  
                <Input 
                    type="text" 
                    name="Nombre5"
                    value={nombre5}
                    onChange={(e) => cambiarNombre5(e.target.value)} 
                    placeholder='5. Acompañante 4' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad5" 
                    value={edad5}
                    onChange={(e) => cambiarEdad5(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            <label>  
                <Input 
                    type="text" 
                    name="Nombre6"
                    value={nombre6}
                    onChange={(e) => cambiarNombre6(e.target.value)} 
                    placeholder='6. Acompañante 5' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad6" 
                    value={edad6}
                    onChange={(e) => cambiarEdad6(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            <label>  
                <Input 
                    type="text" 
                    name="Nombre7"
                    value={nombre7}
                    onChange={(e) => cambiarNombre7(e.target.value)} 
                    placeholder='7. Acompañante 6' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad7" 
                    value={edad7}
                    onChange={(e) => cambiarEdad7(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            <label>  
                <Input 
                    type="text" 
                    name="Nombre8"
                    value={nombre8}
                    onChange={(e) => cambiarNombre8(e.target.value)} 
                    placeholder='8. Acompañante 7' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad8" 
                    value={edad8}
                    onChange={(e) => cambiarEdad8(e.target.value)}
                    placeholder='Edad' 
                />
            </label>

            <label>  
                <Input 
                    type="text" 
                    name="Nombre9"
                    value={nombre9}
                    onChange={(e) => cambiarNombre9(e.target.value)} 
                    placeholder='9. Acompañante 8' 
                />
            </label>
            <label>  
                <InputEdad 
                    type="text" 
                    name="Edad9" 
                    value={edad9}
                    onChange={(e) => cambiarEdad9(e.target.value)}
                    placeholder='Edad' 
                />
        </label> */}
        <Espacio /> 
            <label>  
                <Boton type="submit" value="Enviar" />
            </label> 
            <Espacio />
        </form>
    </>
  )
}

export const Input = styled.input`
    border:none;
    border-bottom:1px solid lightblue;
    margin-bottom:5px;
    margin-right:3%;
    font-size:23px;
    padding:10px;
    width:75%;
`
export const InputEdad = styled.input`
    border:none;
    border-bottom:1px solid lightblue;
    margin-bottom:5px;
    font-size:23px;
    padding:10px;
    width:22%;
`
export const InputLargo = styled.input`
    border:none;
    border-radius:10px;
    border-bottom:1px solid lightblue;
    margin-bottom:5px;
    font-size:23px;
    color:darkblue;
    padding:10px;
    width:100%;
`
export const Boton = styled.input`
    border:none;
    border-bottom:1px solid lightblue;
    border-radius:10px;
    margin-bottom:5px;
    font-size:23px;
    color:darkblue;
    padding:10px;
    width:100%;
`

export default Formulario