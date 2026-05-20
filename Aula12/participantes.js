let participantes = ["Barbara","Maria","Patricia","Lara"]

for (let i = 0; i < participantes.length; i++) {
    if (i == 0) {
        console.log(`Seu apoio é fundamental, ${participantes[0]}.`)    
    } else if (i==1) {
        console.log(`Obrigada pela participação, ${participantes[1]}.`)
    } else if (i==2) {
        console.log(`Sua presença é importante, ${participantes[2]}!`)
    } else {
        console.log(`Ter você aqui é incrível, ${participantes[3]}.`)
    }
    
}