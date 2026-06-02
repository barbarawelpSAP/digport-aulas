class carro {
    constructor(marca, cor) {
        this.marca = marca
        this.cor = cor
    }
    acelerar() {
        console.log(`Acelerando...`)
    }
    frear() {
        console.log(`Freando...`)
    }
}

const meuCarro = new carro ("Toyota", "Prata")

console.log(meuCarro.marca)
meuCarro.acelerar()