function simulacionDados() {
    let resultados = {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0
    };

    // Realizar 36,000 lanzamientos
    for (let i = 0; i < 36000; i++) {
        
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        
        
        let suma = dado1 + dado2;
        
        resultados[suma]++;
    }

    for (let suma in resultados) {
        console.log("La suma " + suma + " ha salido " + resultados[suma] + " veces.");
    }
}

simulacionDados();
