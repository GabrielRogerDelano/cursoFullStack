import { Router } from "express";
import { listarTarefas, buscarTarefa, criarTarefa } from "../controllers/tarefasController.js";
import { validarIdNumerico } from "../middlewares/validarId.js";
import { validarNovaTarefas } from "../middlewares/validarTarefas.js";

const router = Router();

router.get('/tarefas', listarTarefas);
router.post('/tarefas', validarNovaTarefas, criarTarefa);

router.get('/tarefas/:id', validarIdNumerico, buscarTarefa);

export default router;
