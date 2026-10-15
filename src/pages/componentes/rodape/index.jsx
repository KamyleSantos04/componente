import './index.scss';

export default function Rodape( props ) {
  return (
    <div className="Rodape">
        <h1>{ props.rodape ?? "Rodape do propis"} </h1>
    </div>
  );
}