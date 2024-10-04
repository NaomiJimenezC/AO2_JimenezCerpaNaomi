/*
Ejercicio 3: Arrays y Operaciones Agregadas
Crea un array que contenga al menos cinco números e implementa operaciones de filtrado, reducción y recolección.

Objetivos:

Trabajar con arrays y comprender operaciones agregadas.
*/

const numeritos = [3,4,5,6,7]

//filtrado
console.log(numeritos.filter((impar)=> impar % 2 !==0 ))
//reducción
console.log(numeritos.reduce((acumulador,valorActual) => {
    acumulador + valorActual
    return acumulador
}))
//recolección

numeritos.push(1)
numeritos.unshift(2)