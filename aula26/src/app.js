import express from "express";
import tarefaRoutes from './routes/tarefaRoutes.js'
import cors from "cors"
import "dotenv/config"

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use('/', tarefaRoutes)

app.listen(PORT, () => console.log("servidor iniciado"))