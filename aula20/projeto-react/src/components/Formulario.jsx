import { useState } from "react"

function Formulario(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    
    const formularioCadastro = (event) => {
        event.preventDefault();
        setNome(event.target.value)
        setEmail(event.target.value)
    }

    return(
        <div>
            <h1>Formulario de Cadastro</h1>
            <form onSubmit={formularioCadastro}>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={setNome()} />
            </form>
        </div>
    )
}
export default Formulario