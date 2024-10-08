/*
Ejercicio 18: Sistema de Cálculo de Descuentos
La empresa "Descuentos Mágicos S.L." quiere implementar un sistema para calcular
descuentos en productos. El sistema debe permitir calcular el precio final de un producto
después de aplicar uno o varios descuentos.

Crea una función calcularPrecioFinal(precioBase, descuentos) que reciba dos parámetros:
- precioBase: un número que representa el precio original del producto.
- descuentos: un array de números que representan los porcentajes de descuento a
aplicar.

La función debe aplicar cada descuento secuencialmente sobre el precio base. Por ejemplo, si el
precio base es 100 y se aplican descuentos del 10% y 20%, el cálculo debería ser:
- Aplicar el 10%: 100 - (100 * 0.10) = 90
- Aplicar el 20%: 90 - (90 * 0.20) = 72

La función debe validar que el precio base sea un número positivo y que cada descuento esté
en el rango de 0 a 100. Si algún descuento no es válido, debe lanzar un error con un mensaje
adecuado.
Además, crea una función adicional mostrarPrecioFinal(precioBase, descuentos) que llame a
calcularPrecioFinal y muestre el resultado en la consola con un mensaje amigable, por ejemplo:
"El precio final después de aplicar los descuentos es: X".

Objetivos:
- Practicar la creación y uso de funciones.
- Mejorar la gestión de arrays y la validación de entradas. 
*/
class Producto {
    constructor(nombre, precioBase) {
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}

function calcularPrecioFinal(precioBase, descuentos) {
    // Validar que el precio base es un número positivo
    if (typeof precioBase !== 'number' || precioBase <= 0) {
        throw new Error("El precio base debe ser un número positivo.");
    }

    // Validar que cada descuento está en el rango de 0 a 100
    for (let descuento of descuentos) {
        if (typeof descuento !== 'number' || descuento < 0 || descuento > 100) {
            throw new Error(`El descuento ${descuento} no es válido. Debe estar entre 0 y 100.`);
        }
    }

    let precioFinal = precioBase;

    // Aplicar cada descuento secuencialmente
    for (let descuento of descuentos) {
        precioFinal -= (precioFinal * (descuento / 100));
    }

    return precioFinal;
}

function mostrarPrecioFinal(producto, descuentos) {
    try {
        const precioFinal = calcularPrecioFinal(producto.precioBase, descuentos);
        console.log(`El precio final después de aplicar los descuentos es: ${precioFinal.toFixed(2)}€`);
    } catch (error) {
        console.error(error.message);
    }
}

// Ejemplo de uso
const producto1 = new Producto("Poción de curación", 100);
const descuentos = [10, 20]; // Descuentos del 10% y 20%

mostrarPrecioFinal(producto1, descuentos);
