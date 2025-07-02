//criando funções no JS

// primeira forma (função nomeada)

// console.log("Rodrigo");
// console.log("Rodrigo");
// console.log("Rodrigo");
// console.log("Rodrigo");
// console.log("Rodrigo");

function mostrarNome() {
  const meuNome = "Rodrigo";
  console.log(meuNome);
}

function mostrarVariosNomes(nome, sobrenome, idade) {
  console.log(nome);
  console.log(sobrenome);
  console.log(idade);
}

mostrarNome();
mostrarNome();
mostrarNome();

mostrarVariosNomes("Rodrigo", "Medeiros", 35);
mostrarVariosNomes("Ana", "Silva", 22);
mostrarVariosNomes("Nayara", "Calenzo", 30);

function escolheFruta(listaFrutas) {
  console.log(listaFrutas[0]);
}

const minhasFrutas = ["morango", "banana", "abacaxi"];

escolheFruta(minhasFrutas[1]);

//crie uma função chamada somar, que recebe como parametro dessa funcao dois numeros, e essa função quando executada, mostra no console a soma desses dois números

function somar(num1, num2) {
  console.log(num1 + num2);
}

somar(10, 20);
somar(100, 220);
somar(2, 5);

//crie uma função que se chama operações, que recebe como parametro dessa função dois numeros, dentro dessa função existirá um objeto chamado calculadora, esse objeto tera as propriedades, soma, subtração, multiplicação e divisão. Mostre no console.log() ainda dentro da função, todos os resultados dessa operação.

function operacoes(num1, num2) {
  const calculadora = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2,
  };

  console.log(calculadora.soma);
  console.log(calculadora.subtracao);
  console.log(calculadora.multiplicacao);
  console.log(calculadora.divisao);
}

operacoes(7, 3);

const meuPrimeiroNome = "Rodrigo";

// "isso é uma string"
// 'isso é uma string'
// `Isso também é uma string escrita pelo ${meuPrimeiroNome}`
//template string

// crie uma função chamada apresentação, que recebe como parametros, nome, sobrenome e idade, essa função imprime no console uma breve aprensentação usando template string

function apresentacao(nome, sobrenome, idade) {
  console.log(`Olá eu me chamo ${nome} ${sobrenome} e tenho ${idade} anos`);
}

apresentacao("Guilherme", "Silva", 30);
apresentacao("João", "Moura", 32);

//segunda forma - função anonima

//terceira forma (arrow function)

const numeroQualquer = 120;

console.log(numeroQualquer);

const divisao = (num1, num2) => {
  console.log("variavel escopo global:", meuPrimeiroNome);
  const numeroQualquer = 150;
  console.log(num1 / num2);
};

const subtracao = function (num1, num2) {
  console.log(num1 - num2);
  console.log(numeroQualquer);
};

divisao(10, 2);
subtracao(5, 2);

//escopo de bloco e escopo global

// variáveis criadas no escopo global, poderão ser acessadas dentro de um escopo de bloco

// variáveis criadas no escopo de bloco, NÃO poderão ser acessadas no escopo global, só poderá utilizar ela DENTRO do bloco
