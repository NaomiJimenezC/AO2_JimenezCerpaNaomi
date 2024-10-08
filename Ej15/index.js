//Ejercicio 15: Depuración y Documentación
//Toma uno de los ejercicios anteriores y añade comentarios explicativos en cada parte del código. 
//Realiza pruebas en diferentes escenarios y documenta si el comportamiento es el esperado.

//Objetivos:


/**
 * Esta función obtiene la cantidad de dias que tiene un mes
 * @param {number} anio - Año del que quieras comprobar los días del mes, por si quieres saber si es un bisiesto.
 * @param {number} [numDelMes=2] - Número del mes, está en 2 porque en el ejercicio se pide que se compruebe que sea bisiesto.
 * @returns {number} Devuelve el número de dias que tiene un mes. 
*/
function calcularDiasDelMes(anio, numDelMes=2){
    // Se usa Date con un formato (YYYY-MM-DD), con día en 0 para obtener el último día de ese mes
    return new Date(anio,numDelMes,0).getDate() 
}

/**
 * 
 * @param {number} anioInicial - Indica el año en el que empiezo el ciclo
 * @param {number} anioFinal - Indica el año en el que terminará el ciclo
 * @returns Devuelve un array con los años bisiestos
 */
function isLeapYear(anioInicial = 2001, anioFinal = 2500){
    const leapYears = []
    for (let i = anioInicial; i <= anioFinal; i++){
        calcularDiasDelMes(i,2) == 29 ? leapYears.push(i) : undefined;
    }

    return leapYears
}

console.log(isLeapYear())