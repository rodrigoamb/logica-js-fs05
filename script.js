const container = document.getElementById("container");

const meuNome = "Rodrigo";
const meuSobrenome = "Medeiros";
const profissao = "Programador";
const titulo = "Essa página foi feita pelo Rodrigo";
const paragrafo = "isso é um parágrafo";

container.innerHTML = `
    <h1>${titulo}</h1>
    <p>${paragrafo}</p>
    <ul>
      <li>${meuNome}</li>
      <li>${meuSobrenome}</li>
      <li>${profissao}</li>
    </ul>
`;
