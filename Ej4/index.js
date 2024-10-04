/*
Ejercicio 4: Matrices y Aplanado
Dada una matriz bidimensional de enteros, crea una función que:

Aplane la matriz sin utilizar Array.flat().
Calcule el promedio de los elementos de la matriz.

Objetivos:

Manipular matrices y realizar operaciones agregadas.
*/

function aplanadora(matrizBidemsional){
    let matrizAplanada = []
    for (let matriz of matrizBidemsional){
        for(let numero of matriz){
            matrizAplanada = [...matrizAplanada,numero]
        }
    }
    return matrizAplanada
}

function calcularPromedio(arrayNumerica = []){
    const sumaDeLosElementos = arrayNumerica.reduce((acumulador,valorActual) => acumulador + valorActual )
    return sumaDeLosElementos / arrayNumerica.length
}

