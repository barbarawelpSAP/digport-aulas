let idade = 18
let identidade = false

if (idade >= 18 && identidade == false) {
    console.log("É preciso comprovar a sua idade com a ID. Não pode comprar bebida.")    
} else if (idade >= 18 && identidade == true) {
    console.log("Tudo certo!")    
} else {
    console.log("Não pode comprar bebida.")
}