import React from 'react';
import produtos from '../data/produtos'
import CardProduto from './CardProduto'
import imgProduto from '../res/pedigree.jpg';


function ListaProdutos (props) {
    return produtos.map ( prod => 
        <CardProduto key={prod.id} nome={prod.nome} 
            imagem={imgProduto} preco={prod.preco}>
        </CardProduto>
    )
}

export default ListaProdutos;