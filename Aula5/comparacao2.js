let idade = 25;
let temCarteira = true;
let estaLogado = false;

if (idade >= 18 && temCarteira){
    console.log("Acesso permitido ao motorista.");
}

if (idade < 18 || !estaLogado){
    console.log("Acesso negado.");
}

if (!estaLogado){
    console.log("Faça login para acessar.");
}