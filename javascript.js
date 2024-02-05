// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = true

if (dia) {
    console.log('Está claro')
} else {
    console.log('Está de noite')
}

// ================================

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}

// =================================

// 03 - crie uma função que exiba uma mensagem no console

function exibirMensagem() {
    console.log("Eae familia, bom dia");
}
exibirMensagem();

// =================================

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(nome) {
    console.log("Meu nome é " + nome + ".");
}
exibirNome("Jordan")

// =================================

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibirInformacoes(nome, idade, estiloMusical) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo Musical Preferido: " + estiloMusical);
}
exibirInformacoes("Jordan", 21,"Rap Anime")

// ==================================

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibirFilmeEMusica(filme, musica) {
    console.log("Filme: " + filme);
    console.log("Música: " + musica);
}
exibirFilmeEMusica("Guerra Mundial Z", "Gone Gone Gone")

// ===================================

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triploDoNumero(numero) {
    return numero * 3;
}
triploDoNumero(4)

// ====================================

// 08 - crie uma função que  verifique se uma  variável é true ou false

function verificarVariavel(variavel) {
    if (variavel === true) {
        console.log("A variável é true.");
    } else if (variavel === false) {
        console.log("A variável é false.");
    } else {
        console.log("A variável não é nem true nem false.");
    }
}
verificarVariavel(0)

// ==================================

// 09 - Crie um array que receba 5 itens e exiba no console.

var minhaCaixinha = ["Caderno", "Bolsa", "Celular", "Sanidade", "Coisas"];

console.log(minhaCaixinha)

// ================================

// 10 - Utilize um método para adicionar um nome ao inicio do array.

minhaCaixinha.unshift("NãoSei")

console.log(minhaCaixinha)

// =====================================

// 11 - Utilize um método para remover o último nome do array.

minhaCaixinha.pop()

console.log(minhaCaixinha)

// ======================================

// 12 - Utilize um método para adicionar dois nomes ao fim do array.

minhaCaixinha.push("Vida","Copo")

console.log(minhaCaixinha)

// =======================================

// 13 - Utilize um método para remover o primeiro nome do array.

minhaCaixinha.shift()

console.log(minhaCaixinha)

// =====================================

// 14 - Utilize um método para adicionar no meio deste array.

let nome = ["João",  "Maria",  "Jose",  "Pedro"]

nome.splice(2,0,"Jordan")

console.log(nome)

// 15 - Utilize um método para organizar em ordem crescente o seguinte array:

 let numbers = [7,5,6,3,8,9,2,1,4]

 numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers)