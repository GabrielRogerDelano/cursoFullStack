import { Router } from "express";
import { listarTodosLivros } from "../controllers/tarefaController.js";

const router = Router()

router.get('/', (req,res) => {res.status(200).json("use o endpoint /listarLivros")})
router.get('/listarLivros', listarTodosLivros)

export default router