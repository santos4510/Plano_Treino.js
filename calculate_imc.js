function calcularIMC(altura, peso){
    
    let imc = (peso / ((altura / 100) ** 2)).toFixed(1);
    console.log(imc);
    return imc;
}


function estadoatual(cliente, imc){
    if (isNaN(imc) || imc === null || imc === undefined || imc === ""){
        console.log("Es deficiente mental e não colocas te nada");
        return;
    }

    if (imc <= 18.5){
        console.log("Es um skinny bitch come mase");
        cliente.dieta =  new DietaGigante();
    }
    else if (imc >= 18.6 && imc <= 24.9){
        console.log("O teu Indice de Massa Corporal esta normal");
        cliente.dieta  = new DietaManterPeso();
    }
    else if (imc >= 25.0 && imc <= 29.9){
        console.log("O teu Indice de Massa Corporal esta sobrepeso");
        cliente.dieta  = new DietaDefinir();
    }
    else if (imc >= 30.0 && imc <= 34.5){
        console.log("O teu Indice de Massa Corporal esta obesidade grau I");
        cliente.dieta  = new DietaDefinir();
    }
    else if (imc >= 34.6 && imc <= 39.9){
        console.log("O teu Indice de Massa Corporal esta obesidade grau II");
        cliente.dieta  = new DietaDefinir();
    }
    else{
        console.log("Es thais carla");
        cliente.dieta  = new DietaDefinir();
    }

    return cliente;
}

