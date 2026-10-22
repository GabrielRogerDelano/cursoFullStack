import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Contato } from "./pages/Contato"

function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contato/:id" element={<Contato />} />
      </Routes>
    </Router>
    </>
  )
}
export default App