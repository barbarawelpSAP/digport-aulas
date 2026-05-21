let participantes = [
    {
        nome: "Bárbara",
        confirmada: true
    },
    {
        nome: "Patrícia",
        confirmada: false
    },
    {
        nome: "Dienifer",
        confirmada: false
    },
    {
        nome: "Vânia",
        confirmada: true
    }
]

for (p of participantes) {
    if (p.confirmada) {
        console.log(`A participante ${p.nome} está ${p.confirmada}`)
    }
}