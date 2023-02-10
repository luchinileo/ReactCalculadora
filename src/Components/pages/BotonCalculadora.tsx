import React from 'react'


interface Props{
    nombre: string                    //nombre que va ir por parametros
    funcion: (num? : string)=> void  //funcion que va ir  por parametros
}            //no siempre va a tener un numero

  //componente
export const BotonCalculadora = ({nombre , funcion}: Props) =>{
    return (                            //funcion que viene por parametros
    <div className="boton" onClick={() => funcion()}>
            {nombre}
            </div>
        )
    }       //nombre que va por parametros                                        
                  //clase para todos  