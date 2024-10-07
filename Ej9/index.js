/*
Implementa un script que tome una cadena codificada en ROT13 como entrada y devuelva la cadena decodificada. 
Los caracteres no alfabéticos deben permanecer sin cambios.

Objetivos:

Aplicar estructuras de control en la manipulación de cadenas.
*/ 

function descriptarROT13(cadenaCodificada = "") {
    let cadenaDesencriptada = "";  

    for (let letra of cadenaCodificada.toLocaleLowerCase()) {
        // Comprobar si es una letra minúscula (a-z)
        if (letra >= 'a' && letra <= 'z') {
            let codeASCII = letra.charCodeAt();
            // Aplicar ROT13 y mantener el ciclo dentro del rango de a-z
            cadenaDesencriptada += String.fromCharCode(((codeASCII - 97 + 13) % 26) + 97);
        }
        // Si no es una letra, agregarla tal cual
        else {
            cadenaDesencriptada += letra;
        }
    }

    return cadenaDesencriptada;
}


const frase = "ubyn zhaqb";

console.log(descriptarROT13(frase))

