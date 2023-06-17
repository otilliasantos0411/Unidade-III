const readlineSync = require('readline-sync');

// Leitura do número inteiro
let numero =  readlineSync.questionFloat("Digite um numero inteiro de ate 4 digitos:");

let numeroInvertido = 0;

// Inverte a ordem dos algarismos
while (numero > 0) {
  let digito = numero % 10;
  numeroInvertido = numeroInvertido * 10 + digito;
  numero = Math.floor(numero / 10);
}

console.log("O número invertido é: " + numeroInvertido);
