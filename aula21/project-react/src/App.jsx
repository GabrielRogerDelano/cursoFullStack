import { useState } from "react"

function Botao(props){
  const [contador, setContador] = useState(0)
  return(
    <>
    <h1>Contador: {contador}</h1>
    <button onClick={() => setContador(contador+1)}>{props.texto}</button>
    </>
  )
}

function MeuInput(props){
  const [nome, setNome] = useState('')
  
  return (
    <>
    <input type="text" onChange={(e) => setNome(e.target.value)}/>
    <p>{props.id}: {nome}</p>
    </>
  )
}

function ItemLista(props){
  return <li>{props.nome}</li>
}

function Lista(){
  const [lista, setLista] = useState(['Fabio', 'Guga', "Marcos"])
  const [nome, setNome] = useState('')

  return(
    <>
    <h2>Lista atual</h2>
    <ul>
      {lista.map((nome, index) => (
        <ItemLista key={index} nome={nome} />
      ))}
    </ul>

    <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)}/>
    <p>{nome}</p>
    <button onClick={() => setLista([...lista, nome])}>Adicionar nome</button>
    </>
  )
}

function App(){
  // let numero = []

  // function addTask(){

  // }
  return (
    <>
    {/* <h2>Adicione uma tarefa</h2>
    <input type="text" name="task" id="task" />
    <button onClick={addTask}>Adicionar</button>

    <ul>
      <li>{numero[0]}</li>
      <li>{numero[1]}</li>
      <li>{numero[2]}</li>
    </ul>

    <Botao texto="Adicionar" />
    <br /><br />
    <MeuInput id="Nome"/>
    <MeuInput id="Email"/>
    <Botao texto="Salvar"/> */}

    <Lista />
    </>
  )
}

export default App