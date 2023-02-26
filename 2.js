let fibonacci = [0, 1];

//Insira a quantidade de números da sequência
let valores = 30;
valores -= fibonacci.length;

//Insira um número para saber se está na sequência de fibonacci
let numero = 2586;

for (let i = 0; i <= valores; i++) {
  v1 = fibonacci.length - 2;
  v2 = fibonacci.length - 1;

  fibonacci.push(fibonacci[v1] + fibonacci[v2]);
}

pertenceFibonacci();

function pertenceFibonacci() {
  if (fibonacci.find((e) => e == numero)) {
    console.log(`Sim, ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`Não, ${numero} não pertence à sequência de Fibonacci.`);
  }
}
