let participantes = [
    { nome: "Beatriz", cidade: "Porto Alegre", confirmada: true },
    { nome: "Ana", cidade: "São Paulo", status: true},
    { nome: "Carol", cidade: "Recife", status: false},
    { nome: "Diana", cidade: "Curitiba", status: false},
    { nome: "Elisa", cidade: "Brasília", status: true}
]

function exibirParticipante(p) {
    console.log(`${p.nome} - ${p.cidade}`)
}

for (let p of participantes) {
    console.log(exibirParticipante(p))
}