function calcularPC(){
    //Almacena los valores del Marmol 1 o Cristal
    var largoMarmol1OCristal = parseFloat(document.getElementById('largoMarmol1OCristal').value);
    var anchoMarmol1OCristal = parseFloat(document.getElementById('anchoMarmol1OCristal').value);
    var altoMarmol1OCristal = parseFloat(document.getElementById('altoMarmol1OCristal').value);
    var precioMarmol1OCristal = parseFloat(document.getElementById('precioMarmol1OCristal').value);

    console.log("hola", largoMarmol1OCristal, anchoMarmol1OCristal, altoMarmol1OCristal)
    //Almacena los valores del Marmol 2
    var largoMarmol2 = parseFloat(document.getElementById('largoMarmol2').value);
    var anchoMarmol2 = parseFloat(document.getElementById('anchoMarmol2').value);
    var altoMarmol2 = parseFloat(document.getElementById('altoMarmol2').value);
    var precioMarmol2 = parseFloat(document.getElementById('precioMarmol2').value);

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

    //realiza los cálculos para Marmol 1 o Cristal
    var resultadoMetrosCuadradosMarmol1OCristal = (largoMarmol1OCristal * anchoMarmol1OCristal + anchoMarmol1OCristal * altoMarmol1OCristal * 2) / 10000;
    var resultadoValorSuperficieMarmol1OCristal = resultadoMetrosCuadradosMarmol1OCristal * precioMarmol1OCristal;
    var resultadoManoObraMarmol1OCristal = (anchoMarmol1OCristal * 4 * 45000 / 100) * 0.80;

    //realiza los cálculos para Marmol 2
    var resultadoMetrosCuadradosMarmol2 = (largoMarmol2 * anchoMarmol2 + anchoMarmol2 * altoMarmol2 * 2) / 10000;
    var resultadoValorSuperficieMarmol2 = resultadoMetrosCuadradosMarmol2 * precioMarmol2;
    var resultadoManoObraMarmol2 = (anchoMarmol2 * 4 * 45000 / 100) * 0.80;

    //Resultados finales
    var resultadoCostoNeto = parseFloat(resultadoValorSuperficieMarmol1OCristal) + parseFloat(resultadoValorSuperficieMarmol2) + parseFloat(resultadoManoObraMarmol1OCristal) + parseFloat(resultadoManoObraMarmol2) + parseFloat(valorTransporte);
    var resultadoGanancia = (resultadoCostoNeto * PorcentajeGanancia) / 100;
    var resultadoPrecioNeto = parseFloat(resultadoCostoNeto) + parseFloat(resultadoGanancia);
    var resultadoPrecioFinalContado = resultadoPrecioNeto * 1.19;
    var resultadoPrecioCredito = resultadoPrecioFinalContado * (parseFloat(PorcentajeCredito) + 1);
    var resultadoCreditoRedondeado = Math.round(resultadoPrecioCredito / 10000) * 10000;

    //Actualiza los valores en pantalla para Marmol 1 O Cristal
    document.getElementById("anchoMarmol1OCristal").value = (largoMarmol1OCristal / 1.62).toFixed(0);
    document.getElementById("metroCuadradoMarmol1OCristal").value = resultadoMetrosCuadradosMarmol1OCristal.toFixed(1);
    document.getElementById("valorSuperficieMarmol1OCristal").value = resultadoValorSuperficieMarmol1OCristal.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("manoObraMarmol1OCristal").value = resultadoManoObraMarmol1OCristal.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Marmol 2
    document.getElementById("anchoMarmol2").value = largoMarmol1OCristal - 16;
    document.getElementById("altoMarmol2").value = altoMarmol1OCristal - 8;
    document.getElementById("metroCuadradoMarmol2").value = resultadoMetrosCuadradosMarmol2.toFixed(1);
    document.getElementById("valorSuperficieMarmol2").value = resultadoValorSuperficieMarmol2.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("manoObraMarmol2").value = resultadoManoObraMarmol2.toLocaleString("es-CL", {
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
    calcularPC();
};