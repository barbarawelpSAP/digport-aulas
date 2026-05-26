function statusPresenca(confirmada) {
    if (confirmada) {
        return "Confirmada"
    }
    else {
        return "Pendente"
    }
}

let beatriz = { nome: "Beatriz", status: true }
let ana = { nome: "Ana", status: false}

let status = statusPresenca(beatriz.confirmada)

console.log(`A ${beatriz.nome} está ${beatriz.status}`)
console.log(`A ${ana.nome} está ${ana.status}`)