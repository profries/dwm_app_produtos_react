import React from 'react';

import produtos from '../data/produtos'
import CardProduto from './CardProduto'
import imagemPrd from '../res/pedigree.jpg'

function ListaProdutos (props) {
    
    return (
        <section className="w3-row w3-container w3-margin-top">
            { produtos.map ( prod => 
            <CardProduto key={prod.id} nome={prod.nome} 
                imagem= {imagemPrd} 
                preco={prod.preco}>
            </CardProduto> )}
        </section>    
    )
}

export default ListaProdutos;