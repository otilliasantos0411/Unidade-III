const readlineSync = require('readline-sync');

// Leitura do valor da compra e número de parcelas
let valorCompra =  readlineSync.questionFloat("Digite o valor da compra:")
let numParcelas = readlineSync.questionFloat("Digite o número de parcelas:")

let valorParcela = Math.floor(valorCompra / numParcelas); // Valor das parcelas inteiras
let resto = valorCompra % numParcelas; // Resto da divisão

let valoresParcelas = []; // Array para armazenar os valores das parcelas

// Distribuição do resto entre as parcelas iniciais
for (let i = 0; i < numParcelas; i++) {
  if (i < resto) {
    valoresParcelas.push(valorParcela + 1);
  } else {
    valoresParcelas.push(valorParcela);
  }
}

// Exibição dos valores das parcelas
console.log("Valores das parcelas:");
for (let i = 0; i < valoresParcelas.length; i++) {
  console.log("Parcela " + (i + 1) + ": R$" + valoresParcelas[i]);
}
