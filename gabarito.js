// Exercício 1: Crie duas variáveis nome e idade e mostre no console a frase 'Meu nome é ...'
let nome = "João";
let idade = 25;
console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

// Exercício 2: Some um número com uma string numérica e observe o resultado.
let x = 10;
let y = "5";
console.log(x + y); // Resultado: "105" (concatenação)

// Exercício 3: Crie um objeto livro com propriedades titulo, autor e ano. Mostre-as no console.
const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  ano: 1899,
};
console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.ano);

// Exercício 4: Crie um array de frutas e exiba o segundo item.
const frutas = ["maçã", "banana", "uva"];
console.log(frutas[1]);

// Exercício 5: Crie uma função nomeada que recebe nome e profissão e exibe uma frase.
function apresentar(nome, profissao) {
  console.log("Olá, eu sou " + nome + " e trabalho como " + profissao);
}
apresentar("Lucas", "programador");

// Exercício 6: Crie uma arrow function que retorna o dobro de um número.
const dobrar = (n) => n * 2;
console.log(dobrar(8));

// Exercício 7: Declare uma variável booleana estaChovendo e exiba seu valor.
let estaChovendo = true;
console.log(estaChovendo);

// Exercício 8: Crie um objeto carro e exiba sua propriedade modelo.
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
};
console.log(carro.modelo);

// Exercício 9: Crie uma função anônima que exibe uma mensagem.
const mostrarMensagem = function (mensagem) {
  console.log(mensagem);
};
mostrarMensagem("Olá!");

// Exercício 10: Demonstre escopo global e escopo de bloco com a variável mensagem.
let mensagem = "Global";
function exemploEscopo() {
  let mensagem = "Local";
  console.log("Dentro da função:", mensagem);
}
exemploEscopo();
console.log("Fora da função:", mensagem);

// Exercício 11: Crie uma função que recebe um array de 3 números e retorna a soma.
function somarArray(arr) {
  return arr[0] + arr[1] + arr[2];
}
console.log(somarArray([2, 4, 6]));

// Exercício 12: Crie um objeto usuario e exiba se ele está ativo.
const usuario = {
  nome: "Ana",
  idade: 28,
  ativo: true,
};
console.log("Usuário ativo:", usuario.ativo);

// Exercício 13: Calcule a média de 3 números e exiba o resultado.
let a = 8,
  b = 6,
  c = 10;
let media = (a + b + c) / 3;
console.log(media);

// Exercício 14: Receba um array de bandeiras e exiba o primeiro e último item concatenados.
const bandeiras = ["Brasil", "Argentina", "Chile", "Peru"];
const mostrarExtremos = (arr) => arr[0] + " e " + arr[arr.length - 1];
console.log(mostrarExtremos(bandeiras));

// Exercício 15: Verifique com operadores lógicos se é um bom dia de praia.
let temSol = true;
let fimDeSemana = true;
console.log(temSol && fimDeSemana);

// Exercício 16: Crie uma função que aplica 20% de desconto em um preço.
let preco = 10;
const aplicarDesconto = function (valor) {
  return valor * 0.8;
};
console.log(aplicarDesconto(preco));

// Exercício 17: Crie um objeto filme e verifique se a nota é maior que 7.
const filme = {
  titulo: "Matrix",
  genero: "Ficção",
  nota: 8.5,
};
console.log(filme.nota > 7);

// Exercício 18: Mostre o efeito do escopo em uma arrow function.
let mensagem1 = "Global";
const arrow = () => {
  let mensagem = "Local";
  console.log("Arrow:", mensagem);
};
arrow();
console.log("Global:", mensagem1);

// Exercício 19: Crie uma função que retorna a multiplicação do primeiro e último número de um array.
function multiplicarExtremos(arr) {
  return arr[0] * arr[arr.length - 1];
}
console.log(multiplicarExtremos([2, 3, 5, 7, 4]));

// Exercício 20: Crie um objeto pessoa e modifique seu valor fora da função.
let pessoa = { nome: "Carlos", idade: 40 };
const mostrarIdade = function (obj) {
  console.log(obj.idade);
};
mostrarIdade(pessoa);
pessoa.idade = 42;
mostrarIdade(pessoa);

// Exercício 21: Compare dois objetos e verifique se têm a mesma idade.
function compararObjetos(obj1, obj2) {
  console.log(obj1.idade === obj2.idade);
}
compararObjetos({ nome: "João", idade: 30 }, { nome: "Maria", idade: 30 });

// Exercício 22: Verifique se o primeiro número de um array é maior que o último.
const comparar = (arr) => arr[0] > arr[arr.length - 1];
console.log(comparar([10, 5, 3]));

// Exercício 23: Função que retorna uma frase indicando qual número é maior.
const compararNumeros = function (x, y) {
  return x > y ? x + " é maior que " + y : x + " é menor que " + y;
};
console.log(compararNumeros(5, 10));

// Exercício 24: Crie uma função que verifica se um produto está disponível.
const produto = {
  nome: "Camisa",
  preco: 30,
  disponivel: true,
};
const verificarDisponibilidade = (item) =>
  item.disponivel ? "Produto disponível" : "Produto indisponível";
console.log(verificarDisponibilidade(produto));

// Exercício 25: Declare duas funções (nomeada e arrow) e use-as em escopos diferentes.
function soma(a, b) {
  return a + b;
}
const multiplica = (a, b) => a * b;
console.log(soma(2, 3));
console.log(multiplica(2, 3));

// Exercício 26: Calcule a média de idade de um array de pessoas.
const pessoas = [
  { nome: "A", idade: 20 },
  { nome: "B", idade: 30 },
  { nome: "C", idade: 40 },
  { nome: "D", idade: 50 },
];
function mediaIdade(arr) {
  return (
    (arr[0].idade + arr[1].idade + arr[2].idade + arr[3].idade) / arr.length
  );
}
console.log(mediaIdade(pessoas));

// Exercício 27: Crie uma função que retorna a operação lógica AND de dois booleanos.
const logicoAnd = function (a, b) {
  return a && b;
};
console.log(logicoAnd(true, false));
console.log(logicoAnd(true, true));

// Exercício 28: Demonstre escopo local e global usando mesma variável.
let valor = 10;
function exemplo() {
  let valor = 5;
  console.log("Dentro:", valor);
}
exemplo();
console.log("Fora:", valor);

// Exercício 29: Crie uma função que verifica se um número é par.
function verificaParidade(n) {
  return n % 2 === 0;
}
console.log(verificaParidade(10));

// Exercício 30: Crie uma função que retorna um novo array com o dobro dos valores de outro.
const numeros = [1, 2, 3, 4];
const dobrarArray = (arr) => [arr[0] * 2, arr[1] * 2, arr[2] * 2, arr[3] * 2];
console.log(dobrarArray(numeros));
