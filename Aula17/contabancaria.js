class ContaBancaria {
  // Atributo privado  
  #saldo;
  #titular;

  constructor(titular, saldoInicial = 0) {
    this.#titular = titular;
    this.#saldo = saldoInicial;
  }

  // Método público para acesso controlado (Getter)
  consultarSaldo() {
    console.log(`Saldo de ${this.#titular}: R$ ${this.#saldo}.`)
  }

  // Método público para alteração controlada (Setter)
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Valor depositado: ${valor}`)
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque realizado.`)
    } else if (valor > this.#saldo) {
      console.log(`Saldo insuficiente.`)
    }
  }
}

const minhaConta = new ContaBancaria(100);
minhaConta.depositar(50);
console.log(minhaConta.consultarSaldo()); // R$ 150
// console.log(minhaConta.#saldo); // Erro! Inacessível fora da classe.