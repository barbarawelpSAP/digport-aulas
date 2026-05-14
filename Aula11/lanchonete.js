let escolha = 0

  const prompt = require('prompt-sync')();

while (escolha !== 4) {
    console.log("1 - Ver o cardápio");
    console.log("2 - Fazer um Pedido");
    console.log("3 - Falar com um atendente");
    console.log("4 - Sair");
    escolha = Number(prompt('Escolha uma opção: '));

    switch (escolha) {
        case 1:
            console.log("Hambúrguer | Batata Frita | Pizza");
            break;
        case 2:
            console.log("Pedido realizado.");
            break;
        case 3:
            console.log("Atendente está a caminho para lhe atender.");
            break;
        case 4:
            console.log("Sair. Obrigado pela visita!");
            break;
        default: console.log("Opção inválida");
            break;
    }
}