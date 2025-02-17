document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir que se recargue la página

    // Aquí va tu lógica para procesar el pago
    alert('Pago procesado exitosamente. ¡Gracias por tu compra!');
    
    // Opcional: Redirigir a una página de confirmación
    // window.location.href = 'confirmation.html'; 
});
