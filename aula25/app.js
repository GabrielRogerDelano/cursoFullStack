
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

let tarefas = [
    { id: 1, titulo: 'Estudar Node.js', concluida: true },
    { id: 2, titulo: 'Criar servidor', concluida: false }
]

// Listar todas as tarefas
app.get('/todos', (req, res) => {
    res.status(200).json(tarefas)
})

app.get('/concluidas', (req, res) => {
    res.status(200).json(tarefas.filter(t => t.concluida))
})

// Criar uma nova tarefa
app.post('/todos', (req, res) => {
    const { titulo } = req.body

    if (!titulo) {
        return res.status(400).json({
            error: 'O titulo é obrigatorio'
        })
    }

    const novaTarefa = {
        id: tarefas.length
            ? Math.max(...tarefas.map(t => t.id)) + 1
            : 1,
        titulo,
        concluida: false
    }

    tarefas.push(novaTarefa)

    res.status(201).json(novaTarefa)
})

// Deletar uma tarefa pelo ID
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id)

    const indice = tarefas.findIndex(
        tarefa => tarefa.id === id
    )

    if (indice === -1) {
        return res.status(404).json({
            error: 'Tarefa não encontrada'
        })
    }

    const tarefaRemovida = tarefas.splice(indice, 1)[0]

    res.status(200).json({
        mensagem: 'Tarefa deletada com sucesso',
        tarefa: tarefaRemovida
    })
})

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
