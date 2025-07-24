// crindo objetos com JS (sintaxe)

const nayara = {
  nome: "Nayara",
  sobrenome: "Queiroz",
  idade: 30,
  profissao: "programadora",
  especialidade: "full-stack",
  corFavorita: ["preto", "azul"],
  estaCasada: true,

  falar() {
    return "Oi meu nome é Nayara!!";
  },

  andar() {
    return "Estou andando";
  },
};

console.log(nayara);

console.log(nayara.profissao);

//2a forma de acessar os dados no objeto

console.log(nayara["idade"]);
console.log(nayara["corFavorita"]);

//alterando valores do objeto

nayara.idade = 31;
nayara["especialidade"] = "Front-End";

console.log(nayara);

//adicionando propriedades em um objeto

nayara.altura = 1.53;

console.log(nayara);

// desestruturação (destructuring)

const { especialidade, corFavorita, idade, nome } = nayara;

console.log(especialidade);
console.log(corFavorita);
console.log(idade);
console.log(nome);

const { sobrenome } = nayara;

console.log(sobrenome);

// console.log(especialidade);

console.log(nayara);

// (plus) desestruturação de array

const [cor, cor2] = corFavorita;

console.log(cor);
console.log(cor2);

//deletando propriedade do objeto

delete nayara.profissao;

console.log(nayara);
console.log(nayara.profissao); //undefined

//operador spread (...)

const pessoa = {
  nome: "Ana",
  idade: 25,
  temCarro: false,
};

const pessoa2 = {
  ...pessoa,
  altura: 1.64,
};

const pessoa3 = {
  ...nayara,
};

console.log(pessoa2);
console.log(pessoa3);

//...rest operator

const arrNumeros = [10, 20, 30, 40, 50, 60];

const [num1, num2, ...arrNumeros2] = arrNumeros;

console.log(num2);
console.log(arrNumeros2);

const frutas = ["morango", "banana", "manga", "kiwi"];

const novaLista = [...arrNumeros, ...arrNumeros2, ...frutas];

console.log(novaLista);

//clonando array

const outraLista = [...novaLista];
console.log(outraLista);

//objetos com métodos

//O que um objeto tem? Um objeto tem propriedade e tem também métodos

//O que é um método?
// Método são funções que executam um ação do objeto.

function apresentacao(nome) {
  return `Olá tudo bem! Sou ${nome}`;
}

const valor = apresentacao("Rodrigo");

nayara.falar();

console.log();

const lapiseira = {
  grafite: 0.7,
  corLapiseira: "azul",
  marca: "compactor",
  temBorracha: true,
  pontaMetalica: true,
  temTampaBorracha: true,

  escrever() {
    console.log("Escrevendo com a lapiseira");
  },

  trocarGrafite(grafite) {
    if (grafite === 0.7) {
      console.log(`trocando o grafite ${grafite}`);
      return true;
    } else {
      console.log(`Grafite não compatível com a lapiseira`);
    }
  },

  apagar() {
    if (!lapiseira.temBorracha) {
      console.log("Essa lapiseira não pode apagar, pois nao tem borracha");
    } else {
      console.log("apagando o texto com a lapiseira");
    }
  },

  apertarParaSairPonta() {
    console.log("apertando para sair ponta");
  },
};

//algoritmo para escrever utilizando a lapiseira

if (lapiseira.trocarGrafite(0.3)) {
  lapiseira.apertarParaSairPonta();
  lapiseira.escrever();
  lapiseira.apagar();
} else {
  console.log("nao é possivel utilizar a lapiseira");
}
