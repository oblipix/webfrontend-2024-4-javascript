// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');



// Variável para armazenar o valor Desconto da conta após aplicar possíveis descontos


let valorComDesconto = valorTotal;


// Aplicando desconto de 10% se o pagamento for via PIX ou dinheiro



if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
    valorComDesconto = valorTotal * 0.9; // Aplica 10% de desconto
}



// Calculando o valor que cada pessoa deve pagar


const valorPorPessoa = valorComDesconto / numeroPessoas;


// Exibindo os resultados


console.log(`\nO valor total da conta com desconto é: R$ ${valorComDesconto.toFixed(2)}`);
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);

 