/*
Ejercicio 16: Juego de Aventura

La empresa "Aventuras Fantásticas S.L." está desarrollando un juego de aventura en el que los
jugadores explorarán un mundo lleno de criaturas mágicas. Necesitan crear una estructura de
datos para representar a los personajes del juego.

La estructura de datos en esta fase del desarrollo será la de un objeto, en el que se necesitará
de cada personaje las siguientes propiedades:
- Nombre
- Raza (por ejemplo, "Humano", "Elfo", "Enano")
- Nivel (comenzará en 1)
- Puntos de Vida (comenzará en 100)
Además, para hacer pruebas, se almacenarán los personajes en un array. Inicialmente habrá 2
personajes precargados en el sistema.

Se deberán crear métodos para gestionar el combate:
- Atacar: Cuando un personaje ataque, se deberá restar una cantidad de puntos de vida
al enemigo (por ejemplo, 10 puntos por ataque).
- Recuperar Vida: Se deberá crear un método que permita al personaje recuperar vida. Al
recuperar, se sumarán 20 puntos de vida, pero no se podrá exceder el máximo de 100
puntos.
- Subir Nivel: Cada vez que un personaje alcance 0 puntos de vida, se deberá mostrar un
alerta indicando que el personaje ha sido derrotado y restablecerlo a su estado inicial
(nivel 1 y 100 puntos de vida).
*/

const humano = {
    raza: "Humano",
    nivel: 1,
    vitalidad: 100,
    atacar(enemigo){
        if(enemigo.vitalidad > 0)
            if(enemigo.vitalidad <10)
                enemigo.vitalidad = 0;
            else
                enemigo.vitalidad -= 10;
    },

    recuperarVida(){
        if(this.vitalidad < 100){
            if (this.vitalidad + 20 > 100)
                this.vitalidad = 100
            else
                this.vitalidad += 20
        }
    },

    restablecerNivel(){
        console.log("El personaje ha sido derrotado")
        this.nivel = 1
        this.vitalidad = 100
    },

    mostrarEstado(){
        console.log(`Nivel: ${this.nivel}, Vida: ${this.vitalidad}`)
    }
}

const elfo = {
    raza: "Elfo",
    nivel: 1,
    vitalidad: 100,
    atacar(enemigo){
        if(enemigo.vitalidad > 0)
            if(enemigo.vitalidad <10)
                enemigo.vitalidad = 0;
            else
                enemigo.vitalidad -= 10;
    },

    recuperarVida(){
        if(this.vitalidad < 100){
            if (this.vitalidad + 20 > 100)
                this.vitalidad = 100
            else
                this.vitalidad += 20
        }
    },

    restablecerNivel(){
        console.log("El personaje ha sido derrotado")
        this.nivel = 1
        this.vitalidad = 100
    },

    mostrarEstado(){
        console.log(`Nivel: ${this.nivel}, Vida: ${this.vitalidad}`)
    }
}

const personajes = [humano,elfo]

personajes[0].atacar(personajes[1])
personajes[1].mostrarEstado()