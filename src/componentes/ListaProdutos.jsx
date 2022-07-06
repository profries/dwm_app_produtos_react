import React, { useState, useEffect } from 'react';
import Api from '../servicos/Api'
import CardProduto from './CardProduto'

function ListaProdutos (props) {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        Api.get("")
            .then((response) => setProdutos(response.data))
            .catch((err) => console.log(err))    
    },[])

    return (
        <section className="w3-row w3-container w3-margin-top">
            { produtos.map ( prod => 
            <CardProduto key={prod.id} nome={prod.nome} 
                imagem= {prod.imagem} 
                preco={prod.preco}>
            </CardProduto> )}
        </section>    
    )
}

export default ListaProdutos;