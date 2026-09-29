let letras = "123"

for(let l = 0; l < letras.length; l++){
    let linha = ""
    for(let c = 0; c < letras.length; c++){
        for(let p = 0; p < letras.length; p++){
        linha+= letras[l] + letras[c] + letras[p] + " "
    }
    }
    console.log(linha)
    linha = ""
}
//aa ab ac ad ae
//ba bb bc bd be 