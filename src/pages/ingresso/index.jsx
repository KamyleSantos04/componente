import './index.scss'
import { useState } from 'react';


const PRECO_INGRESSO = 90.00;

export default function Ingresso( ) {

    const [quantidade, setQuantidade] = useState(1);
    const [meia, setmeia] = useState(false);
    const [cumpo, setcumpo] = useState("");
    const [total, setTotal] = useState('');

    function calculation() {
        let valor = quantidade * PRECO_INGRESSO;
        if(meia === true) {
            valor = valor / 2;
        }

        if (cumpo.toLocaleUpperCase() === "CUMPO10"){
            valor = valor * 0.10;
        }

        if (cumpo.toLocaleUpperCase() ===  "CUMPO30"){
            valor = valor * 0.30;
        }

        if (cumpo.toLocaleUpperCase() === "CUMPO50"){
            valor = valor * 0.50;
        }



        setTotal(valor)
    }

    

    return(
        <div className='ingresso'>
            <h1>CineLegal</h1>
            <img src='./assets/images/cinema.jpg' alt='' width={300}></img>
            

        <div className='titulo'>
            <h1>FILMES EM CARTAZ:</h1>

        <div className='card2'>
            <img src= './assets/images/lazaro.jpg' alt='' width={200}></img>
            <img src= './assets/images/five.jpg' alt='' width={200}></img>
            <img src= './assets/images/onerde.jpg' alt='' width={200}></img>
            <img src= './assets/images/ratue.jpg' alt='' width={200}></img>
            <img src= './assets/images/tachovendp.png' alt='' width={200}></img>
            <img src= './assets/images/crac.jpg' alt='' width={200}></img>
            <img src= './assets/images/barbiepoze.jpg' alt='' width={200}></img>
            <img src= './assets/images/sidenei.jpg' alt='' width={200}></img>
            
        </div>
        </div>


       

         <div className="card">
        <h1>Venda de Ingressos</h1>

        <div className="linha">
          <label>Quantidade:</label>
          <input
            type="number"  min="0"      value={quantidade}  onChange={(e)=>setQuantidade(e.target.value)}      />
        </div>

        <div className="linha">
          <label>Meia Entrada:</label>

          <input type="checkbox"  value={meia}    onChange={(e)=>setmeia(e.target.checked)}   />
        </div>

        <div className="linha">
          <label>Cupom:</label>
          <input   type="text"  value={cumpo}    onChange={(e)=>setcumpo(e.target.value)}    />
        </div>

        <div className="linha">
          <label></label>
          <button onClick={calculation}>Calcular</button>
        </div>

        <p className="total">O total é R$ {total}</p>
      </div>
    </div>
    
    );
}