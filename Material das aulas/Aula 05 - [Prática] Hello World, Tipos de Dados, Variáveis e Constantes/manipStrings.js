let nome = "Emilene"; //0,1,2,3,4,5,6 posicoes dos caracteres
primeiroCaractere = nome[0];
terceiroCaractere = nome[2];
console.log(primeiroCaractere); // "E". O console.log exibe "E".

nome.charAt(1); // O código usa o método `charAt` para acessar o caractere na posição 1 da string `nome`, que é "m".
console.log(nome.charAt(1)); // O console.log exibe "m".

let tamanho = nome.length;

console.log(tamanho); // O código atribui a variável `tamanho` o valor da propriedade `length` da string `nome`, que é 7, e exibe esse valor no console.
// Acessando o último caractere de uma string
let ultimoCaractere = nome[nome.length - 1];

console.log(ultimoCaractere); // O código calcula o índice do último caractere da string `nome` usando `nome.length - 1` e acessa esse caractere. O resultado é "e", que é exibido no console.
// Concatenando strings
saudacao = " Olá, ".concat(nome, "!"); //

console.log(saudacao); // O código exibe a string `saudacao`, que é "Olá, Emilene!", no console.

nome = nome.replace("Emilene", "Joana"); // O código usa o método `replace` para substituir a substring "Emilene" por "Joana" na string `nome`. 

saudacao = `Olá, ${nome}!`; // O código usa template literals para criar uma nova string `saudacao` que inclui o valor atualizado de `nome`.
//  O resultado é "Olá, Joana!".

saudacao = saudacao.concat(" bem-vindo(a) ao curso de JavaScript!"); //

console.log(saudacao); 
ola = saudacao.slice(1, 3); 
console.log(ola); // O código exibe a string `saudacao`, que é "Olá, Joana! bem-vindo(a) ao curso de JavaScript!", no console.
//  Em seguida, o código usa o método `slice` para extrair uma parte da string `saudacao`,
//  começando do índice 0 até o índice 3 (exclusivo). O resultado é atribuído à variável `ola`, que contém "Olá". O console.log exibe "Olá".