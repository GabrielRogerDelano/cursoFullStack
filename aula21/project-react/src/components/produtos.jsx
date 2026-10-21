import { useEffect, useState } from "react"
import './produtos.css'
export function ListaDeProdutos(){
    
    const [produto, setProdutos] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProdutos(data))
    }, [])
    
    return(
        <div>
            <h3>Produtos</h3>
            <ul>
                {produto.map(produto => <li key={produto.id}>
                    <div className="card">
                        <img src={produto.image} alt="" />
                        <div>
                            <h2>{produto.title}</h2>
                            <p>{produto.description}</p>
                            <p>R$ {produto.price}</p>
                        </div>

                    </div>
                    </li>)}
            </ul>
        </div>
    )
}
