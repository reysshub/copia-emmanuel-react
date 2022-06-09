import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import {collection, onSnapshot} from 'firebase/firestore';
import Contacto from './Contacto';

const ListaCampKulaqua = () => {
    const [contactos, cambiarContactos] = useState([]);

    useEffect(() =>  {
        onSnapshot(
            collection(db, 'usuarios'),
            (snapshot) => {
                // console.log('Se ejecuto snapshot')
                // console.log(snapshot.docs[0].data())

                const arregloUsuarios = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id};
                })
                cambiarContactos(arregloUsuarios);
            }
        );
    }, []);

  return (
        //Si tenemos contactos mostramos.
         contactos.length > 0 && 
            <ContenedorContactos>
                {contactos.map((contacto) => (
                    // Accedemos a los contactos y por cada uno cargamos el componente.
                     <Contacto
                        key={contacto.id}
                        id={contacto.id}
                        nombre={contacto.nombre}
                        edad={contacto.edad}
                    />
                ))}
            </ContenedorContactos>
  )
}

export const ContenedorContactos = styled.div`
    margin-top:40px;
`
export const Input = styled.input`
    
`
export const Boton = styled.button`
    
`

export default ListaCampKulaqua;