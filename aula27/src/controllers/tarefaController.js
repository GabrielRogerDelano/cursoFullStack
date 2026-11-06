import { listarLivros } from "../models/livroModel.js";

export const listarTodosLivros = (req, res) => {
    const livros = listarLivros()
    if(!livros) return res.status(400).json({erro: "Livros nao encotrados"})
    res.status(200).json(livros)
}