const readlineSync = require('readline-sync');

// Leitura do número inteiro
let numero =  readlineSync.questionFloat("Digite um numero inteiro:");

let somaDivisores = 0;

// Verifica se o número é perfeito
for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    somaDivisores += i;
  }
}

// Verifica se o número é perfeito e exibe a mensagem correspondente
if (somaDivisores === numero) {
  console.log("O número " + numero + " é perfeito.");
} else {
  console.log("O número " + numero + " não é perfeito.");
}