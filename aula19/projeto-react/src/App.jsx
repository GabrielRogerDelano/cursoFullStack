import { useState } from "react"

function App() {

  const [contador, setContador] = useState(0)
  let horas = new Date()
  function MudarPlanoDeFundo() {
    const cor = document.getElementById('color').value
    document.body.style.backgroundColor = cor
  }

  return (
    <>
      <div>
        <h1>numero: {contador}</h1>
        <div>
          <button onClick={() => { setContador(contador + 1) }}>+</button>
        </div>

        <h1>Timer</h1>
        <p>{horas.toLocaleTimeString('pt-br')}</p>

        <h1>Mudar cor do plano de fundo</h1>
        <input type="text" placeholder="Digite em ingles ou rbg" id="color" />
        <button onClick={MudarPlanoDeFundo}>Mudar</button>
      </div>
    </>
  )
}



export default App