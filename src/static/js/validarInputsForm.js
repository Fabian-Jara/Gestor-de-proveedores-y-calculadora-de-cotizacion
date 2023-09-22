//Valida los Inputs antes de enviar el formulario
(function () {
    'use strict'

    //Obtiene todos los formularios a los que se le aplica la case .needs-validation
    var forms = document.querySelectorAll('.needs-validation')

    //Verifica si los campos están correctos, de lo contrario no se enviara el formulario
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                //Valida los campos de números
                form.querySelectorAll('input[type="number"]').forEach(function (input) {
                    var regex = /^[0-9]+$/
                    if (!regex.test(input.value)) {
                        input.setCustomValidity('Solo se permiten números')
                        input.classList.add('is-invalid')
                    } else {
                        input.setCustomValidity('')
                        input.classList.remove('is-invalid')
                    }
                })

                //Valida los campos de letras
                form.querySelectorAll('input[type="text"]').forEach(function (input) {
                    var regex = /^[a-zñA-Z0-9 ]+$/
                    if (!regex.test(input.value)) {
                        input.setCustomValidity('Solo se permiten letras')
                        input.classList.add('is-invalid')
                    } else {
                        input.setCustomValidity('')
                        input.classList.remove('is-invalid')
                    }
                })

                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keypress", (event) => {
        const key = event.key;

        if (!/[a-zñA-Z0-9 ]/.test(key)) {
            event.preventDefault();
        }
    });
});