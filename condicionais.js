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

function resultadoAluno(nome, nota) {
  if (nota >= 6) {
    return `${nome} está Aprovado`;
  } else {
    return `${nome} está Reprovado`;
  }
}

// 8.	Crie uma função que receba dois números e retorne se eles são iguais, se forem diferentes, qual deles é o maior.

function comparar(a, b) {
  if (a === b) {
    return "Iguais";
  } else if (a > b) {
    return "A é maior";
  } else {
    return "B é maior";
  }
}

// 9.	Crie uma função que receba um número e informe se ele é múltiplo de 3, de 5, de ambos ou de nenhum.

function multiplo(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "Múltiplo de 3 e 5";
  } else if (numero % 3 === 0) {
    return "Múltiplo de 3";
  } else if (numero % 5 === 0) {
    return "Múltiplo de 5";
  } else {
    return "Não é múltiplo";
  }
}

// 10.	Crie uma função que receba o salário de um funcionário e retorne a faixa salarial:

// •	até 2000: “Baixa”
// •	até 5000: “Média”
// •	acima: “Alta”

function faixaSalarial(salario) {
  if (salario <= 2000) {
    return "Baixa";
  } else if (salario <= 5000) {
    return "Média";
  } else {
    return "Alta";
  }
}

// 11.	Crie uma função que receba a quantidade de horas dormidas. Retorne:

// •	menos de 6h: “Pouco sono”
// •	entre 6 e 8h: “Sono normal”
// •	mais de 8h: “Muito sono”

// 12.	Crie uma função que receba dois números e uma string representando a operação (“soma”, “subtração”, “multiplicação”, “divisão”) e retorne o resultado.
// 13.	Crie uma função que receba um ano e diga se ele é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
// 14.	Crie uma função que receba um objeto pessoa com nome e idade. Se a idade for maior que 60, retorne “Idoso”, senão “Não idoso”.
// 15.	Crie uma função que receba a idade de duas pessoas. Verifique se podem entrar juntas em um evento (ambas com 18+).
// 16.	Crie uma função que receba três notas e retorne a média e a situação:

// •	média >= 7: “Aprovado”
// •	média >= 5: “Recuperação”
// •	média < 5: “Reprovado”

// 17.	Crie uma função que receba uma string e verifique se o primeiro caractere é uma vogal.
// 18.	Crie uma função que receba um número de 0 a 10 e diga se ele está dentro da faixa ou fora.
// 19.	Crie uma função que receba o nome de um produto e o estoque. Se o estoque for zero, retorne “Produto esgotado”, senão “Disponível”.
// 20.	Crie uma função que receba um array com 3 números e retorne qual deles é o menor.

// 21.	Crie uma função que receba um objeto carro com marca e ano. Se o carro for após 2015, retorne “Moderno”, senão “Antigo”.

// 22.	Crie uma função que receba um valor booleano e retorne “Ligado” se for true, e “Desligado” se for false.

// 23.	Crie uma função que receba um número e diga se ele está entre 10 e 20 (inclusive).

// 24.	Crie uma função que receba um objeto usuario com a propriedade ativo (true/false). Se ativo for false, retorne “Acesso bloqueado”.

// 25.	Crie uma função que receba o peso e altura e calcule o IMC. Retorne a faixa:

// •	IMC < 18.5: “Abaixo do peso”
// •	IMC < 25: “Normal”
// •	IMC < 30: “Sobrepeso”
// •	Acima: “Obesidade”

// 26.	Crie uma função que receba uma temperatura em Celsius e indique:

// •	abaixo de 10: “Muito frio”
// •	entre 10 e 25: “Clima agradável”
// •	acima de 25: “Muito calor”

// 27.	Crie uma função que receba dois números e diga se um é divisor exato do outro.

// 28.	Crie uma função que receba o turno de estudo de um aluno (“manhã”, “tarde”, “noite”) e retorne uma saudação apropriada.

// 29.	Crie uma função que receba o número de faltas de um aluno. Se for maior que 25, retorne “Reprovado por falta”.

// 30.	Crie uma função que receba um nome e uma idade. Se o nome for “admin” e a idade maior que 18, retorne “Acesso total”. Caso contrário, “Acesso limitado”.

//switch/case

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

let idade1 = 25;

switch (true) {
  case idade1 >= 0 && idade1 <= 12:
    console.log("Criança");
    break;
  case idade1 >= 13 && idade1 <= 17:
    console.log("Adolescente");
    break;
  case idade1 >= 18 && idade1 <= 59:
    console.log("Adulto");
    break;
  case idade1 >= 60:
    console.log("Idoso");
    break;
  default:
    console.log("Idade inválida");
}

let nota = 4;

switch (true) {
  case nota >= 9:
    console.log("Conceito A");
    break;
  case nota >= 7:
    console.log("Conceito B");
    break;
  case nota >= 5:
    console.log("Conceito C");
    break;
  case nota >= 3:
    console.log("Conceito D");
    break;
  default:
    console.log("Conceito F");
}
