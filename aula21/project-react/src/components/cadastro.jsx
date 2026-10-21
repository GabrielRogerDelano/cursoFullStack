import { use, useState } from "react"
import './cadastro.css'

function Crud() {
    const [lista, setLista] = useState([])
    const [textoDigitado, setTextoDigitado] = useState(null)

    const salvarItem = (e) => {
        e.preventDefault()

        if (!textoDigitado.trim()) return;

        const novoItem = {
            id: Date.now(),
            nome: textoDigitado
        }

        setLista([...lista, novoItem])
        setTextoDigitado("")
    }

    const removerItem = (idParaApagar) => {
        const listaFiltrada = lista.filter((item) => {
            return item.id !== idParaApagar
        })

        setLista(listaFiltrada)
    }

    return (
        <>
            <section>
                <h3>Crud</h3>
                <form onSubmit={salvarItem}>
                    <input type="text" placeholder="Adicione aqui." onChange={(e) => setTextoDigitado(e.target.value)} />
                    <button type="submit">Adicionar</button>
                </form>

                <h3>Lista</h3>
                <ul>
                    {lista.map((item) => {
                        return <li key={item.id}>
                            <p>{item.nome}</p>
                            <button>Editar</button>
                            <button type="button" className="delete" onClick={() => { removerItem(item.id)}}>excluir</button>
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default Crud