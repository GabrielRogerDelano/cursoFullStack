const btn_quadrado = document.getElementById('btn_quadrado')
const btn_circulo = document.getElementById('btn_circulo')
const btn_limpar = document.getElementById('btn_limpar')
const btn_verificar = document.getElementById('btn_verificar')
const level = document.getElementById('level')
const ready = document.getElementById('ready')
const localSequencia = document.getElementById('localSequencia')
const userSequencia = document.getElementById('userSequencia')

const areaSequencia = document.getElementById('areaSequencia')
const areaUsuario = document.getElementById('areaUsuario')
const areaFinal = document.getElementById('areaFinal')

let dificulade = 5;
let sequequenciaAtual = []
let sequequenciaUsuario = []

function gerarSequencia() {
    level.innerText = dificulade;
    userSequencia.innerHTML = '';
    localSequencia.innerHTML = '';
    sequequenciaAtual.length = 0;//zera o array 
    limpar()

    for (let i = 1; i <= dificulade; i++) {
        let num = Math.floor(Math.random() * 2) + 1
        if (num == 1) {
            criarQuadrado(localSequencia)
            sequequenciaAtual.push(1)
        } else {
            criarCirculo(localSequencia)
            sequequenciaAtual.push(2)
        }
    }

    setTimeout(() => {
        areaUsuario.setAttribute('class', '')
        areaSequencia.setAttribute('class', 'invisivel')
        localSequencia.setAttribute('class', 'invisivel')
    }, 4000);
}

function userAction(escolha) {
    if (escolha == 1) {
        criarQuadrado(userSequencia)
        sequequenciaUsuario.push(1)
        btn_limpar.setAttribute('class', 'btn')
    } else if (escolha == 2) {
        criarCirculo(userSequencia)
        sequequenciaUsuario.push(2)
        btn_limpar.setAttribute('class', 'btn')
    }
}

function criarQuadrado(container = document.body) {
    const elem = document.createElement('div');
    elem.setAttribute('class', 'quadrado');
    container.appendChild(elem);
}

function criarCirculo(container = document.body) {
    const elem = document.createElement('div');
    elem.setAttribute('class', 'circulo');
    container.appendChild(elem);
}

function limpar() {
    userSequencia.innerHTML = '';
    sequequenciaUsuario.length = 0;
    btn_limpar.setAttribute('class', 'btn disable')
}

function identicas(array1, array2) {
    if (array1.length != array2.length) {
        return false
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array2[i] != array1[i]) {
                return false
            }
        }
        return true
    }
}

function verificar() {
    localSequencia.setAttribute('class', '')
    if (identicas(sequequenciaAtual, sequequenciaUsuario)) {
        console.log("acertou")
        dificulade += 1
    } else {
        console.log("errou")
    }
    areaUsuario.setAttribute('class', 'invisivel')
    areaFinal.setAttribute('class', '')
    setTimeout(() => {
        areaSequencia.setAttribute('class', '')//botao de gerar sequencia aparece depois de 2 segundos
    }, 2000);
}

//a pessoa escreve um nome de uma classe e aparece em baixo a forma
ready.addEventListener('click', gerarSequencia);
btn_quadrado.addEventListener('click', () => userAction(1));
btn_circulo.addEventListener('click', () => userAction(2));
btn_limpar.addEventListener('click', limpar);
btn_verificar.addEventListener('click', verificar);