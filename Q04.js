let altura = 10000;  // Altura do muro
let subida = 100;   // Distância que Dona Lesma sobe a cada dia
let descida = 50;   // Distância que Dona Lesma desce a cada noite

let distanciaPercorrida = 0;  // Distância total percorrida
let dias = 0;  // Número de dias

while (distanciaPercorrida < altura) {
  distanciaPercorrida += subida;
  
  if (distanciaPercorrida >= altura) {
    dias++;
    break;  // Dona Lesma chegou ao topo, sai do loop
  }
  
  distanciaPercorrida -= descida;
  dias++;
}

console.log("Dona Lesma levará " + dias + " dias para chegar ao topo do muro.");
