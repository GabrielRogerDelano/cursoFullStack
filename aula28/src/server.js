import express from'express'
import cors from'cors'
// import router from "./routers/router.js"
import 'dotenv/config'

const PORT = process.env.PORT

const app = express()

app.use(cors())

// app.use("/", router)

app.listen(PORT, () => {console.log("Servidor iniciado\nhttp://localhost:3000/")})