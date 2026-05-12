const donut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sabor = ["Baunilha","Chocolate"]

for (let i = 0; i < donut.length; i++) {
    if (donut[i] % 3 === 0) {
        console.log (sabor[0])
    }
    else {
        console.log (sabor[1])
    }
}