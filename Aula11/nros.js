let positivos = 0
let negativos = 0
let zero = 0

const prompt = require('prompt-sync')();

for (let i = 0; i <= 10; i++) {
    let escolha = Number(prompt('Insira um número: '));
        if (escolha > 0) {
            positivos++
        } else if (escolha < 0) {
            negativos++
        } else {
            zero++
        }
}

console.log(`Qntd de positivos: ${positivos}`)
console.log(`Qntd de negativos: ${negativos}`)
console.log(`Qntd de zeros: ${zero}`)