/**
Ejercicio 6: Filtrado y Transformación de Datos
Crea una función filtrarYTransformar() que reciba un array de números y devuelva un nuevo array que contenga solo los números impares, multiplicados por 2. Utiliza filter() y map().

Objetivos:

Practicar el uso de métodos de arrays como filter() y map().
*/

function filtrarYTransformar(arrayNumerica=[]){
    const numerosImpares = arrayNumerica.filter((impar)=> impar % 2 !== 0);
    return numerosImpares.map((numeroImpar) => numeroImpar * 2)
}


const arrayNUmerica = [1, 4, 9, 16];

const resultado = filtrarYTransformar(array1);

console.log(map1);

