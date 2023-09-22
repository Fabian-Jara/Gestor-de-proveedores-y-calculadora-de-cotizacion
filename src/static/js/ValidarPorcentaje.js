function validarPorcentaje(inputElement) {
    function updateColorPorcentaje() {
        var inputValue = parseFloat(inputElement.value);

        if (isNaN(inputValue)) {
            inputElement.style.backgroundColor = "white";
            inputElement.style.color = "black"; // Valor no válido
            inputElement.style.borderBottom = "2px solid black";
        } else if (inputValue >= 50) {
            inputElement.style.backgroundColor = "green";
            inputElement.style.color = "white";
            inputElement.style.borderBottom = "2px solid black";
        } else if (inputValue >= 45) {
            inputElement.style.backgroundColor = "yellow";
            inputElement.style.color = "black";
            inputElement.style.borderBottom = "2px solid black";
        } else {
            inputElement.style.backgroundColor = "red";
            inputElement.style.color = "white";
            inputElement.style.borderBottom = "2px solid black";
        }
    }

    // Llamar a updateColorPorcentaje al adjuntar la función
    updateColorPorcentaje();

    // Llamar a updateColorPorcentaje cada vez que se ingresa un valor
    inputElement.addEventListener('input', function () {
        updateColorPorcentaje();
    });
}

// Llamar a la función validarPorcentaje al cargar la página
window.addEventListener('load', function () {
    var inputElements = document.querySelectorAll(".validarPorcentaje");
    inputElements.forEach(function (inputElement) {
        validarPorcentaje(inputElement);
    });
});