//permite extrair valores de arrays ou propriedades de forma consisa, nao precisando entrar em loop, acesando as propriedades manualmente
const user1 = {
    nome: "luiz",
    frutaFav: "uva",
    idade: 21
}

const {nome,idade} = user1

console.log(nome)
console.log(idade)

const array = ["dois",2,"tres",4,5,6]
const [um, tres] = array

console.log(um)
console.log(tres)