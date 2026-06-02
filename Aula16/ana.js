// class aluno {
//     constructor(nome, idade, curso) {
//         this.nome = nome
//         this.idade = idade
//         this.curso = curso
//     }
//     apresentar() {
//     console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, e faço o curso de ${this.curso}.`);
//   }
// }

const aluno = {
    nome: "Ana",
    idade: 28,
    curso: "Programação",
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, e curso ${this.curso}.`)
    }
}

aluno.apresentar()