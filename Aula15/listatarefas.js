const prompt = require('prompt-sync')();

let listaDeTarefa = []

function adicionarTarefa() {
    let tarefa = (prompt('Descreva sua tarefa: '));
    listaDeTarefa.push(tarefa)
}

adicionarTarefa()

console.log(`Você inseriu a tarefa ${listaDeTarefa}.`)