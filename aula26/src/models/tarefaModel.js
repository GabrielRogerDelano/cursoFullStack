const tarefas = [
    { id: 1, titulo: "Estudar Node", concluida: false }
];

export const obterTodas = () => tarefas;

export const buscarPorId = (id) => tarefas.find(t => t.id === id);

export const criar = (titulo) => {
    const nova = { id: tarefas.length + 1, titulo, concluida: false };
    tarefas.push(nova);
    return nova;
};

export const remover = (id) => {
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        tarefas.splice(index, 1);
        return true;
    }
    return false;
};