const prompt = require("prompt-sync")();
/*
let text = prompt("Digite algo: ")
let text2 = ""

let k = 0;

for(let i = 0; i < text.length; i++){
    console.log(`for do i| text[i] = ${text[i]}`)

    for(let k = 0; k<= text.length-1;k++){
        console.log(`for do k| alf[k] = ${alf[k]}`)
        if(alf[k] == )
    }
}

/*
//no do while esta dando problema de o 'k' nao volta a ser 0 pra recomecar a percorrer a lista alf
    do{

        console.log(`for do k| alf[k] = ${alf[k]}`)
        
        k++
    }while(k <= text.length-1)
*/

const alfabeto = "abcdefghijklmnopqrstuvwxyz"
let nome = "gabriel"
let texto = ""
console.log(nome)

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
console.clear()
async function animarTexto() {
    for (let i = 0; i <= nome.length - 1; i++) {
        for (let k = 0; k < alfabeto.length; k++) {

            console.log(texto + alfabeto[k])
            
            await delay(20);


            if (nome[i] == alfabeto[k]) {
                texto += alfabeto[k];
                break;
            }

        }

    }
    console.log()
}

animarTexto()
