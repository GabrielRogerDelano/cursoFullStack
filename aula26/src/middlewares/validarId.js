export const validarIdNumerico = (req, res, next) => {
    const {id} = req.params

    if(isNaN(id) || Number(id) <= 0){
        return res.status(400).json({
            erro: "ID invalido. O parametro ID deve ser um número inteiro positivo"
        })
    }

    next()
}