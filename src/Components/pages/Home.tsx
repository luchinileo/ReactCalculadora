import { useState } from "react"
import { BotonCalculadora } from "./BotonCalculadora"
export const Home = () => {
  const [valor,setValor]= useState<string>('0')
  const [valorCalculo,setValorCalculo] = useState<string>('')

  const signo = (signoACalcular:string) => {
    if(signoACalcular === '='){
      const array = valorCalculo.split(' ')
      let resultado = 0
      let signo = ''
      for(let i=0; i < array.length; i++){
        let num = parseFloat(array[i])
        if (parseFloat(array[i])){
          if (signo !== ''){
            switch(signo){
              case '+' :
                resultado +=num
                break;
              case '-':
                resultado += num
                break;
              case 'x' :
                resultado *= num
                break;
              default:
                resultado /= num
            }
          
          }else{
            resultado = parseFloat(array[i])
          }
        }else{
          signo = array[i]
        }
    }
    setValor(resultado.toString())
    }else{
      setValor('')
    }
      
  setValorCalculo((prev) => prev + ' ' + signoACalcular + ' ')
} 

  const reset =()=>{
    setValor('0')
    setValorCalculo('')
  }

  const num = (numero: string) => {
    if(valor === '0') {
      setValor('')
    }
    setValor((prev) => prev + numero)
    setValorCalculo((prev) => prev + numero)
  
  }

  return ( 
  <div className='container'>
    <div className= 'container_resultado'>
      <span className="texto_calculo">{valorCalculo}</span>
        <p className ='texto_resultado'> {valor ?? '0'} </p>
    </div>
    <div className='container_calculadora'>
      <div className='fila_calculadora'>
        <div className="boton boton_nombre_calculadora">calculadora</div>
        <BotonCalculadora funcion={()=> reset()} nombre={'C'}/>
        <BotonCalculadora funcion={()=> signo('/')} nombre={'/'}/>
      
      </div>
      <div className='fila_calculadora'>
        <BotonCalculadora funcion={()=> num('7')} nombre={'7'}/>
        <BotonCalculadora funcion={()=> num('8')} nombre={'8'}/>
        <BotonCalculadora funcion={()=> num('9')} nombre={'9'}/>
        <BotonCalculadora funcion={()=> signo('x')} nombre={'x'}/>
      </div>
      <div className='fila_calculadora'>
        <BotonCalculadora funcion={()=> num('4')} nombre={'4'}/>
        <BotonCalculadora funcion={()=> num('5')} nombre={'5'}/>
        <BotonCalculadora funcion={()=> num('6')} nombre={'6'}/>
        <BotonCalculadora funcion={()=> signo('-')} nombre={'-'}/>
      </div>
      <div className='fila_calculadora'>
      <BotonCalculadora funcion={()=> num('1')} nombre={'1'}/>
      <BotonCalculadora funcion={()=> num('2')} nombre={'2'}/>
      <BotonCalculadora funcion={()=> num('3')} nombre={'3'}/>
      <BotonCalculadora funcion={()=> signo('+')} nombre={'+'}/>    
      </div>
      <div className='fila_calculadora'>
      <BotonCalculadora funcion={()=> num('00')} nombre={'00'}/>
      <BotonCalculadora funcion={()=> num('0')} nombre={'0'}/>
      <BotonCalculadora funcion={()=> num('.')} nombre={'.'}/>
      <BotonCalculadora funcion={()=> signo('=')} nombre={'='}/>
      </div>
    </div>
  </div>
  )
}
      
  

