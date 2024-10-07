/**

Ejercicio 10: Días del Mes
Crea un script que pida al usuario un número entre 1 y 12 (representando los meses del año) 
y devuelva el número de días en el mes correspondiente. Considera que febrero tiene 28 días y los meses de abril, junio, septiembre y noviembre tienen 30.

Objetivos:

Practicar la validación de entradas y la lógica de decisiones.

*/


function calcularDiasDelMes(numDelMes = 1){
    const anioActual = new Date().getFullYear()

    return new Date(numDelMes,anioActual,0).getDate() 
}


let numMes = parseInt(prompt("Ingrese el número del mes del año:"))

if (isNaN(numMes)|| numMes < 1 || numMes > 12){
    alert("Ingrese un número correcto")
} else {
    console.log(`Ese mes tiene ${calcularDiasDelMes(numMes)}`)
}