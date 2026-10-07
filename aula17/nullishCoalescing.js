// Nullish Coalescing (??) é um operador que substitue o que esta a esquerda dele peolo que esta a direita SE o que estiver a direita for nulo ou undefined, mas valores como string vazia("") ou zero(0), nao substitue. oque substitue nessese casos, com NaN, false, 0, "", null, undefined é o operador OR (||), 

const array = ["carlos", "hugo", "kessia"]
const nome = undefined 

array.push(nome??"fulano")
console.log(array)

//com o OR(||)

//imagine que na sua loja tem que ter uma quantidade minima de 10 produtos para efetuar uma compra, se for um numero menor que 10 ou por ventura, nao for numero ou uma palavras, ja converte em 10 para evitar que todo sistema quebre, mas bom ter uma notificação para o usuario
const qtd = 0
const resultado = qtd||10//