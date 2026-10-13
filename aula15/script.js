const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

const nomeError = document.querySelector('#nomeError');
const emailError= document.querySelector('#emailError');
const senhaError = document.querySelector('#senhaError');

const tbody = document.querySelector('#tbody');

class Usuario{
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

let cadastro = [new Usuario('Gabriel Roger','gabrielroger932@gmail.com','123')]



function validador(){
    let valido = true

    let nomeUsu = ''
    let emailUsu = ''
    let senhaUsu = ''

    event.preventDefault()

    if(nome.value.trim() === ''){
        nomeError.innerHTML = 'Nome obrigatorio!'
        nomeError.style.color = 'red'
        nomeError.style.paddingTop = '8px'
        valido = false
    }else{
        nomeError.innerHTML = ''
        nomeError.style.paddingTop = '0px'
        nomeUsu = nome.value.trim() 
    }

    const emailValue = email.value.trim()
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailValue === ''){
        emailError.innerHTML = 'Email obrigatorio!'
        emailError.style.color = 'red'
        emailError.style.paddingTop = '8px'
        valido = false
    }else if(!regex.test(emailValue)){
        emailError.innerHTML = 'Email Invalido'
        emailError.style.color = 'red'
        emailError.style.paddingTop = '8px'
        valido = false

        console.log(regex.test(email.value.trim()))
    }
    else{
        emailError.innerHTML = ''
        emailError.style.paddingTop = '0px'
        emailUsu = email.value.trim() 

    }

    if(senha.value.trim() === ''){
        senhaError.innerHTML = 'Senha Invalido'
        senhaError.style.color = 'red'
        senhaError.style.paddingTop = '8px'
        valido = false
    }else{
        senhaError.innerHTML = ''
        senhaError.style.paddingTop = '0px'
        senhaUsu = senha.value.trim() 

    }

    cadastro.push(new Usuario(nomeUsu,emailUsu,senhaUsu))


    if(valido){
        atualizarTabela()
    }
}

function atualizarTabela(){
    tbody.innerHTML = ""
    for(let i = 0; i < cadastro.length; i++){
        novaLinha = `
        <tr>
            <td>${cadastro[i].nome}</td>
            <td>${cadastro[i].email}</td>
            <td>${cadastro[i].senha}</td>
        </tr>`
        tbody.innerHTML += novaLinha
    }
}

document.addEventListener('DOMContentLoaded', atualizarTabela())
form.addEventListener('submit', validador)