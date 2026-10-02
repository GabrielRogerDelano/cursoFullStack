const btn_quadrado = document.getElementById('btn_quadrado')
const btn_circulo = document.getElementById('btn_circulo')
const ready = document.getElementById('ready')
const localSequencia = document.getElementById('localSequencia')
const userSequencia = document.getElementById('userSequencia')

let dificulade = 3;

function gerarSequencia() {
    localSequencia.innerHTML = '';
    
    for (let i = 1; i <= dificulade; i++) {
        let num = Math.floor(Math.random() * 2) + 1
        if (num == 1) {
            criarCirculo(localSequencia)
        } else {
            criarQuadrado(localSequencia)
        }
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

//a pessoa escreve um nome de uma classe e aparece em baixo a forma
ready.addEventListener('click', gerarSequencia);
btn_quadrado.addEventListener('click', () => criarQuadrado(userSequencia));
btn_circulo.addEventListener('click', () => criarCirculo(userSequencia));