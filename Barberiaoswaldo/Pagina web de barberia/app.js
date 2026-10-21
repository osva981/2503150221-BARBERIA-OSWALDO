const formulario = document.getElementById("miformulario");

formulario.addEventListener("submit", function(event) {
    
    event.preventDefault(); 
    
    
    const nombre = document.getElementById("nombreapellido").value;
    const telefono = document.getElementById("telefono").value;
    const horario = document.getElementById("horario").value;

   
    const mensajeCita = "Cita agendada: " + nombre + " | Teléfono: " + telefono + " | Turno: " + horario;

    
    console.log(mensajeCita);
        
 
    alert("¡Listo " + nombre + "! Hemos registrado tu cita para el turno de la " + horario + ".");
    
    
    document.getElementById("resultado").textContent = mensajeCita;
});