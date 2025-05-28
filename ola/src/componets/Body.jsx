import { useState } from 'react'
import './Body.css'

function Body() {
    const [cont, setCont] = useState(0)
    const [inputValor, setInputValor] = useState('')
    const [inputN1, setInputN1] = useState('')
    const [inputN2, setInputN2] = useState('')
    function aumentar() {
        setCont(cont + 1)
    }
    function diminuir() {
        if (cont > 0) {
            setCont(cont - 1)
        }
    }
    function alterar(){
        setCont(Number(inputValor))
    }
    function soma(){
        const soma = Number(inputN1) + Number(inputN2)
        setCont((soma))
    }
    function subtracao(){
        const subtracao = Number(inputN1) - Number(inputN2)
        setCont((subtracao))
    }
    function multipicacao(){
        const multipicacao = Number(inputN1) * Number(inputN2)
        setCont((multipicacao))
    }

    return (
        <div className='Body'>
            <h2 className='titulo2'>Dinos são legais</h2>
            <div className='cont'>
              <button onClick={diminuir}>-</button>
              <p>{cont}</p>
              <button onClick={aumentar}>+</button>
            </div>

            <div className='form'>
               <input type="number" 
               value={inputValor}
               onChange={(e) => setInputValor(e.target.value)}/>
               <button onClick={alterar}>Alterar</button>

               <div className='calculadora'>
                <input type="text"
                value={inputN1} 
                onChange={(e) => setInputN1(e.target.value)} />

                <button onClick={soma}>+</button>
                <button onClick={subtracao}>-</button>
                <button onClick={multipicacao}>*</button>

                <input type="text"
                 value={inputN2} 
                 onChange={(e) => setInputN2(e.target.value)}
                />
              
               </div>
            </div>
            
        </div>

        
    )
    
}

export default Body