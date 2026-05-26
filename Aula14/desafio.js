let participantes = [
    { nome: "Beatriz", cidade: "Porto Alegre", status: true },
    { nome: "Ana", cidade: "São Paulo", status: true},
    { nome: "Carol", cidade: "Recife", status: false},
    { nome: "Diana", cidade: "Curitiba", status: false},
    { nome: "Elisa", cidade: "Brasília", status: true}
]

function statusPresenca(confirmada) {
    if (confirmada) {
        return "Confirmada"
    }
    else {
        return "Pendente"
    }
}

function exibirParticipante(p) {
    statusPresenca(p.status)
    console.log(`${p.nome} de ${p.cidade} está ${p.status}`)
}

for (let p of participantes) {
    exibirParticipante(p)
}