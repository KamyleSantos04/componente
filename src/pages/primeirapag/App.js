import { Link } from 'react-router-dom';
import './App.scss';
import Rodape from '../componentes/rodape';

export default function Primeirapag() {
  return (
    <div className="App">
      <h1>Título da Página</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum vel excepturi ipsum illum! Iusto dignissimos adipisci assumenda corporis quis debitis reiciendis nesciunt ducimus nobis. Cumque deleniti at laboriosam voluptatum.</p>

      <button>
        <Link to="/segunda">Ir para a segunda página</Link>
      </button>

      <img src="./assets/images/dog.png" alt="Cachorro" width={500} />

       <Rodape className="rodape"/>
    </div>
  );
}


