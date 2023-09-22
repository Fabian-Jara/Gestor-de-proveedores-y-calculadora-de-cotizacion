function calcularPN(){
    //Almacena los valores del Cristal
    var largoCristal = parseFloat(document.getElementById('largoCristal').value);
    var anchoCristal = parseFloat(document.getElementById('anchoCristal').value);
    var altoCristal = parseFloat(document.getElementById('altoCristal').value);
    var precioCristal = parseFloat(document.getElementById('precioCristal').value);
    var manoObraCristal = parseFloat(document.getElementById('manoObraCristal').value);

    //Almacena los valores del Marmol
    var largoMarmol = parseFloat(document.getElementById('largoMarmol').value);
    var anchoMarmol = parseFloat(document.getElementById('anchoMarmol').value);
    var altoMarmol = parseFloat(document.getElementById('altoMarmol').value);
    var precioMarmol = parseFloat(document.getElementById('precioMarmol').value);

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
    
    //Cálculos para el cristal
    var resultadoMetroCuadradoCristal = (largoCristal * anchoCristal + anchoCristal * altoCristal * 2) / 10000;
    var resultadoValorSuperficieCristal = resultadoMetroCuadradoCristal * precioCristal;

    //Cálculos para Marmol
    var resultadoMetroCuadradoMarmol = (largoMarmol * anchoMarmol + anchoMarmol * altoMarmol * 2) / 10000;
    var resultadoValorSuperficieMarmol = resultadoMetroCuadradoMarmol * precioMarmol;
    var resultadoMamoObraMarmol = (anchoMarmol * 4 * 45000 / 100) * 0.80;

    //Resultados finales
    var resultadoCostoNeto = parseFloat(resultadoValorSuperficieCristal) + parseFloat(resultadoValorSuperficieMarmol) + parseFloat(manoObraCristal) + parseFloat(resultadoMamoObraMarmol) + parseFloat(valorTransporte);
    var resultadoGanancia = (resultadoCostoNeto * PorcentajeGanancia) / 100;
    var resultadoPrecioNeto = parseFloat(resultadoCostoNeto) + parseFloat(resultadoGanancia);
    var resultadoPrecioFinalContado = resultadoPrecioNeto * 1.19;
    var resultadoPrecioCredito = resultadoPrecioFinalContado * (parseFloat(PorcentajeCredito) + 1);
    var resultadoCreditoRedondeado = Math.round(resultadoPrecioCredito / 10000) * 10000;

    //Actualiza los resultados en pantalla para cristal
    document.getElementById("metroCuadradoCristal").value = resultadoMetroCuadradoCristal.toFixed(1);
    document.getElementById("valorSuperficieCristal").value = resultadoValorSuperficieCristal.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los resultados en pantalla para marmol
    document.getElementById("largoMarmol").value = largoCristal - 4;
    document.getElementById("anchoMarmol").value = anchoCristal;
    document.getElementById("metroCuadradoMarmol").value = resultadoMetroCuadradoMarmol.toFixed(1);
    document.getElementById("valorSuperficieMarmol").value = resultadoValorSuperficieMarmol.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("manoObraMarmol").value = resultadoMamoObraMarmol.toLocaleString("es-CL", {
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
    calcularPN();
};