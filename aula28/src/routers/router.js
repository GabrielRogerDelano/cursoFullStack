import { Router } from "express";
import { ConsultarTarefas, buscaPorUsuario, obterTarefasComUsuario } from "../services/tarefaService.js";

const router = Router()

router.get("/", (req, res) => {res.status(200).json("Use o endpoint /tarefas")})
router.get("/tarefas", ConsultarTarefas)
router.get("/buscaPorUsuario", buscaPorUsuario)
router.get("/obterTarefasComUsuario", obterTarefasComUsuario)

export default router