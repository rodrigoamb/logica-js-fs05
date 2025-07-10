// if/else

let email = "ana@gmail.com";
let senha = "123456";

if (senha === "1234" || email === "ana@gmail.com") {
  console.log("Voce fez o login");
} else {
  console.log("A senha ou email está errada");
}

let hora = 24;

if (hora >= 0 && hora < 12) {
  console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
}

//operador ternário

let idade = 15;

let resultado = idade >= 18 ? "é maior de idade" : "é menor de idade";

console.log(resultado);

//EXERCICIOS CONDICIONAIS

// 1.	Crie uma função que receba um número e exiba se ele é positivo, negativo ou zero.

function verificaNumero(numero) {
  if (numero < 0) {
    console.log("NEGATIVO");
  } else if (numero > 0) {
    console.log("POSITIVO");
  } else {
    console.log("O NUMERO é ZERO");
  }
}

console.log(verificaNumero(3));
console.log(verificaNumero(-5));
console.log(verificaNumero(0));

// 2.	Crie uma função que receba o nome de uma pessoa. Se o nome tiver mais de 5 letras, retorne “Nome longo”, senão “Nome curto”.

function verificaNome(nome) {
  if (nome.length > 5) {
    return "Nome longo";
  } else {
    return "Nome curto";
  }
}

console.log(verificaNome("Ana"));
console.log(verificaNome("Rodrigo"));

// 3.	Crie uma função que receba a idade de uma pessoa e retorne se ela é “Criança”, “Adolescente”, “Adulto” ou “Idoso”.

function classificarIdade(idade) {
  if (idade < 0) {
    return "Digite um numero positivo";
  }

  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolecente";
  } else if (idade < 60) {
    return "Adulto ";
  } else {
    return "Idoso";
  }
}

// 4.	Crie uma função que receba dois números e retorne o maior deles.

function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// 5.	Crie uma função que receba um número e retorne true se for par, e false se for ímpar.

function numeroPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 6.	Crie uma função que receba o valor de uma compra. Se o valor for maior que 100, aplique 10% de desconto e retorne o novo valor.

function aplicaDesconto(valor) {
  if (valor > 100) {
    return valor * 0.9;
  } else {
    return valor;
  }
}

// 7.	Crie uma função que receba o nome de um aluno e sua nota. Retorne “Aprovado” se a nota for >= 6, senão “Reprovado”.

// 8.	Crie uma função que receba dois números e retorne se eles são iguais, se forem diferentes, qual deles é o maior.

// 9.	Crie uma função que receba um número e informe se ele é múltiplo de 3, de 5, de ambos ou de nenhum.

// 10.	Crie uma função que receba o salário de um funcionário e retorne a faixa salarial:

// •	até 2000: “Baixa”
// •	até 5000: “Média”
// •	acima: “Alta”
