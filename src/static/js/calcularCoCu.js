function calcularCoCu() {
    //Almacena los valores del Marmol y Agregados
    var largo = parseFloat(document.getElementById('largo').value);
    var ancho = parseFloat(document.getElementById('ancho').value);
    var precioMarmol = parseFloat(document.getElementById('precioMarmol').value);
    var costoCantos = parseFloat(document.getElementById('costoCantos').value);
    var costoArmado = parseFloat(document.getElementById('costoArmado').value);
    var costoTraslado = parseFloat(document.getElementById('costoTraslado').value);
    var costoPatas = parseFloat(document.getElementById('costoPatas').value);

    //Almacena los valores de Otros
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

    //resultados para marmol y agregados
    var resultadoMetroCuadrado = largo * ancho / 10000;
    var resultadoMetrosLineales = 2 * (parseFloat(largo) + parseFloat(ancho)) / 100;
    var resultadoCostoMarmol = resultadoMetroCuadrado * precioMarmol;
    var resultadoManoObra = resultadoMetrosLineales * costoCantos;
    var resultadoTotalCostoCubierta = parseFloat(resultadoCostoMarmol) + parseFloat(resultadoManoObra) + parseFloat(costoArmado) + parseFloat(costoTraslado);

    //Resultados Finales
    var resultadoCosteNeto = parseFloat(resultadoTotalCostoCubierta) + parseFloat(costoPatas);
    var resultadoGanancia = (resultadoCosteNeto * PorcentajeGanancia) / 100;
    var resultadoPrecioNeto = parseFloat(resultadoCosteNeto) + parseFloat(resultadoGanancia);
    var resultadoPrecioFinalContado = resultadoPrecioNeto * 1.19;
    var resultadoPrecioCredito = resultadoPrecioFinalContado * (parseFloat(PorcentajeCredito) + 1);
    var resultadoCreditoRedondeado = Math.round(resultadoPrecioCredito / 10000) * 10000;

    //Actualiza los valores en pantalla para marmol y agregados
    document.getElementById("metroCuadrado").value = resultadoMetroCuadrado.toFixed(1);
    document.getElementById("metroLineal").value = resultadoMetrosLineales.toFixed(1);
    document.getElementById("costoMarmol").value = resultadoCostoMarmol.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("menoObra").value = resultadoManoObra.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("totalCostoCubierta").value = resultadoTotalCostoCubierta.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores para resultado final
    document.getElementById("CosteNeto").value = resultadoCosteNeto.toLocaleString("es-CL", {
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

// Llamada a la función calcularCoCu al cargar la página
window.onload = function () {
    calcularCoCu();
};