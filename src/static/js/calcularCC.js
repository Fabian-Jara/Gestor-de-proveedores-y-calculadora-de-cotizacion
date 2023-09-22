function calcularCC() {
    //Almacena los valores del Marmol
    var largoMarmol = parseFloat(document.getElementById('largoMarmol').value);
    var anchoarmol = parseFloat(document.getElementById('anchoarmol').value);
    var altoMarmol = parseFloat(document.getElementById('altoMarmol').value);
    var precioMarmol = parseFloat(document.getElementById('precioMarmol').value);

    //Almacena las variables de mano de obra
    var precioManoObra = parseFloat(document.getElementById("precioManoObra").value);

    //Almacena las variables de Estructura
    var cantidadEstructura = parseFloat(document.getElementById('cantidadEstructura').value);

    //Alacena las variables para Zocalos Bronce
    var cantidadZocaloBronce = parseFloat(document.getElementById("cantidadZocaloBronce").value);
    var precioZocaloBronce = parseFloat(document.getElementById("precioZocaloBronce").value);

    //Alacena las variables para LEDs
    var cantidadLEDs = parseFloat(document.getElementById("cantidadLEDs").value);
    var precioLEDs = parseFloat(document.getElementById("precioLEDs").value);

    //Alacena las variables para Ruedas
    var cantidadRuedas = parseFloat(document.getElementById("cantidadRuedas").value);
    var precioRuedas = parseFloat(document.getElementById("precioRuedas").value);

    //Alacena las variables para Quemadores
    var cantidadQuemadores = parseFloat(document.getElementById("cantidadQuemadores").value);
    var precioQuemadores = parseFloat(document.getElementById("precioQuemadores").value);

    //Alacena las variables para Bandeja Quemadores
    var cantidadBandeja = parseFloat(document.getElementById("cantidadBandeja").value);
    var precioBandeja = parseFloat(document.getElementById("precioBandeja").value);

    //Alacena las variables para otros datos
    var armado = parseFloat(document.getElementById("armado").value);
    var transporteYExtras = parseFloat(document.getElementById("transporteYExtras").value);
    var instalacion = parseFloat(document.getElementById("instalacion").value);
    var PorcentajeGanancia = parseFloat(document.getElementById("PorcentajeGanancia").value);
    var PorcentajeCredito = parseFloat(document.getElementById("PorcentajeCredito").value);

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

    





    //realiza los cálculos para Marmol
    var resultadoMetrosCuadradosMarmol = (largoMarmol * anchoarmol + anchoarmol * altoMarmol * 2 + largoMarmol * altoMarmol * 2) / 10000;
    var resultadoValorMarmol = resultadoMetrosCuadradosMarmol * precioMarmol;

    //Realiza cálculos para mano de obra
    var resultadoMetroLinealManoObra = ((largoMarmol + anchoarmol) * 2 + altoMarmol * 4) / 100;
    var resultadoValorManoObra = resultadoMetroLinealManoObra * precioManoObra;

    //Realiza los cálculos de la estructura
    var resultadoLargoEstructura = largoMarmol - 5;
    var resultadoAnchoEstructura = anchoarmol - 5;
    var resultadoAltoEstructura = altoMarmol - 9;
    var resultadoValorEstructura = resultadoAnchoEstructura * 1000 * cantidadEstructura;

    //Realiza los cálculos para Zócalos de bronce
    var resultadoValorZocalosBronce = cantidadZocaloBronce * precioZocaloBronce;

    //Realiza los cálculos para Leds
    var resultadoValorLeds = cantidadLEDs * precioLEDs;

    //Realiza los cálculos para Ruedas
    var resultadoValorRuedas = cantidadRuedas * precioRuedas;

    //Realiza los cálculos para Quemadores
    var resultadoValorQuemadores = cantidadQuemadores * precioQuemadores;

    //Realiza los cálculos para Bandeja Quemadores
    var resultadoValorBandeja = cantidadBandeja * precioBandeja;

    //Realiza cálculos finales
    var resultadoCostoNeto = parseFloat(resultadoValorMarmol) + parseFloat(resultadoValorManoObra) + parseFloat(resultadoValorEstructura) + parseFloat(armado) + parseFloat(transporteYExtras) + parseFloat(instalacion) + parseFloat(resultadoValorZocalosBronce) + parseFloat(resultadoValorLeds) + parseFloat(resultadoValorRuedas) + parseFloat(resultadoValorQuemadores) + parseFloat(resultadoValorBandeja);
    var resultadoGanancia = (resultadoCostoNeto * PorcentajeGanancia) / 100;
    var resultadoPrecioNeto = parseFloat(resultadoCostoNeto) + parseFloat(resultadoGanancia);
    var resultadoPrecioFinalContado = resultadoPrecioNeto * 1.19;
    var resultadoPrecioCredito = resultadoPrecioFinalContado * (parseFloat(PorcentajeCredito) + 1);
    var resultadoCreditoRedondeado = Math.round(resultadoPrecioCredito / 10000) * 10000;

    









    //Actualiza los valores en pantalla para Marmol
    document.getElementById("metroCuadradoMarmol").value = resultadoMetrosCuadradosMarmol.toFixed(1);
    document.getElementById("valorSuperficieMarmol").value = resultadoValorMarmol.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Mano De Obra
    document.getElementById("metroLinealManoObra").value = resultadoMetroLinealManoObra.toFixed(1);
    document.getElementById("valorManoObra").value = resultadoValorManoObra.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Estructura
    document.getElementById("largoEstructura").value = resultadoLargoEstructura;
    document.getElementById("anchoEstructura").value = resultadoAnchoEstructura;
    document.getElementById("altoEstructura").value = resultadoAltoEstructura;
    document.getElementById("valorEstructura").value = resultadoValorEstructura.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Zócalos de bronce
    document.getElementById("valorZocaloBronce").value = resultadoValorZocalosBronce.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Leds
    document.getElementById("valorLEDs").value = resultadoValorLeds.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Ruedas
    document.getElementById("valorRuedas").value = resultadoValorRuedas.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Quemadores
    document.getElementById("valorQuemadores").value = resultadoValorQuemadores.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Bandeja Quemadores
    document.getElementById("valorBandeja").value = resultadoValorBandeja.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });

    //Actualiza los valores en pantalla para Resultados finales
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
    calcularCC();
};