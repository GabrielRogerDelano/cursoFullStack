const precos = [50,100,150]
const desconto = precos.map(p=> Number((p * 1.1).toFixed(2)))
console.log(precos)
console.log(desconto)