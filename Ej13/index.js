/*
Ejercicio 13: Reducción de Datos
Implementa una función calcularSumaPrecios() que reciba un array de objetos con propiedades nombre y precio, 
y devuelva la suma total de todos los precios utilizando reduce().

Objetivos:

Practicar el uso del método reduce() en arrays.
Aprender a manejar objetos y propiedades dentro de un array.

*/


const carritoDeLaCompra = [
    {nombre: "ratón", precio: 12 },
    {nombre: "teclado", precio: 120},
    {nombre: "mesa", precio: 30},
    {nombre: "microfono", precio: 50}
]

function calcularSumaPrecios(carritoCompra){
   return carritoCompra.reduce((accum, valorTotal)=>{
                return accum + valorTotal.precio;
            },0)
}

console.log(calcularSumaPrecios(carritoDeLaCompra))