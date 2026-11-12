import { pool } from "../config/db.js";

export const listarTabela = async () => {
    const resultado = await pool.query(
        "SELECT * FROM tarefas"
    );

    return resultado.rows;
};

export const buscaUsuarioPorId = async (id) => {
    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE id = $1",[id]
    );
    return resultado.rows;
}