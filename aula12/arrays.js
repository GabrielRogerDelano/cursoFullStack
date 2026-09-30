//push - adiciona no final
//pop - remove o ultimo
//shift - remove o primeiro 
//unshift("nome") - adiciona no inicio
//slice(inicio, fim) - copia uma parte do array
//splice(inicio, fim,"nome") - remove ou substitui

/*

ate agora vi que o slice e splice guardam os valores, e isso pode confundir quando estiver programando. Tambem é importante verificar se inclue ou nao o indice de fim

console.log(comidas) -> ["arroz", "feijao", "bolo", "suco"]
let sobras = comidas.splice(0,2)
console.log(comidas) -> [ 'bolo', 'suco' ]
console.log(sobras) -> [ 'arroz', 'feijao' ]
*/

let comidas = ["arroz", "feijao", "bolo", "suco"]


console.log(comidas) 
let sobras = comidas.slice(0,2)
console.log(comidas)
console.log(sobras)

/*
for(let i = -3; i< comidas.length;i++){
    for(let k = -3; k< comidas.length; k++){
        console.log(`comidas.slice(${i},${k}) = ${comidas.slice(i,k)}`)
    }
    console.log("-----------")
}

let janta  = comidas.slice(0, 2)
console.log(comidas)
console.log(janta)

comidas.splice(1,1,"maçã")
console.log(comidas) 
*/