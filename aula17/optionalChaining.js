//Optional chaining (?.), acessa propriedades aninhadas com segurança. Se qualquer propriedade no caminho for null ou undefined, lanca expressao undefined sem lancar um erro, evitando que o programa todo quebre

const usuario ={
    perfil: {
        nome: "Rafael"
    }
}

const cidade = usuario.endereco?.cidade
console.log(cidade)

const nome = usuario.perfil?.nome
console.log(nome)
