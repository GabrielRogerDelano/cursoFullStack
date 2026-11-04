import express from "express";
import tarefaRoutes from './routes/tarefaRoutes.js'

const app = express()

app.use(express.json())

app.use('/', tarefaRoutes)

app.listen(3000, () => console.log("servidor iniciado"))