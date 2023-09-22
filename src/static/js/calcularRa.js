function calcularRa() {
    // Almacena valores de marmol cubierta
    var largoMarmolCubierta = parseFloat(document.getElementById('largoMarmolCubierta').value);
    var anchoMarmolCubierta = parseFloat(document.getElementById('anchoMarmolCubierta').value);
    var altoMarmolCubierta = parseFloat(document.getElementById('altoMarmolCubierta').value);
    var precioMarmolCubierta = parseFloat(document.getElementById('precioMarmolCubierta').value);

    //Almacena valores para marmol patas
    var altoMarmolPatas = parseFloat(document.getElementById('altoMarmolPatas').value);
    var precioMarmolPatas = parseFloat(document.getElementById('precioMarmolPatas').value);

    //Almacenar los valores de otros
    var valorTransporte = parseFloat(document.getElementById('valorTransporte').value);
    var PorcentajeGanancia = parseFloat(document.getElementById('PorcentajeGanancia').value);
    var PorcentajeCredito = parseFloat(document.getElementById('PorcentajeCredito').value);

    //Formatea el porcentaje en caso de que sea mayor a 100
    /*
    if (PorcentajeGanancia > 100) {
        PorcentajeGanancia = PorcentajeGanancia.slice(0, -1);

    }else if(PorcentajeCredito > 100 ){
        PorcentajeCredito = PorcentajeCredito.slice(0, -1);
    }
    */
    //Formatea el numero del input PorcentajeCredito a decimal
    if (PorcentajeCredito < 10) {
        PorcentajeCredito = "0.0" + PorcentajeCredito
    } else {
        PorcentajeCredito = "0." + PorcentajeCredito
    }


    //Calculos para marmol cubierta
    var resultadoMetroCuadradoMarmolCubierta = (largoMarmolCubierta + 2 * altoMarmolCubierta) * (anchoMarmolCubierta + 2 * altoMarmolCubierta) / 10000;
    var resultadoValorSuperficieMarmolCubierta = resultadoMetroCuadradoMarmolCubierta * precioMarmolCubierta;
    var resultadoMamoObraMarmolCubierta = 2 * (largoMarmolCubierta + anchoMarmolCubierta) / 100 * 35000;

    //Calculos para marmol patas
    var resultadoAnchoMarmolPatas = anchoMarmolCubierta - 30;
    var resultadoMetroCuadradoMarmolPatas = (resultadoAnchoMarmolPatas * altoMarmolPatas * 4) / 10000;
    var resultadoValorSuperficieMarmolPtas = resultadoMetroCuadradoMarmolPatas * precioMarmolPatas;
    var resultadoMamoObraMarmolPatas = (resultadoAnchoMarmolPatas + altoMarmolPatas) * 2 * 12000 / 100;

    //Resultados finales
    var resultadoCostoNeto = parseFloat(resultadoValorSuperficieMarmolCubierta) + parseFloat(resultadoValorSuperficieMarmolPtas) + parseFloat(resultadoMamoObraMarmolCubierta) + parseFloat(resultadoMamoObraMarmolPatas) + parseFloat(valorTransporte);
    var resultadoGanancia = (resultadoCostoNeto * PorcentajeGanancia) / 100;
    var resultadoPrecioNeto = parseFloat(resultadoCostoNeto) + parseFloat(resultadoGanancia);
    var resultadoPrecioFinalContado = resultadoPrecioNeto * 1.19;
    var resultadoPrecioCredito = resultadoPrecioFinalContado * (parseFloat(PorcentajeCredito) + 1);
    var resultadoCreditoRedondeado = Math.round(resultadoPrecioCredito / 10000) * 10000;

    //Actualiza los resultados en pantalla para marmol cubierta 
    document.getElementById("metroCuadradoMarmolCubierta").value = resultadoMetroCuadradoMarmolCubierta.toFixed(1);
    document.getElementById("valorSuperficieMarmolCubierta").value = resultadoValorSuperficieMarmolCubierta.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("manoObraMarmolCubierta").value = resultadoMamoObraMarmolCubierta.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los datos para marmol patas
    document.getElementById("anchoMarmolPatas").value = resultadoAnchoMarmolPatas.toFixed(0);
    document.getElementById("metroCuadradoMarmolPatas").value = resultadoMetroCuadradoMarmolPatas.toFixed(1);
    document.getElementById("valorSuperficieMarmolPatas").value = resultadoValorSuperficieMarmolPtas.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("manoObraMarmolPatas").value = resultadoMamoObraMarmolPatas.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los resultados finales
    document.getElementById("CosteNeto").value = resultadoCostoNeto.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("ganancia").value = resultadoGanancia.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("precioNeto").value = resultadoPrecioNeto.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("precioContado").value = resultadoPrecioFinalContado.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("precioCredito").value = resultadoPrecioCredito.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("conRedondeo").value = resultadoCreditoRedondeado.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });










}

// Llamada a la función calcularPC al cargar la página
window.onload = function () {
    calcularRa();
};