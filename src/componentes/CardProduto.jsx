import React from 'react';

function CardProduto(props) {
    return (
        <div className="w3-card">
            <div className="w3-container w3-center">
                <img src={props.imagem} style={{width: "70%"}} alt="{props.nome}" />
                <h5>{props.nome}</h5>
                <h3 className="w3-blue">
                    {
                    'R$ '+props.preco.toLocaleString(
                        'pt-br', {minimumFractionDigits: 2})
                    }
                </h3>
            </div>
        </div>    
    )
}
export default CardProduto;