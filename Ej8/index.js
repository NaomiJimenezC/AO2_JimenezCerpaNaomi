/*
Crea una clase Estudiante que contenga propiedades como nombre, edad, y notas. 
Incluye métodos para agregar una nota, calcular el promedio y determinar si ha aprobado. Crea un objeto Estudiante y utiliza sus métodos para realizar pruebas.

Objetivos:

Manipular objetos y crear métodos de gestión de datos.

*/

class Estudiante {
    constructor(nombre,edad){
        this.nombre = nombre,
        this.edad = edad
    }
    
    notas = []

    agregarNota(nota){
        this.notas.push(nota)
    }

    calcularPromedio(){
        const sumaElementos = this.notas.reduce((acumm,valorActual) => acumm+ valorActual,0)
        return sumaElementos/this.notas.length
    }

    hasAprobado(promedio){
        if (promedio >= 5){
            console.log("Aprobado")
        } else {
            console.log("Suspenso")
        }
    }
}

const paquito = new Estudiante("naomi",14)

paquito.agregarNota(4)
paquito.agregarNota(8)
paquito.agregarNota(7)
paquito.agregarNota(10)

const promedioPaquito = paquito.calcularPromedio()

paquito.hasAprobado(promedioPaquito)