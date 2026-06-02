class animal {
    constructor(nome) {
        this.nome = nome
    }
}

class cachorro extends animal {
    constructor (nome,raca){
        super(nome)
        this.raca = raca
    }
    emitirSom() {
        console.log(`Oi! Meu nome é ${this.nome}, minha raça é ${this.raca} e eu faço au-au!`)
    }
}

const Elliot = new cachorro ("Elli", "Shiba Inu")
Elliot.emitirSom()