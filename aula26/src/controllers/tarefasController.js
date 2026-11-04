import { obterTodas, buscarPorId, criar } from "../models/tarefaModel.js";

export const listarTarefas = (req, res) => {
    const lista = obterTodas();
    res.status(200).json(lista);
};

export const buscarTarefa = (req, res) => {
    const tarefa = buscarPorId(Number(req.params.id));
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa nao encontrada' });
    res.status(200).json(tarefa);
};

export const criarTarefa = (req, res) => {
    const { titulo } = req.body;
    if (!titulo) return res.status(400).json({ erro: "Titulo obrigatorio" });
    const nova = criar(titulo);
    res.status(201).json(nova);
};