function calcularRe(){
    //Almacena los valores del Marmol y Agregados
    var diametro = parseFloat(document.getElementById('diametro').value);
    var precioMarmol = parseFloat(document.getElementById('precioMarmol').value);
    var tapaCanto = parseFloat(document.getElementById('tapaCanto').value);
    var patas = parseFloat(document.getElementById('patas').value);

    //Almacena los datos para Otros
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

    //Calculos para Marmol y Agregados
    var resultadoMetroCuadrado = (parseFloat(diametro) + 1) * (parseFloat(diametro) + 1) / 10000;
    var resultadoValorSuperficie = precioMarmol * resultadoMetroCuadrado;
    var resultadoManoObra = diametro * 1000;

    //Calcula los datos finales
    var resultadoCostoNeto = parseFloat(resultadoValorSuperficie) + parseFloat(resultadoManoObra) + parseFloat(tapaCanto) + parseFloat(patas) + parseFloat(valorTransporte);
    var resultadoGanancia = (resultadoCostoNeto * PorcentajeGanancia) / 100;
    var resultadoPrecioNeto = parseFloat(resultadoCostoNeto) + parseFloat(resultadoGanancia);
    var resultadoPrecioFinalContado = resultadoPrecioNeto * 1.19;
    var resultadoPrecioCredito = resultadoPrecioFinalContado * (parseFloat(PorcentajeCredito) + 1);
    var resultadoCreditoRedondeado = Math.round(resultadoPrecioCredito / 10000) * 10000;

    //Actualiza los valores en pantalla para Marmol y Agregados
    document.getElementById("metroCuadrado").value = resultadoMetroCuadrado.toFixed(1);
    document.getElementById("valorSuperficie").value = resultadoValorSuperficie.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
    document.getElementById("manoObra").value = resultadoManoObra.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para resultado final
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
    calcularRe();
};