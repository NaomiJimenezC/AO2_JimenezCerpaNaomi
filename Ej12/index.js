function findPairs(inicioRango = 1, finRango = 100){
    const pares = []
    for(let i = inicioRango; i <= 100; i++){
        i % 2 === 0 ? pares.push(i) : undefined;
    }
    return pares
}

function mostrarContenidoArray(arrayNumerica = []){
    for(elemento of arrayNumerica){
        console.log(elemento)
    }
}


let pares = findPairs()

mostrarContenidoArray(pares)