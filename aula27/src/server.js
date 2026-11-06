import express from 'express'
import cors from "cors"
import router from './routes/tarefaRouter.js'
import "dotenv/config"

const PORT = process.env.PORT

const app = express()

app.use(cors({
    origin: 'http: localhost: 5173'
}))
app.use(express.json())// depois que fizer o POST desativar pra ver oq acontece

app.use('/', router)

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))