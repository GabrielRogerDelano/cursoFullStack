export default function criarUsuario(nome){
    return {nome, id: Date.now()}
}