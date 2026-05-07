let nota = "B"

switch (nota) {
    case "a":
    case "A":
        console.log("Nota A: Excelente");
        break;
    case "b":
    case "B":
        console.log("Nota B: Bom");
        break;
    case "c":
    case "C":
        console.log("Nota C: Regular");
        break;
    case "d":
    case "D":
        console.log("Nota D: Ruim");
        break;
    case "e":
    case "E":
        console.log("Nota E: Insuficiente");
        break;

    default: console.log("Opção inválida.")
        break;
}