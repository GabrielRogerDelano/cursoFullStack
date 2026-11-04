import { Router } from "express";
import { listarTarefas, buscarTarefa, criarTarefa } from "../controllers/tarefasController.js";
import { validarIdNumerico } from "../middlewares/validarId.js";

const router = Router();

router.get('/tarefas', listarTarefas);
router.post('/tarefas', criarTarefa);

router.get('/tarefas/:id', validarIdNumerico, buscarTarefa);

export default router;
