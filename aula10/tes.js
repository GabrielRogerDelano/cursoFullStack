const prompt = require('prompt-sync')();

// Pega o valor digitado pelo usuário
const nome = prompt('Qual é o seu nome? ');

console.log(`Olá, ${nome}!`);