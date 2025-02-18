document.addEventListener('DOMContentLoaded', () => {
    loadCartForCheckout();
});

function loadCartForCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let checkoutItems = document.getElementById("checkout-items");
    let checkoutTotal = document.getElementById("checkout-total");
    checkoutItems.innerHTML = ""; // Limpiar los productos previos

    let total = 0;

    if (cart.length === 0) {
        checkoutItems.innerHTML = "<li>El carrito está vacío</li>";
        checkoutTotal.innerText = "$0";
        return;
    }

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price}`;
        checkoutItems.appendChild(li);
        total += item.price;
    });

    checkoutTotal.innerText = `$${total}`;
}

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir que se recargue la página

    // Validar campos del formulario (puedes agregar más validaciones aquí)
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!validateCardNumber(cardNumber)) {
        alert('Número de tarjeta inválido.');
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert('Fecha de expiración inválida.');
        return;
    }

    if (!validateCVV(cvv)) {
        alert('CVV inválido.');
        return;
    }

    // Aquí va tu lógica para procesar el pago
    alert('Pago procesado exitosamente. ¡Gracias por tu compra!');
    
    // Opcional: Redirigir a una página de confirmación
    // window.location.href = 'confirmation.html';
});

// Validar número de tarjeta (puedes usar una expresión regular más robusta)
function validateCardNumber(cardNumber) {
    const regex = /^[0-9]{16}$/; // 16 dígitos
    return regex.test(cardNumber);
}

// Validar fecha de expiración (MM/AA)
function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/AA
    return regex.test(expiryDate);
}

// Validar CVV (3 dígitos)
function validateCVV(cvv) {
    const regex = /^[0-9]{3}$/; // 3 dígitos
    return regex.test(cvv);
}
