//aprendendo variaveis e tipos de dados

//tipo string
// "Rodrigo";
// "Isso aqui é uma frase qualquer";
// "Medeiros"`Isso também é uma string, com crase`;

//tipo number
// 12;
// 133;
// 55.56;
// 1.23 - 23.25;

//tipo booleano
// true; //verdadeiro
// false; // falso

// undefined e null
// undefined; //indefinido
// null; //nulo

// variaveis
const meuNome = "Rodrigo";
let meuPrimeiroSobrenome = "Medeiros";
const meuSegundoSobrenome = "Bezerra";
let profissao = "Programador";
let idade = 35;
let tipoSanguineo = "A+";
const estaDeFerias = false;
let temCarro = true;

// let numeroQualquer; //undefined

//VISUALIZANDO NOSSOS DADOS NO CONSOLE

console.log(profissao);
console.log(temCarro);
console.log(estaDeFerias);
console.log(idade);

//operacoes matematicas

let resultadoSoma = 55 + 33;
let resultadoFrase = "Rodrigo " + "Medeiros";
let resultadoSubtracao = 100 - 30;
let resultadoMultiplicacao = 3 * 33;
let resultadoDivisao = 10 / 2;

console.log(resultadoSoma);
console.log(resultadoFrase);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);

//arrays e objetos

//arrays são listas

const listaDeFrutas = ["banana", "pera", "morango", "laranja"];

let listaVariada = [100, true, false, null, "Rodrigo", 45.5];

console.log(listaDeFrutas[2]);
console.log(listaVariada[4]);

let frutaEscolhida = listaDeFrutas[3];
console.log(frutaEscolhida);

listaVariada[5] = 100;

console.log(listaVariada);

listaDeFrutas[2] = "abacate";

console.log(listaDeFrutas);

listaDeFrutas[5] = "manga";

console.log(listaDeFrutas);

console.log(listaDeFrutas[4]);

//length

console.log(listaDeFrutas.length);

const nomeCompleto = "Mauricio Porto Silva";
console.log(nomeCompleto.length);

// objetos

const pessoa = {
  nome: "Rodrigo",
  sobrenome: "Medeiros",
  profissao: "Programador",
  hobby: ["estudar", "programar", "tocar guitarras"],
  carro: {
    nome: "fusca",
    ano: 85,
    itens: ["direcao eletrica", "ar condicionado", "banco de couro"],
  },
};

console.log(pessoa.profissao);
console.log(pessoa.hobby[2]);
console.log(pessoa.carro.ano);
console.log(pessoa.carro.itens[1]);

const clientes = [
  "alguma coisa",
  35,
  true,
  {
    nome: "Maria",
    email: "maria@mail.com",
    idade: 25,
  },
  pessoa,
];

pessoa.profissao = "Professor";

console.log(pessoa);

//operadores de comparacao

console.log(10 > 5);
console.log(10 < 2);
console.log(10 >= 10);
console.log(10 <= 20);
console.log("20" == 20); //true
console.log("30" === 30); //false
console.log(10 !== 20); //true

//operadores lógicos

// e (&&)
// OU (||)
// inverso (!)

let comparacao = "Rodrigo" == "rodrigo" && 10 == "10";

console.log(10 > 2 || 5 < 2); //true
console.log(!comparacao); //true
console.log(!true); //false
