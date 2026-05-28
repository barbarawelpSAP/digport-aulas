const prompt = require('prompt-sync')();

let listaDeTarefa = ["email","dormir","reunião"]

function removerTarefa() {
    let tarefa = (prompt('Remova uma tarefa: '));
    listaDeTarefa.splice(tarefa,1)
}

removerTarefa()
console.log(listaDeTarefa)

console.log(`Você removeu uma tarefa. A lista agora é composta de: ${listaDeTarefa}.`)