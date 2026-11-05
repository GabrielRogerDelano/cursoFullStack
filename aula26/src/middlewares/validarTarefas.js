export const validarNovaTarefas = (req, res, next) => {
    const { titulo } = req.body

    if( !titulo || typeof titulo !== 'string' || titulo.trim() === '' ){
        return res.status(400).json({
            erro: 'O campo Titulo deve ser obrigatorio e deve ser uma string valida'
        })
    }

    req.body.titulo = titulo.trim()

    next()
}