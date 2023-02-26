let faturamentoMensal = [
  {
    nome: "SP",
    valor: 67836.43,
  },
  { nome: "RJ", valor: 36678.66 },
  { nome: "MG", valor: 29229.88 },
  { nome: "ES", valor: 27165.48 },
  { nome: "Outros", valor: 19849.53 },
];

for (let i = 0; i <= faturamentoMensal.length - 1; i++) {
  let faturamento = (100 * faturamentoMensal[i].valor) / calculaPercTotal();
  console.log(
    `${faturamento.toLocaleString()}% => ${faturamentoMensal[i].nome}`
  );
}

function calculaPercTotal() {
  let reprTotal = 0;

  for (let i = 0; i <= faturamentoMensal.length - 1; i++) {
    reprTotal += faturamentoMensal[i].valor;
  }
  return reprTotal;
}
