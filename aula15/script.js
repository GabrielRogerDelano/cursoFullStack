const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

const nomeError = document.querySelector('#nomeError');
const emailError= document.querySelector('#emailError');
const senhaError = document.querySelector('#senhaError');

function validador(){
    let valido = false
    event.preventDefault()
    if(nome.value.trim() === ''){
        nomeError.innerHTML = 'Nome obrigatorio!'
        nomeError.style.color = 'red'
        nomeError.style.paddingTop = '8px'
    }else{
        nomeError.innerHTML = ''
        nomeError.style.paddingTop = '0px'
    }

    const emailValue = email.value.trim()
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailValue === ''){
        emailError.innerHTML = 'Email obrigatorio!'
        emailError.style.color = 'red'
        emailError.style.paddingTop = '8px'
    }else if(!regex.test(emailValue)){
        emailError.innerHTML = 'Email Invalido'
        emailError.style.color = 'red'
        emailError.style.paddingTop = '8px'

        console.log(regex.test(email.value.trim()))
    }
    else{
        emailError.innerHTML = ''
        emailError.style.paddingTop = '0px'
        console.log('email valido')
    }

    if(senha.value.trim() === ''){
        senhaError.innerHTML = 'Senha Invalido'
        senhaError.style.color = 'red'
        senhaError.style.paddingTop = '8px'
    }else{
        senhaError.innerHTML = ''
        senhaError.style.paddingTop = '0px'
        console.log('senha valido')
    }



}

form.addEventListener('submit', validador)