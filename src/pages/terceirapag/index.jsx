import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Terceirapag(){
    const [cep, setcep] = useState('')
    const [endereco, setendereco] = useState()

    async function buscarcep(){
        let url = `https://viacep.com.br/ws/${cep}/json/`
        let resp = await axios.get(url)
        let dados = resp.data 
        let msg = dados.logradouro + " - " + dados.bairro + " - " + dados.localidade 
        setendereco(msg)
    }
    
    return(
        <div className='API'>
            <h1>Consulta de CEP</h1>
      

        <div className="geral">
        <input type='text' value={cep} onChange={(e) => setcep(e.target.value)}></input>
        <button onClick={buscarcep}>Buscar</button>
        <p>{endereco}</p>        
        
        
        </div>
          </div>

    )
}