import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Crud from './components/cadastro.jsx'
import Aula22 from './components/aula22.jsx'
import { ListaDeProdutos } from './components/produtos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Crud/>
    {/* <Aula22/> */}
    {/* <ListaDeProdutos /> */}
  </StrictMode>,
)
