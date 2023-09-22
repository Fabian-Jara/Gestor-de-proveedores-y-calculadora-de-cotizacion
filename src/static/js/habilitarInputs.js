function habilitarInput() {
    var elementosInput = document.querySelectorAll(".habilitarInput");
    var elementoCheckbox = document.getElementById("editInputs");

    for (var i = 0; i < elementosInput.length; i++) {
        if (elementoCheckbox.checked) {
            elementosInput[i].disabled = false;
        } else {
            elementosInput[i].disabled = true;
        }
    }
}

function mostrarInputs() {
    const checkbox = document.getElementById('showInputs');
    const divToToggle = document.querySelectorAll('.ocultarInputs');

    checkbox.addEventListener('change', () => {
        divToToggle.forEach(div => {
            if (checkbox.checked) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    });
}

// Llamada a la función calcularPC al cargar la página
window.onload = function () {
    mostrarInputs();
};

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keypress", (event) => {
        const key = event.key;

        if (!/[a-zñA-Z0-9 ]/.test(key)) {
            event.preventDefault();
        }
    });
});

