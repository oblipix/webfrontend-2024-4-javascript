### Aplicação de desconto:

Verifica se o método de pagamento é `pix` ou `dinheiro`. Se for, aplica um desconto de 10%.
No calculo de valor por pessoa, ele vai dividir o valor final após possiveis descontos pelo número de pessoas.
>
>e vai exibir o valor total atualizado e quanto cada pessoa deve pagar.

Quando se aplica os 10%, vai estar tirando 10% do valor total, e o cliente vai pagar 90% do valor original.

em relação ao 0.9 representa 90% do valor total = `100% - 10% = 90%`

### Aplicação do toLowerCase():


Nesta aplicação temos una `function` criada para para capturar a entrada e saída de respostas nas peguntas. Foi feito para
um código limpo e de boas práticas.

### Loop da chamada: 

No loop vamos ter o `while`para dar continuidade ao programa, sem precisar estar chamando o npm start toda vez. Ele vai rodar
 Até se a resposta for diferente de 'sim' (continuar a calcular), o loop é encerrado. 
 > Nesse loop vamos ter a questão de resposta apenas válida para sim ou não, algo diferente disso ele vai entender que tem algo
> de errado e vai gerar uma mensagem avisando ao usuário.
