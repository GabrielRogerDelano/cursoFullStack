const body = document.querySelector('body')
const container = document.getElementById('container')
const btn_start = document.getElementById('btn_start')
const senha = document.getElementById('senha')
const digitos = document.getElementById('digitos')
const maiuscula = document.getElementById('maiuscula')

const cores = ['green', 'yellow', 'purple', 'blue', 'gray']
container.style.backgroundColor = 'red'

function mudarCor(){
    container.style.backgroundColor = cores[Math.floor(Math.random()* cores.length)]
}

function quantidade_digitos(text){
    if(text.length >= 8){
        digitos.setAttribute('class', 'on')
        return true
    }else{
        digitos.setAttribute('class', 'off');
        return false
    }
}

function temMaiuscula(text){
    if(/[A-Z]/.test(text)){
        maiuscula.setAttribute('class', 'on')
        return true
    }else{
        maiuscula.setAttribute('class', 'off')
        return false
    }
}

function verificarSenha(){
    quantidade_digitos(senha.value);
    temMaiuscula(senha.value);
}
function criarDiv(){
    
}
btn_start.addEventListener('click', mudarCor)
senha.addEventListener('input', verificarSenha)

// elemento.addEventListener('click', funcao)
// formulario.addEventListener('submit', funcao)
// elemento.addEventListener('change', funcao)
// elemento.addEventListener('input', funcao)
