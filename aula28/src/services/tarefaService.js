import { listarTabela, buscaUsuarioPorId } from "../controllers/controller.js"

export async function ConsultarTarefas(req, res){
    try{
        console.log("tarefas")
        const todas = await listarTabela()
        return res.status(200).json(todas)
    }catch(erro){
        console.error("erro ao executar consulta de tarefas", erro)
        return res.status(404).json("erro ao executar consulta", erro)
    }
}

export async function buscaPorUsuario(req, res){
    try{
        const { id } = req.query;
        const user = await buscaUsuarioPorId(id)
        return res.status(200).json(user)
    }catch(erro){
        console.error("erro ao executar consulta de tarefas", erro)
        return res.status(404).json("erro ao executar consulta", erro)
    }
}