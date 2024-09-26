// Importando a biblioteca readline-sync
const readline = require('readline-sync');

let continuar = true; // Variável de controle para o loop

while (continuar) {
    // Capturando o número de pessoas na mesa
    const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');



    // Capturando o valor total da conta
    const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

    // Capturando o método de pagamento


    // Variável para armazenar o valor Desconto da conta após aplicar possíveis descontos
    let valorComDesconto = valorTotal;

    function pagamentotoLowerCase() {
        const metodoPagamento = readline.question('Qual é o método de pagamento (PIX , dinheiro ou cartão )? ');
        return metodoPagamento.toLowerCase()
    }



    // Aplicando desconto de 10% se o pagamento for via PIX ou dinheiro
    if (pagamentotoLowerCase() === 'pix' || pagamentotoLowerCase() === 'dinheiro') {
        valorComDesconto = valorTotal * 0.9; // Aplica 10% de desconto
    }


    // Calculando o valor que cada pessoa deve pagar
    const valorPorPessoa = valorComDesconto / numeroPessoas;

    // Exibindo os resultados
    console.log(`\nO valor total da conta com desconto é: R$ ${valorComDesconto.toFixed(2)}`);
    console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);

    // Pergunta ao usuário se deseja continuar
    const resposta = readline.question('\nDeseja calcular outra conta? (sim/nao): ').toLowerCase();
    if (resposta !== 'sim') {
        continuar = false; // Se a resposta for diferente de 'sim', o loop é encerrado
    }
}

console.log("Programa encerrado.");
