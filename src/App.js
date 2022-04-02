import React from 'react';
import Menu from './componentes/Menu';
import Carroussel from './componentes/Carroussel'
import ListaProdutos from './componentes/ListaProdutos';
import './App.css';

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <section className="w3-container w3-padding-16 w3-margin-top">
          <h1>Exercício da Aula</h1>
        </section>
        <Carroussel></Carroussel>    
        <ListaProdutos></ListaProdutos>
        <footer className="w3-container w3-margin-top w3-black">
      		<p className="w3-center">Realizado por Ries (imagens retiradas de petz.com.br)</p>
	      </footer>
      </main>
    </>
  );
}

export default App;
