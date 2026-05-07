numero = 1
texto = "texto";
isNumero = true;
let nula = null;
let variavelSemValor;

console.log( typeof numero ); // number
console.log( typeof texto ); // string
console.log( typeof isNumero ); // boolean
console.log( typeof variavelSemValor ); // undefined
console.log( `nula: ` + typeof nula ); // object

numero= "dois"

console.log( typeof numero ); // string, pois a variável numero foi reatribuída para o valor "dois", que é uma string.

