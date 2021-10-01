//fluxograma savani 
var readlineSync = require('readline-sync');

var dataEvento = 25102021;
var data = 0;
var idadeMinima = 18;
var idade = 0;
var n = 0
var numeroPessoas = 99
var pp = 0

console.log("Bem vindo ao cadastro para o envento!");
console.log("o evento ocorrera em 25/10/2021");
data = parseFloat(readlineSync.question('Data atual do cadastro, sem barras so numeros.: '));{
    if(data > dataEvento)console.log("data invalida para cadastro");
    else console.log("data aceita, prosiga com o cadastro!")
    
};
console.log("idade minima para o cadastro e 18 anos.")
idade = parseFloat(readlineSync.question('Qual a sua idade ?: '));{
    if (idade < idadeMinima)console.log("idade nao permitida")
    else console.log("idade permitida, proseguir com cadastro")
};
    console.log("checando no sistema se a vagas disponiveis para o cadastro.");{
    while (numeroPessoas < 100) {
        console.log ("Cadastro concluido pois a vagas livres!")
        numeroPessoas = numeroPessoas + 1
}
}
console.log("deseja ver os palestrantes e participantes do evento ?")
pp = parseFloat(readlineSync.question('1 para sim e 2 para nao.: '));{
    if (pp == 1)console.log("os palestrantes são, Palestrantes1, palestrante2, palestrante3,palestrante4, é o total de participantes e de 99.")
    if (pp == 2)console.log("cadastro para o evento concluido");
}


