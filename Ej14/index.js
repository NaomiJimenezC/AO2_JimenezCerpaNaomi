function calcularDiasDelMes(anio, numDelMes=2){
    return new Date(anio,numDelMes,0).getDate() 
}

function isLeapYear(anioInicial = 2001, anioFinal = 2500){
    const leapYears = []
    for (let i = anioInicial; i <= anioFinal; i++){
        calcularDiasDelMes(i,2) == 29 ? leapYears.push(i) : undefined;
    }

    return leapYears
}

console.log(isLeapYear())