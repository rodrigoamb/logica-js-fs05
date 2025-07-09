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
