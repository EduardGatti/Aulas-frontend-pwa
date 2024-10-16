import './Rodape.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape_root">
      <h6>
        Copyright © {anoAtual} - Todos os direitos
        reservados. - Eduardo Correa Gatti
      </h6>
    </footer>
  );
}

export default Rodape;
