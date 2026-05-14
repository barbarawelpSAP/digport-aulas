const prompt = require('prompt-sync')();

for (let dia = 0; dia <= 7; dia++) {
    let qntdMaca = Number(prompt(`Quantas maçães você colheu no dia ${dia}?`));

    console.log(`No dia ${dia} João colheu ${qntdMaca} maçãs.`)
}