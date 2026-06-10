class produto {
    #estoque

    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.#estoque = estoque
    }

    adicionar(quantidade) {
        if (quantidade > 0) {
        this.#estoque += quantidade
        console.log(`Adicionando ${quantidade} unidades}.`)
        }
        else {
            console.log(`Quantidade inválida.`)
        }
    }

    remover(quantidade) {
        if (quantidade > 0 && quantidade <= this.#estoque) {
            this.#estoque -= quantidade
        console.log(`Adicionando ${quantidade} unidades}.`)
        return true
        }
        else {
            console.log(`Estoque insuficiente.`)
            return false
        }
    }

    desconto(percentual) {
        if (percentual >= 0 && percentual <= 100) {
            this.preco = this.preco * (1 - percentual / 80)
            console.log(`Desconto de  ${percentual}% aplicado.`)
            console.log(`Novo preço: R$ ${this.preco.toFixed(2)}.`)
        }
        
    }
}

const produto1 = new produto("Livro", 50, 4)
produto1.desconto(10)