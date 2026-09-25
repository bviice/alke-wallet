// Esperar a que el documento esté listo (uso de jQuery)
$(document).ready(function() {

    // 1. Validación en pantalla de Login
    $("#loginForm").submit(function(evento) {
        evento.preventDefault(); // Evita que la página se recargue

        let email = $("#email").val();
        let password = $("#password").val();

        if (email === "" || password === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            // Simulación de login exitoso
            window.location.href = "menu.html";
        }
    });

    // 2. Simular actualización dinámica del saldo al depositar
    $("#formDeposito").submit(function(evento) {
        evento.preventDefault();
        
        let monto = $("#montoDeposito").val();
        
        if(monto > 0) {
            // Ocultamos el saldo actual, lo cambiamos y lo volvemos a mostrar con un efecto visual de jQuery
            $("#saldoActual").fadeOut(function() {
                $(this).text("$" + (150000 + parseInt(monto)).toLocaleString("es-CL")).fadeIn();
            });
            alert("Depósito realizado con éxito");
            $("#montoDeposito").val(""); // Limpiar el campo
        }
    });

});