import './index.scss';

export default function Cabecalho( props ) {
  return (
    <div className="Cabecalho">
        <h1>{ props.titulo ?? "Titulo padrao do propis"} </h1>
    </div>
  );
}