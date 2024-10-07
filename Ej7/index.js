/**
Ejercicio 7: Jerarquía de Clases
Define una clase Animal con propiedades como nombre y edad, y un método hablar(). 
Crea dos subclases: Perro y Gato, que hereden de Animal y sobreescriban el método hablar().

Objetivos:

Introducir la herencia en la programación orientada a objetos.
 * 
 */

class Animal{
    constructor(nombre,edad){
        this.nombre = nombre,
        this.edad = edad
    }

    resumen(){}
}

class Perro extends Animal{
    constructor(nombre,edad){
       super(nombre,edad)
    }

    resumen(){
        return "GUAU GUAU"
    }
}

class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad)
    }

    resumen(){
        return "miau miau princesa"
    }
}