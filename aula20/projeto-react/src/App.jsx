import { useState } from "react"

function App(){
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  
  const handleNomeChange = (event) => {
    setNome(event.target.value)
  }

  const formularioSubmit = (event) => {
    event.preventDefault()
    alert(`Cadastro de email realizado ${email}`)
  }

  return (    
    <>
      <p>Contador esta em {count}</p>
      <button onClick={() => setCount(count +1 )}>adicionar</button>

      <div>
        <input type="text" placeholder="Digite seu nome" onChange={handleNomeChange} />
        <p style={{color: "red"}}>Olá, {nome || 'Visitante'}!</p>
      </div>

      <div>
        <form onSubmit={formularioSubmit}>
          <label>Email</label>
          <input type="email" placeholder="digite seu email aqui" onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      
      <p>Check box</p>
      <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
    </>
  )
}

export default App