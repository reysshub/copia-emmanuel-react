import React from 'react'
import { InputNuevo, GrupoInput, Label, IconoValidacion, LeyendaError} from './Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Input = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
            }else {
                cambiarEstado({...estado, valido: 'false'});
            }
        }
        if(funcion){
            funcion();
        }
    }

  return (
    <>
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <GrupoInput>

            <InputNuevo 
                type={tipo} 
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange} 
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
            />

            <IconoValidacion 
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                valido={estado.valido} 
            />

        </GrupoInput>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </>
  )
}

export default Input