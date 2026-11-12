import express from  'express'
import cors from 'cors'
import 'dotenv/config'
import { pool } from './config/db.js'
import router from './routers/router.js';

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use("/", router)

app.listen(PORT, () => {console.log(`Servidor iniciado\nhttp://localhost:${PORT}/`)})