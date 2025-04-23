/*document.write("Olá")
alert("teste")*/

let nome = "Lucas"; 
var idade = 16; 
let cidade = "Erechim-RS";  
let ativo = true; //boolean

console.log("Nome:", nome); //os console.log é pra quando apertar f12 na página, ou seja, pra quem esta desenvolvendo a página
console.log("Idade:", idade);
console.log("Cidade:", cidade);
console.log("Ativo:", ativo);

document.write("<p>Nome: " + nome + "</p>");
document.write("<p>Idade: " + idade + "</p>");
document.write("<p>Cidade: " + cidade + "</p>");
document.write("<p>Ativo: " + ativo + "</p>");

alert("Os valores foram atribuídos corretamente. Confirme para continuar!");